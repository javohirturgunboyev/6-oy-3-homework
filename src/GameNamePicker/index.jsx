import React, { useState } from 'react';
import './GameNamePicker.css';

function GameNamePicker() {
  const games = [
    'The Legend of Zelda: Breath of the Wild',
    'Super Mario Odyssey',
    'Minecraft',
    'Fortnite',
    'The Witcher 3: Wild Hunt',
    'Red Dead Redemption 2',
    'God of War',
    'Overwatch',
    'Apex Legends',
    'Cyberpunk 2077'
  ];

  const [selectedGame, setSelectedGame] = useState('');

  const pickRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * games.length);
    setSelectedGame(games[randomIndex]);
  };

  return (
    <div className="game-picker-container">
      <h2 className="game-picker-title">O'yin Nomi Tanlovchi</h2>
      <button className="pick-game-button" onClick={pickRandomGame}>
        Pick Game
      </button>
      {selectedGame && <p className="selected-game">{selectedGame}</p>}
    </div>
  );
}

export default GameNamePicker;
