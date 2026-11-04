
// PREP
// PARAMETER -> ACCEPTS STRING
// RETURNS -> returns occurence of each strings.character 
// EXAMPL ->. "abc" // {"a" : 1 , "b" : 1, "C" : 2 }
// PSUEDOCODE
// First check the edge case for handling the empty string -> return emoty object
// basically the seps will be convert the strings to array 
// use reduce to create the occurence for each 
// return it 
function count(string) {
  // TODO
  return string==="" ? {} : string.split("").reduce((acc,current)=>{
    acc[current] = (acc[current] || 0 ) + 1
    return acc 
  }, {});
}