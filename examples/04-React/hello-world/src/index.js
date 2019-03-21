import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/hello-world.component';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App name="React"/>, document.getElementById('root'));
serviceWorker.unregister();
