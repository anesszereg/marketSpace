import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HtmlHighlightExample, CssHighlightExample, JavaScriptExample } from './UiHighlightCode';

const HtmlCssJs = () => {
    document.title=" Highlight | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Advance UI" breadcrumbItem="Highlight" />
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">HTML Highlight</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted mb-0">HTML highlight is used to mark or highlight text that is of property, relevance, or special interest to an HTML document. here is the example shown below.</p>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre>
                                    <HtmlHighlightExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">CSS Highlight</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted mb-0">CSS highlight is used to mark or highlight text that is of property, relevance, or special interest to a CSS document. Here is the example shown below.</p>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25 d-flex align-items-center">
                                <h5 className="flex-grow-1 fs-12 text-muted mb-0">CSS Preview</h5>
                                <div className="flex-shrink-0">
                                    <Link to="#!"><i className="bi bi-clipboard"></i></Link>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <pre>
                                    <CssHighlightExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Javascript Highlight</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted mb-0">Javascript highlight is used to mark or highlight text that is of property, relevance, or special interest to a Javascript document. Here is the example shown below.</p>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25 d-flex align-items-center">
                                <h5 className="flex-grow-1 fs-12 text-muted mb-0">Javascript Preview</h5>
                                <div className="flex-shrink-0">
                                    <Link to="#!"><i className="bi bi-clipboard"></i></Link>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <pre>
                                    <JavaScriptExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default HtmlCssJs;