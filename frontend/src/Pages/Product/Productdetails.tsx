import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, OverlayTrigger, Row, Tab, Tooltip, Nav, Table, ProgressBar, Breadcrumb, Form, Image, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import SimpleBar from "simplebar-react";
//scss
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

//components
import { descriptionData, productInterestedCard, productprogress, sliderProduct } from "Common/data";
import { BrandedProduct } from 'Components/ShopTopBar';
import { CommonService } from "Components/CommonService";
import EmailClothe from "Pages/Catalog/EmailClothe";

//img
import profileBg from "assets/images/profile-bg.jpg";
import avatar5 from "assets/images/users/avatar-5.jpg";
import avatar1 from "assets/images/users/avatar-1.jpg";
import avatar3 from 'assets/images/users/avatar-3.jpg';
import avatar8 from "assets/images/users/avatar-8.jpg";

const Productdetails = () => {
    const [sliderImg, setSliderImg] = useState(sliderProduct);
    const [count, setCount] = useState(0);

    const handleSetImg = (id: any) => {
        setSliderImg(sliderProduct.filter((selectImg: any) => selectImg.id === id));
        console.log("sliderImg", sliderImg);
    }

    //tooltip
    const renderTooltip = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            Terms & Conditions
        </Tooltip>
    );

    //like button 
    const handleLikeIcone = (event: any) => {
        if (event.closest("button").classList.contains('active')) {
            event.closest("button").classList.remove('active')
        } else {
            event.closest("button").classList.add('active')
        }
    }
    return (
        <React.Fragment>
            <section
                className="ecommerce-about"
                style={{
                    backgroundImage: `url(${profileBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="bg-overlay bg-primary" style={{ opacity: "0.85" }} />
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center">
                                <h1 className="text-white mb-0">Product Details</h1>
                                <Breadcrumb bsPrefix="breadcrumb breadcrumb-light justify-content-center mt-4">
                                    <Breadcrumb.Item href="#">Product</Breadcrumb.Item>
                                    <Breadcrumb.Item active aria-current="page"> Product Details </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </Col>
                        {/*end col*/}
                    </Row>
                    {/*end row*/}
                </Container>
                {/*end container*/}
            </section>
            <section className="section">
                <Container>
                    <Row className="gx-2">
                        <Col lg={6} >
                            <Row >
                                <Col md={2}>
                                    <div
                                        className="swiper productSwiper mb-3 mb-lg-0 swiper-initialized swiper-vertical swiper-pointer-events swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs"
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-6100bf53c3db1675b"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(0px, 0px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            {(sliderProduct || [])?.map((item, idx) => {
                                                return (
                                                    <div key={idx} className="swiper-slide swiper-slide-thumb-active swiper-slide-visible swiper-slide-next" role="group" aria-label={`${item.id} / 5 `} style={{ height: "105px", marginBottom: "10px" }}>
                                                        <div className="product-thumb rounded cursor-pointer">
                                                            <Image src={item.img} alt="" fluid onClick={() => handleSetImg(item.id)} />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                </Col>
                                {/*end col*/}
                                <Col md={10}>
                                    <div className="bg-light rounded-2 position-relative ribbon-box overflow-hidden">
                                        <div className="ribbon ribbon-danger ribbon-shape trending-ribbon">
                                            <span className="trending-ribbon-text">Trending</span>
                                            <i className="ri-flashlight-fill text-white align-bottom float-end ms-1" />
                                        </div>

                                        <Swiper
                                            // onSwiper={setThumbsSwiper}
                                            rewind={true}
                                            navigation={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="swiper productSwiper2 swiper-backface-hidden"
                                        >
                                            {
                                                (sliderImg || [])?.map((item) => {
                                                    return (
                                                        <SwiperSlide key={item.id}>
                                                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={item.id} role="group" aria-label={`${item.id} / 5`} style={{ width: "458px", marginRight: "10px" }}>
                                                                <Image src={item.img} alt="" fluid />
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                        </Swiper>


                                    </div>
                                </Col>
                                {/*end col*/}
                                <Col lg={12} >
                                    <div className="mt-3">
                                        <div className="hstack gap-2">
                                            <Button variant="success" className="btn btn-hover w-100"> <i className="bi bi-basket2 me-2" /> Add To Cart</Button>
                                            <Button variant="primary" className="btn btn-hover w-100">  <i className="bi bi-cart2 me-2" /> Buy Now</Button>
                                            <Button
                                                className="btn btn-soft-danger custom-toggle btn-hover"
                                                data-bs-toggle="button"
                                                aria-pressed="false"
                                                onClick={(ele: any) => handleLikeIcone(ele.target)}
                                            >
                                                <span className="icon-on">
                                                    <i className="ri-heart-line" />
                                                </span>
                                                <span className="icon-off">
                                                    <i className="ri-heart-fill" />
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                                {/*end col*/}
                            </Row>
                            {/*end row*/}
                        </Col>
                        {/*end col*/}
                        <Col lg={5} className="ms-auto">
                            <div className="ecommerce-product-widgets mt-4 mt-lg-0">
                                <div className="mb-4">
                                    <div className="d-flex gap-3 mb-2">
                                        <div className="fs-15 text-warning">
                                            <i className="ri-star-fill align-bottom" />
                                            <i className="ri-star-fill align-bottom" />
                                            <i className="ri-star-fill align-bottom" />
                                            <i className="ri-star-fill align-bottom" />
                                            <i className="ri-star-half-fill align-bottom" />
                                        </div>
                                        <span className="fw-medium"> (50 Review)</span>
                                    </div>
                                    <h4 className="lh-base mb-1">
                                        Opinion Striped Round Neck Green T-shirt
                                    </h4>
                                    <p className="text-muted mb-4">
                                        The best part about stripped t shirt denim &amp; white sneakers or
                                        wear it with a cool chinos and blazer to dress up  <Link to={"#"} className="link-info">
                                            Read More
                                        </Link>
                                    </p>
                                    <h5 className="fs-24 mb-4">
                                        $185.79
                                        <span className="text-muted fs-14">
                                            <del>$280.99</del>
                                        </span>
                                        <span className="fs-14 ms-2 text-danger"> (50% off)</span>
                                    </h5>
                                    <ul className="list-unstyled vstack gap-2">
                                        <li>
                                            <i className="bi bi-check2-circle me-2 align-middle text-success" />
                                            In stock
                                        </li>
                                        <li>
                                            <i className="bi bi-check2-circle me-2 align-middle text-success" />
                                            Free delivery available
                                        </li>
                                        <li>
                                            <i className="bi bi-check2-circle me-2 align-middle text-success" />
                                            Sales 10% Off Use Code: <b>FASHION10</b>
                                        </li>
                                    </ul>
                                    <h6 className="fs-14 text-muted mb-3">Available offers :</h6>
                                    <ul className="list-unstyled vstack gap-2 mb-0">
                                        <li>
                                            <div className="d-flex gap-3">
                                                <div className="flex-shrink-0">
                                                    <i className="bi bi-tag-fill text-success align-middle fs-15" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>Bank Offer</b> 10% instant discount on Federal Bank Debit
                                                    Cards, up to ₹3000 on orders of ₹5,000 and above
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={renderTooltip}
                                                    >
                                                        <Link to='#'> T C</Link>
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex gap-3">
                                                <div className="flex-shrink-0">
                                                    <i className="bi bi-tag-fill text-success align-middle fs-15" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <b>Bank Offer</b> 10% instant discount on Federal Bank Debit
                                                    Cards, up to ₹3000 on orders of ₹5,000 and above
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={renderTooltip}
                                                    >
                                                        <Link to='#'> T C</Link>
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <h5 className="fs-15 mb-0">Quanty:</h5>
                                    <div className="input-step ms-2">
                                        <Button className="minus" onClick={() => setCount(count - 1)}>
                                            –
                                        </Button>
                                        <Form.Control
                                            type="number"
                                            className="product-quantity1"
                                            value={count > 0 ? count : 0}
                                            min={0}
                                            max={100}
                                            readOnly
                                        />
                                        <Button className="plus" onClick={() => setCount(count + 1)}>
                                            +
                                        </Button>
                                    </div>
                                </div>
                                <Row className="gy-3">
                                    <Col md={6}>
                                        <div>
                                            <h6 className="fs-14 fw-medium text-muted">Sizes:</h6>
                                            <ul className="clothe-size list-unstyled hstack gap-2 mb-0 flex-wrap">
                                                <li>

                                                    <Form.Control
                                                        type="radio"
                                                        name="sizes7"
                                                        id="product-color-72"
                                                    />
                                                    <Form.Label
                                                        className="avatar-xs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                        htmlFor="product-color-72"
                                                    >
                                                        s
                                                    </Form.Label>
                                                </li>
                                                <li>

                                                    <Form.Control
                                                        type="radio"
                                                        name="sizes7"
                                                        id="product-color-73"
                                                    />
                                                    <Form.Label
                                                        className="avatar-xs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                        htmlFor="product-color-73"
                                                    >
                                                        m
                                                    </Form.Label>
                                                </li>
                                                <li>

                                                    <Form.Control
                                                        type="radio"
                                                        name="sizes7"
                                                        defaultChecked
                                                        id="product-color-74"
                                                    />
                                                    <Form.Label
                                                        className="avatar-xs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                        htmlFor="product-color-74"
                                                    >
                                                        l
                                                    </Form.Label>
                                                </li>
                                                <li>

                                                    <Form.Control
                                                        type="radio"
                                                        name="sizes7"
                                                        id="product-color-75"
                                                    />
                                                    <Form.Label
                                                        className="avatar-xs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                        htmlFor="product-color-75"
                                                    >
                                                        xl
                                                    </Form.Label>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <h6 className="fs-14 fw-medium text-muted">Colors: </h6>
                                        <ul className="clothe-colors list-unstyled hstack gap-1 mb-0 flex-wrap ms-2">
                                            <li>
                                                <Form.Control type="radio" name="sizes" id="product-color-2" />
                                                <Form.Label
                                                    className="avatar-xs btn btn-info p-0 d-flex align-items-center justify-content-center rounded-circle"
                                                    htmlFor="product-color-2"
                                                />
                                            </li>
                                            <li>
                                                <Form.Control type="radio" name="sizes" id="product-color-3" />
                                                <Form.Label
                                                    className="avatar-xs btn btn-light p-0 d-flex align-items-center justify-content-center rounded-circle"
                                                    htmlFor="product-color-3"
                                                />
                                            </li>
                                            <li>
                                                <Form.Control
                                                    type="radio"
                                                    name="sizes"
                                                    id="product-color-4"
                                                    defaultChecked
                                                />
                                                <Form.Label
                                                    className="avatar-xs btn btn-primary p-0 d-flex align-items-center justify-content-center rounded-circle"
                                                    htmlFor="product-color-4"
                                                />
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        {/*end col*/}
                    </Row>
                    {/*end row*/}
                </Container>
                {/*end container*/}
            </section >
            <section className="section pt-0">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="Description">
                                <Row>
                                    <Col sm={12}>
                                        <Nav variant="tabs" className="nav-tabs-custom mb-3">
                                            <Nav.Item as="li">
                                                <Nav.Link as="a" eventKey="Description"> Description</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link as="a" eventKey="Ratings">Ratings Reviews</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="Description">
                                                <div className="tab-pane active show" id="profile1" role="tabpanel">
                                                    <Table className="table-sm table-borderless align-middle">
                                                        <tbody>
                                                            {
                                                                (descriptionData || [])?.map((item, idx) => {
                                                                    return (
                                                                        <tr key={idx}>
                                                                            <th>{item.thead}</th>
                                                                            <td>{item.tdata}</td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                            <tr>
                                                                <th>Color</th>
                                                                <td>
                                                                    <div className="avatar-xs">
                                                                        <div className="avatar-title rounded" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <p className="text-muted fs-15">
                                                        Clothing serves many purposes: it can serve as protection from the
                                                        elements, rough surfaces, sharp stones, rash-causing plants,
                                                        insect bites, by providing a barrier between the skin and the
                                                        environment. It is worth noting that a man's style goes beyond his
                                                        outward appearance. Style is about more than the clothes you wear.
                                                        It's who you are on the inside and how you present yourself to the
                                                        outside world. It's having appreciation and cultivating gratitude.
                                                    </p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Ratings">
                                                <div className="tab-pane show" id="profile2" role="tabpanel">
                                                    <div>
                                                        <div className="d-flex flex-wrap gap-4 justify-content-between align-items-center mt-4">
                                                            <div className="flex-shrink-0">
                                                                <h5 className="fs-15 mb-3 fw-medium">Total Rating's</h5>
                                                                <h2 className="fw-bold mb-3">10.14k</h2>
                                                                <p className="text-muted mb-0">
                                                                    Growth in reviews on this year
                                                                </p>
                                                            </div>
                                                            <hr className="vr" />
                                                            <div className="flex-shrink-0">
                                                                <h5 className="fs-15 mb-3 fw-medium">Average Rating</h5>
                                                                <h2 className="fw-bold mb-3">
                                                                    5.6
                                                                    <span className="fs-16 align-middle text-warning ms-2">
                                                                        <i className="ri-star-fill" />
                                                                        <i className="ri-star-fill" />
                                                                        <i className="ri-star-fill" />
                                                                        <i className="ri-star-fill" />
                                                                        <i className="ri-star-half-fill" />
                                                                    </span>
                                                                </h2>
                                                                <p className="text-muted mb-0">Average rating on this year</p>
                                                            </div>
                                                            <hr className="vr" />
                                                            <div className="flex-shrink-0 w-xl">
                                                                {
                                                                    (productprogress || [])?.map((item: any, idx: number) => {
                                                                        return (
                                                                            <Row className="align-items-center g-3 align-items-center mb-2" key={idx}>
                                                                                <Col className="col-auto">
                                                                                    <div>
                                                                                        <h6 className="mb-0 text-muted fs-13">
                                                                                            <i className="ri-star-fill text-warning me-1 align-bottom" />
                                                                                            {item.num}
                                                                                        </h6>
                                                                                    </div>
                                                                                </Col>
                                                                                <Col >
                                                                                    <div>
                                                                                        <ProgressBar now={item.value} variant={`${item.color}`} className="progress animated-progress progress-sm" />
                                                                                    </div>
                                                                                </Col>
                                                                                <Col className="col-auto">
                                                                                    <div>
                                                                                        <h6 className="mb-0 text-muted fs-13">{item.progressnum}</h6>
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                        <SimpleBar className="mt-4" style={{ maxHeight: "350px" }} >
                                                            <div className="d-flex p-3 border-bottom border-bottom-dashed">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <Image
                                                                        className="avatar-xs"
                                                                        src={avatar5}
                                                                        alt=""
                                                                        roundedCircle
                                                                    />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex mb-3">
                                                                        <div className="flex-grow-1">
                                                                            <div>
                                                                                <div className="mb-2 fs-12">
                                                                                    <span>
                                                                                        <i className="ri-star-fill text-warning align-bottom" />
                                                                                    </span>
                                                                                    <span>
                                                                                        <i className="ri-star-fill text-warning align-bottom" />
                                                                                    </span>
                                                                                    <span>
                                                                                        <i className="ri-star-fill text-warning align-bottom" />
                                                                                    </span>
                                                                                    <span>
                                                                                        <i className="ri-star-line text-warning align-bottom" />
                                                                                    </span>
                                                                                    <span>
                                                                                        <i className="ri-star-line text-warning align-bottom" />
                                                                                    </span>
                                                                                </div>
                                                                                <h6 className="mb-0">Donald Risher</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            <p className="mb-0 text-muted">
                                                                                <i className="ri-calendar-event-fill me-2 align-middle" />
                                                                                Aug 16, 2022
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="lh-base fs-15">
                                                                            Design Quality
                                                                        </h5>
                                                                        <p className="mb-0">
                                                                            " This is an incredible framework worth so
                                                                            much in the right hands! Nowhere else are you
                                                                            going to get so much flexibility and great
                                                                            code for a few dollars. Highly recommend
                                                                            purchasing today! Like right now! "
                                                                        </p>
                                                                    </div>
                                                                    <div className="d-flex mt-4">
                                                                        <div className="flex-shrink-0 me-3">
                                                                            <Image
                                                                                className="avatar-xs"
                                                                                src={avatar1}
                                                                                alt=""
                                                                                roundedCircle
                                                                            />
                                                                        </div>
                                                                        <div className="flex-grow-1">
                                                                            <div className="d-flex mb-3">
                                                                                <div className="flex-grow-1">
                                                                                    <div>
                                                                                        <h6 className="mb-2">Jansh Brown</h6>
                                                                                        <p className="mb-0 text-muted fs-13">
                                                                                            Admin
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex-shrink-0">
                                                                                    <p className="mb-0 text-muted">
                                                                                        <i className="ri-calendar-event-fill me-2 align-middle" />
                                                                                        Aug 16, 2022
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <p className="mb-0">Thank You</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex p-3 border-bottom border-bottom-dashed">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <Image
                                                                        className="avatar-xs"
                                                                        src={avatar3}
                                                                        alt=""
                                                                        roundedCircle
                                                                    />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex mb-3">
                                                                        <div className="flex-grow-1">
                                                                            <div>
                                                                                <div className="mb-2 fs-12">
                                                                                    <span>
                                                                                        <i className="ri-star-fill text-warning align-bottom" />
                                                                                    </span>
                                                                                    <span>
                                                                                        <i className="ri-star-fill text-warning align-bottom" />
                                                                                    </span>
                                                                                    <span>
                                                                                        <i className="ri-star-fill text-warning align-bottom" />
                                                                                    </span>
                                                                                    <span>
                                                                                        <i className="ri-star-fill text-warning align-bottom" />
                                                                                    </span>
                                                                                    <span>
                                                                                        <i className="ri-star-fill text-warning align-bottom" />
                                                                                    </span>
                                                                                </div>
                                                                                <h6 className="mb-0">Richard Smith</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            <p className="mb-0 text-muted">
                                                                                <i className="ri-calendar-event-fill me-2 align-middle" />
                                                                                Dec 10, 2022
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="lh-base fs-15">
                                                                            Feature Availability
                                                                        </h5>
                                                                        <p className="mb-0">
                                                                            " Hello everyone, I would like to suggest here
                                                                            two contents that you could create. Course
                                                                            pages and blog pages. In them you could insert
                                                                            the listing and management of courses and
                                                                            listing and management of blog. The theme is
                                                                            perfect, one of the best purchases I've ever
                                                                            made. "
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex p-3 border-bottom border-bottom-dashed mb-3">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <Image
                                                                        className="avatar-xs"
                                                                        src={avatar8}
                                                                        alt=""
                                                                        roundedCircle
                                                                    />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex mb-3">
                                                                        <div className="flex-grow-1">
                                                                            <div>
                                                                                <div className="mb-2 fs-12">
                                                                                    <span>
                                                                                        <i className="ri-star-fill text-warning align-bottom" />
                                                                                    </span>
                                                                                    <span>
                                                                                        <i className="ri-star-fill text-warning align-bottom" />
                                                                                    </span>
                                                                                    <span>
                                                                                        <i className="ri-star-fill text-warning align-bottom" />
                                                                                    </span>
                                                                                    <span>
                                                                                        <i className="ri-star-half-fill text-warning align-bottom" />
                                                                                    </span>
                                                                                    <span>
                                                                                        <i className="ri-star-line text-warning align-bottom" />
                                                                                    </span>
                                                                                </div>
                                                                                <h6 className="mb-0">Pauline Moll</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            <p className="mb-0 text-muted">
                                                                                <i className="ri-calendar-event-fill me-2 align-middle" />
                                                                                Aug 16, 2022
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="lh-base fs-15">
                                                                            Design Quality
                                                                        </h5>
                                                                        <p className="mb-0">
                                                                            "We have used your other templates as well and
                                                                            seems it's amazing with the design and code
                                                                            quality. Wish you best for the future updates.
                                                                            Keep updated you will be #1 in near future. "
                                                                        </p>
                                                                    </div>
                                                                    <div className="d-flex mt-4">
                                                                        <div className="flex-shrink-0 me-3">
                                                                            <Image
                                                                                className="avatar-xs"
                                                                                src={avatar1}
                                                                                alt=""
                                                                                roundedCircle
                                                                            />
                                                                        </div>
                                                                        <div className="flex-grow-1">
                                                                            <div className="d-flex mb-3">
                                                                                <div className="flex-grow-1">
                                                                                    <div>
                                                                                        <h6 className="mb-2">Jansh Brown</h6>
                                                                                        <p className="mb-0 text-muted fs-13">
                                                                                            Admin
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex-shrink-0">
                                                                                    <p className="mb-0 text-muted">
                                                                                        <i className="ri-calendar-event-fill me-2 align-middle" />
                                                                                        Aug 16, 2022
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <p className="mb-0">Thank You</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SimpleBar>

                                                        <div className="pt-3">
                                                            <h5 className="fs-18">Add a Review</h5>
                                                            <div>
                                                                <Form action="#">
                                                                    <div className="d-flex align-items-center mb-3">
                                                                        <span className="fs-14">Your rating:</span>
                                                                        <div className="ms-3">
                                                                            <span className="fs-14">
                                                                                <i className="ri-star-fill text-warning align-bottom" />
                                                                            </span>
                                                                            <span className="fs-14">
                                                                                <i className="ri-star-fill text-warning align-bottom" />
                                                                            </span>
                                                                            <span className="fs-14">
                                                                                <i className="ri-star-fill text-warning align-bottom" />
                                                                            </span>
                                                                            <span className="fs-14">
                                                                                <i className="ri-star-fill text-warning align-bottom" />
                                                                            </span>
                                                                            <span className="fs-14">
                                                                                <i className="ri-star-half-fill text-warning align-bottom" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <Form.Control
                                                                            name="your-name"
                                                                            placeholder="Title"
                                                                            type="text"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <Form.Control
                                                                            as="textarea"
                                                                            name="your-commemt"
                                                                            placeholder="Enter your comments & reviews"
                                                                            rows={4}
                                                                            defaultValue={""}
                                                                        />
                                                                    </div>
                                                                    <div className="text-end">
                                                                        <Button
                                                                            variant="primary"
                                                                            className="btn-hover"
                                                                            type="submit"
                                                                            value="Submit"
                                                                        >
                                                                            Send Review
                                                                            <i className="ri-send-plane-2-line align-bottom ms-1" />
                                                                        </Button>
                                                                    </div>
                                                                </Form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                        {/*end col*/}
                    </Row>
                    {/*end row*/}
                </Container>
            </section>

            <div className="position-relative">
                <Container>
                    <Row >
                        <Col lg={12}>
                            <h4 className="mb-4">You might be interested in</h4>
                        </Col>
                    </Row>
                    <Row className="gy-3">
                        {
                            (productInterestedCard || [])?.map((item, idx) => {
                                return (
                                    <Col lg={4} key={idx}>
                                        <Card as='a'
                                            href='/products-grid/right'
                                            className="card mb-3 card-animate stretched-link"
                                        >
                                            <Row className="g-0">
                                                <Col sm={4}>
                                                    <Image
                                                        src={item.img}
                                                        className="rounded-start h-100 object-fit-cover"
                                                        alt="..."
                                                        fluid
                                                    />
                                                </Col>
                                                <Col sm={8}>
                                                    <Card.Body className="h-100 d-flex flex-column">
                                                        <h4 className={item.class}>{item.title}</h4>
                                                        <p className="card-text text-muted">{item.dic}</p>
                                                        <div className="mt-auto">
                                                            <div className={`btn btn-soft-${item.bg} btn-sm`}>Shop Now</div>
                                                        </div>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
            <BrandedProduct title="Similar Products" />
            <EmailClothe />
            <CommonService />
        </React.Fragment >
    )
}

export default Productdetails;