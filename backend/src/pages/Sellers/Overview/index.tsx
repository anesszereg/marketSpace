import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import profilebgImg from "../../../assets/images/profile-bg.jpg";
import companyImg3 from "../../../assets/images/companies/img-3.png"

import avatar1 from "../../../assets/images/users/avatar-1.jpg";

import productsImg1 from "../../../assets/images/products/img-1.png";
import productsImg4 from "../../../assets/images/products/img-4.png";
import productsImg5 from "../../../assets/images/products/img-5.png";
import productsImg6 from "../../../assets/images/products/img-6.png";
import productsImg7 from "../../../assets/images/products/img-7.png";
import productsImg8 from "../../../assets/images/products/img-8.png";
import productsImg9 from "../../../assets/images/products/img-9.png";
import productsImg11 from "../../../assets/images/products/img-11.png";
import productsImg14 from "../../../assets/images/products/img-14.png";
import productsImg15 from "../../../assets/images/products/img-15.png";
import { Link } from 'react-router-dom';

const sellersOverview = [{
    id: 1,
    productName: "World's most expensive t- shirt",
    price: '$266.24',
    deletePrice: ' $354.99',
    rating: '4.9',
    isBestArrival: true,
    productsImg: productsImg8
},
{
    id: 2,
    productName: "Like Style Women Black Handbag",
    price: '$742.00',
    rating: '4.2 ',
    isBestArrival: false,
    productsImg: productsImg15
},
{
    id: 3,
    productName: "Black Horn Backpack For Men Bags 30 L Backpack",
    price: '$112.50',
    deletePrice: ' $150.00',
    rating: '3.8',
    isBestArrival: true,
    productsImg: productsImg1
},
{
    id: 4,
    productName: "Lace-Up Casual Shoes For Men",
    price: '$229.00',
    rating: '4.0',
    isBestArrival: false,
    productsImg: productsImg5
}, {
    id: 5,
    productName: "Sangria Girls Mint Green & Off-White Solid Open Toe Flats",
    price: '$24.07',
    deletePrice: '$96.26',
    rating: '4.7',
    isBestArrival: true,
    productsImg: productsImg4
}, {
    id: 6,
    productName: "Innovative education book",
    price: '$96.26',
    rating: '4.9',
    isBestArrival: false,
    productsImg: productsImg7
}, {
    id: 7,
    productName: "Striped High Neck Casual Men Orange Sweater",
    price: '$62.40',
    deletePrice: '$120.00',
    rating: '4.4',
    isBestArrival: false,
    productsImg: productsImg6
}, {
    id: 8,
    productName: "Urban Monkey Caps",
    price: '$194.65',
    deletePrice: '$229.00',
    rating: '4.9',
    isBestArrival: false,
    productsImg: productsImg9
}, {
    id: 9,
    productName: "Plastic Designer Cafe Chair",
    price: '$232.24',
    deletePrice: '$354.99',
    rating: '4.2',
    isBestArrival: false,
    productsImg: productsImg14
}, {
    id: 10,
    productName: "Stylish Collar Full Sleeve Tshirt",
    price: '$160.00',
    deletePrice: '$245.00s',
    rating: '4.2',
    isBestArrival: false,
    productsImg: productsImg11
}]

const bookmarkProduct = (e: any) => {
    const ele = e.target.closest('button')
    if (ele.classList.contains("active")) {
        ele.classList.remove("active")
    } else {
        ele.classList.add("active")
    }
}

