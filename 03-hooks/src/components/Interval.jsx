import React, { useEffect } from 'react'

const Interval = ({seconds,setSeconds}) => {
  
useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1); // Update state every second
    }, 1000);
  
    return () => console.log('Desmontó') // Cleanup on unmount or dependency change
  }, []); // Empty dependency array, runs once on mount
  
  
  
    return (
      <>
       <p>Elapsed time: {seconds} seconds</p>
      </>
    )
}

export default Interval