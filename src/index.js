import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import i18n (needs to be bundled ;))
import './i18n';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Suspense fallback={(<div>Loading</div>)}>
        <App />
    </Suspense>,
    document.getElementById('root'));

serviceWorker.unregister();
