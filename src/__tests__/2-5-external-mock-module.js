const rockScissorsPaper = require('../rock-scissors-paper')
const utilsMock = require('../utils')

jest.mock('../utils')

test('returns winner', () => {
  const winner = rockScissorsPaper('Jonah', 'Aaron')
  expect(winner).toBe('Jonah')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['Jonah', 'Aaron'],
    ['Jonah', 'Aaron']
  ])

  // cleanup
  utilsMock.getWinner.mockReset()
})
