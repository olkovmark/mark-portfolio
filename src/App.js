import "./css/App.css";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import { FooterBar } from "./components/FooterBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <FooterBar />
    </div>
  );
}

export default App;
