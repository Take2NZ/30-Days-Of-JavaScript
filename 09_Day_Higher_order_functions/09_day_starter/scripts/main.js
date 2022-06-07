//START OF EXERCISE SET ONE

// Use forEach to console.log each country in the countries array.


const countriesExample= ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'England', 'New Zealand', 'New Caledonia', 'New Guinea']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
countriesExample.forEach((country) => console.log(country))

// I got it to work yay! I had to change the const name to countriesExample because it was already defined in countries_data and threw an error message

//I am not sure whether I need to import the data file in here?

//Use forEach to console.log each name in the names array.

names.forEach((name) => console.log(name))

//Noice

//Use forEach to console.log each number in the numbers array.

numbers.forEach((numbers) => console.log(numbers))

//Use map to create a new array by changing each country to uppercase in the countries array.

let countryUpper= countriesExample.map((country) => country.toUpperCase())

console.log (countryUpper)

let countryLength = countriesExample.map((country)=>country.length)

console.log(countryLength)

//Done

//Use map to create a new array by changing each number to square in the numbers array

let squaredArray = numbers.map((number)=> number * number)

console.log(squaredArray)

//Done

//Use map to change to each name to uppercase in the names array

let upperNames= names.map((name) => name.toUpperCase())

console.log(upperNames)

//SWEET

//Use map to map the products array to its corresponding prices



//Use filter to filter out countries containing land.

let noLand= countriesExample.filter((country)=> country.includes('land')
)

console.log(noLand)

//I think this worked? It only showed Finland. I was confused and was wondering why Iceland didn't show up. In the data set though I noticed Iceland was actually written "IceLand" (with a capital L) so maybe that is it

//Use filter to filter out countries having six character

let noSix= countriesExample.filter((country)=>country.length===6)

console.log(noSix)

//Done

// Use filter to filter out countries containing six letters and more in the country array.

let noSixOrMore= countriesExample.filter((country)=>country.length>5)

console.log(noSixOrMore)

//I think this is right

//Use filter to filter out country start with 'E';

let noE= countriesExample.filter((country)=>country.startsWith('E'))

console.log(noE)

//I know this worked by adding 'England' to the array at the top. But I wonder if this is actually all meant to somehow be referencing the countries.data js

//Filter means keep whatever is defined = filter in (keep)

//Use filter to filter out only prices with values.

// let onlyValues= products.filter((products)=>products.includes())
// console.log(onlyValues)


//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

let getStringLists = countriesExample.map((country)=> country.includes('')) 
console.log(getStringLists)

// I think this is right. Might not be exactly what they wanted though

// Use reduce to sum all the numbers in the numbers array.

let sumOfNumbers = numbers.reduce((acc,cur)=> acc + cur, 0)
console.log(sumOfNumbers)

//Matthew I am a bit confused how acc and curr work here. Is cur the current index in the array? 

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

let allCountries= countriesExample.reduce((acc,cur)=> acc + cur + " are north European Countries")

console.log(allCountries)

//Oh no not sure what I have done here. It kind of worked. 

// Use some to check if some names' length greater than seven in names array

let longNames = names.some((name)=>name.length > 7)
console.log(longNames)

// It logged a boolean of true meaning some of the names are longer than 7 letters long.

//Use every to check if all the countries contain the word land


let landCheck = countriesExample.every((country)=>country.includes('land'))

console.log(landCheck)

//Not every country does, so it returned false.

//Use find to find the first country containing only six letters in the countries array

let firstSix= countriesExample.find((country)=> country.length === 6)

console.log(firstSix)

// Think this is right

// Use findIndex to find the position of the first country containing only six letters in the countries array

firstSixIndex= countriesExample.findIndex((country)=> country.length === 6)

console.log(firstSixIndex)

//All good.

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

findNorway= countriesExample.findIndex((country)=> country==='Norway')

console.log(findNorway)

//Done

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

findRussia= countriesExample.findIndex((country)=> country==='Russia')

console.log(findRussia)

//It worked and was -1


//START OF EXERCISE SET TWO

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

//This confused me, and will need to unpack with you Matthew

let categorizeCountries = countriesExample.filter((country)=> country.includes('New'))

console.log(categorizeCountries)

//This worked with the local array in this file. I tried doing the same thing with the countries data and did not work

//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

let numberOfN= countriesExample.map((country)=> country.startsWith('N'))
console.log(numberOfN)

//This worked, but it did not show the number four for the amount of times. It did however return an array with booleans (true for if it start with an 'N' false if not)

//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

let getFirstTenCountries = lotsOfCountries.slice(0,10)

console.log(getFirstTenCountries)

//Think this is right

//Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

let getLastTenCountries = lotsOfCountries.slice(-10)

console.log(getLastTenCountries)

//Sweet that worked

//Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

let initialLetterCount = lotsOfCountries.filter((name)=>name==='A')
console.log(initialLetterCount)