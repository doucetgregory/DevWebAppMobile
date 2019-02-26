export default class Item {

    constructor(name, bonusHp, bonusDamage) {
        const TYPE = {
            ARMOR:  'chestplate',
            SHIELD: 'shield',
            SWORD:  'sword'
        }

        this.name           = name;
        this.bonusHp        = bonusHp;
        this.bonusDamage    = bonusDamage;
    }

}
