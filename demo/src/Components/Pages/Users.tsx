import React, { Component, MouseEvent } from "react";
import { NavLink, Link } from "react-router-dom";
import history from "../Layout/History";



interface IUserProps{
}

interface IUserState{

}

export default class Users extends Component<IUserProps,IUserState>{

    constructor(props:IUserProps){
        super(props);
        
    }

    private HandleClick=(event:MouseEvent)=>{
        console.log("Click");
        history.push('/home')
        
        //event.preventDefault();
    }

    

    public render(){
        return (
            <React.Fragment>
                <div>
                    <h3>Use Page</h3>
                    <button className="btn btn-primary" onClick={this.HandleClick}>Home</button>
                    <Link to={"/home"} className="btn btn-danger">Home</Link>
                    <NavLink to={"/home"} className="btn btn-secondary">Home</NavLink>
                </div>
            </React.Fragment>
        )
    }
}