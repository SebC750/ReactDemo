
import React, {Suspense, lazy} from "react";
import './style.css'
const Form = lazy(() => import('./form'))
const Source = lazy(() => import('./sources'))
class App extends React.Component {
  render(){
  return (
   
    <div className="App">
      <title> Frogs </title> 
   
         
    
         <h1 id = "title"> What are Frogs? </h1> 
         <Suspense fallback = {'Loading...Please wait.'}>
        <Form/> 
        <Source/>
         </Suspense>
    </div>
  );
}
}
export default App;
