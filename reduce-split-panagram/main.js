function isPangram(string){
  const alpha = /[a-z]/
  const splitted = string.toLowerCase().split("").reduce((acc,current)=>{
    if(alpha.test(current)){
    acc[current] = (acc[current]|| 0) + 1
        } 
    return acc
  }, {})
  
  return Object.values(splitted).length===26 
}
