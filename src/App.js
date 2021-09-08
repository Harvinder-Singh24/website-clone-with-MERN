import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
function App() {
  return (
    <Router>
        <Switch>
          <Route  exact path="/"><Navbar/></Route>
      </Switch>
      </Router>
  );
}

export default App;
