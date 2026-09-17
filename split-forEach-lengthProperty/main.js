function findShort(s){
  const splittedString = s.split(" ")
  let smallestLength = splittedString[0]
  
  splittedString.forEach((elem)=>{
    
    if(elem.length < smallestLength.length){
        smallestLength = elem
    }
  })
       return smallestLength.length
          
  }