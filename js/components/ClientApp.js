import React from 'react';
import {
  Provider,
} from 'react-redux';
import {
  getStore,
} from '../redux/store';
import App from './App';
import Playground from "./Playground";

const ClientApp = () => {
  return (
    <Provider store={getStore()}>
      <Playground />
    </Provider>
  );
};

export default ClientApp;
