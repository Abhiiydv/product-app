import React, { useEffect, useState } from 'react'






function HooksComponent () {

    const[state,setState] = useState({
        name:"abhishek",
        marks:25
       });

        useEffect(()=>{
console.log("state changed");
        })
       const handleClick=() =>{
       
        console.log("clicked");
        setState({
    

         "name":"yadav"  , 
         marks : state.marks+1
        });

       }

  return (
    <div className='container'>
      
      <h3>My name is : {state.name}</h3>
      <h3>Marks : {state.marks}</h3>
    <button className='btn btn-sm btn-dark' onClick={handleClick}>Click Me</button>
    </div>
  )



}
export default HooksComponent;

