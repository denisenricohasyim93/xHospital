'use strict';

/**
 * Dokter.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

// Strapi utilities.
const utils = require('strapi-bookshelf/lib/utils/');

module.exports = {

  /**
   * Promise to fetch all dokters.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('dokter', params);
    // Select field to populate.
    const populate = Dokter.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Dokter.query(function(qb) {
      _.forEach(filters.where, (where, key) => {
        if (_.isArray(where.value)) {
          for (const value in where.value) {
            qb[value ? 'where' : 'orWhere'](key, where.symbol, where.value[value])
          }
        } else {
          qb.where(key, where.symbol, where.value);
        }
      });

      if (filters.sort) {
        qb.orderBy(filters.sort.key, filters.sort.order);
      }

      qb.offset(filters.start);
      qb.limit(filters.limit);
    }).fetchAll({
      withRelated: populate
    });
  },

  /**
   * Promise to fetch a/an dokter.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Dokter.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Dokter.forge(_.pick(params, 'id')).fetch({
      withRelated: populate
    });
  },

  /**
   * Promise to count a/an dokter.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('dokter', params);

    return Dokter.query(function(qb) {
      _.forEach(filters.where, (where, key) => {
        if (_.isArray(where.value)) {
          for (const value in where.value) {
            qb[value ? 'where' : 'orWhere'](key, where.symbol, where.value[value])
          }
        } else {
          qb.where(key, where.symbol, where.value);
        }
      });
    }).count();
  },

  /**
   * Promise to add a/an dokter.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Dokter.associations.map(ast => ast.alias));
    const data = _.omit(values, Dokter.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Dokter.forge(data).save();

    // Create relational data and return the entry.
    return Dokter.updateRelations({ id: entry.id , values: relations });
  },

  /**
   * Promise to edit a/an dokter.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Dokter.associations.map(ast => ast.alias));
    const data = _.omit(values, Dokter.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = Dokter.forge(params).save(data, { path: true });

    // Create relational data and return the entry.
    return Dokter.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an dokter.
   *
   * @return {Promise}
   */

  remove: async (params) => {
    await Promise.all(
      Dokter.associations.map(association =>
        Dokter.forge(params)[association.alias]().detach()
      )
    );

    return Dokter.forge(params).destroy();
  }
};
