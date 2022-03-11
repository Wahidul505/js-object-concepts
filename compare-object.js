const first = { a: 3, b: 5 };
const second = { a: 3, b: 5 };
if (first === second) {
  console.log('matched');
}
const third = first;
if (first === third) {
  console.log('first and third matched');
}
// comparing after converting into stringify 
if (JSON.stringify(first) === JSON.stringify(second)) {
  console.log('again matched');
}

const first2 = { a: 3, b: 5 };
const second2 = { b: 5, c: 3 };
// comparing using function 
function compareObj(obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (const prop in obj1) {
      if (obj1[prop] === obj2[prop]) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  else {
    return false;
  }
}
const isEqual = compareObj(first2, second2);
console.log(isEqual);
