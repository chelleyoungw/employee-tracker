// Seeds department table with json data

const sequelize = require("../connection");
const Department = require("../models/department");

const departmentsSeedData = require("./departmentsSeedData");

const seedDepartmentData = async () => {
  try {
    // Sync the database
    await sequelize.sync({ force: true });

    // Seed the department data
    const departments = await Department.bulkCreate(departmentsSeedData);

    console.log('Department data seeded successfully.');
  } catch (error) {
    console.error('Error seeding department data:', error);
  } finally {
    // Close the database connection
    await sequelize.close();

    // Exit the process
    process.exit(0);
  }
};

seedDepartmentData();
