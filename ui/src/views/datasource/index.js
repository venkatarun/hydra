import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const Datasource = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={8}><h4 className="mb-4">Datasources</h4></Col>
                <Col md={6} xl={4}>
                    <Button variant="primary" className="text-capitalize"style={{ float: 'right' }}>
                        <Link to={"/app/datasource/create"}> Create</Link>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h6 className="mb-4">MYSQL Datasource</h6>
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
                            <h6 className="mb-4">Oracle Datasource</h6>
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
                            <h6 className="mb-4">HDFS</h6>
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
};

export default Datasource;