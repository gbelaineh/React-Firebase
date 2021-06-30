const auth = firebase.auth();
const db = firebase.firestore();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const createThing = document.getElementById('createThing');
const thingsList = document.getElementById('thingsList');

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider); 
signOutBtn.onclick = () => auth.signOut();

let usersRef;
let unsubscribe;

auth.onAuthStateChanged(user =>{
    if(user){
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}</h3>`;
        usersRef = db.collection('users')
    }
    else{
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
}

)