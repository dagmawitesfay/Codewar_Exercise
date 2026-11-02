function narcissistic(value) {
 return String(value).split("").reduce((acc,current,index,array) =>{
    return acc + Math.pow(Number(current),array.length)
      },0) === value
  } 
