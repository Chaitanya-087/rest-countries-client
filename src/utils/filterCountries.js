/**
 * @typedef {Object} Country
 * @property {Object} name
 * @property {string} name.common
 * @property {number} population
 */

/**
 * @typedef {Object} Features
 * @property {Country[]} countries
 * @property {Function} filter
 * @property {Function} sortBy
 */

/**
 * @param {Country[]} countries
 * @returns {Features}
 */
export class Features {

  constructor(countries) {
    this.countries = countries
  }
  /**
 * @param {string} searchTerm
 * @returns {Features}
 */

  filter(searchTerm) {
    if (!searchTerm.length) return this;
    searchTerm = searchTerm.trim().toLowerCase()
    this.countries = this.countries.filter((country) => country?.name?.common.toLowerCase().startsWith(searchTerm))
    return this
  }
  /**
   * @param {string} sortType
   * @returns {Features}
   */
  sortBy(sortType) {
    if (!sortType.length) return this;
    const sortFuntions = {
      'name+1': (a, b) => a?.name.common.localeCompare(b?.name.common),
      'name-1': (a, b) => b?.name.common.localeCompare(a?.name.common),
      'population': (a, b) => b?.population - a?.population
    }
    const sortFunction = sortFuntions[sortType];
    if (sortFunction) {
      this.countries?.sort(sortFunction)
    }
    return this
  }
}

