import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
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
            I am homepage
          </Route>
        </Switch>
      </Router>

      {/*  tinder cards*/}
      {/* buttons blow tinder cards */}
    </div>
  );
}

export default App;
