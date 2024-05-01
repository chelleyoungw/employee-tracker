// Seeds employee table with json data

const sequelize = require("../connection");
const Employee = require("../models/employee");

const employeesSeedData = require("./employeesSeedData");

const seedEmployeeData = async () => {
  try {
    // Sync the database
    await sequelize.sync({ force: true });

    // Seed the employee data
    const employees = await Employee.bulkCreate(employeesSeedData);

    console.log('Employee data seeded successfully.');
  } catch (err) {
    console.error('Error seeding employee data:', error);
  } finally {
    // Close the database connection
    await sequelize.close();

    // Exit the process
    process.exit(0);
  }
};
  
seedEmployeeData();
