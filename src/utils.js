// 這是一個第三方的機器學習服務
// 這個服務有一個我們無法控制的測試環境
// 並且是不可靠的，所以我們想要在測試中模擬它
function getWinner(player1, player2) {
  const winningNumber = Math.random()
  
  if (winningNumber < 1 / 3 ) {
    console.log(`${player1} wins`)
    return player1
  } else if (winningNumber < 2 / 3) {
    console.log(`${player2} wins`)
    return player2
  } else {
    // log the tie
    console.log('tie')
    return null
  }
}

module.exports = {getWinner}
