import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Payment from "./OnlinePayment/Payment";
import Adminlogin from "./Login-components/Adminlogin";
import AdminRegister from "./Login-components/Adminregister";
import MainNavBar from "./Navbar/NavBar";
import Home from "./Pages/Home";
import UpdateHospital from "./Admin-components/UpdateHospital";
import AddHospital from "./Admin-components/AddHospital";
import ViewHospital from "./Admin-components/ViewHospital";
import AddBed from "./Admin-components/AddBed";
import ViewBeds from "./Admin-components/ViewBeds";
import Userlogin from "./Login-components/Userlogin ";
import UserRegister from "./Login-components/UserRegister ";
import UserViewHospital from "./User-components/UserViewHospital";
import UserViewBeds from "./User-components/UserViewBeds";
import Payment from "./OnlinePayment/Payment";





class App extends Component {
  render(){
    return(
      
          <Switch>
       
            <Route exact path='/' component={Home} /> 
             <Route exact path="/navbar" component={MainNavBar} />
            <Route exact path="/adminlogin" component={Adminlogin} />
            <Route path = "/adminregister" component = {AdminRegister}/>
            <Route path="/userlogin" component={Userlogin}/>
            <Route path="/userregister" component={UserRegister} />
            <Route path="/payment" component={Payment} />


            <Route path = "/addHospital" component = {AddHospital}/>
            <Route path = "/viewHospital" component = {ViewHospital}/>
            <Route path = "/updateHospital/:id" component = {UpdateHospital}/>
            <Route path = "/addBed/:hname" component = {AddBed}/>
            <Route path = "/viewBed/:hname" component = {ViewBeds}/>

            <Route path = "/userViewHospital" component = {UserViewHospital}/>
            <Route path = "/userViewBed/:hname" component = {UserViewBeds}/>

          </Switch>
    )
  }
}

export default App;
