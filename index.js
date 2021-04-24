const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const render = require('./src/template')
const outputDir = path.resolve(__dirname, 'dist')
const outputFile = path.join(outputDir, 'index.html')

const teamMembersArr = []

const runApp = () => {
    console.log('Welcome! Please begin by choosing your first employee')
    const promptStuff = () => {
    inquirer
    .prompt([{
        type: 'list',
        name: 'role',
        message:'What is the role of your employee?',
        choices:['Manager', 'Engineer', 'Intern', 'My team is complete!']
    }
    ])
    .then(response => {
        switch (response.role){
            case 'Engineer': 
                addEngineer();
            break
            case 'Intern':
                addIntern()
            break
            case 'Manager':
                addManager()
            break

            default: 
            renderTeam()
        }
    })
}
    addEngineer = () => {
        inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the first name of your Engineer?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your engineers ID number?',
            validate: dataInput => {
                if (isNaN(dataInput)) { 
                    console.log('\nIDs cannot contain letters or characters')
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your engineers e-mail address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your engineers GitHub account?'
        }])
        .then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github)

            teamMembersArr.push(engineer)
            promptStuff()
        })
    }
    addManager = () => {
        inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the name of your Manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your managers ID number?',
            validate: dataInput => {
                if (isNaN(dataInput)) { 
                    console.log('\nIDs cannot contain letters or characters')
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your managers e-mail address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your managers office number?',
            validate: dataInput => {
                if (isNaN(dataInput)) { 
                    console.log('\nIDs cannot contain letters or characters')
                    return false
                } else {
                    return true
                }
            }
        }])
        .then(response => {
            const manager = new Manager (response.name, response.id, response.email, response.officeNumber)

            teamMembersArr.push(manager)
            promptStuff()
        })
    }
    addIntern = () => {
        inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the name of your intern?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your interns ID number?',
            validate: dataInput => {
                if (isNaN(dataInput)) { 
                    console.log('\nIDs cannot contain letters or characters')
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your interns e-mail address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your interns school name?'
        }])
        .then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school)

            teamMembersArr.push(intern)
            promptStuff()
        })
    }
    const renderTeam = () => {
        fs.writeFileSync(outputFile, render(teamMembersArr), 'UTF-8')
    }
    promptStuff()
}
  
runApp()