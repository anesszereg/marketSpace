import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { get } from 'lodash';

import flagus from "assets/images/flags/us.svg";

//i18n
import i18n from "Common/i18n";
import languages from "Common/data/languages";

const TopBar = () => {
    const currentTime: any = useRef(null);
    useEffect(() => {
        const interval = setInterval(() => {
            // date
            var d = new Date();
            var dateOptions: object = { weekday: 'short', month: 'short', day: 'numeric' };
            var date = d.toLocaleDateString(undefined, dateOptions);
            // time
            var hours = d.getHours();
            var ampm = hours >= 12 ? ' PM' : ' AM';
            var gethours = hours % 12;
            var time = ("0" + gethours).slice(-2) + ':' + ("0" + d.getMinutes()).slice(-2) + ampm;
            currentTime.current.innerHTML = date + " | " + time;
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);

    const [selectedLang, setSelectedLang] = useState<any>("");

    useEffect(() => {
        const currentLanguage = localStorage.getItem("I18N_LANGUAGE");
        setSelectedLang(currentLanguage);
    }, []);

    const changeLanguageAction = (lang: any) => {
        //set language as i18n
        i18n.changeLanguage(lang);
        localStorage.setItem("I18N_LANGUAGE", lang);
        setSelectedLang(lang);
    };

    return (
        <React.Fragment>
            <div className="top-tagbar">
                <Container fluid>
                    <Row className="justify-content-between align-items-center">
                        <Col md={4} xs={9}>
                            <div className="fs-14 fw-medium">
                                <i className="bi bi-clock align-middle me-2"></i> <span ref={currentTime} id="current-time"></span>
                            </div>
                        </Col>
                        <Col md={4} xs={6} className="d-none d-xxl-block">
                            <div className="d-flex align-items-center justify-content-center gap-3 fs-14 fw-medium">
                                <div>
                                    <i className="bi bi-envelope align-middle me-2"></i> support@themesbrand.com
                                </div>
                                <div>
                                    <i className="bi bi-globe align-middle me-2"></i> www.themesbrand.com
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={3}>
                            <div className="d-flex align-items-center justify-content-end gap-3 fs-14">
                                <Link to="#!" className="text-reset fw-normal d-none d-lg-block">
                                    Balance: <span className="fw-semibold">$8451.36</span>
                                </Link>
                                <hr className="vr d-none d-lg-block" />
                                <Dropdown className="topbar-head-dropdown topbar-tag-dropdown justify-content-end">
                                    <Dropdown.Toggle id="language-dropdown" className="btn btn-icon btn-topbar rounded-circle text-white-50 fs-13 bg-transparent border-0 arrow-none">
                                        <img src={get(languages, `${selectedLang}.flag`) || flagus} id="header-lang-img" alt="Header Language" height="20" className="rounded-circle me-2" /> 
                                        <span id="lang-name" className='text-dark'>{get(languages, `${selectedLang}.label`)}</span>

                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        {Object.keys(languages).map(key => (
                                            <Dropdown.Item
                                                key={key}
                                                onClick={() => changeLanguageAction(key)}
                                                className={`notify-item language py-2 ${selectedLang === key ? "active" : "none"
                                                    }`}
                                            >
                                                <img
                                                    src={get(languages, `${key}.flag`) || flagus}
                                                    alt="hybrix"
                                                    className="me-2 rounded"
                                                    height="18"
                                                />
                                                <span className="align-middle">
                                                    {get(languages, `${key}.label`)}
                                                </span>
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TopBar;