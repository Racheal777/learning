import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from'./Components/Navbar'
import Home from'./Components/Home'
import Weather from'./Components/Weather'
import SignUp from'./Components/SignUp'
import LogIn from'./Components/LogIn'




function App() {
    return (
        <div>
            <Router>
     
      <Navbar/>
      <Switch>
      <Route exact path = "/" component= {Home} />

      <Route path = "/LogIn" component= {LogIn} />

      
      <Route path = "/SignUp" component= {SignUp} />

      
      
    
      <Route path = "/Weather" component= {Weather} />


      </Switch>
      </Router>
            
        </div>
    )
}

export default App;
