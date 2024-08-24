import React, { useEffect, useState } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { Collapse, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { filterProduct } from "Common/data";

const Filters = ({ name, setFilterlist }: any) => {
    let newList: any = [];
    const [mincost, setMincost] = useState(0);
    const [maxcost, setMaxcost] = useState(2000);
    //Collapse
    //colors
    const [open, setOpen] = useState(false);
    //sizes
    const [size, setSize] = useState(false);
    //brands
    const [brands, setBrands] = useState(false);
    //discount
    const [discount, setDiscount] = useState(false);
    //Rating
    const [rating, setRating] = useState(false);

    //colors
    const handleColor = (value: any) => {
        (filterProduct || [])?.map((item: any) => {
            return item.color?.filter((color: any) => {
                if (color === value) {
                    newList.push(item)
                    setFilterlist(newList);

                }
                return item;
            })
        })
    }

    //size
    const handleSize = (e: any) => {
        (filterProduct || [])?.map((item: any) => {
            return item.size?.filter((size: any) => {
                if (size === e.target.value.toUpperCase()) {
                    newList.push(item)
                    setFilterlist(newList)
                }
                return item;
            })

        })
    }

    // products
    const handleProduct = (value: any) => {
        setFilterlist(filterProduct?.filter((product: any) => product.products === value))
    }

    //dicount
    const handleDic = (e: any) => {
        setFilterlist(filterProduct?.filter((discount: any) => discount.dic === e.value))
    }

    //ratting
    const hanleRat = (value: any) => {
        setFilterlist(filterProduct?.filter((rat: any) => rat.ratting.toString().startsWith(value)))
    }

    //nouislider
    const onUpDate = (value: any) => {
        setMincost(value[0]);
        setMaxcost(value[1]);
    }

    useEffect(() => {
        onUpDate([mincost, maxcost]);
    }, [mincost, maxcost]);

    return (
        <React.Fragment>
            <div className={`${name}`}>
                <Card className="overflow-hidden">
                    <Card.Header>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <h5 className="fs-16">Filters</h5>
                            </div>
                            <div className="flex-shrink-0">
                                <Link to="#" className="text-decoration-underline" id="clearall">Clear All</Link>
                            </div>
                        </div>
                        <div className="search-box">
                            <Form.Control className="" id="searchProductList" autoComplete="off" placeholder="Search Products..." />
                            <i className="ri-search-line search-icon"></i>
                        </div>
                    </Card.Header>
                    <div className="accordion accordion-flush filter-accordion">
                        <Card.Body className="border-bottom">
                            <div>
                                <p className="text-muted text-uppercase fs-12 fw-medium mb-3">Products</p>
                                <ul className="list-unstyled mb-0 filter-list">
                                    <li>
                                        <Link to="#" className="d-flex py-1 align-items-center" onClick={() => handleProduct("Grocery")}>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-13 mb-0 listname">Grocery</h5>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-flex py-1 align-items-center" onClick={() => handleProduct("Fashion")}>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-13 mb-0 listname">Fashion</h5>
                                            </div>
                                            <div className="flex-shrink-0 ms-2">
                                                <span className="badge bg-light text-muted">5</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-flex py-1 align-items-center" onClick={() => handleProduct("Watches")}>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-13 mb-0 listname">Watches</h5>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-flex py-1 align-items-center" onClick={() => handleProduct("Electronics")}>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-13 mb-0 listname">Electronics</h5>
                                            </div>
                                            <div className="flex-shrink-0 ms-2">
                                                <span className="badge bg-light text-muted">5</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-flex py-1 align-items-center" onClick={() => handleProduct("Furniture")}>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-13 mb-0 listname">Furniture</h5>
                                            </div>
                                            <div className="flex-shrink-0 ms-2">
                                                <span className="badge bg-light text-muted">6</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-flex py-1 align-items-center" onClick={() => handleProduct("Automotive")}>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-13 mb-0 listname">Automotive Accessories</h5>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="d-flex py-1 align-items-center" onClick={() => handleProduct("Appliances")}>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-13 mb-0 listname">Appliances</h5>
                                            </div>
                                            <div className="flex-shrink-0 ms-2">
                                                <span className="badge bg-light text-muted">7</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="d-flex py-1 align-items-center" onClick={() => handleProduct("Kids")}>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-13 mb-0 listname">Kids</h5>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>

                        <Card.Body className="border-bottom">
                            <p className="text-muted text-uppercase fs-12 fw-medium mb-4">Price</p>
                            <Nouislider
                                range={{ min: 0, max: 2000 }}
                                start={[mincost, maxcost]}
                                connect
                                onSlide={onUpDate}
                                data-slider-color="info"
                                id="product-price-range"
                            />
                            <div className="formCost d-flex gap-2 align-items-center mt-3">
                                <Form.Control className="form-control-sm" id="MinCost" value={`$ ${mincost}`} onChange={(e: any) => setMincost(e.target.value)} />
                                <span className="fw-semibold text-muted">to</span>
                                <Form.Control className=" form-control-sm" type="text" id="maxCost" value={`$ ${maxcost}`} onChange={(e: any) => setMaxcost(e.target.value)} />
                            </div>

                        </Card.Body>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingColors">
                                <Button
                                    onClick={() => setOpen(!open)}
                                    className="accordion-button bg-transparent shadow-none"
                                    aria-controls="flush-collapseColors"
                                    aria-expanded={open}
                                >
                                    <span className="text-muted text-uppercase fs-12 fw-medium">Colors</span>
                                    <span className="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
                                </Button>
                            </h2>
                            <Collapse in={open}>
                                <div id="flush-collapseColors">
                                    <div className="accordion-body text-body pt-0" aria-labelledby="flush-headingColors">
                                        <ul className="clothe-colors list-unstyled hstack gap-3 mb-0 flex-wrap" id="color-filter">
                                            <li>
                                                <Form.Control type="radio" name="colors" value="success" id="color-1" onClick={() => handleColor("success")} />
                                                <Form.Label className="avatar-xs btn btn-success p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-1"></Form.Label>
                                            </li>
                                            <li>
                                                <Form.Control type="radio" name="colors" value="info" id="color-2" onClick={() => handleColor("info")} />
                                                <Form.Label className="avatar-xs btn btn-info p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-2"></Form.Label>
                                            </li>
                                            <li>
                                                <Form.Control type="radio" name="colors" value="warning" id="color-3" onClick={() => handleColor("warning")} />
                                                <Form.Label className="avatar-xs btn btn-warning p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-3"></Form.Label>
                                            </li>
                                            <li>
                                                <Form.Control type="radio" name="colors" value="danger" id="color-4" onClick={() => handleColor("danger")} />
                                                <Form.Label className="avatar-xs btn btn-danger p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-4"></Form.Label>
                                            </li>
                                            <li>
                                                <Form.Control type="radio" name="colors" value="primary" id="color-5" onClick={() => handleColor("primary")} />
                                                <Form.Label className="avatar-xs btn btn-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-5"></Form.Label>
                                            </li>
                                            <li>
                                                <Form.Control type="radio" name="colors" value="secondary" id="color-6" onClick={() => handleColor("secondary")} />
                                                <Form.Label className="avatar-xs btn btn-secondary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-6"></Form.Label>
                                            </li>
                                            <li>
                                                <Form.Control type="radio" name="colors" value="dark" id="color-7" onClick={() => handleColor("dark")} />
                                                <Form.Label className="avatar-xs btn btn-dark p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-7"></Form.Label>
                                            </li>
                                            <li>
                                                <Form.Control type="radio" name="colors" value="light" id="color-8" onClick={() => handleColor("light")} />
                                                <Form.Label className="avatar-xs btn btn-light p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-8"></Form.Label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Collapse>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingColors">
                                <Button
                                    onClick={() => setSize(!size)}
                                    className="accordion-button bg-transparent shadow-none"
                                    aria-controls="flush-collapseSize"
                                    aria-expanded={size}
                                >
                                    <span className="text-muted text-uppercase fs-12 fw-medium">Sizes</span>
                                    <span className="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
                                </Button>
                            </h2>
                            <Collapse in={size}>
                                <div id="flush-collapseSize">
                                    <div className="accordion-collapse collapse show" aria-labelledby="flush-headingSize">
                                        <div className="accordion-body text-body pt-0">
                                            <ul className="clothe-size list-unstyled hstack gap-3 mb-0 flex-wrap" id="size-filter">
                                                <li>
                                                    <Form.Control type="radio" name="sizes" value="xs" id="sizeXs" />
                                                    <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeXs">XS</Form.Label>
                                                </li>
                                                <li>
                                                    <Form.Control type="radio" name="sizes" value="s" id="sizeS" onClick={(e) => handleSize(e)} />
                                                    <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeS">S</Form.Label>
                                                </li>
                                                <li>
                                                    <Form.Control type="radio" name="sizes" value="m" id="sizeM" onClick={(e) => handleSize(e)} />
                                                    <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeM">M</Form.Label>
                                                </li>
                                                <li>
                                                    <Form.Control type="radio" name="sizes" value="l" id="sizeL" onClick={(e) => handleSize(e)} />
                                                    <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeL">L</Form.Label>
                                                </li>
                                                <li>
                                                    <Form.Control type="radio" name="sizes" value="xl" id="sizeXl" onClick={(e) => handleSize(e)} />
                                                    <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeXl">XL</Form.Label>
                                                </li>
                                                <li>
                                                    <Form.Control type="radio" name="sizes" value="2xl" id="size2xl" onClick={(e) => handleSize(e)} />
                                                    <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size2xl">2XL</Form.Label>
                                                </li>
                                                <li>
                                                    <Form.Control type="radio" name="sizes" value="3xl" id="size3xl" onClick={(e) => handleSize(e)} />
                                                    <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size3xl">3XL</Form.Label>
                                                </li>
                                                <li>
                                                    <Form.Control type="radio" name="sizes" value="4xl" id="size4xl" onClick={(e) => handleSize(e)} />
                                                    <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size4xl">4XL</Form.Label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingBrands">
                                <Button
                                    onClick={() => setBrands(!brands)}
                                    className="accordion-button bg-transparent shadow-none"
                                    aria-controls="flush-collapseBrands"
                                    aria-expanded={brands}
                                >
                                    <span className="text-muted text-uppercase fs-12 fw-medium">Brands</span>
                                    <span className="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
                                </Button>
                            </h2>
                            <Collapse in={brands}>
                                <div id="flush-collapseBrands" >
                                    <div className="accordion-collapse collapse show" aria-labelledby="flush-headingBrands">
                                        <div className="accordion-body text-body pt-0">
                                            <div className="search-box search-box-sm">
                                                <Form.Control type="text" className=" bg-light border-0" id="searchBrandsList" placeholder="Search Brands..." />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                            <div className="d-flex flex-column gap-2 mt-3 filter-check">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="Boat" id="productBrandRadio5" />
                                                    <Form.Label className="form-check-label" htmlFor="productBrandRadio5">Boat</Form.Label>
                                                </div>
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="OnePlus" id="productBrandRadio4" />
                                                    <Form.Label className="form-check-label" htmlFor="productBrandRadio4">OnePlus</Form.Label>
                                                </div>
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="Realme" id="productBrandRadio3" />
                                                    <Form.Label className="form-check-label" htmlFor="productBrandRadio3">Realme</Form.Label>
                                                </div>
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="Sony" id="productBrandRadio2" />
                                                    <Form.Label className="form-check-label" htmlFor="productBrandRadio2">Sony</Form.Label>
                                                </div>
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="JBL" id="productBrandRadio1" />
                                                    <Form.Label className="form-check-label" htmlFor="productBrandRadio1">JBL</Form.Label>
                                                </div>

                                                <div>
                                                    <Button className="btn btn-link text-decoration-none text-uppercase fw-medium p-0">1,235
                                                        More</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingDiscount">
                                <Button
                                    onClick={() => setDiscount(!discount)}
                                    aria-controls="flush-collapseDiscount"
                                    aria-expanded={discount}
                                    className="accordion-button bg-transparent shadow-none"
                                >
                                    <span className="text-muted text-uppercase fs-12 fw-medium">Discount</span>
                                    <span className="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
                                </Button>
                            </h2>
                            <Collapse in={discount}>
                                <div id="flush-collapseDiscount">
                                    <div className="accordion-collapse collapse show" aria-labelledby="flush-headingDiscount">
                                        <div className="accordion-body text-body pt-1">
                                            <div className="d-flex flex-column gap-2 filter-check" id="discount-filter">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="50" id="productdiscountRadio6" onClick={(e) => handleDic(e.target)} />
                                                    <Form.Label className="form-check-label" htmlFor="productdiscountRadio6">50% or more</Form.Label>
                                                </div>
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="40" id="productdiscountRadio5" onClick={(e) => handleDic(e.target)} />
                                                    <Form.Label className="form-check-label" htmlFor="productdiscountRadio5">40% or more</Form.Label>
                                                </div>
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="30" id="productdiscountRadio4" onClick={(e) => handleDic(e.target)} />
                                                    <Form.Label className="form-check-label" htmlFor="productdiscountRadio4">
                                                        30% or more
                                                    </Form.Label>
                                                </div>
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="20" id="productdiscountRadio3" onClick={(e) => handleDic(e.target)} />
                                                    <Form.Label className="form-check-label" htmlFor="productdiscountRadio3">
                                                        20% or more
                                                    </Form.Label>
                                                </div>
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="10" id="productdiscountRadio2" onClick={(e) => handleDic(e.target)} />
                                                    <Form.Label className="form-check-label" htmlFor="productdiscountRadio2">
                                                        10% or more
                                                    </Form.Label>
                                                </div>
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="0" id="productdiscountRadio1" onClick={(e) => handleDic(e.target)} />
                                                    <Form.Label className="form-check-label" htmlFor="productdiscountRadio1">
                                                        Less than 10%
                                                    </Form.Label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>
                        </div>

                        <Button
                            onClick={() => setRating(!rating)}
                            aria-controls="flush-collapseRating"
                            aria-expanded={rating}
                            className="accordion-button bg-transparent shadow-none"
                        >
                            <span className="text-muted text-uppercase fs-12 fw-medium">Rating</span>
                            <span className="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
                        </Button>
                        <Collapse in={rating}>
                            <div id="flush-collapseRating">
                                <div className="accordion-collapse collapse show" aria-labelledby="flush-headingRating">
                                    <div className="accordion-body text-body">
                                        <div className="d-flex flex-column gap-2 filter-check" id="rating-filter">
                                            <div className="form-check">
                                                <Form.Check type="checkbox" value="4" id="productratingRadio4" onClick={() => hanleRat('4')} />
                                                <Form.Label className="form-check-label" htmlFor="productratingRadio4">
                                                    <span className="text-muted">
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star"></i>
                                                    </span> 4 Above
                                                </Form.Label>
                                            </div>
                                            <div className="form-check">
                                                <Form.Check type="checkbox" value="3" id="productratingRadio3" onClick={() => hanleRat('3')} />
                                                <Form.Label className="form-check-label" htmlFor="productratingRadio3">
                                                    <span className="text-muted">
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star"></i>
                                                        <i className="mdi mdi-star"></i>
                                                    </span> 3 Above
                                                </Form.Label>
                                            </div>
                                            <div className="form-check">
                                                <Form.Check type="checkbox" value="2" id="productratingRadio2" onClick={() => hanleRat('2')} />
                                                <Form.Label className="form-check-label" htmlFor="productratingRadio2">
                                                    <span className="text-muted">
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star"></i>
                                                        <i className="mdi mdi-star"></i>
                                                        <i className="mdi mdi-star"></i>
                                                    </span> 2 Above
                                                </Form.Label>
                                            </div>
                                            <div className="form-check">
                                                <Form.Check type="checkbox" value="1" id="productratingRadio1" onClick={() => hanleRat('1')} />
                                                <Form.Label className="form-check-label" htmlFor="productratingRadio1">
                                                    <span className="text-muted">
                                                        <i className="mdi mdi-star text-warning"></i>
                                                        <i className="mdi mdi-star"></i>
                                                        <i className="mdi mdi-star"></i>
                                                        <i className="mdi mdi-star"></i>
                                                        <i className="mdi mdi-star"></i>
                                                    </span> 1
                                                </Form.Label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </Card>
            </div>
        </React.Fragment >
    )
};

export default Filters;