console.log(firebase);




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

// Sign up with email and password


const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['email_register'].value;
    const password = signupForm['password_register'].value;

    console.log(email, password);

    // create new user

    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        console.log(cred.user);
        signupForm.reset();
        window.location.href = "/homepage";
    });
});

// Sign in with email and password 

const signinForm = document.querySelector('#signInForm');
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signInForm['email_signin'];
    const password = signInForm['password_signin'];

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)

        signInForm.reset();
        window.location.href = "/homepage";
    });

});

function signOut() {
    firebase.auth.signOut();
}