import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAHW07eHD9NfPof9WYvP7_CskfFrsLZAzo',
	authDomain: 'netflix-clone-46ed2.firebaseapp.com',
	projectId: 'netflix-clone-46ed2',
	storageBucket: 'netflix-clone-46ed2.appspot.com',
	messagingSenderId: '921541627948',
	appId: '1:921541627948:web:8e85712169bf6a7f1b8189',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
