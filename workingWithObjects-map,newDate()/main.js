// PREP
// PARAMETER -> List of array of objects
// RETURN -> list but with a new property added called username where the username is formed by combining firstName in lowercase and birhtyear of the user
// PSUEUDOCODE
// map through each list
// create a new property named username
// convert the the firstName to lowercase
// calculate the age
// combine both the name + age
// return the mapped list

function addUsername(list) {
    return list.map((newlist)=>{
     const currentYear = new Date().getFullYear();
    const birthYear =  currentYear - newlist.age
    const userNameFormed = `${newlist.firstName.toLowerCase()}${newlist.lastName[0].toLowerCase()}`;

  return {
    ...newlist ,
        username: `${userNameFormed}${birthYear}`
         } 
   });  

} 

                  
