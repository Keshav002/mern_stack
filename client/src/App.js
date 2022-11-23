import React, { createContext, useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import './App.css'
import ErrorPage from './components/ErrorPage';
import NewsApp from './newscomponents/NewsApp';
import MoviesApp from './moviescomponents/src/MoviesApp';
import 'bootstrap/dist/css/bootstrap.css';
import { initialState, reducer } from './reducer/UseReducer';

  //context api
  export const UserContext = createContext();

const Routing = () => {
  return(
    <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
       <Navigation />
        <About />
      </Route>
      <Route exact path="/contact">
       <Navigation />
        <Contact />
      </Route>
      <Route exact path="/login">
       <Navigation />
        <Login exact transform= "unset" />
      </Route>
      <Route exact path="/signup">
       <Navigation />
        <Signup />
      </Route>
      <Route path="/news">
        <NewsApp />
      </Route>
      <Route path="/reviews">
        <MoviesApp />
      </Route>
      <Route exact path="/logout">
       <Navigation />
        <Logout />
      </Route>

      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  </Router>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (

    <>
    <UserContext.Provider value={{state, dispatch}}>
      <Routing />
      </UserContext.Provider>
    </>
  )
}

export default App
