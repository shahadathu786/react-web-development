import React, { Component } from 'react'
import { Row, Container, Col } from 'reactstrap'
export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark py-3">
                <Container>
                    <Row>
                        <Col>
                            <div className="justify-content-center">
                                <h5 className="text-white text-center">Copyright © 2019 OnePager, All Rights Reserved</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            
        )
    }
}
