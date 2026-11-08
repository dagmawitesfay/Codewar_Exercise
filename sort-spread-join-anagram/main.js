// PREP
// PARAMETER -> ACCEPTS TWO STRINGS WHICH IS THE the orignal string and the test string
// RETURN IS THE BOOLEAN , TRUE if the the orignal is the anagram of the test
// EXAMPLE ->  ORIGNAL= "foefet"  , TEST = "toffee"
//PSUEDOCODE
// Split both test and orignal
// sort both splitted strings
// use equality operator to check if theya re equal
// return the comparison 
var isAnagram = function(test, original) {
  
  const testArray = [...test.toLowerCase()].sort().join("")
  const orignalArray = [...original.toLowerCase()].sort().join("")
  return testArray==orignalArray
};
