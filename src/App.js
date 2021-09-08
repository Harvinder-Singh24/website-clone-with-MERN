import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from './components/navbar/navbar';
import Homepage from './components/homepage/homepage';
function App() {
  return (
    <Router>
        <Switch>
          <Route  exact path="/"><Homepage/></Route>
      </Switch>
      </Router>
  );
}

export default App;
