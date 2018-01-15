
import React, { Component } from "react";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Text, View, StatusBar, TextInput, Button, TouchableHighlight } from "react-native";
import { init, createAccount } from "../users.actions";

import { ViewContainer, Colors, Normalize, StyleSheet } from "../../../components";

const SLView = styled.View`
  flex: 1;
  flex-direction: column;
`;

const SLText = styled.Text`
  font-size: 20;
  text-align: center;
  color: ${Colors.green};
`;

const SLButton = styled.TouchableHighlight`
  height: 35;
  width: 100;
`;

const SLTextInput = styled.TextInput`
  height: 35;
  border-color: gray;
  border-width: 2;
  background-color: ${Colors.bianca};
  border-radius: 5;
`;

const SLViewText  = styled(SLView)``;
const SLTextTitle = styled(SLText)``;

const SLViewUserInput = styled(SLView)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin-top: 20;
`;

const SLTextTitleName = styled(SLText)`
  color: ${Colors.yellow};
`;
const SLTextUserName = styled(SLTextInput)``;

const SLTextTitlePasswd = styled(SLText)`
  color: ${Colors.bianca};
`;
const SLTextUserPaswd = styled(SLTextInput)``;


const SLViewSubmit = styled(SLView)`
  flex: 1;
  flex-direction: row;
  margin-top: 10;
  justify-content: center;
`;

const SLButtonSubmit = styled(SLButton)``;

const SLTextSubmit = styled(SLText)`
  color: ${Colors.white};
  border-width: 1;
  border-radius: 5;
  background-color: ${Colors.timberwolf};
`;


class Register extends Component {

  props: {
    isAuthenticated: boolean,
    userRegister: Function,
    navigation: Object,
    username: string,
  }
  state: {
    username: string,
    password: string,
  }

  constructor(props) {
    super(props);

    this.state = {
      username: 'fengtest',
      password: 'fengtest',
      registrar: null,
    };
  }

  componentDiDMount() {
    const { isAuthenticated, navigation } = this.props;
    console.log("=====[Register.js]::componentDiDMount - ", isAuthenticated);
    if(isAuthenticated) {
      navigation.navigate('Login');
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("=====[Register.js]::shouldComponentUpdate - isAuthenticated - ", nextProps.isAuthenticated);
    return true;
  }

  userRegister = (e) => {
    
    const { username, password } = this.state;
    console.log("=====[Register.js]::userRegister - ", username, password);
    e.preventDefault();

    const refcode = this.state.refcode;
    const referrer = null;

    try {

      this.props.createAccount(username, password, this.state.registrar, referrer, 0, refcode).then((res) => {

        console.log("=====[Register.js]::userRegister - createAccount return : ok ", res);
      }).catch( err => {

        console.log("=====[Register.js]::userRegister - createAccount return : error - ", err);
      });

    } catch ( e ) {
      console.error("=====[Register.js]::userRegister - error : ", e);
    }
    
  }

	render() {

		const { isAuthenticated, navigation } = this.props;
    console.log("=====[Register.js]::render - ", isAuthenticated);

		return (
			<ViewContainer>
				<SLViewText>
          <SLTextTitle>Reigster Aftrade Account</SLTextTitle>
        </SLViewText>
        <SLViewUserInput>
          <SLTextTitleName>用户名：</SLTextTitleName>
          <SLTextUserName
            placeholder="Type a Username"
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={true}
            value={this.state.username || this.props.username} 
            onChangeText={(text) => this.setState({ username: text })}
          />
        </SLViewUserInput>
        <SLViewUserInput>
          <SLTextTitlePasswd>密      码：</SLTextTitlePasswd>
          <SLTextUserPaswd
            placeholder="Type a Password"
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={false}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </SLViewUserInput>
        <SLViewSubmit>
  				<SLButtonSubmit onPress={(e) => this.userRegister(e)} >
            <SLTextSubmit>REG</SLTextSubmit>
          </SLButtonSubmit>
          <Text style={{}}>       </Text>
          <SLButtonSubmit onPress={(e) => this.userRegister(e)} >
            <SLTextSubmit>LOG</SLTextSubmit>
          </SLButtonSubmit>
        </SLViewSubmit>
			</ViewContainer>
		);
	}
}

const mapStateToProps = (state) => ({
  inited: state.users.inited,
  currentAccount: state.users.currentAccount,
});

const mapDispatchToProps = dispatch => {
  return {
    init: bindActionCreators(init, dispatch),
    createAccount: bindActionCreators(createAccount, dispatch),
  };
}

export const RegisterScreen = connect(mapStateToProps, mapDispatchToProps)(Register);
