const rockScissorsPaper = require('../rock-scissors-paper')
const utils = require('../utils')

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation((p1, p2) => p1)

  const winner = rockScissorsPaper('Jonah', 'Aaron')
  expect(winner).toBe('Jonah')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Jonah', 'Aaron'],
    ['Jonah', 'Aaron']
  ])

  // cleanup
  utils.getWinner.mockRestore()
})
