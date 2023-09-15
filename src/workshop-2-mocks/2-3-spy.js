const assert = require('assert')
const rockScissorsPaper = require('../rock-scissors-paper')
const utils = require('../utils')

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = {calls: []}
  mockFn.mockImplementation = newImpl => (impl = newImpl)
  return mockFn
}

function spyOn(obj, prop) {
  const originalValue = obj[prop]
  obj[prop] = fn()
  obj[prop].mockRestore = () => (obj[prop] = originalValue)
}

spyOn(utils, 'getWinner')
utils.getWinner.mockImplementation((p1, p2) => p1)

const winner = rockScissorsPaper('Jonah', 'Aaron')
assert.strictEqual(winner, 'Jonah')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Jonah', 'Aaron'],
  ['Jonah', 'Aaron']
])

// cleanup
utils.getWinner.mockRestore()
