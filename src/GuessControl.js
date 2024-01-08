import React, { useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  }
  const onSubmitGuess = (e) => {
    e.preventDefault();
    onGuess(Number(currentGuess));
    setCurrentGuess("");
  }
  return (
    <form onSubmit={onSubmitGuess}>
      <div>
        <input
          type="number"
          value={currentGuess}
          onChange={handleInputChange}
        />
        <Button>Submit Guess</Button>
      </div>
    </form>
  );
}
export default GuessControl;
