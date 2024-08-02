import { useRef, useState } from "react";

const Player = ({ initName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initName);
  const [isEditing, setIsEditing] = useState(false);
  const inputVal = useRef("Player 1");

  const handleEditClick = () => {
    // isEditing ? setIsEditing(false) : setIsEditing(true);
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let playerNameHTML = isEditing ? (
    <input type="text" required value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameHTML}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "حفظ" : "تعديل"}</button>
    </li>
  );
};

export default Player;
