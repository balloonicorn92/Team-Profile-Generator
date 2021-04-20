const generateEmployee = employee => {
    const generateIntern = engineer => {
        return `
        <section>
        <h1>${engineer.getName()}<h1>
        <div>lorem sinetgubg ior fghdssfj othsjdhf bfsdhfgdsioryehsbvndsm</div>
        <ul>
        <li>${engineer.getId()}</li>
        <li>${engineer.getEmail()}</li>
        </ul>
        </section>`
    }
}

// for loop for each one of these employee 
//for () { if employee[i].getType() === "employee") {
    //generateEngineer(employee[i])} else if { employee[i].getType() === "Intern" {
        //generateIntern(employee[i])
    //}}
//}}