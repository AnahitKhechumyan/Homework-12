class Person{
    constructor(firstName, lastName, gender, age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get gender(){
        return this._gender;
    }
    get age(){
        return this._age;
    }
    set firstName(firstName){
        this._firstName = firstName;
    }
    set lastName(lastName){
        this._lastName = lastName;
    }
    set gender(gender){
        this._gender = gender;
    }

    set age(age) {
        this._age = age;
    }
    toString() {
        return `${this.firstName} ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}`;
    }
};

class Student extends Person{
    constructor(firstName, lastName, gender, age, program, year, fee){
        super(firstName, lastName, gender, age);
        this._program = program; 
        this._year = year;
        this._fee = fee;
        this.examResults = {}; 
    }

    get program(){
        return this._program;
    }

    get year(){
        return this._year;
    }
    get fee(){
        return this._fee;
    }
    set program(program){
        this._program = program;
    }
    set year(year){
        this._year = year;
    }
    set fee(fee){
        this._fee = fee;
    }
    passExam(program, grade){
        this.examResults[program] = grade;
        if (this.allExamsPassed()) {
            this.year += 1;
        }
    }
    allExamsPassed(){
        return Object.values(this.examResults).every(grade => grade >= 50);
    }
    toString() {
        return `${super.toString()}, Program: ${this.program.join(", ")}, Year: ${this.year}, Fee: ${this.fee}`;
    }
}

class Teacher extends Person{
    constructor(firstName, lastName, gender, age, program, pay){
        super(firstName, lastName, gender, age);
        this._program = program;
        this._pay = pay;
    }
    get program(){
        return this._program;
    }
    get pay(){
        return this._pay;
    }
    set program(program){
        this._program = program;
    }
    set pay(pay){
        this._pay = pay;
    }
    toString(){
        return `${super.toString()}, Program: ${this.program}, Pay: ${this.pay}`;
    }
};

const person1 = new Person("Mister", "X", "Male", 50);
console.log(person1.toString());
console.log(person1);

const student1 = new Student("Alice", "Johnson", "Female", 20, ["Mathematics", "Physics"], 1, 2000);
console.log(student1.toString());
console.log(student1); 

student1.passExam("Mathematics", 60);
student1.passExam("Physics", 70);
console.log(student1.toString()); 

const teacher1 = new Teacher("Emily", "Cimberly", "Female", 50, "Physics", 5000);
console.log(teacher1.toString());
console.log(teacher1); 
