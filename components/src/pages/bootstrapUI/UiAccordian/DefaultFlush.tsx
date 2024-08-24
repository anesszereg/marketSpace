import React from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { DefaultAccordionExample, FlushAccordionExample } from './UiAccordianCode';

const DefaultFlush = () => {
    document.title=" Accordions | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="Accordions" />
                <Row>
                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Default Accordion</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">Use the <code>accordion</code> class to expand/collapse the accordion content.</p>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header id="headingOne">
                                            How to create a group booking ?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Although you probably won’t get into any legal trouble if you do it just once, why risk it? If you made your subscribers a promise, you should honor that. If not, you run the risk of a drastic increase in opt outs, which will only hurt you in the long run.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header id="headingTwo">
                                            Why do we use it ?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            No charges are put in place by SlickText when subscribers join your text list. This does not mean however that charges 100% will not occur. Charges that may occur fall under part of the compliance statement stating "Message and Data rates may apply."
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header id="headingThree">
                                            Where does it come from ?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Now that you have a general idea of the amount of texts you will need per month, simply find a plan size that allows you to have this allotment, plus some extra for growth. Don't worry, there are no mistakes to be made here. You can always upgrade and downgrade.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "330px" }}>
                                    <DefaultAccordionExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Accordion Flush </h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>accordion-flush</code> class to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.</p>
                                <Accordion className="accordion-flush" defaultActiveKey="0">
                                    <Accordion.Item eventKey='0'>
                                        <Accordion.Header id="flush-headingOne">
                                            How do I set up my profile ?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            The renewal of your SlickText service happens on the anniversary of your original paid sign up date. Upgrading in the middle of your billing period will not change the billing date. Upgrading does however force an immediate, pro-rated charge to take place on your account.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='1'>
                                        <Accordion.Header id="flush-headingTwo">
                                            What can I do with my project ?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            If you had signed up on a free account with Slicktext, then upgraded to a paid plan at a later date, your bill will renew based on the date you had upgraded to a paid plan. All invoices are able to be viewed under your plan options in your SlickText account.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='2'>
                                        <Accordion.Header id="flush-headingThree">
                                            Where can I go to edit voice settings
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            No, we cannot provide this information. Opting out from a list is an anonymous, private act. This prevents further harassment. Providing this information is considered bad practice, and further communication after they opt out would be considered against compliance.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "310px" }}>
                                    <FlushAccordionExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default DefaultFlush