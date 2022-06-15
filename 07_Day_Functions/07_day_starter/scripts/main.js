// console.log(countries)
//alert('Open the console and check if the countries has been loaded')
console.log("working")
const firstName = "Lax"
const lastName = "Senju"
// 1. & 2.
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
// 3.
const addNumbers = (x,y) => x+y;
// 4.
const areaOfRectangle = (length, width) => length * width;
// 5.
const perimeterOfRectangle = (length,width) => 2*(length*width);
// 6.
const volumeOfRectPrism = (length,width,height) => length*width*height;
// 7.
const areaOfCircle = r => Math.PI*r*r;
// 8.
const circumOfCircle = r => 2*Math.PI*r;
// 9. 
const density = (mass,volume) => mass/volume;
// 10.
const speed = (distance,time) => distance/time;
// 11.
const weight = mass => mass*9.8;
// 12.
const convertCelsiusToFahrenheit = oC => (oC*9/5)+32;
// 13. 
const bmi = (weight,height) => {
    const bmiResult = weight/(height*height);
    const msgArr = ["Under weight","Normal weight","Overweight","Obese"];
    if (bmiResult < 18.5) {
        return msgArr[0]
    } else if (bmiResult > 18.5 && bmiResult < 25) {
        return msgArr[1]
    } else if (bmiResult > 24.9 && bmiResult <30) {
        return msgArr[2]
    } else {
        return msgArr[3]
    }
};
// 14. incomplete
const checkSeason = () => {
    const month = new Date().getMonth();
    if (month === 11||month === 0||month === 1) {
        return "Summer"
    } else if (month === 2||month === 3||month === 4) {
        return "Autumn"
    } else if (month === 5||month === 6||month === 7) {
        return "Winter"
    } else {
        return "Spring"
    };
};
// 15.
const findMax = (x,y,z) => {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
};
// Excercise Level 2
// 1.incomplete
const solveLinEquation = (ax, by, c) => ax+by+c;
// 3.
const printArray = arr => arr.map(x => console.log(x));
// 4.
const showDateTime = () => new Date().toLocaleString();
// 5.
const swapValues = (x,y) => [x, y] = [y, x];
// 6.
const reverseArray = arr => {
    let newArr = [];
    for (let i = arr.length; i> 0; i--) {
        newArr.push(arr.pop());
    }
    return newArr;
};
// 7.
const capitalizeArray = arr => arr.map(x => x.toUpperCase());
// 8. 
let itemArray = []
const addItem = item => {
    itemArray.push(item);
    return itemArray
};
// 9.
const removeItem = i => itemArray.slice(i);
// 10.
const sumOfNumbers = num => {
    let sum = 0;
    for (let i=0;i<=num;i++) {
        sum = sum + i;
    };
    return sum;
};
// 11.incomplete
const sumOfOdds = num => {
    let sum = 0;
    for (let i=0;i<=num;i++) {
        if (true) {
            sum = sum + i;
        };
    };
    return sum;
};
// 12.incomplete
const someOfEven = num => {
    let sum = 0;
    for (let i=0;i<=num;i++) {
        if (true) {
            sum += i;
        };
    };
    return sum;
};
// 13. incomplete
const evensAndOdds = num => {
    const txt = ["The number of odds are 50 ", "The number of evens are "];
    return `${txt[0]} ${txt[1]}`
};
// 14.
const sumOfArguments = (...arg) => [...arg].reduce((a,b) => a+b, 0);
// 15.
const randomUserIP = () => (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
// 16. 
const randomMacAddress = () => {
    let hexDigits = "0123456789ABCDEF";
    let macAddress = "";
    for (var i = 0; i < 6; i++) {
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ":";
    }
    return macAddress;
};
// 17.
const randomHexaNumberGenerator = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};
// 18.incomplete
const userIdGenerator = () => Math.random().toString(36).substr(2, 7);
//   console.log(userIdGenerator())
//   console.log(userIdGenerator())
//   console.log(userIdGenerator())
// Level 3
// 1. 
const userIdGeneratedByUser = () => {};
// 2. 
const rgbColorGenerator = () => {
    const randomInteger = () => Math.floor(Math.random()* 256);
    let r = randomInteger();
    let g = randomInteger();
    let b = randomInteger();
    return `rgb(${r},${g},${b})`;
};
// 3
const arrayOfHexaColors = () => {
    let [r,g,b] = rgbColorGenerator();
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
    return "#" + hr + hg + hb;
};
// console.log(arrayOfHexaColors());
// 4.
const arrayOfRgbColors = () => {};
// 5. 
const convertHexaToRgb = () => {};
// 6.
const convertRgbToHexa = () => {};
// 7.
const generateColors = () => {};
// 8.
const shuffleArray = array => {
    let shuffle = array
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
// Notes:
// We put each element in the array in an object, and give it a random sort key
// We sort using the random key
// We unmap to get the original objects
  return shuffle
};
// 9.
const factorial = n => {
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
};
// 10.
const isEmpty = x => x.length > 0 ? "NotEmpty" : "Empty"
// 11.
const sum = (...args) => [...args].reduce((a, b) => a + b, 0);
// 12.
const sumOfArrayItems = x => x.reduce((partialSum, a) => partialSum + a, 0);
// 13.
const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length
// 14.
const modifyArray = arr => {
    if (arr[4]) {
        arr[4] = arr[4].toUpperCase()
        return arr
     } else {'Not Found'}
};
// 15.
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
};
// 16.
const checkUniqueArray = () => {};
// 17.
const checkIfSameDataType = arr => {};
// 18.
const isValidVariable = () => {};
// 19. inComplete
const sevenRandomUniqueNum = () => {
    const callback =  Math.floor(Math.random() *9)
    console.log(callback)
    let randomResult = [];
    for (let i=0; i <= randomResult.length; i++) {
        
    }
    return randomResult
};
console.log(sevenRandomUniqueNum())
// 20.
const reverseCountries = x => x.revere();

