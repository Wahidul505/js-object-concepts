// declaration of an object using object literals 
const keyBoard = {
  brand: 'delux',
  color: 'black',
  price: 700,
  isSmooth: true
}
console.log(keyBoard);
// getting all the keys from the object 
console.log(Object.keys(keyBoard));
// getting all the values from the object 
console.log(Object.values(keyBoard));
// getting all the pairs of keys and values from the object 
console.log(Object.entries(keyBoard));
// sealing the object and checking the limitation after sealed 
Object.seal(keyBoard);
delete keyBoard.isSmooth;
keyBoard.isClean = true;
keyBoard.price = 600;
console.log(keyBoard);
// freezing the object and checking the limitation after freezed 
Object.freeze(keyBoard);
delete keyBoard.isSmooth;
keyBoard.isClean = true;
keyBoard.price = 12000;
console.log(keyBoard);
