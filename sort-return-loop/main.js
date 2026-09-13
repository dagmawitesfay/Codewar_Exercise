function stray(numbers) {

  const sorted = numbers.sort((a,b)=>a - b)
   
    if(sorted[0]!==sorted[1])
    {
      return sorted[0] 
  }
    return sorted[sorted.length - 1]
    
  }

  stray([1, 1, 2])