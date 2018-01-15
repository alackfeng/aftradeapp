
//import alt from "alt-instance";
//import BaseStore from "stores/BaseStore";

//import iDB from "idb-instance";
//import idb_helper from "idb-helper";
//import {cloneDeep} from "lodash";

//import PrivateKeyStore from "stores/PrivateKeyStore";
//import SettingsStore from "stores/SettingsStore";
//import {WalletTcomb} from "./tcomb_structs";
//import TransactionConfirmActions from "actions/TransactionConfirmActions";
//import WalletUnlockActions from "actions/WalletUnlockActions";
//import PrivateKeyActions from "actions/PrivateKeyActions";
//import AccountActions from "actions/AccountActions";
import {ChainStore, PrivateKey, key, Aes} from "assetfunjs/es";
import {Apis, ChainConfig} from "assetfunjs-ws";
//import AddressIndex from "stores/AddressIndex";

import application_api from "../../api/ApplicationApi";
import { faucetAddress as faucet_address } from "../../env";

let aes_private = null;
let _passwordKey = null;
// let transaction;

let TRACE = false;

let dictJson, AesWorker;


class UsersBox {

	construct() {
		this.state = { wallet: null, saving_keys: false };
	}


	/*
	 * call api create account 
	*/
  createAccountWithPassword( account_name, password, registrar, referrer, referrer_percent, refcode ) {

    let {privKey : owner_private} = this.generateKeyFromPassword(account_name, "owner", password);
    let {privKey: active_private} = this.generateKeyFromPassword(account_name, "active", password);

    console.log("=====[users.box.js]::createAccountWithPassword - create account:", account_name);
    console.log("=====[users.box.js]::createAccountWithPassword - new active pubkey", active_private.toPublicKey().toPublicKeyString());
    console.log("=====[users.box.js]::createAccountWithPassword - new owner pubkey", owner_private.toPublicKey().toPublicKeyString());

    return new Promise((resolve, reject) => {
        let create_account = () => {
            return application_api.create_account(
                owner_private.toPublicKey().toPublicKeyString(),
                active_private.toPublicKey().toPublicKeyString(),
                account_name,
                registrar, //registrar_id,
                referrer, //referrer_id,
                referrer_percent, //referrer_percent,
                true //broadcast
            ).then(resolve).catch(reject);
        };

        if(registrar) {
            // using another user's account as registrar
            return create_account();
        } else {
            // using faucet

            let faucetAddress = faucet_address; // SettingsStore.getSetting("faucet_address");
            if (window && window.location && window.location.protocol === "https:") {
                faucetAddress = faucetAddress.replace(/http:\/\//, "https://");
            }

            let create_account_promise = fetch( faucetAddress + "/api/v1/accounts", {
                method: "post",
                mode: "cors",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    "account": {
                        "name": account_name,
                        "owner_key": owner_private.toPublicKey().toPublicKeyString(),
                        "active_key": active_private.toPublicKey().toPublicKeyString(),
                        "memo_key": active_private.toPublicKey().toPublicKeyString(),
                        //"memo_key": memo_private.private_key.toPublicKey().toPublicKeyString(),
                        "refcode": refcode,
                        "referrer": referrer
                    }
                })
            }).then(r => r.json().then(res => {
            		console.log("=====[users.box.js]::createAccountWithPassword -  res, ", res);
                if (!res || (res && res.error)) {
                    reject(res.error);
                } else {
                    resolve(res);
                }
            })).catch(reject);

            return create_account_promise.then(result => {
            		console.log("=====[users.box.js]::createAccountWithPassword - result, ", result);
                if (result && result.error) {
                    reject(result.error);
                } else {
                    resolve(result);
                }
            }).catch(error => {
                reject(error);
            });
        }
    });
  }


  /* 
   * inner call
   */
  generateKeyFromPassword(accountName, role, password) {
    let seed = accountName + role + password;
    let privKey = PrivateKey.fromSeed(seed);
    let pubKey = privKey.toPublicKey().toString();

    return {privKey, pubKey};
  }

}

export default new UsersBox();