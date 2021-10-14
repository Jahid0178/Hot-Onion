import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Footer from "./components/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Hero></Hero>
              <ChooseUs></ChooseUs>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
