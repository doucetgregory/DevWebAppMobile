import * as firebase from 'firebase/app';
import Player from './class/Player.js';
import Monster from './class/Monster.js';
import FirebaseService from './class/Firebase.js';

var Alban = new Player("Alban");
console.log(Alban);

var monster = new Monster("Monstre");
console.log(monster);

Alban.attack(monster);
console.log(monster);

var firebaseService = new FirebaseService(firebase)
firebaseService.addUser(Alban);