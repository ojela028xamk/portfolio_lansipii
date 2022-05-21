import "./App.scss";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
