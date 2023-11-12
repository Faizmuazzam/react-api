import { useState } from "react";
import "./App.css";
import Movie from "./pages/Movie";
import Router from "./routes/Index";


function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative">
      <Router />
    </main>
  );
}

export default App;
