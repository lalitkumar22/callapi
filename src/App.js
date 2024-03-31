import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  return (
    <div className="App">
      <h1>Get API Call</h1>
      <table border="1">
        <tr>
          <td>id</td>
          <td>title </td>
          <td>body</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
