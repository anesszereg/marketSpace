import React, { useEffect, useState } from 'react';
import { Col, Container, Dropdown, Row, Image } from 'react-bootstrap';
import { get } from "lodash";
import i18n from 'Common/i18n';
import { languages } from 'Common/data/languages';

const TopBar = () => {
    const [selectlanguage, setSelectlanguage] = useState('');

    const changelanguage = (lan: any) => {
        i18n.changeLanguage(lan);
        setSelectlanguage(lan);
        localStorage.setItem("I18NLANGUAGE", lan)
    }

    useEffect(() => {
        const currentlanguage: any = localStorage.getItem('I18NLANGUAGE');
        setSelectlanguage(currentlanguage);
    }, [])

    return (
        <React.Fragment>
            <div className="top-tagbar">
                <Container fluid>
                    <Row className="justify-content-between align-items-center">
                        <Col md={4} xs={9}>
                            <div className="fs-14 fw-medium">
                                <i className="bi bi-geo-alt align-middle me-2"></i> Phoenix, USA
                            </div>
                        </Col>
                        <Col md={4} xs={6} className="d-none d-xxl-block">
                            <div className="d-flex align-items-center justify-content-center gap-3 fs-14 fw-medium">
                                <div>
                                    <i className="bi bi-envelope align-middle me-2"></i> support@themesbrand.com
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={3}>
                            <div className="d-flex align-items-center justify-content-end gap-3 fs-14">
                                <div className='text-reset fw-normal d-none d-lg-block'>
                                    <i className='bi bi-telephone-outbound align-middle me-2'></i> +(235) 01234 567
                                </div>
                                <hr className="vr d-none d-lg-block" />
                                <Dropdown className="topbar-head-dropdown topbar-tag-dropdown justify-content-end">
                                    <Dropdown.Toggle id="language-dropdown" type="button" className="btn btn-icon btn-topbar rounded-circle text-reset fs-14 bg-transparent border-0 arrow-none">
                                        <Image id="header-lang-img" src={get(languages, `${selectlanguage}.icon`)} alt="Header Language" height="16" className="me-2" roundedCircle /> <span id="lang-name">{get(languages, `${selectlanguage}.lable`)}</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                        {
                                            Object.keys(languages)?.map((key) => {
                                                return (
                                                    <Dropdown.Item
                                                        key={key}
                                                        href="#"
                                                        className="dropdown-item notify-item language py-2"
                                                        data-lang={key}
                                                        title={get(languages, `${key}.title`)}
                                                        onClick={() => changelanguage(key)}>

                                                        <Image src={get(languages, `${key}.icon`)} alt="" className="me-2 rounded-circle" height="18" />
                                                        <span className="align-middle">{get(languages, `${key}.lable`)}</span>
                                                    </Dropdown.Item>
                                                )
                                            })
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default TopBar;