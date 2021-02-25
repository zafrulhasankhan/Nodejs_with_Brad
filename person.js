class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    introduction(){
        console.log(`my name is ${this.name} and age is ${this.age}`);
    }
}
console.log(__dirname,__filename);
module.exports = Person;