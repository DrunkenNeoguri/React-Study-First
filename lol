// import Button from "./button"
// import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => {setKeyword(event.target.value)};

  useEffect(() => {
    console.log("CALL THE API...")
  }, [])

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword])

  useEffect(() => {
    console.log("실행되고 있습니다.")
  }, [counter])

  return (
    <div>
      <input
        value={keyword} 
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
