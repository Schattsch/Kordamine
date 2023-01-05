class Person {
    constructor()  {
        this.name = 'Kertu'
    }

    printName(){
        console.log(this.name)
    }
}

const person = new Person()
console.log(person)
console.printName()