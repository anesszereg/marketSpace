import React, { useState, useEffect, useCallback } from 'react'
import { Button, Card, Col, Collapse, Dropdown, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useLocation } from 'react-router-dom';

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import logosm from "../assets/images/logo-sm.png";

import sidebarImg1 from "../assets/images/sidebar/img-1.jpg";
import sidebarImg2 from "../assets/images/sidebar/img-2.jpg";
import sidebarImg3 from "../assets/images/sidebar/img-3.jpg";
import sidebarImg4 from "../assets/images/sidebar/img-4.jpg";

//redux
import {
    changeLayout,
    changeSidebarTheme,
    changeLayoutMode,
    changeLayoutWidth,
    changeLayoutPosition,
    changeTopbarTheme,
    changeLeftsidebarSizeType,
    changeLeftsidebarViewType,
    changeSidebarImageType,
    changeBodyImageType
    // resetValue
} from "slices/thunk";

//import Constant
import {
    LAYOUT_TYPES,
    LAYOUT_MODE_TYPES,
    LAYOUT_SIDEBAR_TYPES,
    LAYOUT_WIDTH_TYPES,
    LAYOUT_POSITION_TYPES,
    LAYOUT_TOPBAR_THEME_TYPES,
    LEFT_SIDEBAR_SIZE_TYPES,
    LEFT_SIDEBAR_VIEW_TYPES,
    LEFT_SIDEBAR_IMAGE_TYPES,
    PERLOADER_TYPES,
    BODY_IMAGE_TYPES
} from "Common/constants/layout";
import { changePreLoader } from 'slices/layouts/thunk';

