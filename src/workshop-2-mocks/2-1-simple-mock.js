const assert = require('assert')
const rockScissorsPaper = require('../rock-scissors-paper')
const utils = require('../utils')

// TODO: mock the getWinner function


const winner = rockScissorsPaper('Jonah', 'Aaron')
assert.strictEqual(winner, 'Aaron')

// TODO: cleanup
