


function alphabetPosition(text) {
  return text.toLowerCase().replace(/[^a-z]/g,"").split("").map(letter=>letter.charCodeAt()-96).join(" ")
}