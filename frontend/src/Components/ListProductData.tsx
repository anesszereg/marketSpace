import React, { useState, useMemo, useEffect } from "react";
import { Card, Col, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const ListProductData = ({ listnoslider }: any) => {

    const pagination: boolean = true;
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [currentpages, setCurrentpages] = useState<any>([]);
    const perPageData = 5;
    const handleClick = (e: any) => {
        setCurrentPage(Number(e.target.id));
    };
    const indexOfLast = currentPage * perPageData;
    const indexOfFirst = indexOfLast - perPageData;
    const currentdata = useMemo(() => listnoslider.slice(indexOfFirst, indexOfLast), [listnoslider, indexOfFirst, indexOfLast]);

    useEffect(() => {
        setCurrentpages(currentdata)
    }, [currentPage, listnoslider, currentdata])
    const pageNumbers: any = [];

    for (let i = 1; i <= Math.ceil(listnoslider.length / perPageData); i++) {
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

    return (
        <React.Fragment>
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                <div className="search-box">
                    <Form.Control
                        type="text"
                        id="searchProductList"
                        autoComplete="off"
                        placeholder="Search Products..."
                    />
                    <i className="ri-search-line search-icon" />
                </div>
                <div className="flex-shrink-0 d-flex gap-2">
                    <div className="d-flex gap-2">
                        <div className="flex-shrink-0">
                            <Form.Label htmlFor="sort-elem" className="col-form-label">
                                Sort By:
                            </Form.Label>
                        </div>
                        <div className="flex-shrink-0">
                            <Form.Select className="w-md" id="sort-elem">
                                <option value="">All</option>
                                <option value="lowtohigh">Low to High</option>
                                <option value="hightolow">High to Low</option>
                            </Form.Select>
                        </div>
                    </div>
                </div>
            </div>
            <Row id="layout-noSidebar">
                <Col xl={12}>
                    <div id="product-list">
                        {
                            // currentdata && currentdata.length > 0 ?
                            (currentdata || [])?.map((item: any) => {
                                console.log("item", item.pr);

                                return (
                                    <Card className="ribbon-box" key={item.id}>
                                        {item.pr && <div className="ribbon ribbon-danger ribbon-shape">{item.pr}</div>}
                                        <Card.Body>
                                            <Row>
                                                <Col md={3} >
                                                    <div className="bg-light p-2 rounded-2 h-100">
                                                        <Image
                                                            src={item.img}
                                                            alt=""
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </Col>
                                                <Col className="col-md">
                                                    <div>
                                                        <div className="mb-2">
                                                            <span className="me-2">4.9</span>{" "}
                                                            <span>
                                                                <i className="ri-star-fill text-warning align-bottom" />
                                                            </span>
                                                        </div>
                                                        <Link to="#">
                                                            <h4 className="fs-16">{item.title}</h4>
                                                        </Link>
                                                        <p className="text-muted mb-3">
                                                            T-Shirt house best black boys T-Shirt fully cotton material
                                                            all size available hirt fully cotton material all
                                                            size available.
                                                        </p>
                                                        <div className="d-flex gap-1">

                                                            <h5 className="text-secondary mb-0">
                                                                $266.24
                                                                <span className="text-muted fs-13">
                                                                    <del>$354.99</del>
                                                                </span>
                                                            </h5>
                                                            <span className="badge badge-soft-danger align-middle ms-1">
                                                                Out of stock
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3">

                                                        <div className="d-flex gap-4">

                                                            <ul className="clothe-colors list-unstyled hstack gap-1 mb-0 flex-wrap">
                                                                <li>

                                                                    <Form.Control
                                                                        type="radio"
                                                                        name="color1"
                                                                        id="product-color-12"
                                                                    />
                                                                    <Form.Label
                                                                        className="avatar-xxs btn btn-secondary p-0 d-flex align-items-center justify-content-center rounded-circle"
                                                                        htmlFor="product-color-12"
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <Form.Control
                                                                        type="radio"
                                                                        name="color1"
                                                                        id="product-color-13"
                                                                    />
                                                                    <Form.Label
                                                                        className="avatar-xxs btn btn-light p-0 d-flex align-items-center justify-content-center rounded-circle"
                                                                        htmlFor="product-color-13"
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <Form.Control
                                                                        type="radio"
                                                                        name="color1"
                                                                        id="product-color-14"
                                                                    />
                                                                    <Form.Label
                                                                        className="avatar-xxs btn btn-dark p-0 d-flex align-items-center justify-content-center rounded-circle"
                                                                        htmlFor="product-color-14"
                                                                    />
                                                                </li>
                                                            </ul>
                                                            <ul className="clothe-size list-unstyled hstack gap-2 mb-0 flex-wrap">
                                                                <li>
                                                                    <Form.Control
                                                                        type="radio"
                                                                        name="sizes1"
                                                                        id="product-size-15"
                                                                    />
                                                                    <Form.Label
                                                                        className="avatar-xxs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                                        htmlFor="product-size-15"
                                                                    >
                                                                        s
                                                                    </Form.Label>
                                                                </li>
                                                                <li>
                                                                    <Form.Control
                                                                        type="radio"
                                                                        name="sizes1"
                                                                        id="product-size-16"
                                                                    />
                                                                    <Form.Label
                                                                        className="avatar-xxs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                                        htmlFor="product-size-16"
                                                                    >
                                                                        m
                                                                    </Form.Label>
                                                                </li>
                                                                <li>
                                                                    <Form.Control
                                                                        type="radio"
                                                                        name="sizes1"
                                                                        id="product-size-17"
                                                                    />
                                                                    <Form.Label
                                                                        className="avatar-xxs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                                        htmlFor="product-size-17"
                                                                    >
                                                                        l
                                                                    </Form.Label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 hstack gap-2 justify-content-end">

                                                        <Link to="/shop/shopingcard" className="btn btn-primary">

                                                            <i className="ri-shopping-cart-2-fill align-bottom me-1" />
                                                            Add To Cart
                                                        </Link>
                                                        <Link to="#" className="btn btn-soft-secondary">

                                                            <i className="ri-eye-fill align-bottom" />
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                            // :
                            // (<Row id="search-result-elem">
                            //     <Col lg={12}>
                            //         <div className="text-center py-5">
                            //             <div className="avatar-lg mx-auto mb-4">
                            //                 <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                            //                     <i className="bi bi-search"></i>
                            //                 </div>
                            //             </div>

                            //             <h5>No matching records found</h5>
                            //         </div>
                            //     </Col>
                            // </Row>)
                        }
                    </div>
                </Col>
            </Row>

            <Pagination
                pagination={pagination}
                pageNumbers={pageNumbers}
                currentpages={currentpages}
                currentPage={currentPage}
                handleprevPage={handleprevPage}
                handleClick={handleClick}
                handlenextPage={handlenextPage}
            />

        </React.Fragment>
    );
}

export default ListProductData;