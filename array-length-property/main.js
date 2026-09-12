function minMax(arr){
  let maxValue= arr[0]
  let minValue = arr[0]
  for(let i=0;i<arr.length;i++){
    if(minValue > arr[i]){
      minValue = arr[i]
    }
    else if(maxValue < arr[i]){
      maxValue = arr[i] 
    }
  }
  return [minValue,maxValue];
}
minMax([1,6,9,10])