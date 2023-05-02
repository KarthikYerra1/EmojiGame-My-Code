import './index.css'

const NavBar = props => {
  const {score, topScore, isLost} = props

  const displayScores = () => {
    if (isLost === true || score === 12) {
      return null
    }
    return (
      <div className="game-over-navbar">
        <p className="score-display">Score: {score}</p>
        <p className="score-display">Top Score: {topScore}</p>
      </div>
    )
  }

  return (
    <div className="navbar-container">
      <div className="title-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="game-logo"
        />
        <h1 className="game-title">Emoji Game</h1>
      </div>

      {displayScores()}
    </div>
  )
}

export default NavBar
