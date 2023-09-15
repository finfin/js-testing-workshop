require('../__no-framework-mocks__/utils') // prime the cache
const utilsPath = require.resolve('../utils')
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils')
require.cache[utilsPath] = require.cache[mockUtilsPath]

const assert = require('assert')
const rockScissorsPaper = require('../rock-scissors-paper')
const utils = require('../utils')

const winner = rockScissorsPaper('Jonah', 'Aaron')
assert.strictEqual(winner, 'Jonah')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Jonah', 'Aaron'],
  ['Jonah', 'Aaron']
])

// cleanup
delete require.cache[utilsPath]
