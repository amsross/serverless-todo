import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { AuthProvider } from "react-oidc-context"

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_9QC8VAvLu",
  client_id: "6u3udafd9fqvlnnb368no3a2gd",
  redirect_uri: "https://d296kj58bcm6k.cloudfront.net/index.html",
  response_type: "code",
  scope: "email openid phone",
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App >
      </App >
    </AuthProvider>
  </StrictMode>,
)
