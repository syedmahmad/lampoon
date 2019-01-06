import * as firebase from 'firebase';

var config = {
   apiKey: "AIzaSyCE2nLMUUoxvIwllchxSQt2XHKDfMUTRmg",
   authDomain: "lampoon-e3630.firebaseapp.com",
   databaseURL: "https://lampoon-e3630.firebaseio.com",
   projectId: "lampoon-e3630",
   storageBucket: "lampoon-e3630.appspot.com",
   messagingSenderId: "784654448776"
 };

 firebase.initializeApp(config);

 firebase.database().ref().set({
 	"name": "Lampoon App"
 });