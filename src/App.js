import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
