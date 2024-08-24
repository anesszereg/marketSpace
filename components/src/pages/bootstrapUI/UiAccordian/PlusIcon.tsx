import React from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { PlusIconAccordionExample } from './UiAccordianCode';

const PlusIcon = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Accordions with Plus Icon</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>custom-accordionwithicon-plus</code> class to show plus icon at the accordion.</p>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header id="accordionwithplusExample1">
                                        What is User Interface Design?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='1'>
                                    <Accordion.Header>
                                        What is Digital Marketing?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        It makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own. commodo enim craft beer mlkshk aliquip jean shorts ullamco.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='2'>
                                    <Accordion.Header>
                                        Where does it come from ?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Spacing depending on the situation and try, try again until it looks right, and each. next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco. omo nostrud organic, assumenda labore aesthetic magna delectus. pposites attract, and that’s a fact.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <PlusIconAccordionExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default PlusIcon