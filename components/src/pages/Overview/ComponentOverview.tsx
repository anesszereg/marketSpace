import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

//import images
import overview from "assets/images/overview.png";

const ComponentOverview = () => {
    document.title=" Overview | Toner eCommerce + React Admin Template";
    return (
        <React.Fragment>
            <Row className="justify-content-between align-items-center mt-5">
                <Col lg={5}>
                    <div className="me-5">
                        <div className="mb-2">
                            <span className="badge badge-soft-secondary">Welcome To Toner</span>
                        </div>
                        <h1 className="display-6 lh-base fw-medium">Components for <span className="text-primary">Fast & Beautiful</span> Admin Template.</h1>
                        <p className="lead text-muted mb-4 pb-1">Build whatever you want without a single line of CSS/SASS code by just using our low-level utility classes and base components.</p>
                        <div className="d-flex align-items-center gap-4 text-center">
                            <div className="d-flex align-items-center gap-4 text-center">
                                <div>
                                    <h4><span className="counter-value">
                                        <CountUp end={35} />
                                    </span>+</h4>
                                    <p className="text-muted mb-0">Components</p>
                                </div>
                                <div>
                                    <h4><span className="counter-value">
                                        <CountUp end={20} />
                                    </span>+</h4>
                                    <p className="text-muted mb-0">Plugins</p>
                                </div>
                                <div>
                                    <h4><span className="counter-value">
                                        <CountUp end={5} />
                                    </span>k</h4>
                                    <p className="text-muted mb-0">Icons</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Col>

                <Col lg={6}>
                    <img src={overview} alt="" className="img-fluid" />
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default ComponentOverview;