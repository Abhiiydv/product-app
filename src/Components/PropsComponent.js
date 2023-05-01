import React from "react";


const PropsComponent = (props) =>{

    return(
        <>
         <h3>Hello, {props.name}</h3>
         <h3>My age is {props.age}</h3>
        </>
       
    )

}
export default PropsComponent;