import React ,{useState} from 'react';
import './styles.css';
const App=()=>{
  const [temperatureValue,setTemperatureValue]=useState(10);
  const [temperatureColor,setTemperatureColor]=useState('cold');
  const increaseTemperature=()=>{
    if(temperatureValue===30){
      return
    }
    const newTemperature=temperatureValue+1;
   
    setTemperatureValue(newTemperature);
    if(newTemperature>=15){
      setTemperatureColor("hot");
    }
  }
  const decreaseTemperature=()=>{
    const newTemperature=temperatureValue-1;
    if(temperatureValue===0){
      return
    }
    setTemperatureValue(newTemperature);
    if(newTemperature<15){
      setTemperatureColor("cold");
    }
  }
  return(
 <div className='container'>
  <div className='display-container'>
<div className={`display ${temperatureColor}`}>{temperatureValue}°C</div>
  </div>
  <div className='buttons'>
  <button onClick={increaseTemperature}>+</button>
  <button onClick={decreaseTemperature}>-</button>
  </div>
 
 </div>

  );
};
export default App;