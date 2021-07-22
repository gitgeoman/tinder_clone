import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
function App() {
  return (
    <div className="App">
      <h1>lets build Tinder clond</h1>
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">I am chat</Route>
        </Switch>
        <Switch>
          <Route exact strict path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>

      {/*  tinder cards*/}
      {/* buttons blow tinder cards */}
    </div>
  );
}

export default App;