const SellersOverview = () => {

    document.title = "Overview - Sellers | Toner eCommerce + Admin React Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Row>
                        <Col lg={12}>
                            <Card className="border-0 border-bottom border-bottom-dashed shadow-none mx-n4 mt-n4">
                                <Card.Body className="profile-basic position-relative" style={{ backgroundImage: `url(${profilebgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                    <div className="bg-primary bg-opacity-75 position-absolute start-0 end-0 top-0 bottom-0"></div>
                                </Card.Body>
                                <Card.Body className="position-relative mt-n3">
                                    <div className="mt-n5">
                                        <div className="avatar-lg">
                                            <div className="avatar-title bg-white shadow rounded">
                                                <img src={companyImg3} alt="" className="avatar-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="pt-0">
                                    <Row className="justify-content-between gy-4">
                                        <Col xl={5} md={7}>
                                            <h5 className="mb-2">Zibra Fashion Ltd <i className="ph-circle-wavy-check-fill text-primary align-top fs-15"></i></h5>
                                            <p><b>Since: 2015</b>. Selling clothes & Other Accessories</p>
                                            <div className="mb-2 text-muted">
                                                <i className="bi bi-geo-alt align-middle me-1"></i> Phoenix, USA
                                            </div>

                                            <div className="mb-2 text-muted">
                                                <i className="bi bi-envelope align-middle me-1"></i> zibra@fashion.com
                                            </div>
                                            <div className="text-muted">
                                                <i className="bi bi-globe align-middle me-1"></i> www.zibrafashion.com
                                            </div>
                                        </Col>
                                        <Col xl={3} md={5}>
                                            <div className="d-flex flex-column h-100">
                                                <div className="d-flex justify-content-end gap-3 mb-2">
                                                    <div className="text-end">
                                                        <h5 className="fs-18 mb-1">Edward Diana</h5>
                                                        <p className="text-muted mb-2">Owner & CEO</p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <img src={avatar1} alt="" className="avatar-sm rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="text-end mt-auto">
                                                    <Button className="btn btn-info">Contact Us</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="g-3 align-items-center mb-4">
                        <Col lg={3} className="me-auto">
                            <h5 className="fs-17 mb-0">Products by seller</h5>
                        </Col>
                        <Col lg={2}>
                            <div className="search-box">
                                <input type="text" className="form-control search" placeholder="Search for products..." />
                                <i className="ri-search-line search-icon"></i>
                            </div>
                        </Col>
                        <Col className="col-lg-auto">
                            <Link to="/product-create" className="btn btn-primary">Add Product</Link>
                        </Col>
                    </Row>

                    <Row className="row-cols-xxl-5 row-cols-md-2 row-cols-1">
                        {(sellersOverview || []).map((item: any, key: number) => (
                            <Col key={key}>
                                <Card className="overflow-hidden element-item">
                                    <div className="bg-light py-4">
                                        <div className="gallery-product">
                                            <img src={item.productsImg} alt="" style={{ maxHeight: "215px", maxWidth: "100%" }} className="mx-auto d-block" />
                                        </div>
                                        {item.isBestArrival && <p className="fs-12 fw-medium badge bg-danger py-2 px-3 product-lable mb-0 align-middle">Best Arrival</p>}
                                        <div className="gallery-product-actions">
                                            <div className="mb-2">
                                                <Button variant='danger' className="avatar-xs custom-toggle" data-bs-toggle="button" onClick={(e) => bookmarkProduct(e)}>
                                                    <span className="avatar-title">
                                                        <span className="icon-on"><i className="mdi mdi-heart-outline align-bottom fs-15"></i></span>
                                                        <span className="icon-off"><i className="mdi mdi-heart align-bottom fs-15"></i></span>
                                                    </span>
                                                </Button>
                                            </div>
                                            <div>
                                                <Button variant='success' className="avatar-xs custom-toggle" data-bs-toggle="button" onClick={(e) => bookmarkProduct(e)}>
                                                    <span className="avatar-title">
                                                        <span className="icon-on"><i className="mdi mdi-eye-outline align-bottom fs-15"></i></span>
                                                        <span className="icon-off"><i className="mdi mdi-eye align-bottom fs-15"></i></span>
                                                    </span>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="product-btn px-3">
                                            <Link to="#!" className="btn btn-primary btn-sm w-75 add-btn"><i className="mdi mdi-cart me-1"></i> Add to Cart</Link>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <div>
                                            <ul className="clothe-colors list-unstyled hstack gap-1 mb-3 flex-wrap d-none">
                                                <li>
                                                    <input type="radio" name="sizes1" id="product-color-12" />
                                                    <label className="avatar-xxs border border-2 border-white btn btn-success p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="product-color-12"></label>
                                                </li>
                                                <li>
                                                    <input type="radio" name="sizes1" id="product-color-13" />
                                                    <label className="avatar-xxs border border-2 border-white btn btn-info p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="product-color-13"></label>
                                                </li>
                                                <li>
                                                    <input type="radio" name="sizes1" id="product-color-14" />
                                                    <label className="avatar-xxs border border-2 border-white btn btn-warning p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="product-color-14"></label>
                                                </li>
                                                <li>
                                                    <input type="radio" name="sizes1" id="product-color-15" />
                                                    <label className="avatar-xxs border border-2 border-white btn btn-danger p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="product-color-15"></label>
                                                </li>
                                            </ul>
                                            <Link to="/product-overview">
                                                <h6 className="fs-18 lh-base text-truncate mb-0 text-capitalize">{item.productName}</h6>
                                            </Link>
                                            <div className="mt-3">
                                                <span className="float-end">4.9 <i className="ri-star-half-fill text-warning align-bottom"></i></span>
                                                <h5 className="mb-0 fs-16">{item.price} <span className="text-muted fs-14">{item.deletePrice && <del>${item.deletePrice}</del>}</span></h5>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>))}
                    </Row>

                    <Row className="g-0 text-center text-sm-start align-items-center mb-3">
                        <Col sm={6}>
                            <div>
                                <p className="mb-sm-0">Showing <b>1</b> to <b>10</b> of <b>18</b> entries</p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <ul className="pagination pagination-separated justify-content-center justify-content-sm-end flex-wrap gap-1 gap-sm-0 mb-sm-0">
                                <li className="page-item disabled"> <Link to="#" className="page-link">Previous</Link> </li>
                                <li className="page-item active"> <Link to="#" className="page-link">1</Link> </li>
                                <li className="page-item "> <Link to="#" className="page-link">2</Link> </li>
                                <li className="page-item"> <Link to="#" className="page-link">3</Link> </li>
                                <li className="page-item"> <Link to="#" className="page-link">4</Link> </li>
                                <li className="page-item"> <Link to="#" className="page-link">5</Link> </li>
                                <li className="page-item"> <Link to="#" className="page-link">Next</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default SellersOverview;