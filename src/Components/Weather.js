import React,{useState} from 'react'
import axios from 'axios';
import '../Components/nav.css'

function Weather() {
    const[country, setCountry] = useState('')
    const[city, setCity] = useState('')
    const[weather,setWeather] = useState('')
    const[state,setState] = useState('')
    
    const handleCountryInput =(event) => {
        setCountry(event.target.value)
      }
      const handleCityInput =(event) => {
        setCity(event.target.value)
      }
     const handleReset=()=>{
         (document.querySelectorAll('input')).forEach(
           input => (input.value= "")  
         )
          setState({itemvalues:[{}]
          });
      }
      

   
          const getWeather=() => {
              if (country && city)
              axios.get(`http://api.weatherstack.com/current?access_key=9bde69c2ecb2bdb0a8f30fcf1fa5ab48&query=${country},${city}`)
                .then((res) => {
                    console.log(res)
                    setWeather(res.data)
                })
          }

        
      

    
    return (
        
        <div className='weather'>
            <h1 className='log-app1'>
           
            <h2>Enter the Country and City to get the current weather condition</h2>
            
            <input type='text' placeholder ='Country' onChange = {handleCountryInput}/><span/>

            <input type='text' placeholder ='City' onChange = {handleCityInput}/> <br/>
            
            <button onClick = {getWeather}> Search</button>

            <button onClick ={handleReset}>Reset</button>
            

            { weather && (
                <div className='weather-app'>
                <h1> {weather.location.country} </h1>
                <h2>{weather.location.region} </h2>
                <h2>{weather.location.name} </h2>
                <h2>{weather.location.localtime} </h2>
                <img src={weather.current.weather_icons} alt= '' width="10%" />
                <h2>Temperature:{weather.current.temperature} </h2>
                <h2>{weather.current.weather_descriptions} </h2>
               
                </div>
            )

            }

            
        </h1>          
        </div>
    )
}

export default Weather
