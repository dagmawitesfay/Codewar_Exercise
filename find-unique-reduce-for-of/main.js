function findUniq(arr) {
  let occurrenceOfArr = arr.reduce((acc,current)=>{
     acc[current] = (acc[current]|| 0) + 1
    return acc
  },{})
  
  for(const num in occurrenceOfArr ){
    if(occurrenceOfArr[num]==1){
      return Number(num)
    }
  }
}
