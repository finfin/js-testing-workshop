const assert = require('assert')
const rockScissorsPaper = require('../rock-scissors-paper')
const utils = require('../utils')

// TODO: mocking function
function fn(impl) {
  // TODO:
}

const originalGetWinner = utils.getWinner
utils.getWinner = fn((p1, p2) => p1)

const winner = rockScissorsPaper('Jonah', 'Aaron')
assert.strictEqual(winner, 'Jonah')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Jonah', 'Aaron'],
  ['Jonah', 'Aaron']
])

utils.getWinner = originalGetWinner
