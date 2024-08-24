import React from 'react';
import { Row, Col, Card, ListGroup, Image } from 'react-bootstrap';
import { CustomContentExample } from './UiListsCode';
import { Link } from 'react-router-dom';

// import Images
import avatar1 from 'assets/images/users/avatar-1.jpg'
import avatar2 from 'assets/images/users/avatar-2.jpg'
import avatar3 from 'assets/images/users/avatar-3.jpg'
import avatar4 from 'assets/images/users/avatar-4.jpg'

const CustomContent = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Custom Content</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Add nearly any HTML within, even for linked list groups like the one below, with the help of <Link to="https://getbootstrap.com/docs/5.1/utilities/flex/">flexbox utilities</Link>.</p>
                            <ListGroup>
                                <ListGroup.Item as='a' active className="list-group-item-action">
                                    <div className="float-end">
                                        Pending
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <div className="flex-shrink-0">
                                            <Image src={avatar1} alt="" className="avatar-sm rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="list-title fs-15 mb-1">Charlie Pritchard</h5>
                                            <p className="list-text mb-0 fs-12">12 min Ago</p>
                                        </div>
                                    </div>
                                    <p className="list-text mb-0">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                                </ListGroup.Item>
                                <ListGroup.Item as='a' className="list-group-item-action">
                                    <div className="float-end">
                                        Pending
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <div className="flex-shrink-0">
                                            <Image src={avatar2} alt="" className="avatar-sm rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="list-title fs-15 mb-1">Dominic Charlton</h5>
                                            <p className="list-text mb-0 fs-12">12 min Ago</p>
                                        </div>
                                    </div>
                                    <p className="list-text mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin.</p>
                                </ListGroup.Item>
                                <ListGroup.Item as='a' className="list-group-item-action">
                                    <div className="float-end">
                                        Rejected
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <div className="flex-shrink-0">
                                            <Image src={avatar3} alt="" className="avatar-sm rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="list-title fs-15 mb-1">Declan Long</h5>
                                            <p className="list-text mb-0 fs-12">12 min Ago</p>
                                        </div>
                                    </div>
                                    <p className="list-text mb-0">Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.</p>
                                </ListGroup.Item>
                                <ListGroup.Item as='a' className="list-group-item-action">
                                    <div className="float-end">
                                        Successful
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <div className="flex-shrink-0">
                                            <Image src={avatar4} alt="" className="avatar-sm rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="list-title fs-15 mb-1">Angela Bernier</h5>
                                            <p className="list-text mb-0 fs-12">5 days Ago</p>
                                        </div>
                                    </div>
                                    <p className="list-text mb-0">Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it’s important that your viewers can understand the text, and sometimes that means applying a gaussian readable.</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <CustomContentExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CustomContent