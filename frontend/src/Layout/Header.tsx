import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Button, Row, Col, Card, Image, Navbar, Nav } from "react-bootstrap";

//img
import logodark from "assets/images/logo-dark.png";
import logolight from "assets/images/logo-light.png";
import avtar1 from "assets/images/users/avatar-1.jpg";
import img1 from "assets/images/ecommerce/img-1.jpg";
import Eimg2 from "assets/images/ecommerce/img-2.jpg";
import img2 from "assets/images/brands/img-2.png";
import img3 from "assets/images/brands/img-3.png";
import img4 from "assets/images/brands/img-4.png";
import img5 from "assets/images/brands/img-5.png";
import img6 from "assets/images/brands/img-6.png";
import img8 from "assets/images/brands/img-8.png";

import { CardModal, SearchModal } from "Components/MainModal";
import { withTranslation } from "react-i18next";
import withRouter from "Components/withRouter";

const Header = (props: any) => {

    console.log("props", props)

    //search modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //card modal
    const [card, setCard] = useState(false);

    const handlecardClose = () => setCard(false);
    const handlecardShow = () => setCard(true);

    useEffect(() => {
        const pathname = props.router.location.pathname;
        var ul = document.getElementById("navigation-menu") as HTMLElement;
        let items = ul.getElementsByTagName("a") as HTMLCollectionOf<HTMLAnchorElement>;
        var matchingMenuItem = null;
        removeActivation(items);
        for (let i = 0; i < items.length; i++) {
            if (pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            activateParentDropdown(matchingMenuItem);
        }
    }, [props.router.location.pathname]);

    const removeActivation = (items: any) => {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const parent = item.parentElement;
            if (item) {
                item.classList.remove("active");
            }
            if (parent) {
                parent.classList.remove("active");
            }
        }
    };

    const activateParentDropdown = (item: any) => {
        item.classList.add("active");
        const parent = item.closest(".dropdown-menu")?.parentElement.firstChild;
        if (parent) {
            parent.classList.add("active");
            const parent2 = item.closest(".dropdown-menu")?.parentElement.closest(".submenu")?.previousElementSibling;
            if (parent2) {
                parent2.classList.add("active");
            }
        }
        return false;
    };

    return (
        <React.Fragment>
            <Navbar className="navbar-expand-lg ecommerce-navbar is-sticky" id="navbar">
                <Container >
                    <Navbar.Brand href="/" className="d-none d-lg-block">
                        <div className="logo-dark">
                            <Image src={logodark} alt="" height="25" />
                        </div>
                        <div className="logo-light">
                            <Image src={logolight} alt="" height="25" /> <span className="logo-txt"></span>
                        </div>
                    </Navbar.Brand>
                    <Button className="btn btn-soft-primary btn-icon d-lg-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list fs-20"></i>
                    </Button>

                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav as="ul" className="mx-lg-auto mb-2 mb-lg-0" id="navigation-menu">
                            <li className="nav-item d-block d-lg-none">
                                <Link to="/" className="d-block p-3 h-auto text-center"> <Image src={logodark} alt="" height="25" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link" data-key="t-home">{props.t('home')}</Link>
                            </li>
                            <li className="nav-item dropdown dropdown-hover dropdown-mega-full">
                                <Link to="/#" className="nav-link dropdown-toggle" data-key="t-catalog" role="button" data-bs-toggle="dropdown" aria-expanded="false">{props.t('catalog')}</Link>

                                <div className="dropdown-menu p-0">
                                    <Row className="g-0 g-lg-4">
                                        <Col lg={2} className="d-none d-lg-block">
                                            <Card className="rounded-start rounded-0 border-0 h-100 mb-0 overflow-hidden" style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}>
                                                <div className="bg-overlay bg-light bg-opacity-25"></div>
                                                <Card.Body className="d-flex align-items-center justify-content-center">
                                                    <div className="text-center">
                                                        <Link to="/#" className="btn btn-secondary btn-hover"><i className="ph-storefront align-middle me-1"></i> <span data-key="t-shop-now">{props.t("shop-now")}</span></Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={2}>
                                            <ul className="dropdown-menu-list list-unstyled mb-0 py-3">
                                                <li>
                                                    <p className="mb-2 text-uppercase fs-11 fw-medium text-muted menu-title" data-key="t-men">{props.t('men')}</p>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/catalog/clothing' className="nav-link" data-key="t-clothing">{props.t('clothing')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/right' className="nav-link" data-key="t-watches">{props.t('watches')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list/left' className="nav-link" data-key="t-bags-Luggage">{props.t('bags-Luggage')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/right' className="nav-link" data-key="t-footwear">{props.t('footwear')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list' className="nav-link" data-key="t-innerwear">{props.t('innerwear')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list/right' className="nav-link" data-key="t-other-accessories">{props.t('other-accessories')}</Link>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col lg={2}>
                                            <ul className="dropdown-menu-list list-unstyled mb-0 py-3">
                                                <li>
                                                    <p className="mb-2 text-uppercase fs-11 fw-medium text-muted menu-title" data-key="t-women">{props.t('women')}</p>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list/defualt' className="nav-link" data-key="t-western-wear">{props.t('western-wear')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list/left' className="nav-link" data-key="t-handbags-clutches">{props.t('handbags-clutches')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/right' className="nav-link" data-key="t-lingerie-nightwear">{props.t('lingerie-nightwear')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/sidebar-banner' className="nav-link" data-key="t-footwear">{props.t('footwear')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/Default' className="nav-link" data-key="t-fashion-silver-jewellery">{props.t('fashion-silver-jewellery')}</Link>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col lg={2} >
                                            <ul className="dropdown-menu-list list-unstyled mb-0 py-3">
                                                <li>
                                                    <p className="mb-2 text-uppercase fs-11 fw-medium text-muted menu-title" data-key="t-accessories-others">{props.t('accessories-others')}</p>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/right' className="nav-link" data-key="t-home-kitchen-pets">{props.t('home-kitchen-pets')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list/left' className="nav-link" data-key="t-beauty-health-grocery">{props.t('beauty-health-grocery')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/sidebar-banner' className="nav-link" data-key="t-sports-fitness-bags-luggage">{props.t('sports-fitness-bags-luggage')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list' className="nav-link" data-key="t-car-motorbike-industrial">{props.t('car-motorbike-industrial')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list/right' className="nav-link" data-key="t-books">{props.t('books')}</Link>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col lg={2}>
                                            <ul className="dropdown-menu-list list-unstyled mb-0 py-3">
                                                <li>
                                                    <p className="mb-2 text-uppercase fs-11 fw-medium text-muted menu-title" data-key="t-others">{props.t("others")}</p>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/auth-signup-basic' className="nav-link" data-key="t-sign-up">{props.t("sign-up")}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/auth-signin-basic' className="nav-link" data-key="t-sign-in">{props.t("sign-in")}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/auth-pass-reset-basic' className="nav-link" data-key="t-passowrd-reset">{props.t("passowrd-reset")}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/auth-404' className="nav-link" data-key="t-error-404">{props.t("error-404")}</Link>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col lg={2} className="d-none d-lg-block">
                                            <div className="p-3">
                                                <p className="mb-3 text-uppercase fs-11 fw-medium text-muted" data-key="t-top-brands">{props.t("top-brands")}</p>
                                                <Row className="g-2">
                                                    <Col lg={4}>
                                                        <Link to="/#" className="d-block p-2 border border-dashed text-center rounded-3">
                                                            <Image src={img8} alt="" className="avatar-sm" />
                                                        </Link>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Link to="/#" className="d-block p-2 border border-dashed text-center rounded-3">
                                                            <Image src={img2} alt="" className="avatar-sm" />
                                                        </Link>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Link to="/#" className="d-block p-2 border border-dashed text-center rounded-3">
                                                            <Image src={img3} alt="" className="avatar-sm" />
                                                        </Link>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Link to="/#" className="d-block p-2 border border-dashed text-center rounded-3">
                                                            <Image src={img4} alt="" className="avatar-sm" />
                                                        </Link>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Link to="/#" className="d-block p-2 border border-dashed text-center rounded-3">
                                                            <Image src={img5} alt="" className="avatar-sm" />
                                                        </Link>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Link to="/#" className="d-block p-2 border border-dashed text-center rounded-3">
                                                            <Image src={img6} alt="" className="avatar-sm" />
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </li>

                            <li className="nav-item dropdown dropdown-hover">
                                <Link className="nav-link dropdown-toggle" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-shop">{props.t("shop")}</Link>
                                <div className="dropdown-menu dropdown-mega-menu-xl dropdown-menu-center p-0">
                                    <Row className="g-0 g-lg-4">
                                        <Col lg={5} className="d-none d-lg-block">
                                            <Card className="rounded-start rounded-0 border-0 h-100 mb-0 overflow-hidden" style={{ backgroundImage: `url(${Eimg2})`, backgroundSize: "cover" }}>
                                                <div className="bg-overlay bg-primary" style={{ opacity: 0.90 }}></div>
                                                <Card.Body className="d-flex align-items-center justify-content-center position-relative">
                                                    <div className="text-center">
                                                        <h6 className="card-title text-white">Welcome to Toner</h6>
                                                        <p className="text-white-75">See all the products at once.</p>
                                                        <Link to="/#" className="btn btn-light btn-sm btn-hover">Shop Now <i className="ph-arrow-right align-middle"></i></Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={7}>
                                            <Row className="g-0 g-lg-4">
                                                <Col lg={6}>
                                                    <div className="py-3">
                                                        <ul className="dropdown-menu-list list-unstyled mb-0">
                                                            <li>
                                                                <p className="mb-2 text-uppercase fs-11 fw-medium text-muted menu-title" data-key="t-checkout-pages">{props.t("checkout-pages")}</p>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link to='/shop/address' className="nav-link" data-key="t-address">{props.t("address")}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link to='/shop/order' className="nav-link" data-key="t-track-order">{props.t("track-order")}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link to='/shop/payment' className="nav-link" data-key="t-payment">{props.t("payment")}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link to='/shop/review' className="nav-link" data-key="t-review">{props.t("review")}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link to='/shop/confirm' className="nav-link" data-key="t-confirmation">{props.t("confirmation")}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link to='/shop/orderhistory' className="nav-link" data-key="t-my-orders-order-history">{props.t("my-orders-order-history")}</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <ul className="dropdown-menu-list list-unstyled mb-0 py-3">
                                                        <li>
                                                            <p className="mb-2 text-uppercase fs-11 fw-medium text-muted menu-title" data-key="t-support">{props.t("support")}</p>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to='/shop/shopingcard' className="nav-link" data-key="t-shopping-cart">{props.t("shopping-cart")}</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to='/shop/checkout' className="nav-link" data-key="t-checkout">{props.t("checkout")}</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to='/shop/wishList' className="nav-link" data-key="t-wishlist">{props.t("wishlist")}</Link>
                                                        </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </li>

                            <li className="nav-item dropdown dropdown-hover">
                                <Link className="nav-link dropdown-toggle" data-key="t-pages" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{props.t('pages')}</Link>
                                <ul className="dropdown-menu dropdown-menu-md dropdown-menu-center dropdown-menu-list submenu">
                                    <li className="nav-item dropdown dropdown-hover">
                                        <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-products">{props.t('products')}</Link>
                                        <ul className="dropdown-menu submenu">
                                            <li className="dropdown dropdown-hover">
                                                <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-grid-view">{props.t('grid-view')}</Link>
                                                <ul className="dropdown-menu submenu">
                                                    <li><Link className="nav-link" to='/products-grid/Default' data-key="t-defualt">{props.t('defualt')}</Link></li>
                                                    <li><Link className="nav-link" to='/products-grid/sidebar-banner' data-key="t-sidebar-with-banner">{props.t('sidebar-with-banner')}</Link></li>
                                                    <li><Link className="nav-link" to='/products-grid/right' data-key="t-right-sidebar">{props.t('right-sidebar')}</Link></li>
                                                    <li><Link className="nav-link" to='/products-grid' data-key="t-no-sidebar">{props.t('no-sidebar')}</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown dropdown-hover">
                                                <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-list-view">{props.t('list-view')}</Link>
                                                <ul className="dropdown-menu submenu">
                                                    <li><Link className="nav-link" to='/product-list/defualt' data-key="t-defualt">{props.t('defualt')}</Link></li>
                                                    <li><Link className="nav-link" to='/product-list/left' data-key="t-left-sidebar">{props.t('left-sidebar')}</Link></li>
                                                    <li><Link className="nav-link" to='/product-list/right' data-key="t-right-sidebar">{props.t('right-sidebar')}</Link></li>
                                                    <li><Link className="nav-link" to='/product-list' data-key="t-no-sidebar">{props.t('no-sidebar')}</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link className="nav-link" to='/product-details' data-key="t-product-details">{props.t('product-details')}</Link></li>
                                        </ul>
                                    </li>
                                    <Dropdown className="nav-item dropdown-hover">
                                        <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-users">{props.t('users')}</Link>
                                        <ul className="dropdown-menu submenu">
                                            <li><Link className="nav-link" to='/account' data-key="t-my-account">{props.t('my-account')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-signin-basic' data-key="t-sign-in">{props.t('sign-up')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-signup-basic' data-key="t-sign-up">{props.t('sign-in')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-pass-reset-basic' data-key="t-passowrd-reset">{props.t('passowrd-reset')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-pass-change-basic' data-key="t-create-password">{props.t('create-password')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-success-msg-basic' data-key="t-success-message">{props.t('success-message')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-twostep-basic' data-key="t-two-step-verify">{props.t('two-step-verify')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-logout-basic' data-key="t-logout">{props.t('logout')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-404' data-key="t-error-404">{props.t('error-404')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-500' data-key="t-error-500">{props.t('error-500')}</Link></li>
                                            <li><Link className="nav-link" to='/coming-soon' data-key="t-coming-soon">{props.t('coming-soon')}</Link></li>
                                        </ul>
                                    </Dropdown>
                                    <li className="nav-item">
                                        <Link to='/products-category' className="nav-link" data-key="t-categories">{props.t('categories')}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/about-us' className="nav-link" data-key="t-about">{props.t('about')}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/purchase-guide' className="nav-link" data-key="t-purchase-guide">{props.t('purchase-guide')}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/terms-conditions' className="nav-link" data-key="t-terms-of-service">{props.t('terms-of-service')}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/privacy-policy' className="nav-link" data-key="t-privacy-policy">{props.t('privacy-policy')}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/store-locator' className="nav-link" data-key="t-store-locator">{props.t('store-locator')}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/ecommerce-faq' className="nav-link" data-key="t-faq">{props.t('faq')}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/invoice' className="nav-link" data-key="t-invoice">{props.t('invoice')}</Link>
                                    </li>
                                    <li className="nav-item dropdown dropdown-hover">
                                        <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-email-template">{props.t('email-template')}</Link>
                                        <ul className="dropdown-menu submenu ">
                                            <li><Link className="nav-link" to='/email-black-friday' data-key="t-black-friday">{props.t('black-friday')}</Link></li>
                                            <li><Link className="nav-link" to='/email-flash-sale' data-key="t-flash-sale">{props.t('flash-sale')}</Link></li>
                                            <li><Link className="nav-link" to='/email-order-success' data-key="t-order-success">{props.t('order-success')}</Link></li>
                                            <li><Link className="nav-link" to='/email-order-success-2' data-key="t-order-success-2">{props.t('order-success-2')}</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="../components/index" className="nav-link" target="_blank" data-key="t-components">Components</Link>
                                    </li>
                                    <Dropdown className="nav-item dropdown-hover">
                                        <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-multi-level">{props.t('multi-level')}</Link>
                                        <ul className="dropdown-menu submenu">
                                            <li><Link className="nav-link" to="/#" data-key="t-level-1.1">{props.t('level-1.1')}</Link></li>
                                            <li><Link className="nav-link" to="/#" data-key="t-level-1.2">{props.t('level-1.2')}</Link></li>
                                            <li className="dropdown dropdown-hover">
                                                <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-level-1.3">{props.t('level-1.3')}</Link>
                                                <ul className="dropdown-menu submenu">
                                                    <li><Link className="nav-link" to="/#" data-key="t-level-2.1">{props.t('level-2.1')}</Link></li>
                                                    <li><Link className="nav-link" to="/#" data-key="t-level-2.2">{props.t('level-2.2')}</Link></li>
                                                    <li className="dropdown dropdown-hover">
                                                        <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-level-2.3">{props.t('level-2.3')}</Link>
                                                        <ul className="dropdown-menu submenu">
                                                            <li><Link className="nav-link" to="/#" data-key="t-level-3.1">{props.t('level-3.1')}</Link></li>
                                                            <li><Link className="nav-link" to="/#" data-key="t-level-3.2">{props.t('level-3.2')}</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </Dropdown>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/contact' data-key="t-contact">{props.t('contact')}</Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>

                    <div className="bg-overlay navbar-overlay" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent.show"></div>
                    <div className="d-flex align-items-center">
                        <Button type="button" className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={handleShow}>
                            <i className="bx bx-search fs-22"></i>
                        </Button>
                        <SearchModal show={show} handleClose={handleClose} />
                        <div className="topbar-head-dropdown ms-1 header-item">
                            <Button type="button" className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted" data-bs-toggle="offcanvas" data-bs-target="#ecommerceCart" aria-controls="ecommerceCart" onClick={handlecardShow}>
                                <i className="ph-shopping-cart fs-18"></i>
                                <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-danger">4</span>
                            </Button>
                        </div>
                        {/* <CardModal show={card} handleClose={handlecardClose} /> */}

                        <Dropdown className="topbar-head-dropdown ms-2 header-item dropdown-hover-end" align="start">
                            <Dropdown.Toggle className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted" bsPrefix="btn">
                                <i className="bi bi-sun align-middle fs-20"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu p-2 dropdown-menu-end" id="light-dark-mode">
                                <Dropdown.Item eventKey="light" onClick={() => props.handleMood("light")}><i className="bi bi-sun align-middle me-2"></i> Defualt (light mode)</Dropdown.Item>
                                <Dropdown.Item eventKey="dark" onClick={() => props.handleMood("dark")}><i className="bi bi-moon align-middle me-2"></i> Dark</Dropdown.Item>
                                <Dropdown.Item eventKey="light" onClick={() => props.handleMood("light")}><i className="bi bi-moon-stars align-middle me-2"></i> Auto (system defualt)</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="dropdown header-item dropdown-hover-end">
                            <Dropdown>
                                <Dropdown.Toggle id="page-header-user-dropdown" bsPrefix="btn" className="btn btn-icon btn-topbar btn-link rounded-circle" as="a">
                                    <Image className="rounded-circle header-profile-user" src={avtar1} alt="Header Avatar" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href='/shop/orderhistory'><i className="bi bi-cart4 text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Order History</span></Dropdown.Item>
                                    <Dropdown.Item href='/shop/order'><i className="bi bi-truck text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Track Orders</span></Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><i className="bi bi-speedometer2 text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Dashboard</span></Dropdown.Item>
                                    <Dropdown.Item href='/ecommerce-faq'><i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Help</span></Dropdown.Item>
                                    <Dropdown.Item href='/account'><i className="bi bi-coin text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Balance : <b>$8451.36</b></span></Dropdown.Item>
                                    <Dropdown.Item href='/account'><span className="badge bg-success-subtle text-success mt-1 float-end">New</span><i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Settings</span></Dropdown.Item>
                                    <Dropdown.Item href='/auth-logout-basic'><i className="bi bi-box-arrow-right text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </Container>
            </Navbar>
            <CardModal show={card} handleClose={handlecardClose} />
        </React.Fragment>
    )
};

export default withRouter(withTranslation()(Header));