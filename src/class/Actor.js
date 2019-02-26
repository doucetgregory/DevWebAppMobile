export default class Actor {

    constructor(name, hp, damage) {
        this.name   = name;
        this.hp     = hp;
        this.damage = damage;
    }

    attack(actor) {

        if (actor.hp > this.damage) {
            actor.hp = actor.hp - this.damage;
        } else {
            actor.hp = 0;
        }

    }

    /*
    set name(name){
        this.name = name;
    }
    get name(){
        return name;
    }
    */

}
