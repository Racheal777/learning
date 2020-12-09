import React from 'react'


import '../Components/nav.css'


function Navbar () {
    return (
        <div className='nav-header'>
            
           
         <ul>

         <li><a href="/">Home</a></li>

         <li><a href="/LogIn">Login</a></li>

         <li><a href="/SignUp">SignUp</a></li>
        
         <li><a href="/Weather">Weather</a></li>
           
         </ul>
           

        </div>
    )
}

export default Navbar;
