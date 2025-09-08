import "./App.css";

function App() {
  //@ts-ignore
  window.electron.getStaticData();

  return <>Hello, My name is David!!!</>;
}

export default App;
