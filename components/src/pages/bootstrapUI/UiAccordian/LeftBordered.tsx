import React from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { LeftIconAccordionExample, BorderedAccordionExample } from './UiAccordianCode';

const LeftBordered = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Left Icon Accordions</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>lefticon-accordion</code> class to show the icon on the left side of the accordion.</p>
                            <Accordion defaultActiveKey='0'>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>
                                        What is User Interface Design?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua nulla assumenda shoreditch et.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='1'>
                                    <Accordion.Header>
                                        What is Digital Marketing?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='2'>
                                    <Accordion.Header>
                                        Where does it come from ?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <LeftIconAccordionExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Accordions Bordered</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>custom-accordion-border</code> class to create the border at the accordion.</p>
                            <Accordion defaultActiveKey='0' className="custom-accordion-border accordion-border-box accordion-success">
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>
                                        What is User Interface Design?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua nulla assumenda shoreditch et.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='1'>
                                    <Accordion.Header>
                                        What is Digital Marketing?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='2'>
                                    <Accordion.Header>
                                        Where does it come from ?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <BorderedAccordionExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default LeftBordered