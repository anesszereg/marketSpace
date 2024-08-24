import React from 'react';
import { Card, Col, Row, Nav, Tab } from 'react-bootstrap';

// import Images
import avatar1 from "assets/images/users/avatar-1.jpg"
import avatar2 from "assets/images/users/avatar-2.jpg"
import avatar3 from "assets/images/users/avatar-3.jpg"
import avatar4 from "assets/images/users/avatar-4.jpg"
import avatar5 from "assets/images/users/avatar-5.jpg"
import avatar6 from "assets/images/users/avatar-6.jpg"
import avatar7 from "assets/images/users/avatar-7.jpg"
import avatar8 from "assets/images/users/avatar-8.jpg"

const HeaderBottom = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <h5 className="mb-3">Header Justify Tabs</h5>
                    <Card>
                        <Tab.Container defaultActiveKey="developers">
                            <Card.Header className="align-items-xl-center d-xl-flex">
                                <p className="text-muted flex-grow-1 mb-xl-0">Use <code>card-header-pills</code> class to create header justify tab.</p>
                                <div className="flex-shrink-0">
                                    <Nav as="ul" variant="pills" className="card-header-pills">
                                        <Nav.Item as="li">
                                            <Nav.Link eventKey="developers">
                                                Developers
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link eventKey="designers">
                                                Designers
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link eventKey="managers">
                                                Managers
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Card.Header>
                            <Card.Body>

                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="developers">
                                        <Row>
                                            <Col sm="6">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar8} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Dominic Charlton</h6>
                                                        <p className="mb-0">520 Followers</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar7} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Charlie Pritchard</h6>
                                                        <p className="mb-0">45.2K Followers</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar6} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Harvey Wells</h6>
                                                        <p className="mb-0">1025 Followers</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm="6">
                                                <div className="d-flex mt-3 mt-sm-0">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar5} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Amelie Townsend</h6>
                                                        <p className="mb-0">6584 Followers</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar4} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Emily Slater</h6>
                                                        <p className="mb-0">24.8K Followers</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar3} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Declan Long</h6>
                                                        <p className="mb-0">1.5K Followers</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="designers">
                                        <Row>
                                            <Col sm="6">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar1} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Luke Brown</h6>
                                                        <p className="mb-0">654 Followers</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar2} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Matilda Walker</h6>
                                                        <p className="mb-0">270 Followers</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar3} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Leo Stokes</h6>
                                                        <p className="mb-0">4120 Followers</p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col sm="6">
                                                <div className="d-flex mt-3 mt-sm-0">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar4} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Chelsea Preston</h6>
                                                        <p className="mb-0">9854 Followers</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar5} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Jennifer Barker</h6>
                                                        <p className="mb-0">15.8K Followers</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar6} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Callum Murray</h6>
                                                        <p className="mb-0">2K Followers</p>
                                                    </div>
                                                </div>
                                            </Col>

                                        </Row>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="managers">
                                        <Row>
                                            <Col sm="6">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar7} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Dominic Charlton</h6>
                                                        <p className="mb-0">784 Followers</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar8} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Matilda Walker</h6>
                                                        <p className="mb-0">6549 Followers</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar4} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Jennifer Barker</h6>
                                                        <p className="mb-0">2100 Followers</p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col sm="6">
                                                <div className="d-flex mt-3 mt-sm-0">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar5} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Amelie Townsend</h6>
                                                        <p className="mb-0">4565 Followers</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar1} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Emily Slater</h6>
                                                        <p className="mb-0">8K Followers</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar2} alt="" className="avatar-sm rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fs-14">Declan Long</h6>
                                                        <p className="mb-0">9800 Followers</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Tab.Container>
                    </Card>
                </Col>


                <Col xxl={6}>
                    <h5 className="mb-3">Bottom Card Nav Tabs</h5>
                    <Card>
                        <Tab.Container defaultActiveKey="bottomtabs-home">
                            <Card.Body>
                                <p className="text-muted">Use <code>card-footer-tabs</code> class to create the bottom card nav justify tab.</p>
                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="bottomtabs-home">
                                        <h5><i className="ri-home-3-line align-bottom me-1"></i> Home</h5>
                                        <p className="mb-2">
                                            On the note of consistency, color consistency is a MUST. If you’re not trying to create crazy contrast in your design, then a great idea would be for you to use a color palette throughout your entire design. It will subconsciously interest viewers and also is very pleasing to look at.
                                        </p>
                                        <p className="mb-0">
                                            Any bypasser will stop to see what you have to see, even if your design has nothing to do with them, for the simple fact that it is beautiful to look at.
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="bottomtabs-profile">
                                        <h5><i className="ri-user-2-line align-bottom me-1"></i> Profile</h5>
                                        <p className="mb-2">
                                            Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it’s important that your viewers can understand the text, and sometimes that means applying a gaussian readable.
                                        </p>
                                        <p className="mb-0">
                                            A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves.
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="bottomtabs-messages">
                                        <h5><i className="ri-mail-line align-bottom me-1"></i> Messages</h5>
                                        <p className="mb-2">
                                            Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy! ", Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just flocked up to quiz and vex him.
                                        </p>
                                        <p className="mb-0">
                                            Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz.
                                        </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                            <Card.Footer className="bg-transparent border-top">

                                <Nav as="ul" variant='pills' className="nav-justified card-footer-tabs fs-17" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="bottomtabs-home">
                                            <i className="ri-home-3-line"></i>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="bottomtabs-profile">
                                            <i className="ri-user-2-line"></i>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="bottomtabs-messages">
                                            <i className="ri-mail-line"></i>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Footer>
                        </Tab.Container>
                    </Card>
                </Col>

            </Row>
        </React.Fragment>
    )
}

export default HeaderBottom