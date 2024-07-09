'use strict';

/**
 * seichi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seichi.seichi');
