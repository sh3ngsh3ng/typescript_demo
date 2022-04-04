// Typescript
// tsc.cmd <file-name> --watch
export{}

// Abstraction
// interface Person {
//     name : string;
//     country : string;
// }

// function disp(person: Person) {
//     console.log(`${person.name} ${person.country}`)
// }

// let p = {
//     name: "Yong",
//     country: "Singapore"
// }

// disp(p)

// Inheritance
class Trainee {
    traineeName: string;
    constructor(name: string) {
        this.traineeName = name;
    }

    display() {
        console.log(this.traineeName);
    }
}


let t = new Trainee("Yong");
console.log(t.traineeName);
t.display();


class JrTrainee extends Trainee {
    constructor(jrName:string) {
        super(jrName)
    }

    receiveKT() {
        console.log("KT in progress")
    }
}

let jt = new JrTrainee("Yong2");
console.log(jt.traineeName);
jt.display();
jt.receiveKT();














