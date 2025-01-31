// firebaseAuth.js
const auth = firebase.auth();

function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById('message').innerText = "Registration successful!";
        })
        .catch((error) => {
            document.getElementById('message').innerText = error.message;
        });
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById('message').innerText = "Login successful!";
        })
        .catch((error) => {
            document.getElementById('message').innerText = error.message;
        });
}
