import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import chart from '../images/chart.png';
import '../index.css';

export default class MainSection extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm="6" md="6" className="py-5">
                            <h5 className="text-dark font-weight-bolder">Welcome to Onepager</h5>
                            <h2 className="text-dark font-weight-bolder">We Are Expert In Marketing & Investment</h2>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor didunt laboris nisi ut aliquip ex commodo consequat. duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur.Excep teur sint ocaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Button outline color="primary" className="text-uppercase">explore now</Button>
                        </Col>
                        <Col sm="6" md="6" className="py-5">
                        <img src={chart} className="img-fluid" alt="Responsive image"/>
                        </Col>
                    </Row>
                </Container>
                <div className="bg-img">
                    <div className="call-sec py-5">
                        <Container>
                        <Row>
                            <Col sm="8" md="8" className="py-5">
                                <div>
                                    <h1 className="text-white font-weight-bolder">Learn Anytime Anywhere</h1>
                                </div>
                            </Col>
                            <Col sm="4" md="4" className="py-5">
                            <Button outline color="primary" className="text-uppercase text-dark">get an quote</Button>
                            </Col>
                        </Row>
                        </Container>
                    </div>
                </div>
            </div>
            
        )
    }
}
