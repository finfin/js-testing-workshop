const rockScissorsPaper = require('../rock-scissors-paper')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = rockScissorsPaper('Jonah', 'Aaron')
  expect(winner).toBe('Jonah')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Jonah', 'Aaron'],
    ['Jonah', 'Aaron']
  ])
  // could also do these assertions:
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    'Jonah',
    'Aaron'
  )
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    'Jonah',
    'Aaron'
  )

  // cleanup
  utils.getWinner = originalGetWinner
})
