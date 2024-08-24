import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PublishedProduct } from "Components/ProductSilde";
import EmailClothe from "Pages/Catalog/EmailClothe";
import { CommonService } from "Components/CommonService";

const Termsconditions = () => {
    return (
        <React.Fragment>
            <PublishedProduct title="Terms of Conditions" dicription="Last Updated 24 Nov, 2022" />
            <section className="section pt-0">
                <Container>
                    <Card className="term-card mb-0">
                        <Card.Body className="p-5">
                            <Row >
                                <Col lg={12}>
                                    <h5 className="fs-18 mb-3">Introduction</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com. By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.</p>
                                    </div>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p>
                                    </div>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">Minors or people below 18 years old are not allowed to use this Website.</p>
                                    </div>
                                    <h5 className="fs-18 my-3">Rights Restrictions</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>
                                    </div>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">You are granted limited license only for purposes of viewing the material contained on this Website.</p>
                                    </div>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">You are specifically restricted from all of the following:</p>
                                    </div>
                                    <ul className="text-muted vstack gap-2 fs-15 ps-5" style={{ listStyleType: "circle" }}>
                                        <li>
                                            Publishing any Website material in any other media;
                                        </li>
                                        <li>
                                            Selling, sublicensing and/or otherwise commercializing any Website material;
                                        </li>
                                        <li>
                                            Reproduce, duplicate or copy material from Website Name
                                        </li>
                                        <li>
                                            Redistribute content from Website Name
                                        </li>
                                        <li>
                                            Using this Website in any way that is or may be damaging to this Website;
                                        </li>
                                        <li>
                                            Using this Website to engage in any advertising or marketing.
                                        </li>
                                    </ul>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">Certain areas of this Website are restricted from being access by you and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p>
                                    </div>
                                    <h5 className="fs-18 my-3">No warranties</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">This Website is provided “as is,” with all faults, and Company Name express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>
                                    </div>
                                    <h5 className="fs-18 my-3">License</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">Company Name reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
                                    </div>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">You warrant and represent that:</p>
                                    </div>
                                    <ul className="text-muted vstack gap-2 fs-15 ps-5" style={{ listStyleType: "circle" }}>
                                        <li>
                                            You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
                                        </li>
                                        <li>
                                            The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;
                                        </li>
                                        <li>
                                            The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy
                                        </li>
                                        <li>
                                            The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
                                        </li>
                                    </ul>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.</p>
                                    </div>
                                    <div className="d-flex gap-2 mb-4">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">You hereby grant Company Name a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
                                    </div>

                                    <div className="alert alert-danger">
                                        No use of Company Name's logo or other artwork will be allowed for linking absent a trademark license agreement.
                                    </div>

                                    <div className="hstack justify-content-sm-end gap-2 mt-4">
                                        <Link to="#" className="btn btn-ghost-danger btn-hover me-3"><i className="ri-close-line align-bottom me-1"></i> Decline</Link>
                                        <Link to="#" className="btn btn-success btn-hover">Accept Now</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    )
}

export default Termsconditions;