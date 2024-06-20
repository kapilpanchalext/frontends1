import * as util from "./util.js";

console.log(util.default);
console.log(util.apiKey);
console.log(util.abc);
console.log(util.getApiKey());

function greet(userName, message){
    return "Hello " + userName + ", " + message;
}

const val1 = greet("QWE","Hello World1");
const val2 = greet("ASD","Hello World2");

console.log(val1);
console.log(val2);

const newGreeting = () => {
    console.log("New Greeting");
}

newGreeting();

const user = {
    name: "QWEQWEQE",
    age: 23,
    greet () {
        console.log("Hello From Greet Method");
        console.log(this.age);
    }
}

console.log(user.name + " " + user.age);
user.greet();

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet1(){
        console.log("Hello From Greet1 Method");
        console.log(this.age);
    }
}

const user1 = new User("QWE1", 231);
console.log(user1.name + " " + user1.age);
user1.greet1();

const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const indexSports =  hobbies.findIndex((item) => {
    return item === 'Sports';
});

console.log(indexSports);

const editedHobbies = hobbies.map((item) => item + "!");

console.log(editedHobbies);

const editedHobbies1 = hobbies.map((item) => ({text: item}));

console.log(editedHobbies1);

const [firstName, lastName] = ["FirstName","LastName"];

console.log(firstName);
console.log(lastName);

const {name: userName1, age, greet2} = {
    name: "QWEQWEQE12",
    age: 2312,
}

console.log(userName1);
console.log(age);

const newHobbies = ["Sports1", "Cooking1", "Reading1"];

const newHobbies2 = [...hobbies, ...newHobbies];
const newHobbies3 = [hobbies, newHobbies];
console.log(newHobbies2);
console.log(newHobbies3);

const extendedUser = {
    isAdmin: true,
    ...user
}

console.log(extendedUser);

// const password = prompt("Your Password!");

// if(password === "Hello"){
//     console.log("Hello Works!");
// } else if(password === "hello"){
//     console.log("hello Works!");
// } else {
//     console.log("Access Not Granted!");
// }


for(const hobby of hobbies){
    console.log(hobby);
}


function handleTimeout() {
    console.log("Handle timeout 1!");
}

const handleTimeout2 = () => {
    console.log("Handle timeout 2!");
}

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {console.log("Handle timeout 3!")}, 4000);

// function greeter(greeterFn){
//     greeterFn();
// }
// greeter (() => {return console.log("Greeter Function");});

// console.log(greeter());

function init(){
    function greet(){
        console.log("Hello Inside Greet");
    }
    greet();
}
init();