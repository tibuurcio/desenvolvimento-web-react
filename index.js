import React from "react";
import { render } from "react-dom";

import * as firebase from "firebase";

import Presentation from "./presentation";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDVkvsxdYUElgQ7CoXizPZKX1LcPBkVOTU",
  authDomain: "desenvolvimento-web-react.firebaseapp.com",
  databaseURL: "https://desenvolvimento-web-react.firebaseio.com",
  projectId: "desenvolvimento-web-react",
  storageBucket: "desenvolvimento-web-react.appspot.com",
  messagingSenderId: "996259240709"
};
firebase.initializeApp(config);

render(<Presentation/>, document.getElementById("root"));
