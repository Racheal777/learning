import React from 'react'
import logo from '../images/bora.jpg'
import photo from '../images/paris.jpg'
import pic from '../images/island.jpg'
import pics from '../images/singa.jpg'
import image from '../images/buble.jpg'
import '../Components/nav.css'







function Home() {
  return(
    <div>
      <h1 className='h1'>
      <h1>Explore With Us</h1> </h1>
      <h2>Sign up and Lets plan your dream vacation with you, not leaving out the Weather condition of the place you are going.</h2>
     

  <div class="polaroid">
  <a target="_blank" href={logo}>
    <img src={logo}alt="bora" style={{width:"100%"}} />
    <div class="container">
    <p>Bora Bora</p>
    </div>
    </a>
     </div>
     

  
  <div class="polaroid">
  <a target="_blank" href={photo}>
    <img src={photo} alt="Paris" style={{width:"100%"}}/>
    <div class="container">
    <p>Paris</p>
    </div>
    </a>
    </div>
    <h1> Dream Destination</h1>



    <div class="polaroid">
    <a target="_blank" href={pic}>
    <img src={pic} alt="Singa" style={{width:"100%",float:"right"}} />
    <div class="container">
    <p>Phillipines</p>
    </div>
    </a>
    </div>

    <div class="polaroid">
    <a target="_blank" href={pics}>
    <img src={pics} alt="Singa" style={{width:"100%",float:"right"}} />
    <div class="container">
    <p>Singapore</p>
    </div>
    </a>
    </div>

    <div class="polaroid">
    <a target="_blank" href={image}>
    <img src={image} alt="buble" style={{width:"100%",float:"left"}} />
    <div class="container">
    <p>Bubble</p>
    </div>
    </a>
    </div>
          {/* <h2 className='box'>
         <h2>Sign up fro update</h2>
         <input type ='text' Placeholder = 'Please enter your email'/><br/>
          <button>SignUp</button>
          </h2> */}
    </div>
  )
}
    
           
     

export default Home
