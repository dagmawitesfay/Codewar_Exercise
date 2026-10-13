function digitalRoot(n) {
  let number = n 

    while(number>=10){
    
     number = number.toString().split("").reduce((acc,current)=>acc+Number(current),0)
    }
  return number  
    }