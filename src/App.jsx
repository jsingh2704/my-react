import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("React assignment page");

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div className="container">
      <h1>Welcome to My Assignment</h1>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
