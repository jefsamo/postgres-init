"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        created_At: new Date(),
        updated_At: new Date(),
      },
      {
        id: 2,
        firstName: "Wale",
        lastName: "John",
        email: "waleyyy@example.com",
        created_At: new Date(),
        updated_At: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("channels", [
      {
        id: 1,
        name: "John Doe channel",
        user_id: 2,
        created_At: new Date(),
        updated_At: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("videos", [
      {
        id: 1,
        channel_id: 1,
        title: "Welcome to my YT channel",
        created_At: new Date(),
        updated_At: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
