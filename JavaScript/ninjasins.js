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
        
        console.log(this);
    }
    drinkSake(){
    this.health+=10;
        console.log( this.health  );
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(superNinja) {
        super(superNinja) ;
        this.health = 200;
        this.wisdom = 10 ;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom(){
        super.drinkSake();
            console.log( "thabet trtr" );
        }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"