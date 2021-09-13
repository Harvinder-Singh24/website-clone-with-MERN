import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutus from './components/aboutus/aboutus';
// import Navbar from './components/navbar/navbar';
// import Homepage from './components/homepage/homepage';

function App() {
  return (
    <Router>
        <Switch>
          <Route  exact path="/"><Aboutus/></Route>
      </Switch>
      </Router>
  );
}

export default App;
