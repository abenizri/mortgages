import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Error from '../pages/Error'
import Navigation from './Navigation.js'

class Nav extends Component {
  render() {
    return (

      <BrowserRouter>
            <React.Fragment>
      < Navigation />
       <Switch>
         <Route className="" path="/"  component={Home} exact/>
         <Route path="/about"  component={About} />
         <Route path="/contact"  component={Contact} />
         <Route component={Error} />
       </Switch>
       </React.Fragment>  
     </BrowserRouter>
     
     
    );
  }
}

export default Nav;
