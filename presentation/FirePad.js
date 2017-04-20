import React from 'react';
import * as firebase from 'firebase';
import Firepad from 'firepad';

import './FirePad.css';

export default class FirePad extends React.Component {

  componentDidMount() {
    var firepadRef = getExampleRef();

    //// Create CodeMirror (with lineWrapping on).
    var codeMirror = CodeMirror(document.getElementById('firepad-container'), { 
      lineWrapping: true,
      mode: "javascript"
    });
    //// Create Firepad (with rich text toolbar and shortcuts enabled).
    var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror,
        { richTextToolbar: true, richTextShortcuts: false });
    //// Initialize contents.
    firepad.on('ready', function() {
      if (firepad.isHistoryEmpty()) {
        firepad.setHtml('<span style="font-size: 24px;">Rich-text editing with <span style="color: red">Firepad!</span></span><br/><br/>Collaborative-editing made easy.\n');
      }
    });
  }

  render() {
    return (
      <div id="firepad-container" height="600"></div>
    );
  }
}

// Helper to get hash from end of URL or generate a random one.
function getExampleRef() {
  var ref = firebase.database().ref();
  var hash = window.location.hash.replace(/#/g, '');
  if (hash) {
    ref = ref.child(hash);
  } else {
    ref = ref.push(); // generate unique location.
    window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
  }
  if (typeof console !== 'undefined') {
    console.log('Firebase data: ', ref.toString());
  }
  return ref;
}