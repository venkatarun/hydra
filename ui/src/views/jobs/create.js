import React from "react";
import { Row, Col } from 'react-bootstrap';

import Flow from "../../components/Flow/flow";
import Sidebar from './sidebar';

const Create = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={8}><h4 className="mb-4">Create Job</h4></Col>
            </Row>
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>
                <Col md={9}>
                    <Flow />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Create;
