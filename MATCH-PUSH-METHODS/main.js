var capitals = function (word) {
  const regex = /[A-Z]/g;
  const indexOnly= []
  
  for(let i=0;i<word.length;i++){
    if(word[i].match(regex)){
      indexOnly.push(i)
    }
  }  
  return indexOnly
};

capitals('CodEWaRs')