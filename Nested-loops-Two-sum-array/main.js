// // PREP
// P - > Takes arr num and target
// R-> return an arr where two df items in arr added up gives target num
// E- > ([1,2,3,4],4) -> 3+1 , 1+3 => [0,2] or [2,0]


// P -> create empty area here to hold index of the items 
//   -> iterate through each arry
//  ->  conditional to check for conditions where items equal to target
//   -> if the condition is true return the index or push it to the arr 


function twoSum(numbers, target) {
  let indexArr = []

  for(let i=0;i<numbers.length;i++){
      let numOne = numbers[0]
    let numTwo = numbers[i+1]
    if(target==numOne+numTwo){
      indexArr.push(numOne,numTwo)
      let newPair = indexArr.sort((a,b)=>b-a)
      console.log(indexArr,newPair)
    }
  }
}

twoSum([3, 2, 4], 6) 