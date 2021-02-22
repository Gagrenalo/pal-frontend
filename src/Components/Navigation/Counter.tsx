import { useState} from "react"
import React from "react"

export const Counter = function() : JSX.Element {
   
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hours, setHours] = useState(0);
  const [run, setRun] = useState(true);

  function reset():void {
    setSeconds(0)
    setMinute(0)
    setHours(0)
  }

  function toggle():void{
    setRun(!run)
  }

  
  React.useEffect(() =>{    
    const Interval = setInterval(() =>{
      if(run){
      setSeconds(seconds + 1)
     if(seconds === 59) {
       setSeconds(0)
       setMinute(minute + 1)
     }else if(minute === 59){
       setMinute(0)
       setHours(hours + 1)
     } 
     } },1000);
  

  return ():void => {
     clearInterval(Interval);
   }
  },)


    return (
        <div className = "align-center">
            <h3>
               {hours}:{minute}:{seconds}
            </h3> 
            <button onClick ={reset}>
              Reset
            </button>
            <button onClick = {toggle}>
            {run ? 'Stop' : 'Start'}
            </button>
        </div>

    )
  }
