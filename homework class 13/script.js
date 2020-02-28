class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    };

    eat(input) {
        if(input instanceof Animal) {
            if(this.type === "herbivore") {
                return(console.log(`The animal ${this.name} is a herbivore and does not eat other animals.`));
            }
            if(this.type === "carnivore" || this.type === "omnivore") {
                this.isEaten = true;
                return(console.log(`The animal ${this.name} ate the ${input.name} `));
            } 
            if(input.size > (this.size * 2) ) {
                return(console.log(`The animal ${this.name} tried to eat the ${input.name} but it was too large.`));
            }
        } else {
                return(console.log(`The animal ${this.name}  is eating ${input}.`));
            };
    };
};

let horse = new Animal("Horse", "herbivore", 4, 1);
console.log(horse);
horse.eat("Carrot");

let lion = new Animal("Lion", "carnivore", 5, 1.2);
console.log(lion);
lion.eat(horse);

let elephant = new Animal("Elephant", "herbivore", 15, 3.2);
console.log(elephant);
elephant.eat(lion);

let bear = new Animal("Bear", "omnivore", 7, 1.3);
console.log(bear);
bear.eat(elephant);

