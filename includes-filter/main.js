function XO(str) {
   const splitedArrLowerCase = str.toLowerCase()
    const splitArr = splitedArrLowerCase.split("")

    const x = splitArr.filter((arr)=>arr==="x")
     const o = splitArr.filter((arr)=>arr==="o")
} 

XO("xxxoo")