import { useState } from 'react';

export default function MissingKey() {
  const [emojis, setEmojis] = useState([
    { id: 1, emoji: '😁' },
    { id: 2, emoji: '😘' },
    { id: 3, emoji: '🤪' },
    { id: 4, emoji: '🤗' },
  ]);

  const deleteEmoji = (emojiId) => {
    const updatedEmojis = emojis.filter((emoji) => emoji.id !== emojiId);
    setEmojis(updatedEmojis);
  };
    const emojiList = emojis.map((emojis) => {
      return(
      <li className='emoji-item' key={emojis.id}>
        {emojis.emoji}
        <select>
          <option>Bad</option>
          <option>Okay</option>
          <option>Good</option>
        </select>
        <button onClick={() => deleteEmoji(emojis.id)}>Delete</button>
        </li>
      )
    })
  return (
    <div>
      <h2>Rate these emojis!</h2>
      {emojiList}
    </div>
  );
}
