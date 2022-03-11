const keyBoard = {
  brand: 'delux',
  color: 'black',
  price: 700,
  isSmooth: true
};
// for in loop 
for (const prop in keyBoard) {
  console.log(prop, keyBoard[prop]);
}
/***************************************** 
// formula of getting object values in 3 different way 

console.log('key board color: ', keyBoard.color);
console.log('key board color: ', keyBoard['color']);
const propName = 'color';
console.log('key board color: ', keyBoard[propName]); 
******************************************/
// looping through using keys 
const keys = Object.keys(keyBoard);
console.log(keys);
for (const prop of keys) {
  console.log(prop, keyBoard[prop]);
}
// looping through using entries 
const pairs = Object.entries(keyBoard);
console.log(pairs);
// for (const pair of pairs) {
//   console.log(pair);
// }
for (const [key, value] of pairs) {
  console.log(key, value);
}