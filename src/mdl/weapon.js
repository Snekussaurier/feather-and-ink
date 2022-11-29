import { Component } from "react";

export default class weapon extends Component {
    constructor(weapon, character, weaponSkills){
        super();

        this.id = weapon.id;
        this.name = weapon.name;
        this.weaponGroup = parseInt(weapon.weapon_group_id);
        this.weaponGroupName = this.getWeaponGroupName[this.weaponGroup];
        this.attribute = parseInt(weapon.attribute);
        this.weight = weapon.weight;

        let weaponSkillLevel = 
        weaponSkills.find((skill) => 
        skill.weapon_group === weapon.weapon_group_id);
        try {
            weaponSkillLevel = weaponSkillLevel.weapon_skills;
        } catch (e) {
            weaponSkillLevel = 0;
        }

        switch (this.attribute) {
          case 1:
            this.fightBonus = this.calcFightBonus(weaponSkillLevel, this.getAttributeBonus[character.dexterity]); break;
          case 2:
            this.fightBonus = this.calcFightBonus(weaponSkillLevel, this.getAttributeBonus[character.strength]); break;
          default:
            this.fightBonus = this.calcFightBonus(weaponSkillLevel, this.getAttributeBonus(Math.max(character.dexterity, character.strength))); break;
        }
        this.initiative = parseInt(weapon.initiative)  + this.getAttributeBonus(character.dexterity);
        this.coreInitiative = parseInt(weapon.initiative);
        this.attackBonus = parseInt(weapon.atb);
        this.defenseBonus = parseInt(weapon.dfb);
        this.damage = parseInt(weapon.damage);
        this.description = weapon.description;
    }

    calcFightBonus = (skillLevel, attributeBonus) => {
        let fightBonus = 0;
        fightBonus = attributeBonus + skillLevel
        if(skillLevel === 0) fightBonus = fightBonus - 2;
        return fightBonus;
    }

    getWeaponGroupName = {
        1: "Armbrust",
        2: "Bogen",
        3: "Klingenwaffe",
        4: "Schilde",
        5: "Schusswaffe",
        6: "Stangenwaffe",
        7: "Waffenlos",
        8: "Wuchtwaffe",
        9: "Wurfwaffe",
    }

    attributeBonus = {
        1: -3,
        2: -2,
        3: -1,
        4: -1,
        5: 0,
        6: 1,
        7: 1,
        8: 2,
        9: 2,
        10: 3 
      }
  
      getAttributeBonus = (attributeValue) => {
        return this.attributeBonus[attributeValue]
      }
}
