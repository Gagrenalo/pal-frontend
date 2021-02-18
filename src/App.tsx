import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import {NavbarComponent} from "../src/Components/Navigation/NavbarComponent";
import {RegisterFormComponent} from "../src/Components/Registration/RegisterFormComponent";
import {fetchUser} from "../src/UserConnection/User"
import {UserContext} from "../src/Context/UserContext";
import { LoginComponent } from './Components/Login/LoginComponent';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Counter} from "./Components/Navigation/Counter";

function App(): JSX.Element {

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [user, setUser] = useState(fetchUser())
  
  return (
    <BrowserRouter>
      <div className="app">
        <UserContext.Provider value={{user, setUser}}>
          <header className="mainHeader">
            <NavbarComponent id="nav-containerId" className="nav-container"/>
          </header>
     
          <div className="container">
            <Switch>
              {/* <Route exact path='/home' component={HomeComponent} /> */}
              <Route exact path='/register' component={RegisterFormComponent} />
              <Route exact path='/login' component={LoginComponent} />
              <Route exact path='/counter' component={Counter} />
            </Switch>
          </div>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  )
}
export default App;
