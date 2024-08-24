import React from 'react';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';

const OutlineCustom = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <h5 className="mb-3">Outline Border Nav</h5>
                    <Card>
                        <Card.Body>
                            <p className="text-muted">*Use <code>nav-custom-</code> class with modifier class to color tabs.</p>
                            <Tab.Container defaultActiveKey="border-nav-home">
                                <Nav as="ul" variant="pills" className="nav-custom-outline nav-primary mb-3" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="border-nav-home">
                                            Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="border-nav-profile">
                                            Profile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="border-nav-messages">
                                            Messages</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="border-nav-settings">
                                            Settings</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="border-nav-home">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Raw denim you probably haven't heard of them jean shorts Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The
                                                goal is to make your text as comfortable to read as possible.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="border-nav-profile">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                In some designs, you might adjust your tracking to create a certain artistic effect. It can also help
                                                you fix fonts that are poorly spaced to begin with.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I
                                                enjoy with my whole heart.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="border-nav-messages">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to
                                                be creative and make your own style choices.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                For that very reason, I went on a quest and spoke to many different professional graphic designers and
                                                asked them what graphic design tips they live.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="border-nav-settings">
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                For that very reason, I went on a quest and spoke to many different professional graphic designers and
                                                asked them what graphic design tips they live.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                After gathering lots of different opinions and graphic design basics, I came up with a list of 30
                                                graphic design tips that you can start implementing.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xxl={6}>
                    <h5 className="mb-3">Custom Nav</h5>
                    <Card>
                        <Card.Body>
                            <p className="text-muted">*Use <code>nav-custom-</code> class with modifier class to color tabs.</p>
                            <Tab.Container defaultActiveKey="border-navs-home">
                                <Nav as="ul" variant="pills" className="nav-customs nav-danger mb-3" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="border-navs-home">
                                            Home
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="border-navs-profile">
                                            Profile
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="border-navs-messages">
                                            Messages
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="border-navs-settings">
                                            Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="border-navs-home">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Raw denim you probably haven't heard of them jean shorts Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Too much or too little spacing, as in the example below, can make things unpleasant for the
                                                reader. The
                                                goal is to make your text as comfortable to read as possible.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="border-navs-profile">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                In some designs, you might adjust your tracking to create a certain artistic effect. It can
                                                also help
                                                you fix fonts that are poorly spaced to begin with.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of
                                                spring which I
                                                enjoy with my whole heart.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="border-navs-messages">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Each design is a new, unique piece of art birthed into this world, and while you have the
                                                opportunity to
                                                be creative and make your own style choices.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                For that very reason, I went on a quest and spoke to many different professional graphic
                                                designers and
                                                asked them what graphic design tips they live.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="border-navs-settings">
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                For that very reason, I went on a quest and spoke to many different professional graphic
                                                designers and
                                                asked them what graphic design tips they live.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                After gathering lots of different opinions and graphic design basics, I came up with a list
                                                of 30
                                                graphic design tips that you can start implementing.
                                            </div>
                                        </div>
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

export default OutlineCustom;