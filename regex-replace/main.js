// PREP
// Paramter is a string
// Return is string with breaked up into camel Casing with space between them
// Example - > "camelCasing"  =>  "camel Casing"

// Psuedocode ->
// replacing the all capital letters with keeping the capital letter followed by space
// JavaScript automatically captures the matched text inside parentheses 
// and stores them in memory. 
// we don't see variables created in standard code, 
// but can reference them using $1, $2, $3
function solution(string) {
  if(string.length==0) return string  // edge case
  
  return string.replace(/([A-Z])/g, " $1")
}