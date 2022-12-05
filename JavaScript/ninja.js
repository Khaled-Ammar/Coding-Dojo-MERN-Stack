class Ninja {
    constructor(ninjaName ) {
        this.name = ninjaName;
        this.health = 100;
        
        this.speed = 3;
        this.strength = 3;
        
    }
    sayName() {
        
        console.log(this.name);
    }
    showStats() {
        
        console.log(this.name ,this.health , this.speed ,this.strength );
    }
    drinkSake(){
    this.health+=10;
        console.log( this.health  );
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
