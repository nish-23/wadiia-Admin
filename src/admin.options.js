const AdminBro = require('admin-bro');
const AdminBroSequelize = require('@admin-bro/sequelize');
const Flight = require('./flights/flight.entity');
AdminBro.registerAdapter(AdminBroSequelize);


/** @type {AdminBro.AdminBroOptions} */
const options = {
     resources:[Flight],
};

module.exports = options;
