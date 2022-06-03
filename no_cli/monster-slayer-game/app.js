function rollDamage(min, max) {
  if (typeof min !== "number" || typeof max !== "number") {
    throw "Must provide a number";
  }
  return min + Math.ceil(Math.random() * (max - min));
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      playerMaxHealth: 100,
      monsterMaxHealth: 100,
      roundCount: 0,
      specialAttackCooldown: 0,
      isSurrender: false,
      battleLog: [],
    };
  },
  computed: {
    playerHealthPercentage() {
      let percentage = (this.playerHealth / this.playerMaxHealth) * 100;
      if (percentage < 0) {
        return "0%";
      } else {
        return percentage + "%";
      }
    },
    monsterHealthPercentage() {
      let percentage = (this.monsterHealth / this.monsterMaxHealth) * 100;
      if (percentage < 0) {
        return "0%";
      } else {
        return percentage + "%";
      }
    },
    winner() {
      if (this.isSurrender) {
        return "surrender";
      } else if (this.monsterHealth <= 0 && this.playerHealth <= 0) {
        return "draw";
      } else if (this.playerHealth <= 0) {
        return "monster";
      } else if (this.monsterHealth <= 0) {
        return "player";
      } else {
        return null;
      }
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0) {
        this.playerHealth = 0;
      }
    },
    monsterHealth(value) {
      if (value <= 0) {
        this.monsterHealth = 0;
      }
    },
    roundCount(value) {
      if (this.specialAttackCooldown > 0) {
        this.specialAttackCooldown--;
      }
    },
  },
  methods: {
    // Placement order of methods does not matter here
    attackMonster() {
      const attackValue = rollDamage(6, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = rollDamage(10, 16);
      this.playerHealth -= attackValue;
      this.addLogMessage("monster", "attack", attackValue);
      this.roundCount++;
    },
    specialAttack() {
      if (this.specialAttackCooldown > 0) {
        return false;
      }

      this.specialAttackCooldown = 3;
      const attackValue = rollDamage(14, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      const healValue = rollDamage(6, 20);
      this.playerHealth += healValue;

      if(this.playerHealth > 100) {
        this.playerHealth = this.playerMaxHealth;
      }

      this.addLogMessage("player", "heal", healValue);
      this.attackPlayer();
    },
    resetGame() {
      this.playerHealth = this.playerMaxHealth;
      this.monsterHealth = this.monsterMaxHealth;
      this.roundCount = 0;
      this.specialAttackCooldown = 0;
      this.isSurrender = false;
      this.battleLog = [];
    },
    surrender() {
      this.isSurrender = true;
    },
    addLogMessage(who, action, value) {
      this.battleLog.unshift({
        actionBy: who,
        actionType: action,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
