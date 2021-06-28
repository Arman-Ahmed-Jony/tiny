const getFullName = (name: string, surname: string): string => {
  return `${name} ${surname}`;
};

console.log(getFullName("arman", "ahmed"));

// interfaces
interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: UserInterface = {
  name: "arman",
  age: 25,
  getMessage() {
    return this.name;
  },
};

const user2: UserInterface = {
  name: "john",
  getMessage() {
    return this.name;
  },
};

// union and type alias
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;
interface UserInterface2 {
  id: ID;
  name: string;
  age: number;
}

const populartags: PopularTag[] = ["movie", "webseries"];

let pageName: string | number = "1";
let errorMessage: string | null = null;
let user3: UserInterface2 | null = null;

// any, void, never, unknown
const doSomeThing = (): void => {
  console.log("doSomething called ");
  // return 4
};

// try to avoid using any at any cost

// working with dom
// const someElement = document.querySelector(".foo") as HTMLInputElement
// console.log('someElement', someElement.value)

// const someElement2 = document.querySelector(".blah")
// someElement.addEventListener('blur', (event)=> {
//   const target = event.target as HTMLInputElement
//   console.log("event", target.value);
// })

// classes
interface StudentInterface {
  getInfo(person: Person): Person;
}

export class Person implements StudentInterface {
  private firstname: string;
  private lastname: string;

  private readonly gender: string;

  constructor(firstName: string, lastName: string, gender: string) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.gender = gender;
  }
  getInfo(): Person {
    return this;
    throw new Error("Method not implemented.");
  }

  /**
   * this will not allow us to change gender
   */
  changeGender(): void {
    // this.gender = 'male'
  }

  getFullName(): string {
    console.log(`${this.firstname} ${this.lastname}`);
    return `${this.firstname} ${this.lastname}`;
  }
}

// inheritence

export class Admin extends Person {
  private editor: string;
  setEditor(editor: string): void{
    this.editor = editor
  }
  getEditor():string{
    return this.editor
  }
}
