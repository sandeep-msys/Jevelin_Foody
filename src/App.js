import "./App.css";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Customer from "./components/Customer/Customer";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Reservation from "./components/Reservation/Reservation";
import Team from "./components/Team/Team";
import Welcome from "./components/Welcome/Welcome";
import Home from "./components/Home/Home";
import RightFixNav from "./components/RightFixNav/RightFixNav";
import BottomFixNav from "./components/BottomFixNav/BottomFixNav";

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <RightFixNav />
      <BottomFixNav />
      <Home />
      <About />
      <Welcome />
      <Team />
      <Menu />
      <Customer />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
