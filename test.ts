// Typescript
// tsc.cmd <file-name> --watch
export{}

interface Person {
    name : string;
    country : string;
}

function disp(person: Person) {
    console.log(`${person.name} ${person.country}`)
}

let p = {
    name: "Yong",
    country: "Singapore"
}

disp(p)










