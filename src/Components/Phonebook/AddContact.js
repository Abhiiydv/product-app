import { Component } from "react";
import React from "react";

class AddContact extends Component {

    handleSubmit(event){
        event.preventDefault();
       const id = this.inputRef.current.value;
       console.log(id);
    }

    render() {

        return (
            <>
                <h3>Add Contact</h3>

                <form onSubmit={this.handleSubmit}>

                    <label>Enter id</label>
                    <input type="text" ref={this.inputRef} name="id" className="form-control" />

                    <label>Enter name</label>
                    <input type="text" ref={this.inputRef} name="name" className="form-control" />

                    <label>Enter organization</label>
                    <input type="text" ref={this.inputRef} name="org" className="form-control" />

                    <label>Enter email</label>
                    <input type="text" ref={this.inputRef} name="email" className="form-control" />

                    <button type="submit" className="btn btn-primary">Save contact</button>
                </form>


            </>
        )


    }


}
export default AddContact;