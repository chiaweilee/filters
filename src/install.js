import { assert } from './utils/warn'

export default {
  install (Vue, option) {
    if (option instanceof Array) {
      option.forEach(name => {
        const filter = require(`./${name}`)
        assert(typeof filter === 'function', `unexpected filter of '${name}'`)
      })
    } else {
      const filters = require('./index')
      Object.keys(filters, name => {
        Vue.filter(name, filters[name])
      })
    }
  }
}
