function disemvowel(str) {
  let newArray = ""
  const vowel = "aeiouAEIOU"
    for(let i=0;i<str.length;i++){
    if(!vowel.includes(str[i])){
     newArray+=str[i]
    }
}
 return newArray
}

console.log(disemvowel("Thias website is for losers LOL!"))