console.log(firebase);


const signInForm = document.getElementById('signInForm');
signInForm.addEventListener('click', (e) => {
    e.preventDefault();
})

function googleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    firebase.auth()
        .getRedirectResult()
        .then(cred => {
            console.log("The google user has been signed in with")
            console.log(cred);
            console.log(cred.user);
        }).catch((err) => {
            console.log(err)
        });

}