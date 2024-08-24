import React, { useState, useMemo, useEffect } from "react";
import { Col, Container, Row, Card, Button, Form, Breadcrumb, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Nouislider from "nouislider-react";
import { product } from "Common/data";

//img
import features1 from "assets/images/ecommerce/features/img-1.jpg";
import features2 from "assets/images/ecommerce/features/img-2.jpg";
import features3 from "assets/images/ecommerce/features/img-3.jpg";
import profilebg from 'assets/images/profile-bg.jpg';
import profileBg from "assets/images/profile-bg.jpg";
import Pagination from "./Pagination";
import { ProductNoui } from "./Homepage";

export const ProductSide = ({ cid, position, height, fileter, cxxl, isnone }: any) => {
    const isdisplay = isnone;
    //pagination
    const pagination: boolean = true;
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [currentpages, setCurrentpages] = useState<any>([]);
    const perPageData = 9;

    const handleClick = (e: any) => {
        setCurrentPage(Number(e.target.id));
    };
    const indexOfLast = currentPage * perPageData;
    const indexOfFirst = indexOfLast - perPageData;
    const currentdata = useMemo(() => product.slice(indexOfFirst, indexOfLast), [indexOfFirst, indexOfLast])
    useEffect(() => {
        setCurrentpages(currentdata)
    }, [currentPage, currentdata])
    const pageNumbers: any = [];

    for (let i = 1; i <= Math.ceil(product.length / perPageData); i++) {
        pageNumbers.push(i);
    }
    const handleprevPage = () => {
        let prevPage = currentPage - 1;
        setCurrentPage(prevPage);
    };
    const handlenextPage = () => {
        let nextPage = currentPage + 1;
        setCurrentPage(nextPage);
    };
    useEffect(() => {
        if (pageNumbers.length && pageNumbers.length < currentPage) {
            setCurrentPage(pageNumbers.length)
        }
    }, [currentPage, pageNumbers.length]);

    //product like function
    const Tooglelike = (event: any) => {
        if (event?.closest("button").classList.contains("active")) {
            event.closest("button").classList.remove("active")
        } else {
            event.closest("button").classList.add("active");
        }
    }
    //product view function
    const Toogleview = (event: any) => {
        if (event?.closest("button").classList.contains("active")) {
            event.closest("button").classList.remove("active")
        } else {
            event.closest("button").classList.add("active");
        }
    }

    return (
        <React.Fragment>
            <Row className={cid || ''} style={{ position: position, height: height }}>
                {
                    fileter && fileter.length > 0 ?
                        (fileter || [])?.map((item: any, inx: any) => {
                            return (
                                <Col key={inx} xxl={cxxl || ''} lg={4} md={6} className={`element-item seller ${item.category}`} data-category={item.category}>
                                    <Card className="overflow-hidden">
                                        <div className={`bg-${item.bg}-subtle rounded-top py-4`}>
                                            <div className="gallery-product">
                                                <Image src={item.img} alt="" style={{ maxHeight: 215, maxWidth: "100%" }} className="mx-auto d-block" />
                                            </div>
                                            <p className="fs-11 fw-medium badge bg-primary py-2 px-3 product-lable mb-0">{item.best || ''}</p>
                                            <div className="gallery-product-actions">
                                                <div className="mb-2">
                                                    <Button type="button" variant="danger" className="btn-sm custom-toggle" data-bs-toggle="button" onClick={(e) => Tooglelike(e.target)}>
                                                        <span className="icon-on"><i className="mdi mdi-heart-outline align-bottom fs-15"></i></span>
                                                        <span className="icon-off"><i className="mdi mdi-heart align-bottom fs-15"></i></span>
                                                    </Button>
                                                </div>

                                                <div>
                                                    <Button type="button" variant="success" className=" btn-sm custom-toggle" data-bs-toggle="button" onClick={(e) => Toogleview(e.target)}>
                                                        <span className="icon-on"><i className="mdi mdi-eye-outline align-bottom fs-15"></i></span>
                                                        <span className="icon-off"><i className="mdi mdi-eye align-bottom fs-15"></i></span>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="product-btn px-3">
                                                <Link to='/shop/shopingcard' className="btn btn-primary btn-sm w-75 add-btn"><i className="mdi mdi-cart me-1"></i> Add to cart</Link>
                                            </div>
                                        </div>
                                        <Card.Body className="card-body">
                                            <div>
                                                <Link to='/product-details'>
                                                    <h6 className="fs-15 lh-base text-truncate mb-0">{item.title}</h6>
                                                </Link>
                                                <div className="mt-3">
                                                    <span className="float-end">{item.ratting} <i className="ri-star-half-fill text-warning align-bottom"></i></span>
                                                    <h5 className="mb-0">{item.price} <span className="text-muted fs-12"><del>{item.deletePrice || ''}</del></span></h5>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                        : (<Row id="search-result-elem">
                            <Col lg={12}>
                                <div className="text-center py-5">
                                    <div className="avatar-lg mx-auto mb-4">
                                        <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                                            <i className="bi bi-search"></i>
                                        </div>
                                    </div>

                                    <h5>No matching records found</h5>
                                </div>
                            </Col>
                        </Row>)
                }
            </Row>
            {

                !isdisplay &&
                <Pagination
                    pagination={pagination}
                    pageNumbers={pageNumbers}
                    currentpages={currentpages}
                    currentPage={currentPage}
                    handleprevPage={handleprevPage}
                    handleClick={handleClick}
                    handlenextPage={handlenextPage}
                />
            }

        </React.Fragment>
    )
}

export const ProductGrid = ({ title }: any) => {
    return (
        <React.Fragment>
            <section className="ecommerce-about" style={{ backgroundImage: `url(${profilebg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="bg-overlay bg-primary" style={{ opacity: "0.85" }}></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center">
                                <h1 className="text-white mb-0"> {title}</h1>
                                <Breadcrumb bsPrefix="breadcrumb breadcrumb-light justify-content-center mt-4">
                                    <Breadcrumb.Item href="#">Product</Breadcrumb.Item>
                                    <Breadcrumb.Item href="#">Grid View</Breadcrumb.Item>
                                    <Breadcrumb.Item active aria-current="page">{title}</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export const ProductSelector = ({ handleratting, handledicount, handlecategory }: any) => {
    return (
        <React.Fragment>
            <Row >
                <Col lg={12} >
                    <Card >
                        <Card.Body className="p-4">
                            <Row className="gy-4">
                                <Col xl={3} md={6}>
                                    <div>
                                        <Form.Label>Category</Form.Label>
                                        <Form.Select aria-label="Category" onChange={(e) => handlecategory(e.target)}>
                                            <option>Select Category</option>
                                            <option value="Appliances">Appliances</option>
                                            <option value="Automotive Accessories">Automotive Accessories</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Fashion">Fashion</option>
                                            <option value="Furniture">Furniture</option>
                                            <option value="Grocery">Grocery</option>
                                            <option value="Kids">Kids</option>
                                            <option value="Watches">Watches</option>
                                        </Form.Select>
                                    </div>
                                </Col>

                                <Col xl={3} md={6}>
                                    <div>
                                        <Form.Label>Price</Form.Label>
                                        <div className="pb-3">
                                            <div id="slider-hide" data-slider-color="info" className="mb-4 noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                                                <Nouislider
                                                    range={{ min: 0, max: 2000 }}
                                                    start={[0, 2000]}
                                                    connect
                                                    // onSlide={onUpdate}
                                                    data-slider-color="info"
                                                    id="product-price-range"
                                                />
                                                <ProductNoui />
                                            </div>
                                            <div className="formCost d-none gap-2 align-items-center">
                                                <Form.Control className="form-control-sm" type="text" id="minCost" defaultValue="0" />
                                                <span className="fw-semibold text-muted">to</span>
                                                <Form.Control className="form-control-sm" type="text" id="maxCost" defaultValue="1000" />
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col xl={3} md={6}>
                                    <div>
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Select aria-label="Select rating" onChange={(e) => handleratting(e.target)}>
                                            <option>Select rating</option>
                                            <option value="1">1</option>
                                            <option value="2">2 Above</option>
                                            <option value="3">3 Above</option>
                                            <option value="4">4 Above</option>
                                        </Form.Select>
                                    </div>
                                </Col>

                                <Col xl={3} md={6}>
                                    <div>
                                        <Form.Label >Discount</Form.Label>
                                        <Form.Select aria-label="Discount" onChange={(e) => handledicount(e.target)}>
                                            <option value="10">10% or more</option>
                                            <option value="20">20% or more</option>
                                            <option value="30">30% or more</option>
                                            <option value="40">40% or more</option>
                                            <option value="45">50% or more</option>
                                        </Form.Select>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment >
    )
}

export const Selectores = ({ setSelect, searchProducts }: any) => {
    return (
        <Row className="align-items-center mb-4">
            <Col className="col-md-auto">
                <div className="search-box">
                    <Form.Control id="searchProductList" autoComplete="off" placeholder="Search Products..." onChange={(e) => searchProducts(e)} />
                    <i className="ri-search-line search-icon"></i>
                </div>
            </Col>
            <Col className="col-md">
                <div className="d-flex gap-2 justify-content-md-end">
                    <div className="flex-shrink-0">
                        <Form.Label htmlFor="sort-elem" className="col-form-label">Sort By:</Form.Label>
                    </div>
                    <div className="flex-shrink-0">
                        <Form.Select className="w-md" id="sort-elem" onClick={(e) => setSelect(e.target)}>
                            <option value="all">All</option>
                            <option value="lowtohigh">Low to High</option>
                            <option value="hightolow">High to Low</option>
                        </Form.Select>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export const CommonProduct = ({ cxxl, clg, cmd }: any) => {
    return (
        <Container fluid>
            <Row className="g-3">
                <Col xxl={cxxl || ''} lg={clg || ''} md={cmd || ''}>
                    <div className="product-banner-1 mt-3 mt-lg-0 rounded overflow-hidden">
                        <Image src={features3} alt="" fluid rounded />
                        <div className="bg-overlay blue"></div>
                        <div className="product-content p-4">
                            <p className="text-uppercase fw-semibold text-white mb-2">Up to 50-70%</p>
                            <h1 className="text-white lh-base ff-secondary display-6 display-xl-5"> Women's Sportwere Sales</h1>
                            <div className="product-btn mt-3 mt-xl-4">
                                <Link to="#" className="link-effect link-light fs-14">Shop Now <i className="bi bi-arrow-right ms-2"></i></Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xxl={cxxl || ''} lg={clg || ''} md={cmd || ''}>
                    <div className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden right">
                        <Image src={features2} alt="" fluid rounded />
                        <div className="bg-overlay"></div>
                        <div className="product-content p-4 text-end">
                            <p className="text-uppercase text-white fw-semibold mb-2">MEGA SALE</p>
                            <h1 className="text-white lh-base ff-secondary display-6 display-xl-5">Running Shoes Sales Up to 50%</h1>
                            <div className="product-btn mt-3 mt-xl-4">
                                <Link to="#" className="link-effect link-light fs-14">Shop Now <i className="bi bi-arrow-right ms-2"></i></Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xxl={cxxl || ''} lg={clg || ''} md={cmd || ''}>
                    <div className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden">
                        <Image src={features1} alt="" fluid rounded />
                        <div className="product-content p-4">
                            <p className="text-uppercase fw-semibold text-dark mb-2">Summer Sales</p>
                            <h1 className="lh-base ff-secondary display-6 display-xl-5">Trendy Fashion Clothes</h1>
                            <div className="product-btn mt-3 mt-xl-4">
                                <Link to='/products-grid/right' className="link-effect link-primary fs-14">Shop Now <i className="bi bi-arrow-right ms-2"></i></Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export const DefauilOffer = () => {
    return (
        <section className="section" style={{ backgroundImage: `url(${profileBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="bg-overlay bg-primary" style={{ opacity: "0.85" }}></div>
            <Container >
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <div className="text-center">
                            <h1 className="text-white lh-base text-capitalize">Don't miss out on special offers</h1>
                            <p className="text-white-75 fs-15 mb-4 pb-2">Never Miss Anything From Toner By Signing Up To Our Newsletter.</p>
                            <Form action="#">
                                <div className="position-relative ecommerce-subscript">
                                    <Form.Control type="email" className="rounded-pill border-0" placeholder="Enter your email" />
                                    <Button type="submit" className="btn btn-darken-primary rounded-pill">Subscript Now</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const PublishedProduct = ({ title, dicription }: any) => {
    return (
        <>
            <section className="term-condition bg-primary">
                <Container >
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center">
                                <h1 className="text-white mb-2">{title}</h1>
                                <p className="text-white-75 mb-0">{dicription}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="position-relative">
                <div className="svg-shape">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="1440" height="120" preserveAspectRatio="none" viewBox="0 0 1440 120">
                        <g mask="url(&quot;#SvgjsMask1039&quot;)" fill="none">
                            <rect width="1440" height="120" x="0" y="0" fill="var(--tb-primary)"></rect>
                            <path d="M 0,85 C 288,68.8 1152,20.2 1440,4L1440 120L0 120z" fill="var(--tb-body-bg)"></path>
                        </g>
                        <defs>
                            <mask id="SvgjsMask1039">
                                <rect width="1440" height="120" fill="#ffffff"></rect>
                            </mask>
                        </defs>
                    </svg>
                </div>
            </div>
        </>
    )
}