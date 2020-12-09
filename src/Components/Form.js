import React,{useState} from 'react';
import{Link} from 'react-router-dom';
// import '../Nav.css'


function Form() {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState()
    const[Loggedin,setLoggedin] = useState("False");
  
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
      function handleLogout(event) {
        event.preventDefault();
        setLoggedin(false)
      }
    

    
      return (
        <div>
  
           {
            Loggedin
            ?
  
        <>
        
        <button 
        onClick={handleLogout}>Login</button>
        </>
        :
        
    
  
      <>
             
            <div className='app-form'>
                <h1>Login</h1>
                <form>
                
         <label>Email:</label><br/>
         <input type ='email' value={email} onChange= {handleEmailInput} Placeholder = 'Please enter your email'  /><br/>
         <label>Password:</label><br/>
         <input type ='text' value={password} onChange={(event) => handlePasswordInput(event)} Placeholder = ' Please enter your password'/> <br/>

            <button onClick={handleLoggedin}> Login </button><br/>
             <button>Forgot Password</button>
            <p> Don't have an account ? <br/> </p>
            <Link to='/SignUp'><p>Create Account</p></Link>
            
            </form>
            </div>
            
        </>
}
            
    </div>

        
    
    )
}

export default Form
