function createPhoneNumber(numbers){
  const num = String(numbers).replace(/[^0-9]/g,"")
  const second = num.slice(0,3)
  const third = num.slice(3,6)
 return `(${second}) ${third}-${num.slice(6)}`

}
