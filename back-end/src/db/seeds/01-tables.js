/* eslint-disable strict */
const tables = require("../seedData/01-tables");
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE tables RESTART IDENTITY CASCADE")
    .then(() => knex("tables").insert(tables));
};
