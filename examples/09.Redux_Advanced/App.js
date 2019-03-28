import React from 'react';
//import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './Index';
import configureStore from './store/configureStore';

const store = configureStore();

export default class RNRedux extends React.Component{

render() {
    return <Provider store={store}>
                <App />
            </Provider>
    }
}
//AppRegistry.registerComponent('rncourse', () => RNRedux);