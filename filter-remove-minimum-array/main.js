// // PREP
// // P -> array of integers
// // R -> smallest Value
// // E- > [1,2,3,4,5], output = [2,3,4,5]
// // P -> Iterate through the array 
//  -> // check if the smallest number is less than the current array vlaue 
//    //if so thats the new smallest 
        // filter / create a new array that doesnt include the smalltes value


function removeSmallest(numbers) {
  if(numbers.length<0) return []
    let smallest = numbers[0]
  for(let i=0;i<numbers.length;i++){
    if(smallest>numbers[i]){  
       smallest = numbers[i]
       }
  } 
  
 
   let index = numbers.indexOf(smallest)
   return numbers.filter((num,i)=>index!==i)
}
