import React, { Component } from "react";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

class Phonebook extends Component{

    
    render(){

        return(
            <>
            <h3>Phonebook</h3>
            <AddContact></AddContact>
            <ContactList></ContactList>
            </>
        );
       

    }

}
export default Phonebook;