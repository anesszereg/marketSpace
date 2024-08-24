import React, {useState} from 'react';
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import Images
import avatar1 from "assets/images/users/avatar-8.jpg"
import avatar2 from "assets/images/users/avatar-5.jpg"
import avatar3 from "assets/images/users/avatar-3.jpg"

import spinner1 from "assets/images/logo-sm.png"


const CardHeaderandFooter = () => {

    const [col1, setCol1] = useState<boolean>(true);
    const [col2, setCol2] = useState<boolean>(true);
    const [col3, setCol3] = useState<boolean>(true);

    const delthis = (id: any) => { document.getElementById(id)?.remove() };

    // Card Spinner
    const spinner = (id: any) => {
        document.getElementById(id)?.classList.remove("d-none");
        document.getElementById(id)?.classList.add("d-block");
        setTimeout(function () {
            document.getElementById(id)?.classList.remove("d-block");
            document.getElementById(id)?.classList.add("d-none");
        }, 3000);
    };
    return (
        <React.Fragment>
            <Row>
                <div className="col-12">
                    <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                        <h5 className="mb-0 pb-1 text-decoration-underline">Card Header and Footer</h5>
                    </div>
                    <Row>
                        <Col xxl={4} lg={6}>
                            <Card>
                                <Card.Header>
                                    <button type="button" className="btn-close float-end fs-11" aria-label="Close"></button>
                                    <h6 className="card-title mb-0">Hi, Erica Kernan</h6>
                                </Card.Header>
                                <Card.Body>
                                    <h6 className="card-title">How to get creative in your work ?</h6>
                                    <p className="card-text text-muted mb-0">A business consulting agency is involved in the planning, implementation, and education of businesses. Miss told ham dull knew see she spot near can. Spirit her entire her called.</p>
                                </Card.Body>
                                <div className="card-footer">
                                    <Link to="#" className="link-success float-end">Read More <i className="ri-arrow-right-s-line align-middle ms-1 lh-1"></i></Link>
                                    <p className="text-muted mb-0">1 days Ago</p>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4} lg={6}>
                            <Card>
                                <Card.Header>
                                    <button type="button" className="btn-close float-end fs-11" aria-label="Close"></button>
                                    <h6 className="card-title mb-0">Invoice<span className="text-secondary">#45155468</span></h6>
                                </Card.Header>
                                <Card.Body>
                                    <h6 className="card-title">What planning process needs ?</h6>
                                    <p className="card-text text-muted mb-0">Intrinsically incubate intuitive opportunities and real-time potentialities for change for interoperable meta-services itself or distract the viewer's attention from the layout.</p>
                                </Card.Body>
                                <div className="card-footer">
                                    <Link to="#" className="link-success float-end">Payment Now <i className="ri-arrow-right-s-line align-middle ms-1 lh-1"></i></Link>
                                    <p className="text-muted mb-0">5 days Left</p>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4} lg={6}>
                            <Card>
                                <Card.Header>
                                    <h6 className="card-title mb-0">Creative Agency Quote</h6>
                                </Card.Header>
                                <Card.Body>
                                    <blockquote className="card-blockquote mb-0">
                                        <p className="text-muted mb-2">There are many variations of passages of Lorem Ipsum available.</p>
                                        <figure className="mb-0">
                                            <blockquote className="blockquote">
                                                <p className="lead">"A business consulting agency is involved in the planning, implementation, and education of businesses."</p>
                                            </blockquote>
                                            <figcaption className="blockquote-footer fs-13 text-end mb-0">
                                                Creative Agency<cite title="Source Title" className="text-primary fw-semibold"> Alice Mellor</cite>
                                            </figcaption>
                                        </figure>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Row>

            <Row>
                <Col xl={4}>
                    <Card>
                        <Card.Body>
                            <h4 className="card-title mb-3"><i className="ri-user-3-fill align-middle me-1 text-muted"></i> Natasha Carey</h4>
                            <p className="text-muted">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible.</p>
                            <p className="text-muted mb-0">This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism.</p>
                        </Card.Body>
                        <div className="card-footer text-center">
                            <Link to="#" className="link-secondary">View All Notification (2) <i className="ri-arrow-right-s-line align-middle ms-1 lh-1"></i></Link>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Header>
                            <span className="float-end text-secondary">Overview</span>
                            <h6 className="card-title">Give your text a good structure</h6>
                            <p className="card-subtitle text-muted mb-0">Fantastic Design</p>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">
                                Contrary to popular belief, you don’t have to work endless nights and hours to create a <Link to="#" className="text-decoration-underline"><b>Fantastic Design</b></Link> by using complicated 3D elements. Flat design is your friend. Remember that. And the great thing about flat design is that it has become more and more popular over the years.
                            </p>
                            <p className="text-muted mb-0">In some designs, you might adjust your tracking to create a certain artistic effect.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Header>
                            <h6 className="card-title mb-0"><i className="ri-gift-line align-middle me-1 lh-1"></i> You've made it!</h6>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing. Each design is a new, unique piece of art birthed into this world.</p>
                            <p className="text-muted mb-0">Art party locavore wolf cliche high life echo park Austin.</p>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="hstack gap-2 justify-content-end">
                                <Link to="#" className="btn btn-link btn-sm link-success"><i className="ri-close-line align-middle lh-1"></i> Close</Link>
                                <Link to="#" className="btn btn-primary btn-sm">Read More</Link>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* Emloyee Card */}
            <Row>
                <Col xl={4}>
                    <Card>
                        <Card.Header>
                            <Button className="btn-close float-end fs-11" aria-label="Close"></Button>
                            <h6 className="card-title mb-0">Employee Card</h6>
                        </Card.Header>
                        <Card.Body className="p-4 text-center">
                            <div className="mx-auto avatar-md mb-3">
                                <img src={avatar1} alt="" className="img-fluid rounded-circle" />
                            </div>
                            <h5 className="card-title mb-1">Gabriel Palmer</h5>
                            <p className="text-muted mb-0">Graphic Designer</p>
                        </Card.Body>
                        <div className="card-footer text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <Link to="#" className="lh-1 align-middle link-secondary"><i className="ri-facebook-fill"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="lh-1 align-middle link-success"><i className="ri-whatsapp-line"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="lh-1 align-middle link-primary"><i className="ri-linkedin-fill"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="lh-1 align-middle link-danger"><i className="ri-slack-fill"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </Col>

                <Col xl={4}>
                    <Card>
                        <Card.Header>
                            <Button className="btn-close float-end fs-11" aria-label="Close"></Button>
                            <h6 className="card-title mb-0">Employee Card</h6>
                        </Card.Header>
                        <Card.Body className="p-4 text-center">
                            <div className="mx-auto avatar-md mb-3">
                                <img src={avatar2} alt="" className="img-fluid rounded-circle" />
                            </div>
                            <h5 className="card-title mb-1">Amelie Townsend</h5>
                            <p className="text-muted mb-0">Project Manager</p>
                        </Card.Body>
                        <div className="card-footer text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <Link to="#" className="lh-1 align-middle link-secondary"><i className="ri-facebook-fill"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="lh-1 align-middle link-success"><i className="ri-whatsapp-line"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="lh-1 align-middle link-primary"><i className="ri-linkedin-fill"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="lh-1 align-middle link-danger"><i className="ri-slack-fill"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Header>
                            <button type="button" className="btn-close float-end fs-11" aria-label="Close"></button>
                            <h6 className="card-title mb-0">Employee Card</h6>
                        </Card.Header>
                        <Card.Body className="p-4 text-center">
                            <div className="mx-auto avatar-md mb-3">
                                <img src={avatar3} alt="" className="img-fluid rounded-circle" />
                            </div>
                            <h5 className="card-title mb-1">Jeffrey Montgomery</h5>
                            <p className="text-muted mb-0">UI/UX Designer</p>
                        </Card.Body>
                        <div className="card-footer text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <Link to="#" className="lh-1 align-middle link-secondary"><i className="ri-facebook-fill"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="lh-1 align-middle link-success"><i className="ri-whatsapp-line"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="lh-1 align-middle link-primary"><i className="ri-linkedin-fill"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#" className="lh-1 align-middle link-danger"><i className="ri-slack-fill"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={4} id="card-none1">
                    <Card>
                        <Card.Header>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <h6 className="card-title mb-0">Card with Spinner Loader</h6>
                                </div>
                                <div className="flex-shrink-0">
                                    <ul className="list-inline card-toolbar-menu d-flex align-items-center mb-0">
                                        <li className="list-inline-item">
                                            <Link className="align-middle" to="#" onClick={() => spinner('customer-loader')}>
                                                <i className="mdi mdi-refresh align-middle"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link className="align-middle minimize-card" to="#" onClick={() => setCol1(!col1)}>
                                                <i className="mdi mdi-plus align-middle plus"></i>
                                                <i className="mdi mdi-minus align-middle minus"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Button onClick={() => delthis('card-none1')} className="btn-close fs-10 align-middle"></Button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-preloader d-none" id='customer-loader'>
                                    <div className="card-status">
                                        <div className="spinner-border text-success"><span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Header>

                        <Collapse in={col1} className="card-body">
                            <div id="example-collapse-text">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2 text-muted">
                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates.
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <div className="flex-shrink-0">
                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2 text-muted">
                                        Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible.
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <div className="flex-shrink-0">
                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2 text-muted">
                                        This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard.
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4} id="card-none2">
                    <Card>
                        <Card.Header>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <h6 className="card-title mb-0">Card with Growing Spinner Loader</h6>
                                </div>
                                <div className="flex-shrink-0">
                                    <ul className="list-inline card-toolbar-menu d-flex align-items-center mb-0">
                                        <li className="list-inline-item">
                                            <Link className="align-middle" to="#" onClick={() => spinner("growing-reload")}>
                                                <i className="mdi mdi-refresh align-middle"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link className="align-middle minimize-card" to="#" onClick={() => setCol2(!col2)}>
                                                <i className="mdi mdi-plus align-middle plus"></i>
                                                <i className="mdi mdi-minus align-middle minus"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Button type="button" onClick={() => delthis('card-none2')} className="btn-close fs-10 align-middle"></Button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-preloader d-none" id='growing-reload'>
                                    <div className="card-status">
                                        <div className="spinner-grow text-danger">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Header>
                        <Collapse in={col2} className="card-body">
                            <div id="example-collapse-text">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2 text-muted">
                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates.
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <div className="flex-shrink-0">
                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2 text-muted">
                                        Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible.
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <div className="flex-shrink-0">
                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2 text-muted">
                                        This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard.
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4} id="card-none3">
                    <Card>
                        <Card.Header>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <h6 className="card-title mb-0">Card with Custom Loader</h6>
                                </div>
                                <div className="flex-shrink-0">
                                    <ul className="list-inline card-toolbar-menu d-flex align-items-center mb-0">
                                        <li className="list-inline-item">
                                            <Link className="align-middle" to="#" onClick={() => spinner('spinner3')}>
                                                <i className="mdi mdi-refresh align-middle"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link className="align-middle minimize-card" to="#" onClick={() => setCol3(!col3)}>
                                                <i className="mdi mdi-plus align-middle plus"></i>
                                                <i className="mdi mdi-minus align-middle minus"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Button type="button" onClick={() => delthis('card-none3')} className="btn-close fs-10 align-middle"></Button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-preloader d-none" id='spinner3'>
                                    <div className="card-status">
                                        <img src={spinner1} alt="" className="img-fluid custom-loader" />
                                    </div>
                                </div>
                            </div>
                        </Card.Header>
                        <Collapse in={col3} className="card-body">
                            <div id="example-collapse-text">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2 text-muted">
                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates.
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <div className="flex-shrink-0">
                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2 text-muted">
                                        Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible.
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <div className="flex-shrink-0">
                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2 text-muted">
                                        This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard.
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CardHeaderandFooter;