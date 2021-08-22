'use strict';

const userModel = require('./usermodel');
const {Sequelize, DataTypes} = require('sequelize');
// const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://localhost/postgres';
const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/postgres";

const sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = { 
  UserModel:userModel(sequelize, DataTypes),
  db: sequelize,
};