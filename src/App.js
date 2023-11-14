import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Auctions from "./components/Auctions";
import { Discover } from "./components/Discover";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <Auctions />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;
