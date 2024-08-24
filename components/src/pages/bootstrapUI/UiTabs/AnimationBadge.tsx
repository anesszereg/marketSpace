import React from 'react';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';

const AnimationBadge = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>            
                    <h5 className="mb-3">Animation Nav</h5>
                    <Card>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="animation-home">
                                <p className="text-muted">Use <code>animation-nav</code> class to create animated tabs.</p>

                                <Nav as="ul" variant="pills" className="animation-nav nav-justified gap-2 mb-3" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="animation-home">
                                            Home
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="animation-profile">
                                            Profile
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="animation-messages">
                                            Messages
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="animation-settings">
                                            Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="animation-home">
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
                                                Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="animation-profile">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="animation-messages">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="animation-settings">
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <h5 className="mb-3">Nav with Badge</h5>
                    <Card>
                        <Card.Body>
                            <p className="text-muted">Example of nav tabs with badge wrapped in nav item.</p>
                            <Tab.Container defaultActiveKey="nav-badge-home">
                                <Nav as="ul" variant="tabs" className="nav-justified mb-3" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="nav-badge-home">
                                            Explore
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="nav-badge-profile" className="align-middle">
                                            Profile <span className="badge bg-success">Done</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="nav-badge-messages" className="align-middle">
                                            Messages <span className="badge bg-danger rounded-circle">5</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="nav-badge-settings">
                                            Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="nav-badge-home">
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
                                                Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="nav-badge-profile">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="nav-badge-messages">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="nav-badge-settings">
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing.
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

export default AnimationBadge;