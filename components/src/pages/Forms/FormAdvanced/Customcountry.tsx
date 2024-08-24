import React, { useState } from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Row, Col, Card, Form, Dropdown, Image } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

// Import Contry Data
import country from 'Common/country'

import usflag from 'assets/images/flags/us.svg'

const Customcountry = () => {
    document.title = " Form Advanced | Toner eCommerce + React Admin Template";


    // Country Change States
    const [seletedCountry, setseletedCountry] = useState('');
    const [seletedCountry1, setseletedCountry1] = useState<any>
        ({

        });
    const [seletedCountry2, setseletedCountry2] = useState('');
    const [seletedCountry3, setseletedCountry3] = useState<any>
        ({
            id: 240,
            flagImg: usflag,
            countryName: "United States of America",
            countryCode: "+1"
        });
    const [seletedCountry4, setseletedCountry4] = useState<any>
        ({
            id: 240,
            flagImg: usflag,
            countryName: "United States of America",
            countryCode: "+1"
        });



    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Forms" breadcrumbItem="Form Advanced" />
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Custom country select input</h4>
                            </Card.Header>
                            <Card.Body>
                                <Row className="g-3">
                                    <Col lg={6}>
                                        <div>
                                            <Form.Label>Simple select example</Form.Label>
                                            <Dropdown>
                                                <Dropdown.Toggle as="input" className="form-control rounded-end flag-input form-select" placeholder="Select country" readOnly defaultValue={seletedCountry}>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                                                    <SimpleBar style={{ maxHeight: "220px" }} className="px-3">
                                                        {(country || []).map((item: any, key: number) => (
                                                            <Dropdown.Item as='li' onClick={() => setseletedCountry(item.countryName)} key={key} className="dropdown-item d-flex">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <Image src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex">
                                                                        <div className="country-name me-1">{item.countryName}</div>
                                                                        <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                                                    </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                        ))}
                                                    </SimpleBar>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>

                                        <div className="mt-3">
                                            <Form.Label>Select input flag with img & name</Form.Label>
                                            <Dropdown>
                                                <Dropdown.Toggle as="input" style={{ backgroundImage: `url(${seletedCountry1.flagImg && seletedCountry1.flagImg})` }} className="form-control rounded-end flag-input form-select" placeholder="Select country" readOnly defaultValue={seletedCountry1.countryName}>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                                                    <SimpleBar style={{ maxHeight: "220px" }} className="px-3">
                                                        {(country || []).map((item: any, key: number) => (
                                                            <Dropdown.Item as='li' onClick={() => setseletedCountry1(item)} key={key} className="dropdown-item d-flex">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <Image src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex">
                                                                        <div className="country-name me-1">{item.countryName}</div>
                                                                        <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                                                    </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                        ))}
                                                    </SimpleBar>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>

                                        <div className="mt-3">
                                            <Form.Label>Search input false in dropdown menu</Form.Label>
                                            <Dropdown>
                                                <Dropdown.Toggle as="input" className="form-control rounded-end flag-input form-select" placeholder="Select country" readOnly defaultValue={seletedCountry2}>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                                                    <SimpleBar style={{ maxHeight: "220px" }} className="px-3">
                                                        {(country || []).map((item: any, key: number) => (
                                                            <Dropdown.Item as='li' onClick={() => setseletedCountry2(item.countryName)} key={key} className="dropdown-item d-flex">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <Image src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex">
                                                                        <div className="country-name me-1">{item.countryName}</div>
                                                                        <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                                                    </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                        ))}
                                                    </SimpleBar>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Col>

                                    <Col lg={6}>
                                        <div>
                                            <Form.Label>Select input with buttons & Flag with number</Form.Label>
                                            <Dropdown className='input-group'>
                                                <Dropdown.Toggle as="button" className="btn btn-light border arrow-none">
                                                    <Image src={seletedCountry3.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                    <span className="countrylist-codeno text-muted">{seletedCountry3.countryCode}</span>
                                                </Dropdown.Toggle>
                                                <Form.Control type="number" className="form-control rounded-end flag-input" placeholder="Enter number" />
                                                <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                                                    <SimpleBar style={{ maxHeight: "220px" }} className="px-3">
                                                        {(country || []).map((item: any, key: number) => (
                                                            <Dropdown.Item as='li' onClick={() => setseletedCountry3(item)} key={key} className="dropdown-item d-flex">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <Image src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex">
                                                                        <div className="country-name me-1">{item.countryName}</div>
                                                                        <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                                                    </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                        ))}
                                                    </SimpleBar>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                            <div className="dropdown-menu w-100">
                                                <div className="p-2 px-3 pt-1 searchlist-input">
                                                    <Form.Control type="text" className="form-control-sm border search-countryList" placeholder="Search country name or country code..." />
                                                </div>
                                                <ul className="list-unstyled dropdown-menu-list mb-0"></ul>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <Form.Label>Select input with buttons & Flag</Form.Label>
                                            <Dropdown className='input-group'>
                                                <Dropdown.Toggle as="button" className="btn btn-light border arrow-none">
                                                    <Image src={seletedCountry4.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                </Dropdown.Toggle>
                                                <Form.Control type="number" className="form-control rounded-end flag-input" placeholder="Enter number" />
                                                <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                                                    <SimpleBar style={{ maxHeight: "220px" }} className="px-3">
                                                        {(country || []).map((item: any, key: number) => (
                                                            <Dropdown.Item as='li' onClick={() => setseletedCountry4(item)} key={key} className="dropdown-item d-flex">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <Image src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex">
                                                                        <div className="country-name me-1">{item.countryName}</div>
                                                                        <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                                                    </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                        ))}
                                                    </SimpleBar>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </React.Fragment>
    )
}

export default Customcountry;