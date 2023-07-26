function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz App</h2>
      <p>{numQuestions} questions to test your React mastery</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start 💪
      </button>
    </div>
  );
}

export default StartScreen;
