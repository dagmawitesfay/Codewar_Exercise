
// PREP
// Parameter -> it contains list of array of objects
// return -> the object where the sum of the ascii code of the firstname is odd number or return empty array if name isnt odd name
// Example -> [
  // { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }]
  // A -> 65
// b-> 98
// b-> 98
// 65+98+98 = 261 which is odd
// PSUEDOCODE
// extract the firstName from the list
// for each letter/char in the name calculate the ascii code 
// sum all numbers
// check if number is odd- > modulo operator
// if its odd return  get the filtered user that matches the condition
// if not return empty array 

function findOddNames(list) {

return list.filter((user)=>{
    let totalSum = Array.from(user.firstName).map((char)=>char.charCodeAt(0)).reduce((acc,current)=>acc+current,0)
  return totalSum%2!=0
})
    

}
