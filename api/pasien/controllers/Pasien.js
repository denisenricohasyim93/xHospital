'use strict';

/**
 * Pasien.js controller
 *
 * @description: A set of functions called "actions" for managing `Pasien`.
 */

module.exports = {

  /**
   * Retrieve pasien records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.pasien.fetchAll(ctx.query);
  },

  /**
   * Retrieve a pasien record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.pasien.fetch(ctx.params);
  },

  /**
   * Count pasien records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pasien.count(ctx.query);
  },

  /**
   * Create a/an pasien record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pasien.add(ctx.request.body);
  },

  /**
   * Update a/an pasien record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pasien.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pasien record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pasien.remove(ctx.params);
  },

  /**
   * Add relation to a/an pasien record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.pasien.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an pasien record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.pasien.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an pasien record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.pasien.removeRelation(ctx.params, ctx.request.body);
  }
};
