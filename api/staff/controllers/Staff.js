'use strict';

/**
 * Staff.js controller
 *
 * @description: A set of functions called "actions" for managing `Staff`.
 */

module.exports = {

  /**
   * Retrieve staff records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.staff.fetchAll(ctx.query);
  },

  /**
   * Retrieve a staff record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.staff.fetch(ctx.params);
  },

  /**
   * Count staff records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.staff.count(ctx.query);
  },

  /**
   * Create a/an staff record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.staff.add(ctx.request.body);
  },

  /**
   * Update a/an staff record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.staff.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an staff record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.staff.remove(ctx.params);
  },

  /**
   * Add relation to a/an staff record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.staff.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an staff record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.staff.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an staff record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.staff.removeRelation(ctx.params, ctx.request.body);
  }
};
