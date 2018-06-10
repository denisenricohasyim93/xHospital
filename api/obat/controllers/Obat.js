'use strict';

/**
 * Obat.js controller
 *
 * @description: A set of functions called "actions" for managing `Obat`.
 */

module.exports = {

  /**
   * Retrieve obat records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.obat.fetchAll(ctx.query);
  },

  /**
   * Retrieve a obat record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.obat.fetch(ctx.params);
  },

  /**
   * Count obat records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.obat.count(ctx.query);
  },

  /**
   * Create a/an obat record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.obat.add(ctx.request.body);
  },

  /**
   * Update a/an obat record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.obat.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an obat record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.obat.remove(ctx.params);
  },

  /**
   * Add relation to a/an obat record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.obat.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an obat record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.obat.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an obat record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.obat.removeRelation(ctx.params, ctx.request.body);
  }
};
