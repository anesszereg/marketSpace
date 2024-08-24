import React from 'react';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomArrow = () => {
    return (
        <React.Fragment>
            <Row>

                <Col xxl={6}>
                    <h5 className="mb-3">Custom Tabs Bordered</h5>
                    <Card>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="home1">
                                <p className="text-muted">Use <code>nav-tabs-custom</code> class to create custom tabs with borders.</p>

                                <Nav as="ul" variant="tabs" className="nav-tabs-custom nav-success nav-justified mb-3">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="home1">
                                            Home
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="profile1">
                                            Profile
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="messages1">
                                            Messages
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="settings1">
                                            Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="home1">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR.
                                                <div className="mt-2">
                                                    <Link to="#" className="btn btn-sm btn-soft-primary">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="profile1">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown.
                                                <div className="mt-2">
                                                    <Link to="#" className="btn btn-sm btn-soft-primary">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="messages1">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                <div className="mt-2">
                                                    <Link to="#" className="btn btn-sm btn-soft-primary">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="settings1">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the.
                                                <div className="mt-2">
                                                    <Link to="#" className="btn btn-sm btn-soft-primary">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xxl={6}>
                    <h5 className="mb-3">Arrow Nav tabs</h5>
                    <Card>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="arrow-overview">
                                <p className="text-muted">Use <code>arrow-navtabs </code>class to create arrow nav tabs.</p>
                                <Nav as="ul" variant="pills" className="arrow-navtabs nav-success bg-light mb-3">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="arrow-overview">
                                            <span className="d-block d-sm-none"><i className="mdi mdi-home-variant"></i></span>
                                            <span className="d-none d-sm-block">Overview</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="arrow-profile">
                                            <span className="d-block d-sm-none"><i className="mdi mdi-account"></i></span>
                                            <span className="d-none d-sm-block">Profile</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="arrow-contact">
                                            <span className="d-block d-sm-none"><i className="mdi mdi-email"></i></span>
                                            <span className="d-none d-sm-block">Contact</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="arrow-overview">
                                        <h6>Give your text a good structure</h6>
                                        <p className="mb-0">
                                            Contrary to popular belief, you don’t have to work endless nights and hours to create a <Link to="#" className="text-decoration-underline"><b>Fantastic Design</b></Link> by using complicated 3D elements. Flat design is your friend. Remember that. And the great thing about flat design is that it has become more and more popular over the years, which is excellent news to the beginner and advanced designer.
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="arrow-profile">
                                        <h6>Use a color palette</h6>
                                        <p className="mb-0">
                                            Opposites attract, and that’s a fact. It’s in our nature to be interested in the unusual, and that’s why using contrasting colors in <Link to="#" className="text-decoration-underline"><b>Graphic Design</b></Link> is a must. It’s eye-catching, it makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own.
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="arrow-contact">
                                        <h6>Contact</h6>
                                        <p className="mb-0">
                                            Consistency is the one thing that can take all of the different elements in your design, and tie them all together and make them work. In an awareness campaign, it is vital for people to begin put 2 and 2 together and begin to recognize your cause. Consistency piques people’s interest is that it has become more and more popular over the years, which is excellent news to the beginner and advanced <Link to="#" className="text-decoration-underline"><b>Contact Designer</b></Link>.
                                        </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CustomArrow