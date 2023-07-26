function FinishScreen({ points, maxpossiblePoints, highscore, dispatch }) {
  const precentage = (points / maxpossiblePoints) * 100;
  let emoji;
  if (precentage === 100) emoji = "🥳";
  if (precentage >= 80 && precentage < 100) emoji = "😀";
  if (precentage >= 60 && precentage < 80) emoji = "😐";
  if (precentage >= 10 && precentage < 60) emoji = "😕";
  if (precentage === 0) emoji = "😢";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You Scored: <strong>{points}</strong> out of
        <strong>{maxpossiblePoints}</strong> ({Math.ceil(precentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
