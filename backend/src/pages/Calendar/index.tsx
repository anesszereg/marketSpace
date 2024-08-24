import React, { useState, useEffect } from 'react';
import { Card, Container, Form, Modal, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from 'Common/BreadCrumb';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import listPlugin from '@fullcalendar/list';
import SimpleBar from "simplebar-react";
import Flatpickr from "react-flatpickr";

import * as Yup from "yup";
import { useFormik } from "formik";

import UpcommingEvents from './UpcommingEvents';

//redux
import { useSelector, useDispatch } from "react-redux";

import {
    getEvents as onGetEvents,
    getCategories as onGetCategories,
    addNewEvent as onAddNewEvent,
    deleteEvent as onDeleteEvent,
    updateEvent as onUpdateEvent,
    resetCalendar,
} from "../../slices/thunk";
import { Link } from 'react-router-dom';

const Calendar = () => {
    const dispatch: any = useDispatch();
    const [event, setEvent] = useState<any>({});
    const [modal, setModal] = useState<boolean>(false);
    const [selectedDay, setSelectedDay] = useState<any>(0);
    const [selectedNewDay, setSelectedNewDay] = useState<any>(0);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isEditButton, setIsEditButton] = useState<boolean>(true);
    const [upcommingevents, setUpcommingevents] = useState<any>([]);

    const { events, isEventUpdated } = useSelector((state: any) => ({
        events: state.Calendar.events,
        isEventUpdated: state.Calendar.isEventUpdated,
    }));

    useEffect(() => {
        dispatch(onGetEvents());
        dispatch(onGetCategories());
    }, [dispatch]);

    useEffect(() => {
        setUpcommingevents(events);
        upcommingevents.slice().sort(function (o1: any, o2: any) {
            return Math.abs(new Date(o1.start).getTime() - new Date(o2.start).getTime());
        });
    }, [events, upcommingevents]);

    useEffect(() => {
        if (isEventUpdated) {
            setIsEdit(false);
            setEvent({});
            setTimeout(() => {
                dispatch(resetCalendar(false));
            }, 500);
        }
    }, [dispatch, isEventUpdated]);

    // Handling the modal state
    const toggle = () => {
        if (modal) {
            setModal(false);
            setEvent(null);
            setIsEdit(false);
            setIsEditButton(true);
        } else {
            setModal(true);
        }
    };

    // Handling date click on calendar
    const handleDateClick = (arg: any) => {
        const date = arg["date"];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(
            year,
            month,
            day,
            currentHour,
            currentMin,
            currentSec
        );

        const modifiedData = { ...arg, date: modifiedDate };

        setSelectedNewDay(date);
        setSelectedDay(modifiedData);
        toggle();
    };

    const str_dt = function formatDate(date: any) {
        var monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        var d = new Date(date),
            month = "" + monthNames[d.getMonth()],
            day = "" + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [day + " " + month, year].join(",");
    };

    const date_r = function formatDate(date: any) {
        var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [year, month, day].join("-");
    };

    // Handling click on event on calendar
    const handleEventClick = (arg: any) => {
        const event = arg.event;
        const st_date = event.start;
        const ed_date = event.end;
        const r_date =
            ed_date == null
                ? str_dt(st_date)
                : str_dt(st_date) + " to " + str_dt(ed_date);
        const er_date =
            ed_date == null
                ? date_r(st_date)
                : date_r(st_date) + " to " + date_r(ed_date);

        setEvent({
            id: event.id,
            title: event.title,
            start: event.start,
            end: event.end,
            className: event.classNames,
            category: event.classNames[0],
            location: event._def.extendedProps.location,
            description: event._def.extendedProps.description,
            defaultDate: er_date,
            datetag: r_date,
            payment: event._def.extendedProps.payment,
        });

        setIsEdit(true);
        setIsEditButton(false);
        toggle();
    };

    // On delete event
    const handleDeleteEvent = () => {
        dispatch(onDeleteEvent(event));
        toggle();
    };

    // events validation
    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            title: (event && event.title) || "",
            category: (event && event.category) || "",
            payment: (event && event.payment) || "",
            location: (event && event.location) || "",
            description: (event && event.description) || "",
            defaultDate: (event && event.defaultDate) || "",
            datetag: (event && event.datetag) || "",
        },

        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Customer Name"),
            category: Yup.string().required("Please Select Your Category"),
            payment: Yup.string().required("Please Add Payment Value"),
            location: Yup.string().required("Please Add location"),
            description: Yup.string().required("Please Add description"),
        }),
        onSubmit: (values) => {
            var updatedDay: any = "";
            if (selectedNewDay) {
                updatedDay = new Date(selectedNewDay[1]);
                updatedDay.setDate(updatedDay.getDate() + 1);
            }

            if (isEdit) {
                const updateEvent = {
                    id: event.id,
                    title: values.title,
                    className: values.category,
                    start: selectedNewDay ? selectedNewDay[0] : event.start,
                    end: selectedNewDay ? updatedDay : event.end,
                    location: values.location,
                    payment: values.payment,
                    description: values.description,
                };
                // update event
                dispatch(onUpdateEvent(updateEvent));
                validation.resetForm();
            } else {
                const newEvent = {
                    id: Math.floor(Math.random() * 100),
                    title: values["title"],
                    start: selectedDay ? selectedNewDay[0] : new Date(),
                    end: selectedDay ? updatedDay : new Date(),
                    className: values.category,
                    location: values["location"],
                    payment: values["payment"],
                    description: values["description"],
                };
                // save new event
                dispatch(onAddNewEvent(newEvent));
                validation.resetForm();
            }
            setSelectedDay(null);
            setSelectedNewDay(null);
            toggle();
        },
    });

    const submitOtherEvent = () => {
        document.getElementById("form-event")?.classList.remove("view-event");

        document.getElementById("event-title")?.classList.replace("d-none", "d-block");
        document.getElementById("event-category")?.classList.replace("d-none", "d-block");
        (document.getElementById("event-start-date")?.parentNode as HTMLElement).classList.remove("d-none");
        document.getElementById("event-start-date")?.classList.replace("d-none", "d-block");
        document.getElementById("event-location")?.classList.replace("d-none", "d-block");
        document.getElementById("event-payment")?.classList.replace("d-none", "d-block");
        document.getElementById("event-description")?.classList.replace("d-none", "d-block");
        document.getElementById("event-start-date-tag")?.classList.replace("d-block", "d-none");
        document.getElementById("event-location-tag")?.classList.replace("d-block", "d-none");
        document.getElementById("event-payment-tag")?.classList.replace("d-block", "d-none");
        document.getElementById("event-description-tag")?.classList.replace("d-block", "d-none");

        setIsEditButton(true);
    };

    // On calendar drop event
    const onDrop = (event: any) => {
        const date = event["date"];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(
            year,
            month,
            day,
            currentHour,
            currentMin,
            currentSec
        );

        const draggedEl = event.draggedEl;
        const draggedElclass = draggedEl.className;
        if (
            draggedEl.classList.contains("external-event") &&
            draggedElclass.indexOf("fc-event-draggable") === -1
        ) {
            const modifiedData = {
                id: Math.floor(Math.random() * 1000),
                title: draggedEl.innerText,
                start: modifiedDate,
                className: draggedEl.className,
            };
            dispatch(onAddNewEvent(modifiedData));
        }
    };

    const searchCustomer = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search.toLowerCase()
            setUpcommingevents(events.filter((data: any) => (data.title.toLowerCase().includes(search))));
        } else {
            setUpcommingevents(events);
        }
    };

    document.title = "Calendar | Toner eCommerce + Admin React Template";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Calendar" pageTitle="Calendar" />
                    <Row>
                        <Col xl={9}>
                            <Card className="card-h-100">
                                <Card.Body>
                                    <div id="calendar">
                                        <FullCalendar
                                            plugins={[
                                                BootstrapTheme,
                                                dayGridPlugin,
                                                interactionPlugin,
                                                listPlugin
                                            ]}
                                            initialView="dayGridMonth"
                                            slotDuration={"00:15:00"}
                                            handleWindowResize={true}
                                            themeSystem="bootstrap"
                                            headerToolbar={{
                                                left: "prev,next today",
                                                center: "title",
                                                right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                                            }}
                                            events={events}
                                            editable={true}
                                            droppable={true}
                                            selectable={true}
                                            dateClick={handleDateClick}
                                            eventClick={handleEventClick}
                                            drop={onDrop}
                                        />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3}>
                            <Button variant="primary" className="w-100" id="btn-new-event" onClick={toggle}><i className="mdi mdi-plus"></i> Create New Order</Button>
                            <div className="mt-4">
                                <h5 className="mb-1 fs-18">Recent Added Orders</h5>
                                <p className="text-muted">Don't miss scheduled events</p>
                                <div className="search-box mb-3">
                                    <input type="text" className="form-control" autoComplete="off" id="searchResultsList" placeholder="Search customer..." onChange={(e) => searchCustomer(e)} />
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                                <SimpleBar className="pe-2 me-n1 mb-3" style={{ height: "595px" }}>
                                    <div id="upcoming-event-list">
                                        {upcommingevents &&
                                            upcommingevents.map((event: any, key: number) => (
                                                <React.Fragment key={key}>
                                                    <UpcommingEvents event={event} />
                                                </React.Fragment>
                                            ))}
                                    </div>
                                </SimpleBar>
                            </div>

                            <Card className="bg-primary-subtle border-0 overflow-hidden">
                                <div className="position-absolute end-0 start-0 top-0 z-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                        // xmlns:xlink="http://www.w3.org/1999/xlink" 
                                        width="400" height="250" preserveAspectRatio="none" viewBox="0 0 400 250">
                                        <g mask="url(&quot;#SvgjsMask1530&quot;)" fill="none">
                                            <path d="M209 112L130 191" strokeWidth="10" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M324 10L149 185" strokeWidth="8" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M333 35L508 -140" strokeWidth="10" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M282 58L131 209" strokeWidth="10" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M290 16L410 -104" strokeWidth="6" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M216 186L328 74" strokeWidth="6" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M255 53L176 132" strokeWidth="10" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M339 191L519 11" strokeWidth="8" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M95 151L185 61" strokeWidth="6" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M249 16L342 -77" strokeWidth="6" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M129 230L286 73" strokeWidth="10" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M80 216L3 293" strokeWidth="6" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                        </g>
                                        <defs>
                                            <mask id="SvgjsMask1530">
                                                <rect width="400" height="250" fill="#ffffff"></rect>
                                            </mask>
                                            <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="SvgjsLinearGradient1531">
                                                <stop stopColor="rgba(var(--tb-primary-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-primary-rgb), 0.2)" offset="1"></stop>
                                            </linearGradient>
                                            <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="SvgjsLinearGradient1532">
                                                <stop stopColor="rgba(var(--tb-primary-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-primary-rgb), 0.2)" offset="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <Card.Body className="p-4 z-1 position-relative">
                                    <h5 className="mb-3 lh-base">You have got <span className="text-primary">400 bonus</span> points.
                                        Feel free to use them in your Orders</h5>
                                    <Link to="/orders-list-view" className="btn btn-primary btn-hover">Create Order</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Modal show={modal} id="event-modal" onHide={toggle} centered>
                <Modal.Header className="p-3 bg-info-subtle" closeButton>
                    <Modal.Title>
                        {!!isEdit ? (event.title || "Edit Order") : "Add Order"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <Form className={!!isEdit ? "needs-validation view-event" : "needs-validation"} name="event-form" id="form-event"
                        onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}>
                        {!!isEdit ? (<div className="text-end"> <Link to="#" className="btn btn-sm btn-soft-primary" id="edit-event-btn" onClick={(e) => { e.preventDefault(); submitOtherEvent(); return false; }} > Edit </Link></div>) : null}

                        <div className="event-details">
                            <div className="d-flex mb-2">
                                <div className="flex-grow-1 d-flex align-items-center">
                                    <div className="flex-shrink-0 me-3">
                                        <i className="ri-calendar-event-line text-muted fs-16"></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="d-block fw-semibold mb-0" id="event-start-date-tag">
                                            {event ? event.datetag : ""}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0 me-3">
                                    <i className="ri-money-dollar-circle-line text-muted fs-16"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="d-block fw-semibold mb-0"> <span id="event-payment-tag">${event && event.payment !== undefined ? event.payment : " No Payments"}</span></h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0 me-3">
                                    <i className="ri-map-pin-line text-muted fs-16"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="d-block fw-semibold mb-0">
                                        {" "}
                                        <span id="event-location-tag">
                                            {event && event.location !== undefined ? event.location : "No Location"}
                                        </span>
                                    </h6>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0 me-3">
                                    <i className="ri-discuss-line text-muted fs-16"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <p
                                        className="d-block text-muted mb-0"
                                        id="event-description-tag"
                                    >
                                        {event && event.description !== undefined ? event.description : "No Description"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Row className="event-form">
                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label className="form-label">Status</Form.Label>
                                    <Form.Control as="select"
                                        className={!!isEdit ? "form-select d-none" : "form-select d-block"} name="category" id="event-category" type="select" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.category || ""}>
                                        <option value="bg-info-subtle">New</option>
                                        <option value="bg-warning-subtle">Shipped</option>
                                        <option value="bg-success-subtle">Delivered</option>
                                        <option value="bg-danger-subtle">Cancelled</option>
                                    </Form.Control>
                                    {validation.touched.category && validation.errors.category ? (<Form.Control.Feedback type="invalid">{validation.errors.category}</Form.Control.Feedback>) : null}
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label className="form-label">Customer Name</Form.Label>
                                    <Form.Control className={!!isEdit ? "form-control d-none" : "form-control d-block"} placeholder="Enter Customer name" type="text" name="title" id="event-title" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.title || ""}
                                        isInvalid={validation.touched.title && validation.errors.title ? true : false}
                                    />
                                    {validation.touched.title && validation.errors.title ? (<Form.Control.Feedback type="invalid">{validation.errors.title}</Form.Control.Feedback>) : null}
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label>Order Date</Form.Label>
                                    <div className={!!isEdit ? "input-group d-none" : "input-group"}>
                                        <Flatpickr
                                            className="form-control"
                                            data-enable-time
                                            id="event-start-date"
                                            name="defaultDate"
                                            placeholder="Select Date"
                                            value={validation.values.defaultDate || ""}
                                            options={{
                                                mode: "range",
                                                dateFormat: "Y-m-d",
                                            }}
                                            onChange={(date: any) => {
                                                setSelectedNewDay(date);
                                            }}
                                        />
                                        <span className="input-group-text"> <i className="ri-calendar-event-line"></i> </span>
                                    </div>
                                </div>
                            </Col>
                            <Col className="col-12">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="event-payment">Payment ($)</label>
                                    <div>
                                        <Form.Control type="text" className={!!isEdit ? "form-control d-none" : "form-control d-block"} name="payment" id="event-payment" placeholder="Event payment" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.payment} isInvalid={validation.touched.payment && validation.errors.payment ? true : false} />
                                        {validation.touched.payment && validation.errors.payment ? (<Form.Control.Feedback type="invalid">{validation.errors.payment}</Form.Control.Feedback>) : null}
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="event-location">Location</Form.Label>
                                    <div>
                                        <Form.Control type="text" className={!!isEdit ? "form-control d-none" : "form-control d-block"} name="location" id="event-location" placeholder="Event location" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.location} isInvalid={validation.touched.location && validation.errors.location ? true : false} />
                                        {validation.touched.location && validation.errors.location ? (<Form.Control.Feedback type="invalid">{validation.errors.location}</Form.Control.Feedback>) : null}
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="mb-3">
                                    <Form.Label className="form-label">Description</Form.Label>
                                    <Form.Control as="textarea"
                                        className={!!isEdit ? "form-control d-none" : "form-control d-block"}
                                        id="event-description"
                                        name="description"
                                        placeholder="Enter a description"
                                        rows={3}
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.description}
                                        isInvalid={validation.touched.description && validation.errors.description ? true : false}
                                    ></Form.Control>
                                    {validation.touched.description && validation.errors.description ? (<Form.Control.Feedback type="invalid">{validation.errors.description}</Form.Control.Feedback>) : null}
                                </div>
                            </Col>
                        </Row>
                        <div className="hstack gap-2 justify-content-end">
                            {!!isEdit && (<Button variant="soft-danger" type="button" id="btn-delete-event" onClick={() => handleDeleteEvent()}> <i className="ri-close-line align-bottom"></i> Delete </Button>)}
                            {isEditButton && <Button variant="success" type="submit" id="btn-save-event" > {!!isEdit ? "Edit Event" : "Add Event"} </Button>}
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </React.Fragment >
    );
}

export default Calendar;