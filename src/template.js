const generateEngineer = engineer => {
    return `
    <div class="col">
    <div class="card shadow">
      <div class="card-body bg-primary text-white">
        <h4 class="card-title">${engineer.getName().charAt(0).toUpperCase() + engineer.getName().slice(1)}</h5>
        <h5 class="card-text"><i class="fas fa-glasses"></i> ${engineer.getRole()}</h6>
      </div>
      <ul class="list-group bg-light" style="padding: 10px">
        <li class="list-group-item">ID: </br>${engineer.getId()}</li>
        <li class="list-group-item">E-mail: </br><a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: </br><a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
      </ul>
    </div>
  </div>`
}
const generateIntern = intern => {
    return `
    <div class="col">
    <div class="card shadow">
      <div class="card-body bg-primary text-white">
        <h4 class="card-title">${intern.getName().charAt(0).toUpperCase() + intern.getName().slice(1)}</h5>
        <h5 class="card-text"><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h6>
      </div>
      <ul class="list-group bg-light" style="padding: 10px">
        <li class="list-group-item">ID: </br>${intern.getId()}</li>
        <li class="list-group-item">E-mail: </br><a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: </br>${intern.getSchool()}</li>
      </ul>
    </div>
  </div>`
}
const generateManager = manager => {
    return `
    <div class="col">
    <div class="card shadow">
      <div class="card-body bg-primary text-white">
        <h4 class="card-title">${manager.getName().charAt(0).toUpperCase() + manager.getName().slice(1)}</h5>
        <h5 class="card-text"><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h6>
      </div>
      <ul class="list-group bg-light" style="padding: 10px">
        <li class="list-group-item">ID: </br>${manager.getId()}</li>
        <li class="list-group-item">E-mail: </br><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: </br>${manager.getOffice()}</li>
      </ul>
    </div>
  </div>`
}
const generateEmployee = team => {
    const html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    return html.join("");
}
// export function to generate entire page
module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading bg-danger text-white">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateEmployee(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
}

        // // for loop for each one of these employee 
        // for (let i = 0; i < html.length; i++) {
        //     const employee = html[i]
        //  if (employee.getType() === "engineer") {
        //     return generateEngineer(employee)
        // } else if (employee.getType() === "Intern"){
        //     return generateIntern(employee)
        // }else if (employee.getType() === 'manager'){
        //     return generateManager(employee)
        // }
        // }
