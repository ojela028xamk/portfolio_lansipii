import "./App.scss";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
