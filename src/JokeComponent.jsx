import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchJoke from "./thunk";

function JokeComponent() {
  const dispatch = useDispatch();
  const { loading, joke, error } = useSelector((state) => state);

  return (
    <div>
      <h1>To Fetch a Joke/Fresh Joke click on button !</h1>
      <button onClick={() => dispatch(fetchJoke())}>
        {loading ? "loading..." : "Get a Joke Now !"}
      </button>
      {error && <h3>{error}</h3>}
      <p>{joke}</p>
    </div>
  );
}

export default JokeComponent;
