import React from 'react'

import { useState } from 'react'
import{Link} from 'react-router-dom'
import Weather from'./Weather'

import '../Components/nav.css'





function Login() {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState()
    const[Loggedin,setLoggedin] = useState(false);
  
    const handleEmailInput =(event) => {
      setEmail(event.target.value)
    }
    const handlePasswordInput =(event) => {
      setPassword(event.target.value)
    }

    function handleLoggedin(event) {
        event.preventDefault();
        if (email === "kuranchieracheal@gmail.com"&& password === "123456")
          setLoggedin(true)
        
      }
      
    

    return (
      
        
       
        <div>
          {Loggedin
            
            ?

            <>
            <Weather/>

            </> 
            :
            <h1 className='Home'>
           
           
            
             

            <form className='log-app'>
                
            <p>Happy to see you again, please login to your account</p>

                <input type ='email' value={email} onChange= {handleEmailInput} placeholder = '  Email'  /> <span/> <br/>
                
                <input type ='password' value={password} onChange={(event) => handlePasswordInput(event)} placeholder = ' Password'/><span/> <br/>
       
                   <button onClick={handleLoggedin}> Login </button><br/>
                   
                   
                   <p> Don't have an Account ? <br/> </p>
                   <Link to='/SignUp'><p>Register</p></Link>
                   
                   </form>



           </h1>
           
          }
         
        </div>
    )   
}

export default Login
