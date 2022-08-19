import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [state, dispatch] = useStateValue();

  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
          alt=""
        />
        <h1> Inscrivez vous a Slack CLone</h1>
        <p>thomasdeblay.slack.com</p>
        <Button onClick={SignIn}>Inscrivez vous avec Google</Button>
      </div>
    </div>
  );
}

export default Login;
