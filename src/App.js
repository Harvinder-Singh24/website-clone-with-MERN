import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutus from './components/aboutus/aboutus';
import Contactus from './components/contactus/contactus';
import Homepage from './components/homepage/homepage';
import DedicatedHiring from './components/dedicatedhiring/hiring';
import News from './components/InsightandNews/news';
import PressRelease from './components/InsightandNews/pressrelease';
import Career from './components/Career/career';
import Angular from './components/studio/webdevlopment/angular';
import ReactJs from './components/studio/webdevlopment/react';
import FullStack from './components/studio/webdevlopment/fullstack';

function App() {
  return (
    <Router>
        <Switch>
          <Route  exact path="/"><Homepage/></Route>
          <Route  exact path="/aboutus"><Aboutus/></Route>
          <Route  exact path="/contactus"><Contactus /></Route>
          <Route  exact path="/dedicatedHiring"><DedicatedHiring /></Route>
          <Route  exact path="/news"><News /></Route>
          <Route  exact path="/pressrelease"><PressRelease /></Route>
          <Route  exact path="/career"><Career /></Route>
          <Route  exact path="/angular-link"><Angular /></Route>
          <Route  exact path="/react-link"><ReactJs /></Route>
          <Route  exact path="/full-stack"><FullStack /></Route>

      </Switch>
      </Router>
  );
}

export default App;
