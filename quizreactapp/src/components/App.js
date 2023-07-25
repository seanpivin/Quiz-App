import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

import { useReducer } from "react";
const initialState = {
  questions: [],
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecived": {
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    }
    case "dataFailed": {
      return {
        ...state,
        status: "error",
      };
    }
    default: {
      throw new Error("Action type not supported");
    }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="App">
      <Header />

      <Main />
    </div>
  );
}
