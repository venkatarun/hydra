import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const RuntimeApi = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={8}><h4 className="mb-4">AaaS</h4></Col>
                <Col md={6} xl={4}>
                    <Button variant="primary" className="text-capitalize">
                        Create
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h6 className="mb-4">Api 1</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                        <i className="feather text-c-green f-30 m-r-5" />
                                    </h3>
                                </div>
                            </div>
                            <div className="m-t-30" style={{ height: '7px' }}></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h6 className="mb-4">Api 2</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                        <i className="feather text-c-red f-30 m-r-5" />
                                    </h3>
                                </div>
                            </div>
                            <div className="m-t-30" style={{ height: '7px' }}></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h6 className="mb-4">Api 3</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                        <i className="feather text-c-red f-30 m-r-5" />
                                    </h3>
                                </div>
                            </div>
                            <div className="m-t-30" style={{ height: '7px' }}></div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default RuntimeApi;
