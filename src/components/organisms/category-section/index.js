import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { CategoryDisplayCard } from "../../molecules/Category/CategoryDisplayCard";
import { useState, useEffect } from "react";
import axios from "axios";
import C from "../../../resource/values";

export default class CategorySection extends Component {
    state = {
        items1: [],
        items2: []
    }

    componentDidMount = async () => {
        let a = await axios.post(C.SERVER_CALL+'/products/getallcats')
        let it = a.data;
        let col1 = []
        let col2 = []
        for (let i = 0; i < it.length; i++)
            if (i % 2 == 0)
                col1.push(it[i])
            else
                col2.push(it[i])

        this.setState({ items1: col1, items2: col2 })
    }

    render() {

        return (<div>
            <Container>
                <Row>
                    <Col>
                        {this.state.items1.map(i => <CategoryDisplayCard key={i._id} cardTitle={i.name} actionButtonText="Explore" img={i.imgurl} anykey={i._id} />)}
                    </Col>
                    <Col>
                        {this.state.items2.map(i => <CategoryDisplayCard key={i._id} cardTitle={i.name} actionButtonText="Explore" img={i.imgurl} anykey={i._id} />)}
                    </Col>

                </Row>
            </Container>
        </div>);
    }
}
