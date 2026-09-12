function stray(numbers) {

  const sorted = numbers.sort((a,b)=>a-b)
     let unique = sorted[0]
  for(let i=0;i<sorted.length;i++){
   
    if(sorted[i]!=unique)
    {
  unique = sorted[i]
  }
    }
  return unique
  }

  stray([1, 1, 2])