import * as firebase from 'firebase/app';
import Player from './class/Player.js';
import Monster from './class/Monster.js';
import FirebaseService from './class/Firebase.js';

/*
var Alban = new Player("Alban");
console.log(Alban);

var monster = new Monster("Monstre");
console.log(monster);

Alban.attack(monster);
console.log(monster);

var firebaseService = new FirebaseService(firebase)
firebaseService.addUser(Alban);
*/

var btnCreatePlayer = document.getElementById("btn_player_create");
var inputPlayerName = document.getElementById("player_name");
btnCreatePlayer.addEventListener('click', () => {
    let playerName = inputPlayerName.value;
    var player = new Player(playerName);
    alert(player);
});

