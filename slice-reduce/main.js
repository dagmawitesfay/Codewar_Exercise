function findEvenIndex(arr) {
 
  for(let i=0;i<arr.length;i++){
    

     let leftSide = arr.slice(0, i)
      let rightSide = arr.slice(i)
      
       let sum = leftSide.reduce((acc,currentVal)=>acc+currentVal,0)
       let sumRight = rightSide.reduce((acc,currentVal)=>acc+currentVal,0)
      
       if(sum===sumRight){
         return i;
       }
  }
  return -1
}