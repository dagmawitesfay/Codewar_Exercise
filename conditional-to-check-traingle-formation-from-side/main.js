function isTriangle(a,b,c)
{
  if(a+b>c &&  a+c>b && b+c>a){ 
   return true;
}
  else{
    return false
  }
  }

console.log(isTriangle(-1,-1,10))
console.log(isTriangle(-1,2,0) )
console.log(isTriangle(4,4,0))
console.log(isTriangle(0,5,4))