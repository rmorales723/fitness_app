import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDom.createRoot(document.getElementById('root'));
// const domain = 'dev-fyoru7to1uxqck3i.us.auth0.com'
// const clientId = 'KfEu93G3nfGBvvpYhdSCMXur4F9SI8I5'

root.render(

        <BrowserRouter>
             <App />
        </BrowserRouter>
    
)

