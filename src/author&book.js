class Author{
    constructor(name, email, gender){
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get name(){
        return this._name;
    }
    get email(){
        return this._email;
    }
    get gender(){
        return this._gender;
    }
    set name(name){
        this._name = name;
    }
    set email(email){
        this._email = email;
    }
    set gender(gender) {
        this._gender = gender;
    }
    toString(){
        return `Author: ${this.name}, Email: ${this.email}, Gender: ${this.gender}`;
    }
};

class Book{
    constructor(title, author, price, quantity){
        this._title = title;
        this._author = author; 
        this._price = price;
        this._quantity = quantity;
    }
    get title(){
        return this._title;
    }
    get author() {
        return this._author;
    }
    get price(){
        return this._price;
    }
    get quantity(){
        return this._quantity;
    }
    set title(title){
        this._title = title;
    }
    set author(author){
        this._author = author;
    }
    set price(price){
        this._price = price;
    }
    set quantity(quantity){
        this._quantity = quantity;
    }
    getProfit(){
        return this.price * this.quantity;
    }
    toString() {
        return `Book: ${this.title}, Author: ${this.author.name}, Price: ${this.price}, Quantity: ${this.quantity}, Profit: ${this.getProfit()}`;
    }
};

const author = new Author("Daniel Defoe", "dd@example.com", "Male");
const book = new Book("Robinson Crusoe", author, 20, 100); 
console.log(author);
console.log(book);
console.log(author.toString());
console.log(book.toString());
