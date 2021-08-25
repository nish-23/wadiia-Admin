const { buildRouter } = require('@admin-bro/express/lib/buildRouter');
const { default: AdminBro } = require('admin-bro');

const express = require('express');

/**
 *
 * @param {AdminBro} admin
 * @return (express.Router) router
 */

const buildAdminRouter = (admin) => {
  const router = buildRouter(admin);
  //   console.log(admin);
  return router;
};

module.exports = buildAdminRouter;
