import { Component } from "react";
import React from "react";

class ContactList extends Component {


    state = {
        contactlist:[
            {id:12121,number:9090909090,name:"Abhishek Yadav",org:"Infosys",email:"abhishekydv98@gmail.com"},
            {id:12122,number:8080808080,name:"Ajeet Yadav",org:"Birlasoft",email:"ajeetdv98@gmail.com"},
            {id:12123,number:6090909090,name:"Abhinav Yadav",org:"TCS",email:"abhinavydv98@gmail.com"},
            {id:12124,number:7070707070,name:"Sumit Yadav",org:"Infosys",email:"sumitydv98@gmail.com"},
            {id:12125,number:6060706060,name:"Kamal Yadav",org:"Infosys",email:"kamalydv98@gmail.com"}
        ]
    }

    render() {
 
        let rows = this.state.contactlist.map(contact=><tr>

<td>{contact.id}</td>
<td>{contact.name}</td>
<td>{contact.org}</td>
<td>{contact.email}</td>
        </tr>);


        return (

            <>
                <h3>Contact List</h3>
<table className="table table-hover">
    <thead>
    <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>ORG</th>
    <th>EMAIL</th>
</tr>
    </thead>
<tbody>
{rows}
</tbody>


</table>

            </>

        );

    }


}
export default ContactList;