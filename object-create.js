// 1. using object literals 
const obj = { name: 'wahidul', age: 23 };
// 2. using class 
class NewObj {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const myObj = new NewObj('wahid', 24);
console.log(myObj);