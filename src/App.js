import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./routes/protected_route";
import './App.css';
import Home from "./components/home";
import ProtectedApp from "./components/protected_app";
import LoginForm from "./components/login";



export const StoreContext = React.createContext();

class App extends React.Component {

  state = {
    get: (key) => {
      return this.state[key];
    },
    set: (key, value) => {
      const state = this.state;
      state[key] = value;
      this.setState(state);
    },
    remove: key => {
      const state = this.state;
      delete state[key];
      this.setState(state);
    }
  }

  render() {
    return (
      <StoreContext.Provider value={this.state}>
      <Router>
         <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route exact path="/login" component={LoginForm}>
            </Route>
            <ProtectedRoute path="/table" component={ProtectedApp}>
            </ProtectedRoute>
          </Switch>
      </Router>
      </StoreContext.Provider>
    );
  }
}

export default App;
