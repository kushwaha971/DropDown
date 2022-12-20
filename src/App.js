import "./styles.css";
import { useState } from "react";

export default function App() {
  const [val, setVal] = useState("");
  const [arr, setArr] = useState([]);
  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleSubmit = (e) => {
    setArr(() => [...arr, val]);
    console.log(arr);
    e.preventDefault();
  };
  return (
    <div className="App">
      <input type="text" vname={val} onChange={handleChange} />
      <br />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Click
      </button>
      <br />
      <br />
      <select>
        {arr.map((element, indx) => (
          <option>{element}</option>
        ))}
      </select>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
