const knex = require('knex');  
const configuration = require('../../knexfile');

const buildconfig = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development; 
const connection = knex(buildconfig);
   
module.exports = connection; 