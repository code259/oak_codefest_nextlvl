console.log(firebase);


const signInForm = document.getElementById('signInForm');
signInForm.addEventListener('click', (e) => {
    e.preventDefault();
})

// have loader until comes

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
    //window.location.href = "/homepage";
}

// Sign in with email and password

const registerForm = document.getElementById('#registerForm');
registerForm.addEventListener('click', (e) => {
    e.preventDefault();
    const email = registerForm['email_register'].value;
    const password = registerForm['password_register'].value;

    console.log(email, password);

    // create new user

    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred)
        console.log(cred.user)
        registerForm.reset();
    });
});