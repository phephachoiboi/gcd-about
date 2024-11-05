import "./App.css";
import Header from "./components/Header";
import AboutScenario from "./components/AboutScenario";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <div className="about">
        <Header />
        <AboutScenario />
        <Footer />
      </div>
    </div>
  );
}

export default App;
