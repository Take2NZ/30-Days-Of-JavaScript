

// Use forEach to console.log each country in the countries array.


const countriesExample = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'England']
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

