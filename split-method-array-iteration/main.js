function findEmployeesRole(name) {
  
  const namePart = name.trim("").split(" ")
  const firsttName = namePart[0]
  const lasttName = namePart[1]
    
  for(let i=0;i<employees.length;i++){
if(employees[i].firstName==firsttName  && employees[i].lastName === lasttName){
  return employees[i].role
} 
    }
  return "Does not work here!"
    }    

    findEmployeesRole("Dipper Pines")