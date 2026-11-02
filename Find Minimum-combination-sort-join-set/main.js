//PREP
// Paramater -> array of numbers
// RETURN -> digit with lowest / minimum number that could be formed from these digits
// Example -> [4, 8, 1, 4] -> [4,8,1] from the Set then sorting it gives [1,4,8] 
// PsudoCode - > create a new Set from the array to remove the duplicate
// then sort them to have least to highest number order
//  then finally joining them but have to be converted to Number as join returns string 

function minValue(values){
  const unique =  [...new Set(values)].sort((a,b)=>a-b)
 return Number(unique.join(""))
}