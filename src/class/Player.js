import Actor from './Actor.js';

export default class Player extends Actor {

    constructor(nom) {
        const DEFAULTHP     = 1000;
        const DEFAULTDAMAGE = 100;

        super(nom, DEFAULTHP, DEFAULTDAMAGE);
        this.armor;
        this.shield;
        this.sword;

    }



}
