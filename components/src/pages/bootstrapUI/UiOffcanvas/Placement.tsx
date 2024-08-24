import React, { useState } from 'react';
import { Button, Card, Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { PlacementOffcanvasExample } from './UiOffcanvasCode';

// import Images
import avatar1 from 'assets/images/users/avatar-1.jpg'
import avatar2 from 'assets/images/users/avatar-2.jpg'
import avatar3 from 'assets/images/users/avatar-3.jpg'
import avatar4 from 'assets/images/users/avatar-4.jpg'
import avatar6 from 'assets/images/users/avatar-6.jpg'
import avatar7 from 'assets/images/users/avatar-7.jpg'
import avatar8 from 'assets/images/users/avatar-8.jpg'

import img2 from 'assets/images/small/img-2.jpg'
import img3 from 'assets/images/small/img-3.jpg'
import img4 from 'assets/images/small/img-4.jpg'
import img9 from 'assets/images/small/img-9.jpg'
import img10 from 'assets/images/small/img-10.jpg'


const Placement = () => {

    const [isTop, setIsTop] = useState(false);
    const [isRight, setIsRight] = useState(false);
    const [isBottom, setIsBottom] = useState(false);
    const [isLeft, setIsLeft] = useState(false);

    const toggleTopCanvas = () => {
        setIsTop(!isTop);
    };
    const toggleRightCanvas = () => {
        setIsRight(!isRight);
    };
    const toggleBottomCanvas = () => {
        setIsBottom(!isBottom);
    };
    const toggleLeftCanvas = () => {
        setIsLeft(!isLeft);
    };

    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Placement Offcanvas</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>offcanvas-top</code>, <code>offcanvas-end</code>, <code>offcanvas-bottom</code>, or <code>offcanvas-start</code> to offcanvas class to set different Offcanvas Placement.</p>
                            <div>
                                <div className="d-flex flex-wrap gap-2">
                                    <Button onClick={toggleTopCanvas} variant="primary">Toggle Top Offcanvas</Button>
                                    <Button onClick={toggleRightCanvas} variant="secondary">Toggle Right Offcanvas</Button>
                                    <Button onClick={toggleBottomCanvas} variant="success">Toggle Bottom Offcanvas</Button>
                                    <Button onClick={toggleLeftCanvas} variant="danger">Toggle Left Offcanvas</Button>
                                </div>

                                <Offcanvas show={isTop} onHide={toggleTopCanvas} placement='top' style={{ minHeight: "46vh" }}>
                                    <Offcanvas.Header className="border-bottom" closeButton>
                                        <Offcanvas.Title id="offcanvasTopLabel">Gallery</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Row className="gallery-light">
                                            <Col xl={3} lg={4} sm={6}>
                                                <div className="gallery-box card light mb-0">
                                                    <div className="box-content px-3 py-2">
                                                        <div className="gallery-overlay">
                                                            <h5 className="overlay-caption">A mix of friends and strangers adventure.</h5>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-1">
                                                            <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Erica Kernan</Link></div>
                                                            <div className="flex-shrink-0">
                                                                <div className="d-flex gap-3">
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 3.4K
                                                                    </Button>
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.3k
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xl={3} lg={4} sm={6}>
                                                <div className="gallery-box card light mb-0">
                                                    <div className="gallery-container">
                                                        <Link to="#" title="">
                                                            <Image className="gallery-img img-fluid mx-auto" src={img9} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="box-content px-3 py-2">
                                                        <div className="gallery-overlay">
                                                            <h5 className="overlay-caption">Dramatic clouds at the Golden Gate Bridge</h5>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-1">
                                                            <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Ron Mackie</Link></div>
                                                            <div className="flex-shrink-0">
                                                                <div className="d-flex gap-3">
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 5.1K
                                                                    </Button>
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 4.7k
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xl={3} lg={4} sm={6}>
                                                <div className="gallery-box card mb-0">
                                                    <div className="box-content px-3 py-2">
                                                        <div className="gallery-overlay">
                                                            <h5 className="overlay-caption">Cycling in the countryside</h5>
                                                        </div>

                                                        <div className="d-flex align-items-center mt-1">
                                                            <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Nancy Martino</Link></div>
                                                            <div className="flex-shrink-0">
                                                                <div className="d-flex gap-3">
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 3.2K
                                                                    </Button>
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.1K
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xl={3} lg={4} sm={6} className="d-md-none d-xl-block">
                                                <div className="gallery-box card mb-0">
                                                    <div className="gallery-container">
                                                        <Link to="#" title="">
                                                            <Image className="gallery-img img-fluid mx-auto" src={img10} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="box-content px-3 py-2">
                                                        <div className="gallery-overlay">
                                                            <h5 className="overlay-caption">Fun day at the Hill Station</h5>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-1">
                                                            <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Henry Baird</Link></div>
                                                            <div className="flex-shrink-0">
                                                                <div className="d-flex gap-3">
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 632
                                                                    </Button>
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 95
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Offcanvas.Body>
                                </Offcanvas>

                                <Offcanvas show={isRight} onHide={toggleRightCanvas} placement='end'>
                                    <Offcanvas.Header className="border-bottom" closeButton>
                                        <Offcanvas.Title id="offcanvasRightLabel">Recent Acitivity</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body className="p-0 overflow-hidden">
                                        <div data-simplebar style={{ height: "calc(100vh - 112px)" }}>
                                            <div className="acitivity-timeline p-4">
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar1} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Oliver Phillips <span className="badge bg-primary-subtle text-primary align-middle">New</span></h6>
                                                        <p className="text-muted mb-2">We talked about a project on linkedin.</p>
                                                        <small className="mb-0 text-muted">Today</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                        <div className="avatar-title bg-success-subtle text-success rounded-circle">
                                                            N
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Nancy Martino <span className="badge bg-secondary-subtle text-secondary align-middle">In Progress</span></h6>
                                                        <p className="text-muted mb-2"><i className="ri-file-text-line align-middle ms-2"></i> Create new project Buildng product</p>
                                                        <div className="avatar-group mb-2">
                                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Christi">
                                                                <Image src={avatar4} alt="" className="rounded-circle avatar-xs" />
                                                            </Link>
                                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Frank Hook">
                                                                <Image src={avatar3} alt="" className="rounded-circle avatar-xs" />
                                                            </Link>
                                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                                                                <div className="avatar-xs">
                                                                    <div className="avatar-title rounded-circle bg-light text-primary">
                                                                        R
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="more">
                                                                <div className="avatar-xs">
                                                                    <div className="avatar-title rounded-circle">
                                                                        2+
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <small className="mb-0 text-muted">Yesterday</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Natasha Carey <span className="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                                                        <p className="text-muted mb-2">Adding a new event with attachments</p>
                                                        <div className="row border border-dashed gx-2 p-2 mb-2">
                                                            <div className="col-4">
                                                                <Image src={img2} alt="" className="img-fluid rounded" />
                                                            </div>
                                                            <div className="col-4">
                                                                <Image src={img3} alt="" className="img-fluid rounded" />
                                                            </div>
                                                            <div className="col-4">
                                                                <Image src={img4} alt="" className="img-fluid rounded" />
                                                            </div>
                                                        </div>
                                                        <small className="mb-0 text-muted">25 Nov</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar6} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Bethany Johnson</h6>
                                                        <p className="text-muted mb-2">added a new member to Toner dashboard</p>
                                                        <small className="mb-0 text-muted">19 Nov</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs acitivity-avatar">
                                                            <div className="avatar-title rounded-circle bg-danger-subtle text-danger">
                                                                <i className="ri-shopping-bag-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Your order is placed <span className="badge bg-danger-subtle text-danger align-middle ms-1">Out of Delivery</span></h6>
                                                        <p className="text-muted mb-2">These customers can rest assured their order has been placed.</p>
                                                        <small className="mb-0 text-muted">16 Nov</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar7} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Lewis Pratt</h6>
                                                        <p className="text-muted mb-2">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. </p>
                                                        <small className="mb-0 text-muted">22 Oct</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs acitivity-avatar">
                                                            <div className="avatar-title rounded-circle bg-info-subtle text-info">
                                                                <i className="ri-line-chart-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Monthly sales report</h6>
                                                        <p className="text-muted mb-2"><span className="text-danger">2 days left</span> notification to submit the monthly sales report. <Link to="#" className="link-warning text-decoration-underline">Reports Builder</Link></p>
                                                        <small className="mb-0 text-muted">15 Oct</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar8} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">New ticket received <span className="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                                                        <p className="text-muted mb-2">User <span className="text-secondary">Erica245</span> submitted a ticket.</p>
                                                        <small className="mb-0 text-muted">26 Aug</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Offcanvas.Body>
                                    <div className="offcanvas-foorter border p-3 text-center">
                                        <Link to="#" className="link-success">View All Acitivity <i className="ri-arrow-right-s-line align-middle ms-1"></i></Link>
                                    </div>
                                </Offcanvas>

                                <Offcanvas show={isBottom} onHide={toggleBottomCanvas} placement='bottom' style={{ minHeight: "46vh" }}>
                                    <Offcanvas.Header className="border-bottom" closeButton>
                                        <Offcanvas.Title id="offcanvasBottomLabel">Gallery</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body className="py-4">
                                        <Row className="gallery-light">
                                            <Col xl={3} lg={4} sm={6}>
                                                <div className="gallery-box card light mb-0">
                                                    <div className="box-content px-3 py-2">
                                                        <div className="gallery-overlay">
                                                            <h5 className="overlay-caption">A mix of friends and strangers adventure.</h5>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-1">
                                                            <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Erica Kernan</Link></div>
                                                            <div className="flex-shrink-0">
                                                                <div className="d-flex gap-3">
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 3.4K
                                                                    </Button>
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.3k
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xl={3} lg={4} sm={6}>
                                                <div className="gallery-box card light mb-0">
                                                    <div className="gallery-container">
                                                        <Link to="#" title="">
                                                            <Image className="gallery-img img-fluid mx-auto" src={img9} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="box-content px-3 py-2">
                                                        <div className="gallery-overlay">
                                                            <h5 className="overlay-caption">Dramatic clouds at the Golden Gate Bridge</h5>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-1">
                                                            <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Ron Mackie</Link></div>
                                                            <div className="flex-shrink-0">
                                                                <div className="d-flex gap-3">
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 5.1K
                                                                    </Button>
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 4.7k
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xl={3} lg={4} sm={6}>
                                                <div className="gallery-box card mb-0">
                                                    <div className="box-content px-3 py-2">
                                                        <div className="gallery-overlay">
                                                            <h5 className="overlay-caption">Cycling in the countryside</h5>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-1">
                                                            <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Nancy Martino</Link></div>
                                                            <div className="flex-shrink-0">
                                                                <div className="d-flex gap-3">
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 3.2K
                                                                    </Button>
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.1K
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xl={3} lg={4} sm={6} className="d-md-none d-xl-block">
                                                <div className="gallery-box card mb-0">
                                                    <div className="gallery-container">
                                                        <Link to="#" title="">
                                                            <Image className="gallery-img img-fluid mx-auto" src={img10} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="box-content px-3 py-2">
                                                        <div className="gallery-overlay">
                                                            <h5 className="overlay-caption">Fun day at the Hill Station</h5>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-1">
                                                            <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Henry Baird</Link></div>
                                                            <div className="flex-shrink-0">
                                                                <div className="d-flex gap-3">
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 632
                                                                    </Button>
                                                                    <Button className="btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 95
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Offcanvas.Body>
                                </Offcanvas>

                                <Offcanvas show={isLeft} onHide={toggleLeftCanvas} placement='start'>
                                    <Offcanvas.Header className="border-bottom" closeButton>
                                        <Offcanvas.Title id="offcanvasLeftLabel">Recent Acitivity</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body className="p-0 overflow-hidden">
                                        <div data-simplebar style={{ height: "calc(100vh - 112px)" }}>
                                            <div className="acitivity-timeline p-4">
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar1} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Oliver Phillips <span className="badge bg-primary-subtle text-primary align-middle">New</span></h6>
                                                        <p className="text-muted mb-2">We talked about a project on linkedin.</p>
                                                        <small className="mb-0 text-muted">Today</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                        <div className="avatar-title bg-success-subtle text-success rounded-circle">
                                                            N
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Nancy Martino <span className="badge bg-secondary-subtle text-secondary align-middle">In Progress</span></h6>
                                                        <p className="text-muted mb-2"><i className="ri-file-text-line align-middle ms-2"></i> Create new project Buildng product</p>
                                                        <div className="avatar-group mb-2">
                                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Christi">
                                                                <Image src={avatar4} alt="" className="rounded-circle avatar-xs" />
                                                            </Link>
                                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Frank Hook">
                                                                <Image src={avatar3} alt="" className="rounded-circle avatar-xs" />
                                                            </Link>
                                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                                                                <div className="avatar-xs">
                                                                    <div className="avatar-title rounded-circle bg-light text-primary">
                                                                        R
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="more">
                                                                <div className="avatar-xs">
                                                                    <div className="avatar-title rounded-circle">
                                                                        2+
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <small className="mb-0 text-muted">Yesterday</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Natasha Carey <span className="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                                                        <p className="text-muted mb-2">Adding a new event with attachments</p>
                                                        <div className="row border border-dashed gx-2 p-2 mb-2">
                                                            <div className="col-4">
                                                                <Image src={img2} alt="" className="img-fluid rounded" />
                                                            </div>
                                                            <div className="col-4">
                                                                <Image src={img3} alt="" className="img-fluid rounded" />
                                                            </div>
                                                            <div className="col-4">
                                                                <Image src={img4} alt="" className="img-fluid rounded" />
                                                            </div>
                                                        </div>
                                                        <small className="mb-0 text-muted">25 Nov</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar6} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Bethany Johnson</h6>
                                                        <p className="text-muted mb-2">added a new member to Toner dashboard</p>
                                                        <small className="mb-0 text-muted">19 Nov</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs acitivity-avatar">
                                                            <div className="avatar-title rounded-circle bg-danger-subtle text-danger">
                                                                <i className="ri-shopping-bag-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Your order is placed <span className="badge bg-danger-subtle text-danger align-middle ms-1">Out of Delivery</span></h6>
                                                        <p className="text-muted mb-2">These customers can rest assured their order has been placed.</p>
                                                        <small className="mb-0 text-muted">16 Nov</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar7} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Lewis Pratt</h6>
                                                        <p className="text-muted mb-2">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. </p>
                                                        <small className="mb-0 text-muted">22 Oct</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs acitivity-avatar">
                                                            <div className="avatar-title rounded-circle bg-info-subtle text-info">
                                                                <i className="ri-line-chart-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Monthly sales report</h6>
                                                        <p className="text-muted mb-2"><span className="text-danger">2 days left</span> notification to submit the monthly sales report. <Link to="#" className="link-warning text-decoration-underline">Reports Builder</Link></p>
                                                        <small className="mb-0 text-muted">15 Oct</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar8} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">New ticket received <span className="badge bg-soft-success text-success align-middle">Completed</span></h6>
                                                        <p className="text-muted mb-2">User <span className="text-secondary">Erica245</span> submitted a ticket.</p>
                                                        <small className="mb-0 text-muted">26 Aug</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Offcanvas.Body>
                                    <div className="offcanvas-foorter border-top p-3 text-center">
                                        <Link to="#" className="link-success">View All Acitivity <i className="ri-arrow-right-s-line align-middle ms-1"></i></Link>
                                    </div>
                                </Offcanvas>
                            </div>
                        </Card.Body>
                        <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </div>
                        <div className="card-body">
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <PlacementOffcanvasExample />
                            </pre>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Placement