const chatMessage = [
    { id: 1, isSender: false, img: logosm, msg: "Welcome to Themesbrand. We are here to help you. You can also directly email us at Support@themesbrand.com to schedule a meeting with our Technology Consultant.", time: "09:07 am" },
    { id: 2, isSender: true, msg: "Good morning, How are you? What about our next meeting?", time: "09:08 am" },
    { id: 3, isSender: false, img: logosm, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", time: "09:10 am" }
]

const RightSidebar = () => {
    const dispatch = useDispatch<any>();
    const [chatBox, setChatBox] = useState<any>(null);

    const [open, setOpen] = useState<boolean>(true);
    const [openBoxLayout, setOpenBoxLayout] = useState<boolean>(false);
    const [openSidebarColor, setOpenSidebarColor] = useState<boolean>(false);
    const [openChatBot, setOpenChatBot] = useState<boolean>(false);
    const [chatBotMsg, setChatBotMsg] = useState<any>([...chatMessage])

    useEffect(() => {
        if (openSidebarColor && document.getElementById("sidebar-color-dark") && document.getElementById("sidebar-color-light")) {
            const darkele = document.getElementById("sidebar-color-dark") as HTMLInputElement
            const lightele = document.getElementById("sidebar-color-dark") as HTMLInputElement
            darkele!.checked = false
            lightele!.checked = false
        }
    });

    // Sidebar Color
    const tog_SidebarColor = () => {
        if (!openSidebarColor) {
            setOpenSidebarColor(true);
            dispatch(changeSidebarTheme("gradient"))
        }
    }

    // open offcanvas
    const toggleLeftCanvas = () => { setOpen(!open) };

    // Chat Bot
    const sendMsg = () => {
        const msg: any = document.getElementById("chat-msg");
        let timeStamp = moment(new Date()).format("hh:mm a");

        if (msg.value !== "") {
            let senderMsg: any = { id: chatBotMsg.length + 1, isSender: true, msg: msg.value, time: timeStamp }
            setChatBotMsg([...chatBotMsg, senderMsg])
            msg.value = ""
        }
    }

    const scrollToBottom = useCallback(() => {
        if (chatBox) {
            chatBox.scrollTop = chatBox.scrollHeight + 1000;
        }
    }, [chatBox]);

    useEffect(() => {
        if ((chatBotMsg || []).length > 1) {
            scrollToBottom();
        }
    }, [chatBotMsg, scrollToBottom]);

    const {
        layoutType,
        leftSidebarType,
        layoutModeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
        leftSidebarImageType,
        preloader,
        bodyImageType
    } = useSelector((state: any) => ({
        layoutType: state.Layout.layoutType,
        leftSidebarType: state.Layout.leftSidebarType,
        layoutModeType: state.Layout.layoutModeType,
        layoutWidthType: state.Layout.layoutWidthType,
        layoutPositionType: state.Layout.layoutPositionType,
        topbarThemeType: state.Layout.topbarThemeType,
        leftsidbarSizeType: state.Layout.leftsidbarSizeType,
        leftSidebarViewType: state.Layout.leftSidebarViewType,
        leftSidebarImageType: state.Layout.leftSidebarImageType,
        preloader: state.Layout.preloader,
        bodyImageType: state.Layout.bodyImageType
    }));

    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        const element = document.getElementById("back-to-top");
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    };

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const pathName = useLocation().pathname;

    useEffect(() => {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.style.opacity = "1";
            preloader.style.visibility = "visible";
            setTimeout(function () {
                preloader.style.opacity = "0";
                preloader.style.visibility = "hidden";
            }, 1000);
        }
    }, [preloader, pathName]);

    return (
    
        <React.Fragment>
            <Button variant="info" className="btn-icon" id="back-to-top" onClick={() => toTop()}>
                <i className="ri-arrow-up-line"></i>
            </Button>

            <Link to="#" className="btn btn-danger shadow-lg chat-button rounded-bottom-0 d-none d-lg-block" onClick={() => setOpenChatBot(!openChatBot)}>Online Chat</Link>

            <Collapse className="chat-box" in={openChatBot}>
                <Card className="shadow-lg border-0 rounded-bottom-0 mb-0">
                    <Card.Header className="bg-success d-flex align-items-center border-0">
                        <h5 className="text-white fs-16 fw-medium flex-grow-1 mb-0">Hi, Raquel Murillo 👋</h5>
                        <Button variant="link" type="button" className="btn-close btn-close-white flex-shrink-0" aria-label="Close" onClick={() => setOpenChatBot(!openChatBot)}></Button>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <div id="users-chat-widget">
                            <PerfectScrollbar className="chat-conversation p-3" id="chat-conversation" style={{ height: "280px" }} containerRef={ref => setChatBox(ref)}>
                                <ul className="list-unstyled chat-conversation-list chat-sm" id="users-conversation">

                                    {(chatBotMsg || []).map((item: any, key: number) => (
                                    <li className={item.isSender ? "chat-list right" : "chat-list left"} key={key}>
                                        <div className="conversation-list">
                                            {item.img && <div className="chat-avatar">
                                                <img src={logosm} alt="" />
                                            </div>}
                                            <div className="user-chat-content">
                                                <div className="ctext-wrap">
                                                    <div className="ctext-wrap-content">
                                                        <p className="mb-0 ctext-content">
                                                            {item.msg}
                                                        </p>
                                                    </div>
                                                    <Dropdown className="align-self-start message-box-drop">
                                                        <Dropdown.Toggle as="a" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</Dropdown.Item>
                                                            <Dropdown.Item href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</Dropdown.Item>
                                                            <Dropdown.Item className="delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <div className="conversation-name"><small className="text-muted time">{item.time}</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                            </div>
                                        </div>
                                    </li>))}
                                </ul>
                            </PerfectScrollbar>
                        </div>
                        <div className="border-top border-top-dashed">
                            <div className="row g-2 mt-2 mx-3 mb-3">
                                <div className="col">
                                    <div className="position-relative">
                                        <input type="text" className="form-control border-light bg-light" id="chat-msg" placeholder="Enter Message..." />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <Button variant="info" type="submit" onClick={() => sendMsg()}><i className="mdi mdi-send"></i></Button>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Collapse>

            {preloader === "enable" && <div id="preloader">
                <div id="status">
                    <div className="spinner-border text-primary avatar-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>}

            <div className="customizer-setting d-none d-md-block">
                <div onClick={toggleLeftCanvas} className="btn-secondary btn-rounded shadow-lg btn btn-icon btn-lg p-2">
                    <i className='mdi mdi-spin mdi-cog-outline fs-22'></i>
                </div>
            </div>

            <Offcanvas show={open} onHide={toggleLeftCanvas} placement="end" className="border-0">
                <Offcanvas.Header className="d-flex align-items-center bg-primary p-3" closeButton closeVariant="white">
                    <h5 className="m-0 me-2 text-white">Theme Customizer</h5>
                </Offcanvas.Header>
                <div className="offcanvas-body p-0">
                    <div data-simplebar className="h-100">
                        <div className="p-4">

                            <div className="mb-4 hstack gap-2">
                                <Link to="/" target="_blank" className="btn btn-secondary">Visit Your Website</Link>
                                <Link to="/" target="_blank" className="btn btn-success">Components</Link>
                            </div>

                            <h6 className="mb-1 fs-15 fw-semibold text-uppercase">Layout</h6>
                            <p className="text-muted">Choose your layout</p>

                            <Row className="gy-3">
                                <Col className="col-6">
                                    <div className="form-check card-radio customize-widget">
                                        <input
                                            id="customizer-layout01"
                                            name="data-layout"
                                            type="radio"
                                            value={LAYOUT_TYPES.VERTICAL}
                                            checked={layoutType === LAYOUT_TYPES.VERTICAL}
                                            onChange={(e: any) => {
                                                if (e.target.checked) {
                                                    dispatch(changeLayout(e.target.value));
                                                }
                                            }}
                                            className="form-check-input"
                                        />
                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="customizer-layout01">
                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                </span>
                                            </span>
                                            <span className="d-flex gap-1 h-100">
                                                <span className="flex-shrink-0">
                                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-2">
                                                        <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-light d-block p-2"></span>
                                                        <span className="bg-light d-block p-2 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="fs-14 text-center mt-2">Vertical</h5>
                                </Col>
                                <Col className="col-6">
                                    <div className="form-check card-radio customize-widget">
                                        <input
                                            id="customizer-layout02"
                                            name="data-layout"
                                            type="radio"
                                            value={LAYOUT_TYPES.HORIZONTAL}
                                            checked={layoutType === LAYOUT_TYPES.HORIZONTAL}
                                            onChange={(e: any) => {
                                                if (e.target.checked) {
                                                    dispatch(changeLayout(e.target.value));
                                                }
                                            }}
                                            className="form-check-input"
                                        />
                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="customizer-layout02">
                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                </span>
                                            </span>
                                            <span className="d-flex h-100 flex-column gap-1">
                                                <span className="bg-light d-flex p-1 gap-1 align-items-center">
                                                    <span className="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                                    <span className="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                                    <span className="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                                </span>
                                                <span className="bg-light d-block p-1"></span>
                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="fs-14 text-center mt-2">Horizontal</h5>
                                </Col>
                                <div className="col-6">
                                    <div className="form-check card-radio customize-widget">
                                        <input
                                            id="customizer-layout03"
                                            name="data-layout"
                                            type="radio"
                                            value={LAYOUT_TYPES.TWOCOLUMN}
                                            checked={layoutType === LAYOUT_TYPES.TWOCOLUMN}
                                            onChange={(e: any) => {
                                                if (e.target.checked) {
                                                    dispatch(changeLayout(e.target.value));
                                                }
                                            }}
                                            className="form-check-input" />
                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="customizer-layout03">
                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                </span>
                                            </span>
                                            <span className="d-flex gap-1 h-100">
                                                <span className="flex-shrink-0">
                                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span className="d-block p-1 bg-primary-subtle mb-2"></span>
                                                        <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span className="flex-shrink-0">
                                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-2">
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-light d-block p-2"></span>
                                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="fs-14 text-center mt-2">Two Column</h5>
                                </div>
                            </Row>

                            <h6 className="mt-4 mb-1 fs-15 fw-semibold text-uppercase">Color Scheme</h6>
                            <p className="text-muted">Choose Light or Dark Scheme.</p>

                            <div className="colorscheme-cardradio">
                                <div className="row gy-3">
                                    <div className="col-6">
                                        <div className="form-check card-radio customize-widget">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="data-bs-theme"
                                                id="layout-mode-light"
                                                value={LAYOUT_MODE_TYPES.LIGHTMODE}
                                                checked={layoutModeType === LAYOUT_MODE_TYPES.LIGHTMODE}
                                                onChange={(e: any) => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutMode(e.target.value));
                                                    }
                                                }}
                                            />
                                            <label className="form-check-label p-0 avatar-xl w-100" htmlFor="layout-mode-light">
                                                <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                    <span className="d-flex align-items-center gap-1 ps-1">
                                                        <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                        <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                        <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                    </span>
                                                </span>
                                                <span className="d-flex gap-1 h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                            <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-block p-1"></span>
                                                            <span className="bg-light d-block p-1 mt-auto"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <h5 className="fs-14 text-center mt-2">Light</h5>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-check card-radio dark customize-widget">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="data-bs-theme"
                                                id="layout-mode-dark"
                                                value={LAYOUT_MODE_TYPES.DARKMODE}
                                                checked={layoutModeType === LAYOUT_MODE_TYPES.DARKMODE}
                                                onChange={(e: any) => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutMode(e.target.value));
                                                    }
                                                }}
                                            />
                                            <label className="form-check-label p-0 avatar-xl w-100 bg-dark" htmlFor="layout-mode-dark">
                                                <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                    <span className="d-flex align-items-center gap-1 ps-1">
                                                        <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                        <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                        <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                    </span>
                                                </span>
                                                <span className="d-flex gap-1 h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light bg-opacity-10 d-flex h-100 flex-column gap-1 p-1">
                                                            <span className="d-block p-1 px-2 bg-light bg-opacity-10 rounded mb-2"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-light bg-opacity-10"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-light bg-opacity-10"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-light bg-opacity-10"></span>
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light bg-opacity-10 d-block p-1"></span>
                                                            <span className="bg-light bg-opacity-10 d-block p-1 mt-auto"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <h5 className="fs-14 text-center mt-2">Dark</h5>
                                    </div>
                                </div>
                            </div>

                            {layoutType !== "twocolumn" &&
                                <React.Fragment>
                                    <div id="layout-width">
                                        <h6 className="mt-4 mb-1 fs-15 fw-semibold text-uppercase">Layout Width</h6>
                                        <p className="text-muted">Choose Fluid or Boxed layout.</p>

                                        <div className="row gy-3">
                                            <div className="col-6">
                                                <div className="form-check card-radio customize-widget" data-bs-toggle="collapse" data-bs-target="#collapseLayoutWidth.show">
                                                    <input className="form-check-input" type="radio" name="data-layout-width" id="layout-width-fluid"
                                                        value={LAYOUT_WIDTH_TYPES.FLUID}
                                                        checked={layoutWidthType === LAYOUT_WIDTH_TYPES.FLUID}
                                                        onChange={(e: any) => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLayoutWidth(e.target.value))
                                                                setOpenBoxLayout(false)
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xl w-100" htmlFor="layout-width-fluid">
                                                        <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                            <span className="d-flex align-items-center gap-1 ps-1">
                                                                <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                            </span>
                                                        </span>
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-14 text-center mt-2">Fluid</h5>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-check card-radio customize-widget collapsed" data-bs-toggle="collapse" data-bs-target="#collapseLayoutWidth">
                                                    <input className="form-check-input" type="radio" name="data-layout-width" id="layout-width-boxed"
                                                        value={LAYOUT_WIDTH_TYPES.BOXED}
                                                        checked={layoutWidthType === LAYOUT_WIDTH_TYPES.BOXED}
                                                        onChange={(e: any) => {
                                                            if (e.target.checked) {
                                                                window.dispatchEvent(new Event('resize'));
                                                                dispatch(changeLayoutWidth(e.target.value))
                                                            }
                                                        }}
                                                        onClick={() => setOpenBoxLayout(!openBoxLayout)}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xl w-100" htmlFor="layout-width-boxed">
                                                        <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                            <span className="d-flex align-items-center gap-1 ps-1">
                                                                <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                            </span>
                                                        </span>
                                                        <span className="d-flex gap-1 h-100 border-start border-end px-3">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-14 text-center mt-2">Boxed</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <Collapse in={openBoxLayout}>
                                        <div>
                                            <h6 className="mt-4 mb-1 fs-15 fw-semibold text-uppercase">Boxed Layout Body Images</h6>
                                            <p className="text-muted">Choose image.</p>

                                            <div className="row gy-3">
                                                <div className="col-6">
                                                    <div className="form-check card-radio customize-widget">
                                                        <input className="form-check-input" type="radio" name="data-body-image" id="data-body-image-none"
                                                            value={BODY_IMAGE_TYPES.NONE}
                                                            checked={bodyImageType === BODY_IMAGE_TYPES.NONE}
                                                            onChange={(e: any) => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeBodyImageType(e.target.value))
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="data-body-image-none">
                                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex gap-1 h-100 border-start border-end px-3">
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <h5 className="fs-14 text-center mt-2">None</h5>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-check card-radio customize-widget">
                                                        <input className="form-check-input" type="radio" name="data-body-image" id="data-body-image-1"
                                                            value={BODY_IMAGE_TYPES.IMG1}
                                                            checked={bodyImageType === BODY_IMAGE_TYPES.IMG1}
                                                            onChange={(e: any) => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeBodyImageType(e.target.value))
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="data-body-image-1">
                                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex gap-1 h-100 border-start border-end px-3">
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <h5 className="fs-14 text-center mt-2">Img 1</h5>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-check card-radio customize-widget">
                                                        <input className="form-check-input" type="radio" name="data-body-image" id="data-body-image-2"
                                                            value={BODY_IMAGE_TYPES.IMG2}
                                                            checked={bodyImageType === BODY_IMAGE_TYPES.IMG2}
                                                            onChange={(e: any) => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeBodyImageType(e.target.value))
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="data-body-image-2">
                                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex gap-1 h-100 border-start border-end px-3">
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <h5 className="fs-14 text-center mt-2">Img 2</h5>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-check card-radio customize-widget">
                                                        <input className="form-check-input" type="radio" name="data-body-image" id="data-body-image-3"
                                                            value={BODY_IMAGE_TYPES.IMG3}
                                                            checked={bodyImageType === BODY_IMAGE_TYPES.IMG3}
                                                            onChange={(e: any) => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeBodyImageType(e.target.value))
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="data-body-image-3">
                                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex gap-1 h-100 border-start border-end px-3">
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <h5 className="fs-14 text-center mt-2">Img 3</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Collapse>

                                    <div id="layout-position">
                                        <h6 className="mt-4 mb-1 fs-15 fw-semibold text-uppercase">Layout Position</h6>
                                        <p className="text-muted">Choose Fixed or Scrollable Layout Position.</p>

                                        <div className="btn-group radio" role="group">
                                            <input type="radio" className="btn-check" name="data-layout-position" id="layout-position-fixed"
                                                value={LAYOUT_POSITION_TYPES.FIXED}
                                                checked={layoutPositionType === LAYOUT_POSITION_TYPES.FIXED}
                                                onChange={(e: any) => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutPosition(e.target.value))
                                                    }
                                                }}
                                            />
                                            <label className="btn btn-light w-sm" htmlFor="layout-position-fixed">Fixed</label>

                                            <input type="radio" className="btn-check" name="data-layout-position" id="layout-position-scrollable"
                                                value={LAYOUT_POSITION_TYPES.SCROLLABLE}
                                                checked={layoutPositionType === LAYOUT_POSITION_TYPES.SCROLLABLE}
                                                onChange={(e: any) => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutPosition(e.target.value))
                                                    }
                                                }}
                                            />
                                            <label className="btn btn-light w-sm ms-0" htmlFor="layout-position-scrollable">Scrollable</label>
                                        </div>
                                    </div>
                                </React.Fragment>
                            }
                            <h6 className="mt-4 mb-1 fs-15 fw-semibold text-uppercase">Topbar Color</h6>
                            <p className="text-muted">Choose Light or Dark Topbar Color.</p>

                            <div className="row gy-3">
                                <div className="col-6">
                                    <div className="form-check card-radio customize-widget">
                                        <input className="form-check-input" type="radio" name="data-topbar" id="topbar-color-light"
                                            value={LAYOUT_TOPBAR_THEME_TYPES.LIGHT}
                                            checked={topbarThemeType === LAYOUT_TOPBAR_THEME_TYPES.LIGHT}
                                            onChange={(e: any) => {
                                                if (e.target.checked) {
                                                    dispatch(changeTopbarTheme(e.target.value))
                                                }
                                            }}

                                        />
                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="topbar-color-light">
                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                </span>
                                            </span>
                                            <span className="d-flex gap-1 h-100">
                                                <span className="flex-shrink-0">
                                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-light d-block p-1"></span>
                                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="fs-14 text-center mt-2">Light</h5>
                                </div>
                                <div className="col-6">
                                    <div className="form-check card-radio customize-widget">
                                        <input className="form-check-input" type="radio" name="data-topbar" id="topbar-color-dark"
                                            value={LAYOUT_TOPBAR_THEME_TYPES.DARK}
                                            checked={topbarThemeType === LAYOUT_TOPBAR_THEME_TYPES.DARK}
                                            onChange={(e: any) => {
                                                if (e.target.checked) {
                                                    dispatch(changeTopbarTheme(e.target.value))
                                                }
                                            }}
                                        />
                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="topbar-color-dark">
                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                </span>
                                            </span>
                                            <span className="d-flex gap-1 h-100">
                                                <span className="flex-shrink-0">
                                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-dark d-block p-1"></span>
                                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="fs-14 text-center mt-2">Dark</h5>
                                </div>

                                <div className="col-6">
                                    <div className="form-check card-radio customize-widget">
                                        <input className="form-check-input" type="radio" name="data-topbar" id="topbar-color-brand"
                                            value={LAYOUT_TOPBAR_THEME_TYPES.BRAND}
                                            checked={topbarThemeType === LAYOUT_TOPBAR_THEME_TYPES.BRAND}
                                            onChange={(e: any) => {
                                                if (e.target.checked) {
                                                    dispatch(changeTopbarTheme(e.target.value))
                                                }
                                            }}
                                        />
                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="topbar-color-brand">
                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                </span>
                                            </span>
                                            <span className="d-flex gap-1 h-100">
                                                <span className="flex-shrink-0">
                                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="d-flex h-100 flex-column">
                                                        <span className="bg-primary d-block p-1"></span>
                                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="fs-14 text-center mt-2">Brand</h5>
                                </div>
                            </div>

                            {(layoutType === "vertical" || layoutType === "twocolumn") &&
                                <React.Fragment>
                                    <div id="sidebar-size">
                                        <h6 className="mt-4 mb-1 fs-15 fw-semibold text-uppercase">Sidebar Size</h6>
                                        <p className="text-muted">Choose a size of Sidebar.</p>

                                        <div className="row gy-3">
                                            <div className="col-6">
                                                <div className="form-check sidebar-setting card-radio customize-widget">
                                                    <input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-default"
                                                        value={LEFT_SIDEBAR_SIZE_TYPES.DEFAULT}
                                                        checked={leftsidbarSizeType === LEFT_SIDEBAR_SIZE_TYPES.DEFAULT}
                                                        onChange={(e: any) => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLeftsidebarSizeType(e.target.value))
                                                            }

                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xl w-100" htmlFor="sidebar-size-default">
                                                        <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                            <span className="d-flex align-items-center gap-1 ps-1">
                                                                <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                            </span>
                                                        </span>
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-14 text-center mt-2">Default</h5>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-check sidebar-setting card-radio customize-widget">
                                                    <input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-compact"
                                                        value={LEFT_SIDEBAR_SIZE_TYPES.COMPACT}
                                                        checked={leftsidbarSizeType === LEFT_SIDEBAR_SIZE_TYPES.COMPACT}
                                                        onChange={(e: any) => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLeftsidebarSizeType(e.target.value))
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xl w-100" htmlFor="sidebar-size-compact">
                                                        <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                            <span className="d-flex align-items-center gap-1 ps-1">
                                                                <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                            </span>
                                                        </span>
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 bg-primary-subtle rounded mb-2"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-14 text-center mt-2">Compact</h5>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-check sidebar-setting card-radio customize-widget">
                                                    <input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-small"
                                                        value={LEFT_SIDEBAR_SIZE_TYPES.SMALLICON}
                                                        checked={leftsidbarSizeType === LEFT_SIDEBAR_SIZE_TYPES.SMALLICON}
                                                        onChange={(e: any) => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLeftsidebarSizeType(e.target.value))
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xl w-100" htmlFor="sidebar-size-small">
                                                        <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                            <span className="d-flex align-items-center gap-1 ps-1">
                                                                <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                            </span>
                                                        </span>
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1">
                                                                    <span className="d-block p-1 bg-primary-subtle mb-2"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-14 text-center mt-2">Small (Icon View)</h5>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-check sidebar-setting card-radio customize-widget">
                                                    <input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-small-hover"
                                                        value={LEFT_SIDEBAR_SIZE_TYPES.SMALLHOVER}
                                                        checked={leftsidbarSizeType === LEFT_SIDEBAR_SIZE_TYPES.SMALLHOVER}
                                                        onChange={(e: any) => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLeftsidebarSizeType(e.target.value))
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xl w-100" htmlFor="sidebar-size-small-hover">
                                                        <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                            <span className="d-flex align-items-center gap-1 ps-1">
                                                                <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                            </span>
                                                        </span>
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1">
                                                                    <span className="d-block p-1 bg-primary-subtle mb-2"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-14 text-center mt-2">Small Hover View</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="sidebar-view">
                                        <h6 className="mt-4 mb-1 fs-15 fw-semibold text-uppercase">Sidebar View</h6>
                                        <p className="text-muted">Choose Default or Detached Sidebar view.</p>

                                        <div className="row gy-3">
                                            <div className="col-6">
                                                <div className="form-check sidebar-setting card-radio customize-widget">
                                                    <input className="form-check-input" type="radio" name="data-layout-style" id="sidebar-view-default"
                                                        value={LEFT_SIDEBAR_VIEW_TYPES.DEFAULT}
                                                        checked={leftSidebarViewType === LEFT_SIDEBAR_VIEW_TYPES.DEFAULT}
                                                        onChange={(e: any) => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLeftsidebarViewType(e.target.value))
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xl w-100" htmlFor="sidebar-view-default">
                                                        <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                            <span className="d-flex align-items-center gap-1 ps-1">
                                                                <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                            </span>
                                                        </span>
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-14 text-center mt-2">Default</h5>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-check sidebar-setting card-radio customize-widget">
                                                    <input className="form-check-input" type="radio" name="data-layout-style" id="sidebar-view-detached"
                                                        value={LEFT_SIDEBAR_VIEW_TYPES.DETACHED}
                                                        checked={leftSidebarViewType === LEFT_SIDEBAR_VIEW_TYPES.DETACHED}
                                                        onChange={(e: any) => {
                                                            if (e.target.checked) {
                                                                dispatch(changeLeftsidebarViewType(e.target.value))
                                                            }
                                                        }}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xl w-100" htmlFor="sidebar-view-detached">
                                                        <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                            <span className="d-flex align-items-center gap-1 ps-1">
                                                                <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                            </span>
                                                        </span>
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-flex p-1 gap-1 align-items-center px-2">
                                                                <span className="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                                                <span className="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                                                <span className="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                                            </span>
                                                            <span className="d-flex gap-1 h-100 p-1 px-2">
                                                                <span className="flex-shrink-0">
                                                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span className="bg-light d-block p-1 mt-auto px-2"></span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-14 text-center mt-2">Detached</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sidebar-color">
                                        <h6 className="mt-4 mb-1 fs-15 fw-semibold text-uppercase">Sidebar Color</h6>
                                        <p className="text-muted">Choose a color of Sidebar.</p>

                                        <div className="row gy-3">
                                            <div className="col-6">
                                                <div className="form-check sidebar-setting card-radio customize-widget">
                                                    <input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-light"
                                                        value={LAYOUT_SIDEBAR_TYPES.LIGHT}
                                                        checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.LIGHT}
                                                        onChange={(e: any) => {
                                                            if (e.target.checked) {
                                                                dispatch(changeSidebarTheme(e.target.value))
                                                            }
                                                        }}
                                                        onClick={() => setOpenSidebarColor(false)}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xl w-100" htmlFor="sidebar-color-light">
                                                        <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                            <span className="d-flex align-items-center gap-1 ps-1">
                                                                <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                            </span>
                                                        </span>
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-white border-end d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-14 text-center mt-2">Light</h5>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-check sidebar-setting card-radio customize-widget" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient.show">
                                                    <input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-dark"
                                                        value={LAYOUT_SIDEBAR_TYPES.DARK}
                                                        checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.DARK}
                                                        onChange={(e: any) => {
                                                            if (e.target.checked) {
                                                                dispatch(changeSidebarTheme(e.target.value))
                                                            }
                                                        }}
                                                        onClick={() => setOpenSidebarColor(false)}
                                                    />
                                                    <label className="form-check-label p-0 avatar-xl w-100" htmlFor="sidebar-color-dark">
                                                        <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                            <span className="d-flex align-items-center gap-1 ps-1">
                                                                <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                            </span>
                                                        </span>
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-dark d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-light bg-opacity-10 rounded mb-2"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-light bg-opacity-10"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-light bg-opacity-10"></span>
                                                                    <span className="d-block p-1 px-2 pb-0 bg-light bg-opacity-10"></span>
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-14 text-center mt-2">Dark</h5>
                                            </div>
                                            <div className="col-6">
                                                <Button variant='link'
                                                    className={openSidebarColor ? "btn btn-link avatar-xl w-100 p-0 overflow-hidden border customize-widget active" : "btn btn-link avatar-xl w-100 p-0 overflow-hidden border customize-widget"}
                                                    type="button"
                                                    data-bs-target="#collapseBgGradient"
                                                    onClick={tog_SidebarColor}
                                                >
                                                    <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                        <span className="d-flex align-items-center gap-1 ps-1">
                                                            <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                            <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                            <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                        </span>
                                                    </span>
                                                    <span className="d-flex gap-1 h-100">
                                                        <span className="flex-shrink-0">
                                                            <span className="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1">
                                                                <span className="d-block p-1 px-2 bg-light bg-opacity-10 rounded mb-2"></span>
                                                                <span className="d-block p-1 px-2 pb-0 bg-white bg-opacity-10"></span>
                                                                <span className="d-block p-1 px-2 pb-0 bg-white bg-opacity-10"></span>
                                                                <span className="d-block p-1 px-2 pb-0 bg-white bg-opacity-10"></span>
                                                            </span>
                                                        </span>
                                                        <span className="flex-grow-1">
                                                            <span className="d-flex h-100 flex-column">
                                                                <span className="bg-light d-block p-1"></span>
                                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </Button>
                                                <h5 className="fs-14 text-center mt-2">Gradient</h5>
                                            </div>
                                        </div>


                                        {/* <div className="collapse" id="collapseBgGradient"> */}
                                        <Collapse in={openSidebarColor} className="collapse">
                                            <div>
                                                <div className="d-flex gap-2 flex-wrap img-switch p-2 px-3 bg-light rounded">

                                                    <div className="form-check sidebar-setting card-radio">
                                                        <input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-gradient"
                                                            value={LAYOUT_SIDEBAR_TYPES.GRADIENT}
                                                            checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.GRADIENT}
                                                            onChange={(e: any) => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeSidebarTheme(e.target.value))
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label p-0 avatar-xs rounded-circle" htmlFor="sidebar-color-gradient">
                                                            <span className="avatar-title rounded-circle bg-vertical-gradient"></span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check sidebar-setting card-radio">
                                                        <input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-gradient-2"
                                                            value={LAYOUT_SIDEBAR_TYPES.GRADIENT_2}
                                                            checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.GRADIENT_2}
                                                            onChange={(e: any) => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeSidebarTheme(e.target.value))
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label p-0 avatar-xs rounded-circle" htmlFor="sidebar-color-gradient-2">
                                                            <span className="avatar-title rounded-circle bg-vertical-gradient-2"></span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check sidebar-setting card-radio">
                                                        <input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-gradient-3"
                                                            value={LAYOUT_SIDEBAR_TYPES.GRADIENT_3}
                                                            checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.GRADIENT_3}
                                                            onChange={(e: any) => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeSidebarTheme(e.target.value))
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label p-0 avatar-xs rounded-circle" htmlFor="sidebar-color-gradient-3">
                                                            <span className="avatar-title rounded-circle bg-vertical-gradient-3"></span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check sidebar-setting card-radio">
                                                        <input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-gradient-4"
                                                            value={LAYOUT_SIDEBAR_TYPES.GRADIENT_4}
                                                            checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.GRADIENT_4}
                                                            onChange={(e: any) => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeSidebarTheme(e.target.value))
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label p-0 avatar-xs rounded-circle" htmlFor="sidebar-color-gradient-4">
                                                            <span className="avatar-title rounded-circle bg-vertical-gradient-4"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </Collapse>
                                        {/* </div> */}
                                    </div>

                                    <div id="sidebar-img">
                                        <h6 className="mt-4 mb-1 fs-15 fw-semibold text-uppercase">Sidebar Images</h6>
                                        <p className="text-muted">Choose a image of Sidebar.</p>


                                        <div className="img-switch">
                                            <div className="row gy-3">
                                                <div className="col-6">
                                                    <div className="form-check sidebar-setting card-radio customize-widget">
                                                        <input className="form-check-input" type="radio" name="data-sidebar-image" id="sidebarimg-none"
                                                            value={LEFT_SIDEBAR_IMAGE_TYPES.NONE}
                                                            checked={leftSidebarImageType === LEFT_SIDEBAR_IMAGE_TYPES.NONE}
                                                            onChange={(e: any) => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeSidebarImageType(e.target.value))
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="sidebarimg-none">
                                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex gap-1 h-100">
                                                                <span className="flex-shrink-0">
                                                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-2 d-flex align-items-center justify-content-center">
                                                                        <i className="ri-close-fill fs-20"></i>
                                                                    </span>
                                                                </span>
                                                                <span className="flex-grow-1">
                                                                    <span className="d-flex h-100 flex-column">
                                                                        <span className="bg-light d-block p-1"></span>
                                                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-check sidebar-setting card-radio customize-widget">
                                                        <input className="form-check-input" type="radio" name="data-sidebar-image" id="sidebarimg-01"
                                                            value={LEFT_SIDEBAR_IMAGE_TYPES.IMG1}
                                                            checked={leftSidebarImageType === LEFT_SIDEBAR_IMAGE_TYPES.IMG1}
                                                            onChange={(e: any) => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeSidebarImageType(e.target.value))
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="sidebarimg-01">
                                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex gap-1 h-100">
                                                                <span className="flex-shrink-0">
                                                                    <img src={sidebarImg1} alt="" className="avatar-sm h-100 object-fit-cover" />
                                                                </span>
                                                                <span className="flex-grow-1">
                                                                    <span className="d-flex h-100 flex-column">
                                                                        <span className="bg-light d-block p-1"></span>
                                                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-check sidebar-setting card-radio customize-widget">
                                                        <input className="form-check-input" type="radio" name="data-sidebar-image" id="sidebarimg-02"
                                                            value={LEFT_SIDEBAR_IMAGE_TYPES.IMG2}
                                                            checked={leftSidebarImageType === LEFT_SIDEBAR_IMAGE_TYPES.IMG2}
                                                            onChange={(e: any) => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeSidebarImageType(e.target.value))
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="sidebarimg-02">
                                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex gap-1 h-100">
                                                                <span className="flex-shrink-0">
                                                                    <img src={sidebarImg2} alt="" className="avatar-sm h-100 object-fit-cover" />
                                                                </span>
                                                                <span className="flex-grow-1">
                                                                    <span className="d-flex h-100 flex-column">
                                                                        <span className="bg-light d-block p-1"></span>
                                                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-check sidebar-setting card-radio customize-widget">
                                                        <input className="form-check-input" type="radio" name="data-sidebar-image" id="sidebarimg-03"
                                                            value={LEFT_SIDEBAR_IMAGE_TYPES.IMG3}
                                                            checked={leftSidebarImageType === LEFT_SIDEBAR_IMAGE_TYPES.IMG3}
                                                            onChange={(e: any) => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeSidebarImageType(e.target.value))
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="sidebarimg-03">
                                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex gap-1 h-100">
                                                                <span className="flex-shrink-0">
                                                                    <img src={sidebarImg3} alt="" className="avatar-sm h-100 object-fit-cover" />
                                                                </span>
                                                                <span className="flex-grow-1">
                                                                    <span className="d-flex h-100 flex-column">
                                                                        <span className="bg-light d-block p-1"></span>
                                                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-check sidebar-setting card-radio customize-widget">
                                                        <input className="form-check-input" type="radio" name="data-sidebar-image" id="sidebarimg-04"
                                                            value={LEFT_SIDEBAR_IMAGE_TYPES.IMG4}
                                                            checked={leftSidebarImageType === LEFT_SIDEBAR_IMAGE_TYPES.IMG4}
                                                            onChange={(e: any) => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeSidebarImageType(e.target.value))
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label p-0 avatar-xl w-100" htmlFor="sidebarimg-04">
                                                            <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                                <span className="d-flex align-items-center gap-1 ps-1">
                                                                    <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                                    <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex gap-1 h-100">
                                                                <span className="flex-shrink-0">
                                                                    <img src={sidebarImg4} alt="" className="avatar-sm h-100 object-fit-cover" />
                                                                </span>
                                                                <span className="flex-grow-1">
                                                                    <span className="d-flex h-100 flex-column">
                                                                        <span className="bg-light d-block p-1"></span>
                                                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            }

                            <div id="preloader-menu">
                                <h6 className="mt-4 mb-1 fs-15 fw-semibold text-uppercase">Preloader</h6>
                                <p className="text-muted">Choose a preloader.</p>

                                <div className="row gy-3">
                                    <div className="col-6">
                                        <div className="form-check sidebar-setting card-radio customize-widget">
                                            <input className="form-check-input" type="radio" name="data-preloader" id="preloader-view-custom"
                                                value={PERLOADER_TYPES.ENABLE}
                                                checked={preloader === PERLOADER_TYPES.ENABLE}
                                                onChange={(e: any) => {
                                                    if (e.target.checked) {
                                                        dispatch(changePreLoader(e.target.value))
                                                    }
                                                }}
                                            />
                                            <label className="form-check-label p-0 avatar-xl w-100" htmlFor="preloader-view-custom">
                                                <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                    <span className="d-flex align-items-center gap-1 ps-1">
                                                        <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                        <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                        <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                    </span>
                                                </span>
                                                <span className="d-flex gap-1 h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                            <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-block p-1"></span>
                                                            <span className="bg-light d-block p-1 mt-auto"></span>
                                                        </span>
                                                    </span>
                                                </span>

                                                <span className="d-flex align-items-center justify-content-center">
                                                    <span className="spinner-border text-primary avatar-xxs m-auto" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </span>
                                                </span>

                                            </label>
                                        </div>
                                        <h5 className="fs-14 text-center mt-2">Enable</h5>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-check sidebar-setting card-radio customize-widget">
                                            <input className="form-check-input" type="radio" name="data-preloader" id="preloader-view-none"
                                                value={PERLOADER_TYPES.DISABLE}
                                                checked={preloader === PERLOADER_TYPES.DISABLE}
                                                onChange={(e: any) => {
                                                    if (e.target.checked) {
                                                        dispatch(changePreLoader(e.target.value))
                                                    }
                                                }}
                                            />
                                            <label className="form-check-label p-0 avatar-xl w-100" htmlFor="preloader-view-none">
                                                <span className="customize-penal-main w-100 d-block d-flex align-items-center">
                                                    <span className="d-flex align-items-center gap-1 ps-1">
                                                        <span className="d-inline-block badge p-0 text-bg-danger rounded-circle"></span>
                                                        <span className="d-inline-block badge p-0 text-bg-success rounded-circle"></span>
                                                        <span className="d-inline-block badge p-0 text-bg-warning rounded-circle"></span>
                                                    </span>
                                                </span>
                                                <span className="d-flex gap-1 h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                            <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-block p-1"></span>
                                                            <span className="bg-light d-block p-1 mt-auto"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <h5 className="fs-14 text-center mt-2">Disable</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="offcanvas-footer border-top p-3 text-center">
                    <div className="row">
                        <div className="col-6">
                            <button type="button" className="btn btn-light w-100" id="reset-layout">Reset</button>
                        </div>
                        <div className="col-6">
                            <Link to="#!" target="_blank" className="btn btn-primary w-100">Buy Now</Link>
                        </div>
                    </div>
                </div> */}
            </Offcanvas>
        </React.Fragment >
    )
}

export default RightSidebar
