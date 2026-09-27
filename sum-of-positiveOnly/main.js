function positiveSum(arr) {
  let positiveSome = 0
for(let i=0;i<arr.length;i++){

 if(arr[i]>0){
   positiveSome+=arr[i]
  }
}
    
   return positiveSome  
}
 positiveSum([1,2,3,4,5,-1,0,-5])