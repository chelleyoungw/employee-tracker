// Seeds role table with json data

const sequelize = require("../connection");
const Role = require("../models/role");

const rolesSeedData = require("./rolesSeedData");

const seedRoleData = async () => {
  try {
    // Sync the database
    await sequelize.sync({ force: true });

    // Seed the role data
    const roles = await Role.bulkCreate(rolesSeedData);

    console.log('Role data seeded successfully.');
  } catch (err) {
    console.error('Error seeding role data:', error);
  } finally {
    // Close the database connection
    await sequelize.close();

    // Exit the process
    process.exit(0);
  }  
};

seedRoleData();