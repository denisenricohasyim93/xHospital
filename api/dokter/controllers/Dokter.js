'use strict';

/**
 * Dokter.js controller
 *
 * @description: A set of functions called "actions" for managing `Dokter`.
 */

module.exports = {

  /**
   * Retrieve dokter records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.dokter.fetchAll(ctx.query);
  },

  /**
   * Retrieve a dokter record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.dokter.fetch(ctx.params);
  },

  /**
   * Count dokter records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.dokter.count(ctx.query);
  },

  /**
   * Create a/an dokter record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.dokter.add(ctx.request.body);
  },

  /**
   * Update a/an dokter record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.dokter.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an dokter record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.dokter.remove(ctx.params);
  },

  /**
   * Add relation to a/an dokter record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.dokter.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an dokter record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.dokter.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an dokter record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.dokter.removeRelation(ctx.params, ctx.request.body);
  }
};
