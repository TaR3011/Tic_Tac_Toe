const GameOver = ({ winner, OnRestart }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} انتصر</p>}
      {!winner && <p>تعادل ، العب مره أخرى</p>}
      <p>
        <button onClick={OnRestart}>إعاده</button>
      </p>
    </div>
  );
};

export default GameOver;
