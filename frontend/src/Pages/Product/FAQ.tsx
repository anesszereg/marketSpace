import { faqquetion } from "Common/data";
import { ContactHelp } from "Components/CommonService";
import React, { useState } from "react";
import { Card, Col, Container, Row, Button, Collapse, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const FAQ = () => {
    const [questions, setQuestions] = useState(false);
    const [process, setProcess] = useState(false);
    const [purpose, setPurpose] = useState(false);
    const [online, setOnline] = useState(false);
    return (
        <React.Fragment>
            <section className="ecommerce-about bg-primary">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} >
                            <div className="text-center">
                                <h1 className="text-white mb-0">Frequently Asked Questions</h1>
                                <Breadcrumb bsPrefix="breadcrumb breadcrumb-light justify-content-center mt-4 fs-15">
                                    <Breadcrumb.Item href="#">Shop</Breadcrumb.Item>
                                    <Breadcrumb.Item active aria-current="page">Faq's</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="text-center">
                                <h3>Have any Questions ?</h3>
                                <p className="text-muted mb-4">You can ask anything you want to know about Feedback.</p>
                                <div className="hstack flex-wrap gap-2 justify-content-center">
                                    <Button variant="primary" className=" btn-label rounded-pill"><i className="ri-mail-line label-icon align-middle rounded-pill fs-16"></i> Email Us</Button>
                                    <Button variant="info" className=" btn-label rounded-pill"><i className="ri-twitter-line label-icon align-middle rounded-pill fs-16"></i> Send Us Tweet</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        {
                            (faqquetion || [])?.map((item, idx) => {
                                return (
                                    <Col lg={3} md={6} key={idx}>
                                        <Card className="text-center mt-4 position-relative">
                                            <Card.Body>
                                                <div className="avatar-md mx-auto mb-4">
                                                    <div className="avatar-title bg-success-subtle text-success rounded-circle h1 m-0">
                                                        <i className={`${item.icone}`}></i>
                                                    </div>
                                                </div>
                                                <h5 className="fs-16 mb-3"><Link to="#" className="text-body stretched-link">{item.title}</Link></h5>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                )
                            })
                        }
                    </Row>
                    <Row className="gy-4 justify-content-center mt-2">
                        <Col xxl={8} lg={8}>
                            <div>
                                <div className="mb-4">
                                    <h5 className="fs-16 mb-0 fw-semibold">General Questions</h5>
                                </div>
                                <div className="accordion accordion-border-box" id="genques-accordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="genques-headingOne">
                                            <Button
                                                onClick={() => setQuestions(!questions)}
                                                aria-controls="genques-collapseOne"
                                                data-bs-target="#genques-collapseOne"
                                                aria-expanded={questions}
                                                className={`accordion-button ${questions === true ? "" : "collapsed"}`}
                                                bsPrefix="btn btn-none"
                                            >
                                                What are FAQ questions?
                                            </Button>
                                        </h2>
                                        <Collapse in={questions}>
                                            <div id="genques-collapseOne">
                                                <div className="accordion-collapse collapse show" aria-labelledby="genques-headingOne" data-bs-parent="#genques-accordion" >
                                                    <div className="accordion-body">
                                                        An FAQ page <b>(short for Frequently Asked Question page)</b> is a part of your website that provides answers to common questions, assuages concerns, and overcomes objections. It's a space where customers away from your sales-focused landing pages and homepage.
                                                    </div>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="genques-headingOne">
                                            <Button
                                                onClick={() => setProcess(!process)}
                                                aria-controls="genques-collapseOne"
                                                aria-expanded={process}
                                                className={`accordion-button ${process === true ? "" : "collapsed"}`}
                                                bsPrefix="btn btn-none"
                                            >
                                                What is FAQ process?
                                            </Button>
                                        </h2>
                                        <Collapse in={process}>
                                            <div id="genques-collapseOne">
                                                <div className="accordion-collapse collapse show" aria-labelledby="genques-headingOne" data-bs-parent="#genques-accordion" >
                                                    <div className="accordion-body">
                                                        FAQ stands for Frequently Asked Questions. It's <b>your opportunity to communicate with the most important visitors to your website</b> – those who have begun the decision-making process about whether to do business with you can't fit elsewhere on their website.
                                                    </div>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="genques-headingOne">
                                            <Button
                                                onClick={() => setPurpose(!purpose)}
                                                aria-controls="genques-collapseOne"
                                                aria-expanded={purpose}
                                                className={`accordion-button ${purpose === true ? "" : "collapsed"}`}
                                                bsPrefix="btn btn-none"
                                            >
                                                What is the purpose of FAQ?
                                            </Button>
                                        </h2>
                                        <Collapse in={purpose}>
                                            <div id="genques-collapseOne">
                                                <div className="accordion-collapse collapse show" aria-labelledby="genques-headingOne" data-bs-parent="#genques-accordion" >
                                                    <div className="accordion-body">
                                                        The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text consisting of questions and their answers may thus be called a FAQ regardless.
                                                    </div>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="genques-headingOne">
                                            <Button
                                                onClick={() => setOnline(!online)}
                                                aria-controls="genques-collapseOne"
                                                aria-expanded={online}
                                                className={`accordion-button ${online === true ? "" : "collapsed"}`}
                                                bsPrefix="btn btn-none"
                                            >
                                                What is an online FAQ?
                                            </Button>
                                        </h2>
                                        <Collapse in={online}>
                                            <div id="genques-collapseOne">
                                                <div className="accordion-collapse collapse show" aria-labelledby="genques-headingOne" data-bs-parent="#genques-accordion" >
                                                    <div className="accordion-body">
                                                        FAQs stand for frequently asked questions. It is one of the many crucial pages of your website. It gives your customers answers to recurring and common questions and addresses their concerns public product documentation that is released at the same time.
                                                    </div>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <ContactHelp cname="section" />
        </React.Fragment>
    )
}
export default FAQ;