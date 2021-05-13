import React, { Component } from 'react'
import {
    Container,
    
    CardGroup,
  
} from 'reactstrap'
import './custom.css'
import { ProductDisplayCard } from '../../molecules/Product/ProductDisplayCard'
import C from '../../../resource/values'
import axios from "axios";
import store from "../../../store";
export default class DisplayProductsOfCategory extends Component {
  
constructor(props){
    super()
    this.state={
user:"",
doc:false
    }
}

componentWillMount=async()=>{
   let users = await axios.get(C.SERVER_CALL +"/auth/profile")
        console.log(users.data.isDocVerified)
    
        this.setState({user:users.data._id,
            doc:users.data.isDocVerified
        })
   
     
    
}

showPrices() {
    
    if (store.getState().auth.isAuthenticated == false) {
      return "Please Sign in.";
    } else if (store.getState().auth.user.isDocVerified == false) {
      return "Please verify your documents first.";
    } 
  }

    render() {

        return (
          
            <div>
               
                        <Container>
                            <CardGroup style={{ justifyContent: 'space-evenly' }}>
                                {this.props.data.map(i => i.seller==this.state.user?"":<ProductDisplayCard item={i} doc={this.state.doc} sign={this.showPrices()} />)}
                            </CardGroup>
                        </Container>
                     
            </div>

        )
    }
}
