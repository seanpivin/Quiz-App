import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const minites = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {minites < 10 && "0"}
      {minites}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
