import React from 'react';
import './style.css';
import frog from './images/frog.jpg'
import frog2 from './images/frog2.jpg'
import num from './calc'
class Form extends React.Component 
{
    
    render()
    {
    return (
        <div>
        <p> Frogs are amphibious creatures that usually reside within ponds, streams or generally more warmer weather. We usually think of them as green but they can come in many different colors too! Often times, they tend to sit in a squatting position, sometimes to brace to jump onto another place. Frogs tend to eat insects and some are even poisonous so be careful if you approach one!!!</p>
        <p> How many species of frogs exist today? </p>
        <button onClick = {num}> Show </button>
        <p> Answer: </p> 
        <div id = "num"> </div>
        
        <img src = {frog} height = "400" width = "400"/>
        <img src = {frog2} height = "400" width = "400"/>
        </div>
    );
  }
}

export default Form; 