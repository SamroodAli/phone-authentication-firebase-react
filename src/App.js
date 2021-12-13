import React, { Component } from "react";
import "./App.css";
import firebaseConfig from "./firebaseConfig";
import * as firebaseui from "firebaseui";
// import firebase from "firebase";
import firebase from "firebase/compat/app";

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInSuccessUrl: "http://localhost:3000/",
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      tosUrl: "http://localhost:3000/",
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <>
        <h1>REACT PHONE AUTHENTICATION</h1>
        <div id="firebaseui-auth-container"></div>
      </>
    );
  }
}

export default App;
