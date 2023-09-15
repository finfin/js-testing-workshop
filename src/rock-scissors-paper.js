const utils = require('./utils')

function rockScissorsPaper(player1, player2) {
  const numberToWin = 2
  let player1Wins = 0
  let player2Wins = 0
  while (player1Wins < numberToWin && player2Wins < numberToWin) {
    const winner = utils.getWinner(player1, player2)
    if (winner === player1) {
      player1Wins++
    } else if (winner === player2) {
      player2Wins++
    }
  }

  // log who won
  const finalWinner = player1Wins > player2Wins ? player1 : player2
  console.log(`Final winner: ${finalWinner} ${player1Wins}:${player2Wins}`)

  return player1Wins > player2Wins ? player1 : player2
}

module.exports = rockScissorsPaper
