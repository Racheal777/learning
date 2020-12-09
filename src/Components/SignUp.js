import React from 'react';
import{Link} from 'react-router-dom'
import '../Components/nav.css'


function SignUp (){
    
    
    return (
        <div className='container'>
            <div className = "app-form">
            
                
                <form className='log-app'>

                <h1>Register</h1>
                <p>Please fill in this form to Create an Account</p>

         
         <input type="text" Placeholder= 'First Name'/><br/>

         
         <input type="text" Placeholder= ' Last Name'/><br/>

         <select id = 'country' name = 'country'>
             <option value = 'gh'>Ghana</option>
             <option value = 'au'>Australia</option>
             <option value = 'ca'>Canada</option>
             <option value = 'uk'>United Kingdom</option>
             <option value = 'usa'>USA</option>
         </select> <br/>

         <input type ='text' Placeholder = 'Phone'/><br/>
         <input type ='text' Placeholder = 'Email'/><br/>

         
         
         <input type ='password' Placeholder = 'Password'/><br/>

         
         <input type ='password' Placeholder = 'Confirm Password'/><br/>



            <button>Register</button>

            <p> Already have An Account ? </p>

            <Link to ="/LogIn"><h2>Login</h2></Link>
            
            </form>
            
            </div>

         </div>

        
        
    )
}

export default SignUp;