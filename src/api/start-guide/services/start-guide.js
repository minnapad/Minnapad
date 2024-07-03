'use strict';

/**
 * start-guide service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::start-guide.start-guide');
