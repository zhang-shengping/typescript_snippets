abstract class Animal {
    private name: string;
    constructor(theName: string){
        this.name = theName;
    }

    walk(distance: number){
        console.log(`Hi, my name is ${this.name} and I'm walking ${distance} meters`);
    }
}

// abstract can not instancete let aAnimal = new Animal("Test");
// aAnimal.walk(10);

class Snake extends Animal{
    constructor(theName: string) {
        super(theName);
    }
    // overwrite walk function
    walk(distance: number){
        console.log("Snakes don't really walk")
    }
}
    