function oddOrEven(array) {
  const sumOfArray = array.reduce((acc,currentValue)=>acc + currentValue,0)
    return sumOfArray % 2 == 0 ? "even" : "odd"
}
console.log(oddOrEven([1,2,3,4]))