import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyAjrpK9SiaadsktcH-QYaxMLOPA-0K3hgU",
	authDomain: "react-apps-curso-a94f1.firebaseapp.com",
	projectId: "react-apps-curso-a94f1",
	storageBucket: "react-apps-curso-a94f1.appspot.com",
	messagingSenderId: "21403604312",
	appId: "1:21403604312:web:5f82d7383845a3600d012d"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
	db,
	googleAuthProvider,
	firebase
}