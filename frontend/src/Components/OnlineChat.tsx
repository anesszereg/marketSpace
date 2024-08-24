import React, { useState } from "react";
import { Button, Card, Col, Collapse, Dropdown, Form, Image, Row } from "react-bootstrap";

//img
import logosm from "assets/images/logo-sm.png";
import SimpleBar from "simplebar-react";

const CommondDropdown = () => {
    return (
        <Dropdown as="div" className="align-self-start message-box-drop">
            <Dropdown.Toggle as="a">
                <i className="ri-more-2-fill" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">  <i className="ri-reply-line me-2 text-muted align-bottom" />
                    Reply</Dropdown.Item>
                <Dropdown.Item href="#/action-2"><i className="ri-file-copy-line me-2 text-muted align-bottom" />
                    Copy</Dropdown.Item>
                <Dropdown.Item href="#/action-3"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom" />
                    Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

const OnlineChat = () => {
    //chat state
    const [chat, setChate] = useState(false);
    //online chat 
    const chatBot = () => { setChate(!chat) }
    return (
        <React.Fragment>
            <Button
                variant="danger"
                className="btn shadow-lg chat-button rounded-bottom-0 d-none d-lg-block"
                onClick={() => setChate(!chat)}
                aria-controls="chatBot"
                aria-expanded={chat}
            >
                Online Chat
            </Button>
            <Collapse in={chat}>
                <div id="chatBot">
                    <div className="chat-box">
                        <Card className="shadow-lg border-0 rounded-bottom-0 mb-0">
                            <Card.Header className="bg-success d-flex align-items-center border-0">
                                <h5 className="text-white fs-16 fw-medium flex-grow-1 mb-0">
                                    Hi, Raquel Murillo 👋
                                </h5>
                                <Button
                                    className="btn-close btn-close-white flex-shrink-0"
                                    onClick={chatBot}
                                    data-bs-dismiss="collapse"
                                    aria-label="Close"
                                />
                            </Card.Header>
                            <Card.Body className="p-0">
                                <SimpleBar style={{ height: 280 }} >
                                    <div id="users-chat-widget">
                                        <div
                                            className="chat-conversation p-3"
                                            id="chat-conversation"
                                            data-simplebar=""
                                        >
                                            <ul
                                                className="list-unstyled chat-conversation-list chat-sm"
                                                id="users-conversation"
                                            >
                                                <li className="chat-list left">
                                                    <div className="conversation-list">
                                                        <div className="chat-avatar">
                                                            <Image src={logosm} alt="" />
                                                        </div>
                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0 ctext-content">
                                                                        Welcome to Themesbrand. We are here to help you. You can
                                                                        also directly email us at Support@themesbrand.com to
                                                                        schedule a meeting with our Technology Consultant.
                                                                    </p>
                                                                </div>
                                                                <CommondDropdown />
                                                            </div>
                                                            <div className="conversation-name">
                                                                <small className="text-muted time">09:07 am</small>{" "}
                                                                <span className="text-success check-message-icon">
                                                                    <i className="ri-check-double-line align-bottom" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* chat-list */}
                                                <li className="chat-list right">
                                                    <div className="conversation-list">
                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0 ctext-content">
                                                                        Good morning, How are you? What about our next meeting?
                                                                    </p>
                                                                </div>
                                                                <CommondDropdown />
                                                            </div>
                                                            <div className="conversation-name">
                                                                <small className="text-muted time">09:08 am</small>{" "}
                                                                <span className="text-success check-message-icon">
                                                                    <i className="ri-check-double-line align-bottom" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* chat-list */}
                                                <li className="chat-list left">
                                                    <div className="conversation-list">
                                                        <div className="chat-avatar">
                                                            <Image src={logosm} alt="" />
                                                        </div>
                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0 ctext-content">
                                                                        Yeah everything is fine. Our next meeting tomorrow at
                                                                        10.00 AM
                                                                    </p>
                                                                </div>
                                                                <CommondDropdown />
                                                            </div>
                                                            <div className="conversation-name">
                                                                <small className="text-muted time">09:10 am</small>{" "}
                                                                <span className="text-success check-message-icon">
                                                                    <i className="ri-check-double-line align-bottom" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* chat-list */}
                                            </ul>
                                        </div>
                                    </div>
                                </SimpleBar>

                                <div className="border-top border-top-dashed">
                                    <Row className="g-2 mt-2 mx-3 mb-3">
                                        <Col>
                                            <div className="position-relative">
                                                <Form.Control
                                                    className="border-light bg-light"
                                                    placeholder="Enter Message..."
                                                />
                                            </div>
                                        </Col>
                                        <Col className="col-auto">
                                            <Button type="submit" variant="info">
                                                <i className="mdi mdi-send" />
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Collapse>
        </React.Fragment>
    )
}

export default OnlineChat;