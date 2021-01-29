// variable but has multiple slots

const myArr = ['bob', 'bette', 'blue'];
const myOtherArray = new Array();
myOtherArray.push('star wars'); // adds item to end
myOtherArray.push('raiders of the lost ark');
// myArr.pop(); // removes last item
// myArr.shift(); // removes first item
myArr.unshift('jasmine'); // adds item to beginning


console.log(myArr);
console.log(myOtherArray);
console.log(myOtherArray[0]); // read single item
console.log(myArr[1]);
console.log(myArr.indexOf('bette'));
const betteIdx = myArr.indexOf('bette');
console.log(betteIdx);
if (betteIdx > -1) {
      console.log(myArr[betteIdx]);
}

myArr.splice(betteIdx, 0, 'robert');
console.log(myArr);
console.log(myArr.length);
// Math.random() for random 0 and 1
// Math.round(n) rounds to nearest whole number
// myArr.lenth - 1 to get the last index number of an array
const randomNumber = Math.round(Math.random() * (myArr.length - 1));
console.log(randomNumber);
console.log(myArr[randomNumber]);