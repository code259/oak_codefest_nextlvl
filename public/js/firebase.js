var firebase = firebase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyA1arJC-h3ttBRlyalU7rUtjLSEAOzTzVg",
    authDomain: "real-hackathon.firebaseapp.com",
    projectId: "real-hackathon",
    storageBucket: "real-hackathon.appspot.com",
    messagingSenderId: "654846838050",
    appId: "1:654846838050:web:b18c6d9572e28e499c517b"
};
if (!hasInit) {
    firebase.initializeApp(config);
    hasInit = true;
}