function removeChar(str){

    let newArr = str.split("")
    console.log(newArr)
    newArr.shift()
    newArr.pop()
    return newArr.join("")

};



