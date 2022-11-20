import { Component } from "react";

export default class weapon extends Component {
    constructor(id, name, weaponGroup, weaponGroupName, fightBonus, initiative, coreInitiative, attackBonus, defenseBonus, damage, description){
        super();
        this.id = id;
        this.name = name;
        this.weaponGroup = weaponGroup;
        this.weaponGroupName = weaponGroupName
        this.fightBonus = fightBonus;
        this.initiative = initiative;
        this.coreInitiative = coreInitiative;
        this.attackBonus = attackBonus;
        this.defenseBonus = defenseBonus;
        this.damage = damage;
        this.description = description;
    }
}
