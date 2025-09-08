import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.electron.subscribeStatistics((stats) => console.log(stats));
  }, []);

  return <>Hello, My name is David!!!</>;
}

export default App;
