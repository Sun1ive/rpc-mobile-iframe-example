import React, { useEffect } from "react";
import { useClient } from "./hook";
import "./App.css";

function App() {
  const client = useClient();

  useEffect(() => {
    console.log(client);

    if (client) {
      setTimeout(() => {
        client
          .get("https://jsonplaceholder.typicode.com/todos/1")
          .then(console.log)
          .catch(console.error);
      }, 1000);
    }
  }, [client]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Child</h1>
      </header>
    </div>
  );
}

export default App;
