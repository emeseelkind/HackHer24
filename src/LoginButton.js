import React from "react";
import "./LoginOutButtons.css";

function LoginButton() {
  

  return (
    <button className="signup-button" onClick={() => loginWithRedirect()}>
      Log In / Sign Up
    </button>
  );
}

export default LoginButton;
