import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Footer from "./components/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
          </Switch>
        </Router>
        <NavBar></NavBar>
        <Hero></Hero>
        <ChooseUs></ChooseUs>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
