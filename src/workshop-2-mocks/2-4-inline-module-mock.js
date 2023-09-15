function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = {calls: []}
  return mockFn
}

const utilsPath = require.resolve('../utils')
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p1)
  }
}

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
