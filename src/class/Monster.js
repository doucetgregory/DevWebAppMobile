import Actor from './Actor.js';

export default class Monstre extends Actor {

    constructor(nom) {
        const DEFAULTHP 	= 2000;
        const DEFAULTDAMAGE	= 50;

        super(nom, DEFAULTHP, DEFAULTDAMAGE);
    }


}
