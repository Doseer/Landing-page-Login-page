import React from "react"
import Login from "./Login"
import SignUp from "./SignUp"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
export default function Home() {
  return(
    <Router>
        <div>
            <Switch>
              <Route path="/login">
                  <Login/>                                
              </Route>
              <Route path="/SignUp">
                  <SignUp/>                                
              </Route>
            </Switch>
        </div>
    </Router> 
    )
}
