function solve(s){
  let countUpper = 0 
  let countLower = 0
    for(let i=0;i<s.length;i++){
      if(s[i]>="A" && s[i]<="Z"){
           countUpper++
      }
     
      else if(s[i]>="a" && s[i]<="z"){
        countLower++
      }
    }
  return countUpper > countLower ? s.toUpperCase() : s.toLowerCase()
}
solve("code")