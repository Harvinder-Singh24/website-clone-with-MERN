import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutus from './components/aboutus/aboutus';
import Contactus from './components/contactus/contactus';
import Homepage from './components/homepage/homepage';
import DedicatedHiring from './components/dedicatedhiring/hiring';
function App() {
  return (
    <Router>
        <Switch>
          <Route  exact path="/"><Homepage/></Route>
          <Route  exact path="/aboutus"><Aboutus/></Route>
          <Route  exact path="/contactus"><Contactus /></Route>
          <Route  exact path="/dedicatedHiring"><DedicatedHiring /></Route>
      </Switch>
      </Router>
  );
}

export default App;
