class Employee{
    constructor(id,firstName, lastName, position, salary, workingHours){
        this._id = Math.random().toString(36).slice(2);
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
        this.workingHours = workingHours;
    }

    employeeId(){
        return this._id;
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    
    get position(){
        return this._position;
    }
    get salary(){
        return this._salary;
    }
    get workingHours(){
        return this._workingHours;
    }
    set firstName(firstName){
        this._firstName = firstName;
    }
    set lastName(lastName){
        this._lastName = lastName;
    }
    set position(position){
        this._position = position;
    }
    set salary(salary){
        this._salary = salary;
    }
    set workingHours(workingHours){
        this._workingHours = workingHours;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getAnnualSalary(){
        return this.salary * 12; 
    }
    raiseSalary(percent){
        this.salary += this.salary * (percent / 100);
        return this.salary;
    }
};

const employee = new Employee( `${this._id}`,'Mister', 'X', 'Engineer', 1000, 40);
console.log(employee);
console.log(employee.getFullName()); 
console.log(employee.getAnnualSalary());
console.log(employee.raiseSalary(10)); 
