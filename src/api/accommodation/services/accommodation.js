'use strict';

/**
 * accommodation service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::accommodation.accommodation');
