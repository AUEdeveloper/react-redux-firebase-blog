import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//initialize Firebase
var config = {
  apiKey: "AIzaSyCcIH0qS1KMLMBuhIZaHPhdTFkwUai-VMg",
  authDomain: "my-react-redux-blog.firebaseapp.com",
  databaseURL: "https://my-react-redux-blog.firebaseio.com",
  projectId: "my-react-redux-blog",
  storageBucket: "my-react-redux-blog.appspot.com",
  messagingSenderId: "496371132614"
};

firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;