// create Manager card
const generateManager = function (manager) {
    return `
    <div class="card">
        <div class="card-body">
            <div class="card-title">
                <h2>Manager</h2>
                <h3>${manager.name}</h3>
            </div>
            <div>
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="card">
        <div class="card-body">
            <div class="card-title">
                <h2>Engineer</h2>
                <h3>${engineer.name}</h3>
            </div>
            <div>
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="card">
        <div class="card-body">
            <div class="card-title">
                <h2>Intern</h4>>
                <h3>${intern.name}</h3>
            </div>
            <div>
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

// push array to page 
generateHTML = (data) => {

    // array for cards 
    employeeCardArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            employeeCardArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            employeeCardArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            employeeCardArray.push(internCard);
        }
        
    }

    // joining strings 
    const employeeCards = employeeCardArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;
}

// generate html page 
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Team Profile</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <h1 class="d-flex justify-content-center">Employee Team</h1>
      </header>
      <main>
          <div class="container">
                  ${employeeCards}
          </div>
      </main>
      
  </body>
  </html>
`;
}

// export to index
module.exports = generateHTML; 