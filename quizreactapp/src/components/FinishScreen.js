function FinishScreen({ points, maxpossiblePoints, highscore, dispatch }) {
  const precentage = (points / maxpossiblePoints) * 100;
  let emoji;
  if (precentage === 100) emoji = "🥳-🤑 You Got It!!";
  if (precentage >= 80 && precentage < 100)
    emoji = "😀 You're going neil it next time";
  if (precentage >= 60 && precentage < 80) emoji = "😐 Maybe Next Time - ";
  if (precentage >= 10 && precentage < 60) emoji = "😕 Keep Working!! - ";
  if (precentage >= 0 && precentage < 10) emoji = "😢 You Suck - ";
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
