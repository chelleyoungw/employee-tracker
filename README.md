# Employee-Tracker
Week-12 Challenge

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

 * [Description](#description)

 * [Live Screen Recording of Application Functionality](#live-screen-recording-of-application-functionality)

 * [Technologies Used](#technologies-used)

 * [Installation](#installation)

 * [Authors and Acknowledgements](#authors-and-acknowledgements)

 * [Features](#features)

 * [Usage Information](#usage-information)

 * [Contributing](#contributing)

 * [Test Instructions](#test-instructions)

 * [License](#license)

 * [Questions](#questions)

## Description

This application can be utilized by the user to view and manage the departments, roles, and employees within their company and help streamline salaries, planning and organization. The database was created with MySQL. It implements the sequelize dependency allowing for the database to be interacted with through the use of JavaScript. 

Future development for this application along with the addition of unit testing would consist of creating functionality allowing the user to view employees by manager, view employees by department, being able to delete departments, roles, and employees from the database, and allowing the view of the total utilized budget of a department—in other words, the combined salaries of all employees in that department.

## Live Screen Recording of Application Functionality

[05.05.2024 18_19.webm](https://github.com/chelleyoungw/employee-tracker/assets/153236313/3b695f38-2dbe-4b22-b4e3-54684821c742)

## Technologies Used

**Runtime:** Node.js v20.11.1

**Language:** JavaScript

**Dependencies:**

- Dotenv v16.4.5
- Inquirer v8.2.4
- MySQL2 v3.9.7
- Sequelize v6.37.3

## Installation

1. Clone the repo:
   git clone https://github.com/chelleyoungw/employee-tracker.git

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install the following version of node.js.
```
npm install -g node@20.11.1
```
4. Once node.js v16 is installed, in the terminal, utilize the following command to initialize and create a package.json where project files will be stored.
```
   npm init -y 
```

5. Next, use the terminal to run the following command to install the dependencies associated with this application.
```
   npm i
```
6. The package.json file should have the following scripts:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  }
```
6. Once the dependencies are installed, you will create the database. Navigate to the directory db that contains the schema.sql file. Once there, open a MySQL shell to run the following command.
```
SOURCE schema.sql;
```
7. Now that the database is created, you will need to seed the database. This will also create the model structure for the tables inside the database. Navigate to the root directory and open a terminal. Run the following commands to seed the database.
```
   node./seeds/departments
   node./seeds/roes
   node./seeds/employees
   ```
8. Now that the database is seeded, to run the application, navigate to the root directory index.js. Open a terminal and invoke the application with the following command.
```
   npm start
```

## Authors and Acknowledgements

- Chelle Wood is the author.
- Occasionally used edX bootcamp Xpert Learning Assistant and ChatGPT. 
- Referenced github account https://github.com/rmessett15/SQL-Employee-Tracker.git

## Features

Features of this application include the users ability to see, manage the departments, roles, and employees from within a CLI. It uses sequelize to interact with the database through JavaScript giving the user a dymanic experience.

## Usage Information

Once the application is started, it is very intuitive for the user. All they need to do is arrow up and down through the database options on what actions they want to take and hit enter. The user then needs to follow the commands to adjust or view or edit the database.

## Contributing

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

## Test Instructions

Currently no unit testing written yet for this application.

## License

MIT License

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/chelleyoungw)

<a href="mailto:chelleyoungw@gmail.com">chelleyoungw@gmail.com</a>
