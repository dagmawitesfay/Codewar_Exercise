function squareDigits(num){
  const str = String(num)
  let conc = ""
  for(let i=0; i<str.length;i++){
    conc+=Math.pow(str[i],2)
  }
  return Number(conc)
  }
  
  squareDigits(2112)