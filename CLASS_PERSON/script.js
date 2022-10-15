
class Person {
    constructor(name, age, gender, occupation, dob) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
        this.dob = dob;
    }
}
const p1 = new Person("Elon", 50, "Male", "CEO", "28 June 1971");
console.log("Person class object:", p1);