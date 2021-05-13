import React, { Component } from 'react'
import {
    ListGroup,
    ListGroupItem,
    Button,
    ButtonGroup
} from 'reactstrap'
import './custom.css'
import axios from "axios";

export default class ProductDetails extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
    }

    addToCart = () => {

    }

    render() {
        return (
            <div className="my-product-details">
                <h3>Notebooks</h3>
                <ListGroup>
                    <ListGroupItem>Price: INR 200</ListGroupItem>
                    <ListGroupItem>Quantity: 10</ListGroupItem>
                    <ListGroupItem>Supplier: King Enterprises</ListGroupItem>
                    <ButtonGroup className="_btn-grp">
                        <Button>Add to cart</Button>
                        <Button>Save</Button>
                    </ButtonGroup>
                </ListGroup>
            </div>
        )
    }
}
