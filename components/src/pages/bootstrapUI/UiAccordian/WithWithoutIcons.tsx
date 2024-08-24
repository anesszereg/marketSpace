import React from 'react'
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { IconAccordionExample, WithIconAccordionExample } from './UiAccordianCode';


const WithWithoutIcons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Accordions with Icons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>custom-accordionwithicon</code> class to show custom icon at accordion.</p>
                            <Accordion defaultActiveKey='0' className='custom-accordionwithicon accordion-secondary'>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>
                                        <i className="ri-global-line me-2"></i> How Does Age Verification Work?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='1'>
                                    <Accordion.Header>
                                        <i className="ri-user-location-line me-2"></i> How Does Link Tracking Work?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='2'>
                                    <Accordion.Header>
                                        <i className="ri-pen-nib-line me-2"></i> How Do I Set Up the Drip Feature?
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
                            <pre className="language-markup" style={{ height: "330px" }}>
                                <IconAccordionExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Accordions without Icons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>accordion-icon-none</code> class to remove icon at accordion.</p>
                            <Accordion defaultActiveKey='0'>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>
                                        <i className="ri-global-line me-2"></i> How Does Age Verification Work?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices. For that very reason, I went on a quest and spoke to many different professional graphic designers.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='1'>
                                    <Accordion.Header>
                                        <i className="ri-user-location-line me-2"></i> How Does Link Tracking Work?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='2'>
                                    <Accordion.Header>
                                        <i className="ri-pen-nib-line me-2"></i> How Do I Set Up the Drip Feature?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                        <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </div>
                        <div className="card-body">
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <WithIconAccordionExample />
                            </pre>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default WithWithoutIcons;