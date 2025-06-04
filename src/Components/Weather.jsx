import React, { useEffect, useState } from 'react'

function Weather() {
    const[city, setCity]=useState(null)
    const [weatherinfo, setWeatherinfo]=useState([])
    const[location,setLocation]=useState()
    useEffect(()=>{
    
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((posistion)=>{
            const{latitude,longitude}=posistion.coords
            setLocation({latitude,longitude})
          })
        }else{
          console.log('location not found')
        }
      },[])
    
       useEffect (()=>{ 
        if(location){
          const {latitude,longitude}=location
        

       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4ba93f80698c17725bf07ea4255d1089&units=metric`)
       .then(res=>res.json())
       // .then(json=>console.log(json))
      .then(data=>setWeatherinfo(data))
       }
        },[location])
     return (
      <>
      {location?(
        weatherinfo && weatherinfo.main?(
          <>
          <h3>{Math.round(weatherinfo.main.temp)}°C</h3>
          <h3>{weatherinfo.name} </h3>
          
          </>
        ):(
          <h3>no weather data</h3>
        )
      ):(
        <h3>
          location loading
        </h3>
      )
           }
      
        
      
    
    
    
      </>
  ) 
}

export default Weather;
