function Progress({ numQuestions, index, points, maxpossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numQuestions}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>
          {points}/{maxpossiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
