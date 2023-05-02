import './index.css'

const WinOrLoseCard = props => {
  const {score, isGameWon, onClickPlayAgain} = props

  return isGameWon ? (
    <div className="win-or-lose-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        className="w-or-l-image"
        alt="win or lose"
      />
      <div className="game-text">
        <h1 className="win-or-lose-heading">You Won</h1>
        <p className="type-of-score">Best Score</p>
        <p className="score-show">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  ) : (
    <div className="win-or-lose-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        className="w-or-l-image"
        alt="win or lose"
      />
      <div className="game-text">
        <h1 className="win-or-lose-heading">You Lose</h1>
        <p className="type-of-score">Score</p>
        <p className="score-show">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
