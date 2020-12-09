import React,{useState} from 'react'
import axios from 'axios';
import '../Components/nav.css'

function Weather() {
    
    const[weather,setWeather] = useState('')
    const[state,setState] = useState('')
    
   
     const handleReset=()=>{
         (document.querySelectorAll('input')).forEach(
           input => (input.value= "")  
         )
          setState({itemvalues:[{}]
          });
      }
      

   
          const getWeather=() => {
             
              axios.get(`http://api.weatherstack.com/current?access_key=9bde69c2ecb2bdb0a8f30fcf1fa5ab48&query=Accra`)
                .then((res) => {
                    console.log(res)
                    setWeather(res.data)
                })
          }

        
      

    
    return (
        <div className='weather'>
            <h1>Enter the Country and City to get the current weather condition</h1>
            

            { weather && (
                <div className='weather-app'>
                <h1> {weather.location.country} </h1>
                <h3>{weather.location.region} </h3>
                <h3>{weather.location.name} </h3>
                <h2>{weather.location.localtime} </h2>
                <img src={weather.current.weather_icons} alt= '' width="10%" />
                <h2>{weather.current.temperature} </h2>
                <h2>{weather.current.weather_descriptions} </h2>
               
                </div>
            )

            }

            
                        
        </div>
    )
}

export default Weather
