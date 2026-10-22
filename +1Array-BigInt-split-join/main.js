

function upArray(arr){

  if( arr.length===0) return null 
  
  for(let i=0;i<=arr.length;i++){
    if(arr[i] > 9 || arr[i]<0) return null 
  }

  let sum = BigInt(arr.join(""))+1n
  let converted =  String(sum).split("").map(Number)

  
  while(converted.length<arr.length){
    converted.unshift(0)
  }
return converted
  
 
}