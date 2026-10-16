function replaceCommon(string, letter) {
  let maxCount = 0 
  let mostFrequentChar = ""
  const splitted = string.split("")
  
  // creates each letters with the occurrence 
  const count =  splitted.reduce((acc,current)=>{
    if(current===" ") return acc
    acc[current] = (acc[current] || 0) + 1
      return acc 
  },{})

  // iterate through each objects/count
  for(const key in count){
  if(count[key]>maxCount){
    maxCount = count[key]
    mostFrequentChar = key
  }
  }
  // replace all most frequent characters with the letter 
  return string.replaceAll(mostFrequentChar,letter)
    }