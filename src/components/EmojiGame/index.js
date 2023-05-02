/* 
Quick Tip 
- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}
*/
import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    isLost: false,
    emojisClickCount: [],
  }

  onClickPlayAgain = () => {
    this.setState({
      isLost: false,
      emojisClickCount: [],
    })
  }

  showScore = () => {
    const {emojisList} = this.props
    const {emojisClickCount} = this.state
    const isGameWon = emojisClickCount.length === emojisList.length

    return (
      <WinOrLoseCard
        isGameWon={isGameWon}
        onClickPlayAgain={this.onClickPlayAgain}
        score={emojisClickCount.length}
      />
    )
  }

  finishGame = score => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (score > topScore) {
      newTopScore = score
    }
    this.setState({
      topScore: newTopScore,
      isLost: true,
    })
  }

  emojiClicked = id => {
    const {emojisClickCount} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = emojisClickCount.includes(id)
    const clickedEmojisCount = emojisClickCount.length

    if (isEmojiPresent) {
      this.finishGame(clickedEmojisCount)
    } else {
      if (emojisList.length - 1 === emojisClickCount) {
        this.finishGame(emojisList.length)
      }
      this.setState(prevState => ({
        emojisClickCount: [...prevState.emojisClickCount, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  showEmojis = () => {
    const emojisShuffledList = this.shuffledEmojisList()

    return (
      <ul className="emojis-container">
        {emojisShuffledList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            emojiClicked={this.emojiClicked}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, isLost, emojisClickCount} = this.state

    return (
      <div className="bg-container">
        <NavBar
          score={emojisClickCount.length}
          topScore={topScore}
          isLost={isLost}
        />
        <div className="emoji-game-container">
          {isLost ? this.showScore() : this.showEmojis()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
