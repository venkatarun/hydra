import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Create = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={8}><h4 className="mb-4">Create Runtime API</h4></Col>
            </Row>
            <Row>
                <Col md={6}>
                <embed
                    src="https://www.youtube.com/embed/J---aiyznGQ?autohide=1&autoplay=1"
                    wmode="transparent"
                    type="video/mp4"
                    width="100%" height="100%"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowfullscreen
                    title="Keyboard Cat"
                />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Create;