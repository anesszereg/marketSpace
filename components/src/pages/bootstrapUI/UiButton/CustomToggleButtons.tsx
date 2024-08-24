import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { CustomToggleButtonsExample } from './UiButtonCode';

const CustomToggleButtons = () => {

    const toggleBtn = (ele:any) => {
        if (ele.closest("button").classList.contains("active")) {
            ele.closest("button").classList.remove("active");
        } else {
            ele.closest("button").classList.add("active");
        }
    };

    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Custom Toggle Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col lg={6}>
                                    <div className="d-flex flex-wrap align-items-center gap-2">
                                        <Button className="btn-primary custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
                                            <span className="icon-on"><i className="ri-alarm-line align-bottom"></i> Active</span>
                                            <span className="icon-off">Unactive</span>
                                        </Button>
                                        <Button className="btn-secondary custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
                                            <span className="icon-on"><i className="ri-user-add-line align-bottom me-1"></i> Connect</span>
                                            <span className="icon-off"><i className="ri-check-fill align-bottom me-1"></i> Unconnect</span>
                                        </Button>
                                        <Button className="btn-success custom-toggle" onClick={(e) => toggleBtn(e.target)}>
                                            <span className="icon-on"><i className="ri-thumb-up-line align-bottom me-1"></i> Yes</span>
                                            <span className="icon-off"><i className="ri-thumb-down-line align-bottom me-1"></i> No</span>
                                        </Button>
                                        <Button className="btn-warning custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
                                            <span className="icon-on"><i className="ri-add-line align-bottom me-1"></i> Follow</span>
                                            <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                        </Button>
                                        <Button className="btn-danger custom-toggle" onClick={(e) => toggleBtn(e.target)}>
                                            <span className="icon-on">On</span>
                                            <span className="icon-off">Off</span>
                                        </Button>
                                        <Button className="btn-dark custom-toggle" onClick={(e) => toggleBtn(e.target)}>
                                            <span className="icon-on"><i className="ri-bookmark-line align-bottom me-1"></i> Bookmark</span>
                                            <span className="icon-off"><i className="ri-bookmark-3-fill align-bottom me-1"></i> Unbookmark</span>
                                        </Button>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="d-flex flex-wrap align-items-center gap-2">
                                        <Button variant='outline-primary' className="custom-toggle" onClick={(e) => toggleBtn(e.target)}>
                                            <span className="icon-on">Active</span>
                                            <span className="icon-off">Unactive</span>
                                        </Button>
                                        <Button variant='outline-secondary' className="custom-toggle" onClick={(e) => toggleBtn(e.target)}>
                                            <span className="icon-on"><i className="ri-add-line align-bottom me-1"></i> Follow</span>
                                            <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                        </Button>
                                        <Button variant='outline-success' className="custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
                                            <span className="icon-on">On</span>
                                            <span className="icon-off">Off</span>
                                        </Button>
                                        <Button variant='soft-warning' className="custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
                                            <span className="icon-on">Follow</span>
                                            <span className="icon-off">Unfollow</span>
                                        </Button>
                                        <Button variant='soft-danger' className="custom-toggle" onClick={(e) => toggleBtn(e.target)}>
                                            <span className="icon-on">On</span>
                                            <span className="icon-off">Off</span>
                                        </Button>
                                        <Button className="btn-dark custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
                                            <span className="icon-on"><i className="ri-bookmark-line align-bottom"></i></span>
                                            <span className="icon-off"><i className="ri-bookmark-3-fill align-bottom"></i></span>
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <CustomToggleButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CustomToggleButtons