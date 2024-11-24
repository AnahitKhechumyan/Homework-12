class Book{
    constructor(title, author, publicationYear){
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    displayBookDetails(){
        return `Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}`;
    }
};
class Ebook extends Book{
    constructor(title, author, publicationYear, price){
        super(title, author, publicationYear);
        this.price = price;
    }
    displayBookDetails(){
        return `${super.displayBookDetails()}, Price: $${this.price.toFixed(2)}`;
    }
};

const mybook = new Book("La Boheme", "Charles Aznavour", 2003);
console.log(mybook.displayBookDetails());
console.log(mybook);

const ebook = new Ebook("40 Poems", "Yeghishe Charents", 2012, 10.99);
console.log(ebook.displayBookDetails());
console.log(ebook);

  