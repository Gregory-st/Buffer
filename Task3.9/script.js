class Cat{
    constructor(Name, Age){    
        this.Name = Name;
        this.Age = Age;
    }
    Say = () => console.log("Мяу");
    Eating = () => console.log("Ням ням");
    Sleep = () => console.log("Хр хр");
}

let cat1 = new Cat("Барсик", 2);
let cat2 = new Cat("Кузя", 5);
let cat3 = new Cat("Рыжик", 8);

cat1.Say();
cat2.Eating();
cat3.Sleep();