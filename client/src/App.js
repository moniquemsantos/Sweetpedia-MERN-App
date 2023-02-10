import { useEffect } from "react";
import "./App.css";

function App() {
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/recipes/all");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Sweetpedia</h1>
    </div>
  );
}

export default App;
