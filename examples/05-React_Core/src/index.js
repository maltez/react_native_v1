import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import InputComponent from './Components/InputComponent/InputComponent';
//import MyFirstComponent from './Components/MyFirstComponent/FirstComponent'
// import App from './App';
import Main from './Components/treeOfComponents/main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('application'));
registerServiceWorker();
