import {
  BrowserRouter, Switch, Route
} from "react-router-dom";

import './App.css';

import Header from "./components/header/header.component";
import Body from "./components/body/body.component";
import Login from "./components/login/login.component";
import Register from "./components/register/register.component";
import Secrets from "./components/secrets/secrets.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/">
            <Header />
            <Body />
          </Route>

          <Route path="/api/login">
           <Login />
          </Route>

          <Route path="/api/register">
           <Register />
          </Route>

          <Route path="/secrets">
           <Secrets />
          </Route>

        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
