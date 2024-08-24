import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CountUp from 'react-countup';
import InvoiceListTable from './InvoiceListTable';

const InvoiceList = () => {

    document.title = "Invoice List | Toner eCommerce + Admin React Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Invoice List" pageTitle="Invoices" />

                    <Row>
                        <Col xl={3} md={6}>

                            <Card className="card-animate bg-info-subtle border-0 overflow-hidden">
                                <div className="position-absolute end-0 start-0 top-0 z-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="400" height="250" preserveAspectRatio="none" viewBox="0 0 400 250">
                                        <g mask="url(&quot;#SvgjsMask1551&quot;)" fill="none">
                                            <path d="M306 65L446 -75" strokeWidth="8" stroke="url(#SvgjsLinearGradient1552)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M399 2L315 86" strokeWidth="10" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M83 77L256 -96" strokeWidth="6" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M281 212L460 33" strokeWidth="6" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M257 62L76 243" strokeWidth="6" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M305 123L214 214" strokeWidth="6" stroke="url(#SvgjsLinearGradient1552)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M327 222L440 109" strokeWidth="6" stroke="url(#SvgjsLinearGradient1552)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M287 109L362 34" strokeWidth="10" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M259 194L332 121" strokeWidth="8" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M376 186L240 322" strokeWidth="8" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M308 153L123 338" strokeWidth="6" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M218 62L285 -5" strokeWidth="8" stroke="url(#SvgjsLinearGradient1552)" strokeLinecap="round" className="BottomLeft"></path>
                                        </g>
                                        <defs>
                                            <mask id="SvgjsMask1551">
                                                <rect width="400" height="250" fill="#ffffff"></rect>
                                            </mask>
                                            <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="SvgjsLinearGradient1552">
                                                <stop stopColor="rgba(var(--tb-info-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-info-rgb), 0.1)" offset="1"></stop>
                                            </linearGradient>
                                            <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="SvgjsLinearGradient1553">
                                                <stop stopColor="rgba(var(--tb-info-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-info-rgb), 0.1)" offset="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <Card.Body className="position-relative">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <p className="text-uppercase fs-14 fw-medium text-muted mb-0">Invoices Sent</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <h5 className="text-success fs-14 mb-0">
                                                <i className="ri-arrow-right-up-line fs-13 align-middle"></i> +89.24 %
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-4">
                                        <div>
                                            <h4 className="fs-24 fw-semibold mb-4"><CountUp end={559.25} decimals={2} prefix="$" suffix="k" /></h4>
                                            <span className="badge bg-info me-1">6,258</span> <span className="text-muted align-bottom">Invoices sent</span>
                                        </div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-white text-primary rounded fs-3">
                                                <i className="ph-file-text"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={3} md={6}>

                            
                            <Card className="card-animate bg-success-subtle border-0 overflow-hidden">
                                <div className="position-absolute end-0 start-0 top-0 z-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="400" height="250" preserveAspectRatio="none" viewBox="0 0 400 250">
                                        <g mask="url(&quot;#SvgjsMask1608&quot;)" fill="none">
                                            <path d="M390 87L269 208" strokeWidth="10" stroke="url(#SvgjsLinearGradient1609)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M358 175L273 260" strokeWidth="8" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M319 84L189 214" strokeWidth="10" stroke="url(#SvgjsLinearGradient1609)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M327 218L216 329" strokeWidth="8" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M126 188L8 306" strokeWidth="8" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M220 241L155 306" strokeWidth="10" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M361 92L427 26" strokeWidth="6" stroke="url(#SvgjsLinearGradient1609)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M391 188L275 304" strokeWidth="8" stroke="url(#SvgjsLinearGradient1609)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M178 74L248 4" strokeWidth="10" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M84 52L-56 192" strokeWidth="6" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M183 111L247 47" strokeWidth="10" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M46 8L209 -155" strokeWidth="6" stroke="url(#SvgjsLinearGradient1609)" strokeLinecap="round" className="TopRight"></path>
                                        </g>
                                        <defs>
                                            <mask id="SvgjsMask1608">
                                                <rect width="400" height="250" fill="#ffffff"></rect>
                                            </mask>
                                            <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="SvgjsLinearGradient1609">
                                                <stop stopColor="rgba(var(--tb-success-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-success-rgb), 0.1)" offset="1"></stop>
                                            </linearGradient>
                                            <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="SvgjsLinearGradient1610">
                                                <stop stopColor="rgba(var(--tb-success-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-success-rgb), 0.1)" offset="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <Card.Body className="position-relative">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <p className="text-uppercase fs-14 fw-medium text-muted mb-0">Paid Invoices</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <h5 className="text-success fs-14 mb-0">
                                                <i className="ri-arrow-right-up-line fs-13 align-middle"></i> +8.09 %
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-4">
                                        <div>
                                            <h4 className="fs-24 fw-semibold mb-4"><CountUp end={409.66} decimals={2} prefix="$" suffix="k" /></h4>
                                            <span className="badge bg-info me-1">2,451</span> <span className="text-muted">Paid by clients</span>
                                        </div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-white text-success rounded fs-3">
                                                <i className="ph-check-square-offset"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={3} md={6}>

                            
                            <Card className="card-animate bg-warning-subtle border-0 overflow-hidden">
                                <div className="position-absolute end-0 start-0 top-0 z-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="400" height="250" preserveAspectRatio="none" viewBox="0 0 400 250">
                                        <g mask="url(&quot;#SvgjsMask1530&quot;)" fill="none">
                                            <path d="M209 112L130 191" strokeWidth="10" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M324 10L149 185" strokeWidth="8" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M333 35L508 -140" strokeWidth="10" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M282 58L131 209" strokeWidth="10" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M290 16L410 -104" strokeWidth="6" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M216 186L328 74" strokeWidth="6" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M255 53L176 132" strokeWidth="10" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M339 191L519 11" strokeWidth="8" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M95 151L185 61" strokeWidth="6" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M249 16L342 -77" strokeWidth="6" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M129 230L286 73" strokeWidth="10" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M80 216L3 293" strokeWidth="6" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                        </g>
                                        <defs>
                                            <mask id="SvgjsMask1530">
                                                <rect width="400" height="250" fill="#ffffff"></rect>
                                            </mask>
                                            <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="SvgjsLinearGradient1531">
                                                <stop stopColor="rgba(var(--tb-warning-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-warning-rgb), 0.1)" offset="1"></stop>
                                            </linearGradient>
                                            <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="SvgjsLinearGradient1532">
                                                <stop stopColor="rgba(var(--tb-warning-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-warning-rgb), 0.1)" offset="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <Card.Body className="position-relative">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <p className="text-uppercase fs-14 fw-medium text-muted mb-0">Unpaid Invoices</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <h5 className="text-danger fs-14 mb-0">
                                                <i className="ri-arrow-right-down-line fs-13 align-middle"></i> +9.01 %
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-4">
                                        <div>
                                            <h4 className="fs-24 fw-semibold mb-4"><CountUp end={136.98} decimals={2} prefix="$" suffix="k" /></h4>
                                            <span className="badge bg-info me-1">720</span> <span className="text-muted">Unpaid by clients</span>
                                        </div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-white text-warning rounded fs-3">
                                                <i className="ph-clock"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={3} md={6}>

                            
                            <Card className="card-animate bg-danger-subtle border-0 overflow-hidden">
                                <div className="position-absolute end-0 start-0 top-0 z-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="400" height="250" preserveAspectRatio="none" viewBox="0 0 400 250">
                                        <g mask="url(&quot;#SvgjsMask1560&quot;)" fill="none">
                                            <path d="M306 65L446 -75" strokeWidth="8" stroke="url(#SvgjsLinearGradient1558)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M399 2L315 86" strokeWidth="10" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M83 77L256 -96" strokeWidth="6" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M281 212L460 33" strokeWidth="6" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M257 62L76 243" strokeWidth="6" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M305 123L214 214" strokeWidth="6" stroke="url(#SvgjsLinearGradient1558)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M327 222L440 109" strokeWidth="6" stroke="url(#SvgjsLinearGradient1558)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M287 109L362 34" strokeWidth="10" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M259 194L332 121" strokeWidth="8" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M376 186L240 322" strokeWidth="8" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M308 153L123 338" strokeWidth="6" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M218 62L285 -5" strokeWidth="8" stroke="url(#SvgjsLinearGradient1558)" strokeLinecap="round" className="BottomLeft"></path>
                                        </g>
                                        <defs>
                                            <mask id="SvgjsMask1560">
                                                <rect width="400" height="250" fill="#ffffff"></rect>
                                            </mask>
                                            <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="SvgjsLinearGradient1558">
                                                <stop stopColor="rgba(var(--tb-danger-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-danger-rgb), 0.1)" offset="1"></stop>
                                            </linearGradient>
                                            <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="SvgjsLinearGradient1559">
                                                <stop stopColor="rgba(var(--tb-danger-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-danger-rgb), 0.1)" offset="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <Card.Body className="position-relative">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <p className="text-uppercase fs-14 fw-medium text-muted mb-0">Cancelled Invoices</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <h5 className="text-success fs-14 mb-0">
                                                <i className="ri-arrow-right-up-line fs-13 align-middle"></i> +7.55 %
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-4">
                                        <div>
                                            <h4 className="fs-24 fw-semibold mb-4"><CountUp end={84.2} decimals={1} prefix="$" suffix="k" /></h4>
                                            <span className="badge bg-info me-1">502</span> <span className="text-muted">Cancelled by clients</span>
                                        </div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-white text-danger rounded fs-3">
                                                <i className="ph-trash"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <InvoiceListTable />

                </Container>
            </div>
        </React.Fragment>
    );
};

export default InvoiceList;