import { Link } from "react-router-dom";
import React, { useState, useMemo, useEffect } from "react";
import { Form, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { filterProduct } from "Common/data";
import Pagination from "Components/Pagination";

const CatalogCollection = ({ cxxl, cxl, clg, cmd, cheight, filterList }: any) => {
    //select
    const [select, setSelect] = useState("all");
    const pagination: boolean = true;
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [currentpages, setCurrentpages] = useState<any>([]);
    const perPageData = 9;
    const handleClick = (e: any) => {
        setCurrentPage(Number(e.target.id));
    };
    const indexOfLast = currentPage * perPageData;
    const indexOfFirst = indexOfLast - perPageData;
    const currentdata = useMemo(() => filterList.slice(indexOfFirst, indexOfLast), [filterList, indexOfFirst, indexOfLast]);

    useEffect(() => {
        setCurrentpages(currentdata)
    }, [currentPage, filterList, currentdata])
    const pageNumbers: any = [];

    for (let i = 1; i <= Math.ceil(filterList.length / perPageData); i++) {
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

    //change icon
    const LikeIcone = (event: any) => {
        if (event.closest("button").classList.contains("active")) {
            event.closest("button").classList.remove("active")
        } else {
            event.closest("button").classList.add("active");
        }
    }

    //select value
    const selectValue = (value: any) => {
        setSelect(value);
        setCurrentpages(
            filterProduct?.filter((e: any) => e.category === select || select === 'all')
        )
    }

    return (
        <React.Fragment>
            <div className="flex-grow-1">
                <div className="d-flex align-items-center gap-2 mb-4">
                    <p className="text-muted flex-grow-1 mb-0">Showing 1-12 of 84 results</p>

                    <div className="flex-shrink-0">
                        <div className="d-flex gap-2">
                            <div className="flex-shrink-0">
                                <Form.Label htmlFor="sort-elem" className="col-form-label">Sort By:</Form.Label>
                            </div>
                            <div className="flex-shrink-0">
                                <Form.Select className="form-select w-md" id="sort-elem"
                                    onChange={(e) => selectValue(e.target.value)}
                                >
                                    <option value="all">All</option>
                                    <option value="lowtohigh">Low to High</option>
                                    <option value="hightolow">High to Low</option>
                                </Form.Select>
                            </div>
                        </div>
                    </div>
                </div>
                <Row id="product-grid">
                    {select &&
                        (currentpages && currentpages.length > 0 ?
                            (currentpages || [])?.map((item: any) => {
                                return (
                                    !cxl ?
                                        <Col key={item.id} xxl={cxxl} lg={clg} md={cmd}>
                                            <Card className="ecommerce-product-widgets border-0 rounded-0 shadow-none overflow-hidden">
                                                <div className="bg-light bg-opacity-50 rounded py-4 position-relative">
                                                    <Image src={item.img} alt="" style={{ maxHeight: `${cheight || ''}`, maxWidth: "100%" }}
                                                        className="mx-auto d-block rounded-2" />
                                                    <div className="action vstack gap-2">
                                                        <Button color="danger" className="avatar-xs p-0 btn-soft-warning custom-toggle product-action" data-bs-toggle="button" onClick={(e) => LikeIcone(e.target)} >
                                                            <span className="icon-on"><i className="ri-heart-line"></i></span>
                                                            <span className="icon-off"><i className="ri-heart-fill"></i></span>
                                                        </Button>
                                                    </div>
                                                    {
                                                        item?.presentag && <div className="avatar-xs label">
                                                            <div className="avatar-title bg-danger rounded-circle fs-11">{item?.presentag}</div>
                                                        </div>
                                                    }
                                                </div>
                                                <div className="pt-4">
                                                    <div>
                                                        {
                                                            item?.color ?
                                                                <ul className="clothe-colors list-unstyled hstack gap-1 mb-3 flex-wrap">

                                                                    <li>
                                                                        <Form.Control type="radio" name="sizes1" id="product-color-12" />
                                                                        <Form.Label className={`avatar-xxs btn btn-${item?.color[0] || ''} p-0 d-flex align-items-center justify-content-center rounded-circle fs-${item.font || 0}`} htmlFor="product-color-12">{item.size ? item.size[0] : ''}</Form.Label>
                                                                    </li>
                                                                    <li>
                                                                        <Form.Control type="radio" name="sizes1" id="product-color-13" />
                                                                        <Form.Label className={`avatar-xxs btn btn-${item?.color[1] || ''} p-0 d-flex align-items-center justify-content-center rounded-circle fs-${item.font || 0}`} htmlFor="product-color-13">{item.size ? item.size[1] : ''}</Form.Label>
                                                                    </li>
                                                                    <li>
                                                                        <Form.Control type="radio" name="sizes1" id="product-color-14" />
                                                                        <Form.Label className={`avatar-xxs btn btn-${item?.color[2] || ''} p-0 d-flex align-items-center justify-content-center rounded-circle fs-${item.font || 0}`} htmlFor="product-color-14">{item.size ? item.size[2] : ''}</Form.Label>
                                                                    </li>
                                                                    <li> <Form.Control type="radio" name="sizes1" id="product-color-15" />
                                                                        <Form.Label className={`avatar-xxs btn btn-${item?.color[3] || ''} p-0 d-flex align-items-center justify-content-center rounded-circle fs-${item.font || 0}`} htmlFor="product-color-15">{item.size ? item.size[3] : ''}</Form.Label>
                                                                    </li>
                                                                </ul>
                                                                :
                                                                <div className="avatar-xxs mb-3">
                                                                    <div className="avatar-title bg-light text-muted rounded cursor-pointer">
                                                                        <i className={`${item?.icone}`}></i>
                                                                    </div>
                                                                </div>
                                                        }



                                                        <Link to="#">
                                                            <h6 className="text-capitalize fs-15 lh-base text-truncate mb-0">{item?.title}</h6>
                                                        </Link>
                                                        <div className="mt-2">
                                                            <span className="float-end">{item?.ratting}
                                                                <i className="ri-star-half-fill text-warning align-bottom"></i>
                                                            </span>
                                                            <h5 className="text-secondary mb-0">{item?.price}
                                                                <span className="text-muted fs-12"><del>{item?.deleteproce}</del></span></h5>
                                                        </div>
                                                        <div className="tn mt-3">
                                                            <Link to="#" className="btn btn-primary btn-hover w-100 add-btn">
                                                                <i className="mdi mdi-cart me-1"></i> Add To Cart
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                        :
                                        (
                                            <Card className="ribbon-box">
                                                <div className="ribbon ribbon-danger ribbon-shape">{item.dic}% OFF</div>
                                                <Card.Body>
                                                    <Row>
                                                        <Col className="col-md-4">
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
                                                                    <span className="me-2"> {item.rating}</span>
                                                                    <span>
                                                                        <i className="ri-star-fill text-warning align-bottom" />
                                                                    </span>
                                                                </div>
                                                                <Link to="#">
                                                                    <h4 className="fs-16">{item.title}</h4>
                                                                </Link>
                                                                <p className="text-muted mb-3">
                                                                    T-Shirt house best black boys T-Shirt fully cotton material &amp;
                                                                    all size available hirt fully cotton material &amp; all size
                                                                    available.
                                                                </p>
                                                                <div className="d-flex gap-1">
                                                                    <h5 className="text-secondary mb-0">
                                                                        ${item.price}
                                                                        <span className="text-muted fs-13">
                                                                            <del>${item.deletprice}</del>
                                                                        </span>
                                                                    </h5>
                                                                    <span className={`badge badge-soft-${item.bg} align-middle ms-1`}>
                                                                        {item.stock}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="mt-3">
                                                                <div className="d-flex gap-4">
                                                                    {
                                                                        item?.color ?
                                                                            <ul className="clothe-colors list-unstyled hstack gap-1 mb-0 flex-wrap">
                                                                                <li>
                                                                                    <Form.Control type="radio" name="color1" id="product-color-12" />
                                                                                    <Form.Label
                                                                                        className={`avatar-xxs btn btn-${item.color[0]} p-0 d-flex align-items-center justify-content-center rounded-circle`}
                                                                                        htmlFor="product-color-12"
                                                                                    />
                                                                                </li>
                                                                                <li>
                                                                                    <Form.Control type="radio" name="color1" id="product-color-13" />
                                                                                    <Form.Label
                                                                                        className={`avatar-xxs btn btn-${item.color[1]} p-0 d-flex align-items-center justify-content-center rounded-circle`}
                                                                                        htmlFor="product-color-13"
                                                                                    />
                                                                                </li>
                                                                                <li>
                                                                                    <Form.Control type="radio" name="color1" id="product-color-14" />
                                                                                    <Form.Label
                                                                                        className={`avatar-xxs btn btn-${item.color[2]} p-0 d-flex align-items-center justify-content-center rounded-circle`}
                                                                                        htmlFor="product-color-14"
                                                                                    />
                                                                                </li>
                                                                            </ul>
                                                                            :
                                                                            item.size ?
                                                                                <ul className="clothe-size list-unstyled hstack gap-2 mb-0 flex-wrap">
                                                                                    <li>

                                                                                        <Form.Control type="radio" name="sizes1" id="product-size-15" />
                                                                                        <Form.Label
                                                                                            className="avatar-xxs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                                                            htmlFor="product-size-15"
                                                                                        >
                                                                                            {item.size ? item.size[0] : ''}
                                                                                        </Form.Label>
                                                                                    </li>
                                                                                    <li>

                                                                                        <Form.Control type="radio" name="sizes1" id="product-size-16" />
                                                                                        <Form.Label
                                                                                            className="avatar-xxs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                                                            htmlFor="product-size-16"
                                                                                        >
                                                                                            {item.size ? item.size[1] : ''}
                                                                                        </Form.Label>
                                                                                    </li>
                                                                                    <li>

                                                                                        <Form.Control type="radio" name="sizes1" id="product-size-17" />
                                                                                        <Form.Label
                                                                                            className="avatar-xxs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                                                                            htmlFor="product-size-17"
                                                                                        >
                                                                                            {item.size ? item.size[2] : ''}
                                                                                        </Form.Label>
                                                                                    </li>
                                                                                </ul>
                                                                                :

                                                                                <div className="avatar-xxs mb-3">
                                                                                    <div className="avatar-title bg-light text-muted rounded cursor-pointer">
                                                                                        <i className={`${item?.icone}`}></i>
                                                                                    </div>
                                                                                </div>
                                                                    }


                                                                </div>
                                                            </div>
                                                            <div className="mt-3 hstack gap-2 justify-content-end">

                                                                <Link to='/shop/shopingcard' className="btn btn-primary">

                                                                    <i className="ri-shopping-cart-2-fill align-bottom me-1" /> Add To
                                                                    Cart
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
                                )
                            })

                            : (
                                <>
                                    <Row id="search-result-elem">
                                        <Col lg={12}>
                                            <div className="text-center py-5">
                                                <div className="avatar-lg mx-auto mb-4">
                                                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                                                        <i className="bi bi-search"></i>
                                                    </div>
                                                </div>

                                                <h5>No matching records found</h5>
                                            </div >
                                        </Col >
                                    </Row >
                                </>
                            ))
                    }
                </Row >

                <Pagination
                    pagination={pagination}
                    pageNumbers={pageNumbers}
                    currentpages={currentpages}
                    currentPage={currentPage}
                    handleprevPage={handleprevPage}
                    handleClick={handleClick}
                    handlenextPage={handlenextPage}
                />
            </div >
        </React.Fragment >
    )
}

export default CatalogCollection; 