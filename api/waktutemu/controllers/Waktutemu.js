'use strict';

/**
 * Waktutemu.js controller
 *
 * @description: A set of functions called "actions" for managing `Waktutemu`.
 */

module.exports = {

  /**
   * Retrieve waktutemu records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.waktutemu.fetchAll(ctx.query);
  },

  /**
   * Retrieve a waktutemu record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.waktutemu.fetch(ctx.params);
  },

  /**
   * Count waktutemu records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.waktutemu.count(ctx.query);
  },

  /**
   * Create a/an waktutemu record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.waktutemu.add(ctx.request.body);
  },

  /**
   * Update a/an waktutemu record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.waktutemu.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an waktutemu record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.waktutemu.remove(ctx.params);
  },

  /**
   * Add relation to a/an waktutemu record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.waktutemu.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an waktutemu record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.waktutemu.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an waktutemu record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.waktutemu.removeRelation(ctx.params, ctx.request.body);
  }
};
