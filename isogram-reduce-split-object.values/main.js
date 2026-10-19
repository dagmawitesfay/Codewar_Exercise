// check the occurecne of each and check if they have only one occurence each

function isIsogram(str){
    const splittedStr = str.split("")
    const occurenece = splittedStr.reduce((acc,current)=>{
    const converted = current.toLowerCase()                                
      acc[converted] = (acc[converted] || 0) + 1
      return acc
    },{})
  
    return Object.values(occurenece).every((num)=>num===1)
  
}