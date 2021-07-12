import {Component} from "react";

import {
    //BrowserRouter as Router,
    Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from "./Header";
import Home from "../Pages/Home";
import Users from "../Pages/Users";
import history from "./History";



export default class Root extends Component{


    public render(){
        return (
            <Router history={history}>
                
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <Header></Header>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <Switch>
                                
                                <Route exact path="/" component={Home}>
                                    <Home></Home>
                                </Route>
                                <Route exact path="/home" component={Home}>
                                    <Home></Home>
                                </Route>
                                <Route exact path="/users" component={Users}>
                                    <Users></Users>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}