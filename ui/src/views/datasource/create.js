import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Create = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={8}><h4 className="mb-4">Create Datasource</h4></Col>
            </Row>
            <Row>
                <Col md={6}>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary">Submit</Button>
                    <Button variant="light"><Link to={"/app/datasource"}> Cancel</Link></Button>
                  </Form>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Create;
