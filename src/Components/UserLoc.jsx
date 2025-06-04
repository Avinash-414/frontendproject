import React, { useEffect, useState } from 'react'

function UserLoc() {
    const[userLocation ,setUserLocation]=useState()
    
    useEffect(()=>{
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((posistion)=>{
                const{latitude,longitude}=posistion.coords
                setUserLocation(latitude,longitude)
            })
        }else {
            console.error('geo location is not supported ')
        }
        
      
    }, [])


  return (
    <div>
        
      {userLocation?(
      <h3>{userLocation.latitude}</h3>):
      (<h3>not found    </h3>)}
    </div>
  )
}

export default UserLoc
