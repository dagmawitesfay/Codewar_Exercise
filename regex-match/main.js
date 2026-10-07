function printerError(s) {
  
  let reg =/[^a-m]/g
  const namee = s.match(reg) || []
   return `${namee.length}/${s.length}`
  }