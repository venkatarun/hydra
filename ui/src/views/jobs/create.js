import React from "react";

import Flow from "../../components/Flow/flow";

import { Row, Col } from 'react-bootstrap';

const Create = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={8}><h4 className="mb-4">Create Job</h4></Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Flow />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Create;