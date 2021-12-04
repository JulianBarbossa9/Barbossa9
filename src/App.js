import React, {Fragment} from 'react'
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Proyects from './pages/Proyects';
import Contact from './pages/Contact';
// import HeaderSection from './components/HeaderSection';



function App() {
  return (
    <Fragment>
      <Router>

        <NavMenu />

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/proyects">
            <Proyects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
            {/* <HeaderSection/> */}
          </Route>

          
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
