// PREP 
// P AS ARRAY AND THE CONSTANT ,K which is number to concatenate how many consecutive strings
// R -> return a string with longest string 
// E -> strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
// tree + foling
// foling+trashy
//trashy + blue
// blue + abcdef
// abcdef + uvwxyz


function longestConsec(strarr, k) {
  if(strarr.length===0 || k>strarr.length || k<=0) return ""
  let best = ""
for(let i=0;i<=strarr.length-k;i++){

let consecutive = strarr.slice(i,i+k).join("")
if(consecutive.length>best.length){
  best = consecutive
}
}
  return best 
}


