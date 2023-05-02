import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClicked} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    emojiClicked(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-button">
        <img
          src={emojiUrl}
          className="emoji-image"
          alt={emojiName}
          onClick={onClickEmoji}
        />
      </button>
    </li>
  )
}

export default EmojiCard
