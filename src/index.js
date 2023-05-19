import React from "react";
import ReactDOM from "react-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";

ReactDOM.render(
  <GoogleOAuthProvider clientId="809722907965-kcr5gptj8v5da9pf8uot7vnq4ifu6sa8.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
