import React from 'react';
import { Row, Col, Card, Tab, Tabs, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';

const DashDefault = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={6} xl={4}>
          <Card>
            <Card.Body>
              <h6 className="mb-4">Datasources</h6>
              <div className="row d-flex align-items-center">
                <div className="col-9">
                  <h3 className="f-w-300 d-flex align-items-center m-b-0">
                    <i className="feather text-c-green f-30 m-r-5" /> 20
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
              <h6 className="mb-4">API</h6>
              <div className="row d-flex align-items-center">
                  <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                          <i className="feather text-c-red f-30 m-r-5" /> 30
                      </h3>
                  </div>
              </div>
              <div className="m-t-30" style={{ height: '7px' }}></div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card>
            <Card.Body>
              <h6 className="mb-4">Jobs</h6>
              <div className="row d-flex align-items-center">
                  <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                          <i className="feather text-c-green f-30 m-r-5" /> 50
                      </h3>
                  </div>
              </div>
              <div className="progress m-t-30" style={{ height: '7px' }}>
                  <div
                      className="progress-bar progress-c-theme"
                      role="progressbar"
                      style={{ width: '70%' }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                  />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DashDefault;
