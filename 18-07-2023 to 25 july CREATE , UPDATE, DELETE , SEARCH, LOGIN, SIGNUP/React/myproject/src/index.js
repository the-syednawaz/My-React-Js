import App from './App';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<Auth0Provider
    domain="syednawaz-test.us.auth0.com"
    clientId="yVpTyeS54OJk7cLN52bLvUca4CxrECWb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <App/>
  </Auth0Provider>
</>)
