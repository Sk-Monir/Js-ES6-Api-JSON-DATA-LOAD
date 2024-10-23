class Product {
    country = 'banglade3sh';

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk(what) {
        console.log(`my name is ${what}`);
    }

}
const print = new Product('jonaki', 25);
// console.log(print);
// print.talk('monir sheikh');


class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture() {
        console.log('Sir teaching us programming');
    }
}

const print2 = new Teacher('Jafor', 'physics');
console.log(print2);
const print3 = new Teacher('Kader', 'automobile');
console.log(print3);