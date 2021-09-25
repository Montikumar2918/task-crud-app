import {BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom"; 
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import NotFound from "./NotFound";
import {Tooltip} from "@material-ui/core";

import  "./App.css";






function App() {
  return (
    
    <BrowserRouter>
    <div className="navlink" >
    <Tooltip title="Home">
      <NavLink  bg="primary" variant="dark" exact activeStyle={{ color: 'red' }} activeClassName="active" to="/">
        Home
        </NavLink>
        </Tooltip>
        <Tooltip title="About">
      <NavLink bg="primary" variant="dark" exact activeStyle={{ color: 'red' }} activeClassName="active" to="/about">
        About
        </NavLink>
        </Tooltip>
        <Tooltip title="Posts">
      <NavLink bg="primary" variant="dark" exact  activeStyle={{ color: 'red' }}activeClassName="active" to="/posts">
        Posts
        </NavLink>
        </Tooltip>
        
        
      </div>
      
    <Switch>
    <Route path="/" exact component={Home}  />
    <Route path="/about" component={About}  />
    <Route path="/posts" component={Posts}  />
   

    <Route path="/home"> 
    <Redirect to="/"  />
    </Route>
    <Route path="*" component={NotFound}  />
    </Switch>
   </BrowserRouter>

  );
}
export default App;