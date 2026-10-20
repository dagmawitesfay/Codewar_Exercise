function countBits(n) {
 const num = n.toString(2).split("").map(Number).filter((num)=>num==1).length
 return num 
}