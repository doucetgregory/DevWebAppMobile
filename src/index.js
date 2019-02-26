import FirebaseService from "./class/Firebase.js"
import Player from './class/Player.js';
import Monster from './class/Monster.js';

/*
let firebaseService = new FirebaseService(firebase)
firebaseService.addUser()
var Alban  = new Player("Alban");
console.log(Alban);
var monster = new Monster("Pastabox");
console.log(monster);
Alban.attack(monster);
console.log(monster);
*/

var btnCreatePlayer = document.getElementById("btn_player_create");
var inputPlayerName = document.getElementById("player_name");
btnCreatePlayer.addEventListener('click', () => {
    let playerName = inputPlayerName.value;
    var player = new Player(playerName);
    alert(player);
});
