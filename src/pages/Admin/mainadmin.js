import React,{Component} from 'react'
import {Button} from 'react-bootstrap'
import logo from "../../assets/images/new-logo.png";
import {Link} from 'react-router-dom'
import './mainadmin.css'
class MainAdmin extends Component{
    render(){
        return(
            <div className='containermainadmin firstdiv shadow p-3 mb-5 bg-white rounded text-center'>
             <img className='logo-admin' src={logo} alt='logo'/>   
            <h1 className='h1 my-5'>Welcome To The Admin Page</h1>
            <Link to='/admin/login'><Button className='buttonMainAdmin' color="success">LOGIN</Button>{' '}</Link>
            </div>
        )
    }
}
export default MainAdmin