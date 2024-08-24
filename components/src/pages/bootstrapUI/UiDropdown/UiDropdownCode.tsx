import PrismCode from "Common/Prisam";

// Single Button Dropdown

const singleButtonDropdownCode = `
<!-- Single Button Dropdown -->
<Dropdown>
    <Dropdown.Toggle variant="secondary">
        Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="secondary">
        Dropdown link
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
`;

const SingleButtonDropdownExample = () => (
  <PrismCode
    code={singleButtonDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);

// Dropdown Color Variant
const colorDropdownCode = `
<!-- Dropdown Variant -->
<Dropdown>
    <Dropdown.Toggle variant="primary">
        primary
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="success">
        success
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="light">
        light
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="secondary">
        secondary
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="warning">
        warning
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="danger">
        danger
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="dark">
        dark
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

`;

const ColorDropdownExample = () => (
  <PrismCode
    code={colorDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);

// Split Button Dropdown
const splitButtonDropdownCode = `
<!-- Split Button Dropdown -->
<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="primary">Primary</Button>

    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</Dropdown>

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="success">Success</Button>

    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</Dropdown>

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="light">Light</Button>

    <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</Dropdown>

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="info">Info</Button>

    <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</Dropdown>

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="secondary">Secondary</Button>

    <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</Dropdown>

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="warning">Warning</Button>

    <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</Dropdown>

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="danger">Danger</Button>

    <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</Dropdown>

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="dark">Dark</Button>

    <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</Dropdown>
`;

const SplitButtonDropdownExample = () => (
  <PrismCode
    code={splitButtonDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);

// Dropdown Sizing
const sizingDropdownCode = `
<!-- Dropdown Sizing -->
<Dropdown>
    <Dropdown.Toggle variant="primary" size='lg'>
        Large Button
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="light" size='lg'>Large Split Button</Button>
    <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="primary" size='sm'>
        Small Button
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="light" size='sm'>Small Split Button</Button>
    <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</Dropdown>
`;

const SizingDropdownExample = () => (
  <PrismCode
    code={sizingDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);

// Dark Dropdowns
const darkDropdownCode = `
<!-- Dark Dropdowns -->
<Dropdown>
    <Dropdown.Toggle variant="secondary">
        Dropdown button
    </Dropdown.Toggle>
    <Dropdown.Menu variant='dark'>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
`;

const DarkDropdownExample = () => (
  <PrismCode
    code={darkDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);

// Alignment options
const alignDropdownCode = `
<!-- Alignment options -->
<Dropdown>
    <Dropdown.Toggle variant="secondary">
        Dropdown
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown align='end'>
    <Dropdown.Toggle variant="secondary">
        Right-aligned menu
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown align='end'>
    <Dropdown.Toggle variant="secondary">
        Left-aligned, right-aligned lg
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="secondary">
        Right-aligned, left-aligned lg
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown drop='start'>
    <Dropdown.Toggle variant="secondary">
        Dropstart
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown drop='end'>
    <Dropdown.Toggle variant="secondary">
        Dropend
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown drop='up'>
    <Dropdown.Toggle variant="secondary">
        Dropup
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
`;

const AlignDropdownExample = () => (
  <PrismCode
    code={alignDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);

// Dropdown Options
const optionDropdownCode = `
<!-- Dropdown Options -->
<Dropdown>
    <Dropdown.Toggle variant="secondary">
        Offset
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="secondary">Reference</Button>
    <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</Dropdown>
`;

const OptionDropdownExample = () => (
  <PrismCode
    code={optionDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);

// Auto Close Behavior
const autoCloseDropdownCode = `
<!-- Default dropdown -->
<Dropdown>
    <Dropdown.Toggle variant="light">
        Default dropdown
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown autoClose='inside'>
    <Dropdown.Toggle variant="light">
        Clickable outside
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown autoClose='outside'>
    <Dropdown.Toggle variant="light">
        Clickable inside
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown autoClose={false}>
    <Dropdown.Toggle variant="light">
        Manual close
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
`;

const AutoCloseDropdownExample = () => (
  <PrismCode
    code={autoCloseDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);

// Dropdown Menu Item Color
const menuItemDropdownCode = `
<!-- Dropdown Menu Item Color -->
<Col lg={4} sm={6}>
    <div className="mt-3">
        <p className="font-size-13 mb-2">Dropdown menu Primary link</p>
        <Dropdown>
            <Dropdown.Toggle variant="primary">
                Primary 
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Col>
                                                        
<Col lg={4} sm={6}>
    <div className="mt-3">
        <p className="font-size-13 mb-2">Dropdown menu Secondary link</p>
        <Dropdown>
            <Dropdown.Toggle variant="secondary">
                Sacondary
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Col>
                                                        
<Col lg={4} sm={6}>
    <div className="mt-3">
        <p className="font-size-13 mb-2">Dropdown menu Success link</p>
        <Dropdown>
            <Dropdown.Toggle variant="success">
                Success
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Col>
                                                        
<Col lg={4} sm={6}>
    <div className="mt-3">
        <p className="font-size-13 mb-2">Dropdown menu Warning link</p>
        <Dropdown>
            <Dropdown.Toggle variant="warning">
                Warning
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Col>
                                                        
<Col lg={4} sm={6}>
    <div className="mt-3">
        <p className="font-size-13 mb-2">Dropdown menu Info link</p>
        <Dropdown>
            <Dropdown.Toggle variant="info">
                Info
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Col>
                                                        
<Col lg={4} sm={6}>
    <div className="mt-3">
        <p className="font-size-13 mb-2">Dropdown menu Danger link</p>
        <Dropdown>
            <Dropdown.Toggle variant="danger">
                Danger
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Col>
`;

const MenuItemDropdownExample = () => (
  <PrismCode
    code={menuItemDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);

// Menu Content
const menuContentDropdownCode = `
<!-- Menu Content -->
<Dropdown>
    <Dropdown.Toggle variant="primary">
        Header
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Header className="noti-title">
            <h5 className="font-size-13 text-muted text-truncate mb-0">Welcome Jessie!</h5>
        </Dropdown.Header>
        <Dropdown.Item href="#" active>Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="success">
        Text
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu-md p-3">
        <p>
            Some example text that's free-flowing within the dropdown menu.
        </p>
        <p className="mb-0">
            And this is more example text.
        </p>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="light">
        Forms
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu-md p-4">
        <Form>
            <div className="mb-2">
                <Form.Label htmlFor="exampleDropdownFormEmail">Email address</Form.Label>
                <Form.Control type="email" className="form-control" id="exampleDropdownFormEmail" placeholder="email@example.com" />
            </div>
            <div className="mb-2">
                <Form.Label htmlFor="exampleDropdownFormPassword">Password</Form.Label>
                <Form.Control type="password" className="form-control" id="exampleDropdownFormPassword" placeholder="Password" />
            </div>
            <div className="mb-2">
                <div className="form-check">
                    <Form.Check type="checkbox" id="rememberdropdownCheck" />
                    <Form.Label className="form-check-label" htmlFor="rememberdropdownCheck">Remember me</Form.Label>
                </div>
            </div>
            <Button type="submit" variant="primary">Sign in</Button>
        </Form>
    </Dropdown.Menu>
</Dropdown>
`;

const MenuContentDropdownExample = () => (
  <PrismCode
    code={menuContentDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);

// Notifications
const notificationDropdownCode = `
<!-- Notifications -->
<div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative w-100" aria-labelledby="page-header-notifications-dropdown" style={{ zIndex: "1" }}>
    <div className="dropdown-head bg-primary bg-pattern rounded-top">
        <div className="p-3">
            <Row className="align-items-center">
                <Col>
                    <h6 className="m-0 fs-16 fw-semibold text-white"> Notifications </h6>
                </Col>
                <div className="col-auto dropdown-tabs">
                    <span className="badge badge-soft-light fs-13"> 4 New</span>
                </div>
            </Row>
        </div>
        <div className="px-2 pt-2">
            <Nav tabs className="dropdown-tabs nav-tabs-custom">
                <NavItem>
                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "1", })} onClick={() => { toggle("1"); }} >
                        All (4)
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "2", })} onClick={() => { toggle("2"); }} >
                        Messages
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "3", })} onClick={() => { toggle("3"); }} >
                        Alerts
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    </div>
    <TabContent activeTab={activeTab} id="notificationItemsTabContent4">
        <TabPane tabId="1" id="all-noti-tab1" className="py-2 ps-2">
            <SimpleBar style={{ maxHeight: "300px" }} className="pe-2">
                <div className="text-reset notification-item d-block dropdown-item">
                    <div className="d-flex">
                        <div className="flex-shrink-0 avatar-xs me-3">
                            <span className="avatar-title bg-soft-info text-info rounded-circle fs-16">
                                <i className="bx bx-badge-check"></i>
                            </span>
                        </div>
                        <div className="flex-1">
                            <h6 className="mt-0 mb-2 lh-base">Your <b>Elite</b> author Graphic Optimization <span className="text-secondary">reward</span> is ready!</h6>
                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span><i className="mdi mdi-clock-outline"></i> Just 30 sec ago</span>
                            </p>
                        </div>
                        <div className="px-2 fs-16">
                            <Input className="form-check-input" type="checkbox" />
                        </div>
                    </div>
                </div>
                <div className="text-reset notification-item d-block dropdown-item">
                    <div className="d-flex">
                        <img src={avatar2}
                            className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                        <div className="flex-1">
                            <Link to="#"><h6 className="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6></Link>
                            <div className="fs-13 text-muted">
                                <p className="mb-1">Answered to your comment on the cash flow forecast's graph 🔔.</p>
                            </div>
                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span><i className="mdi mdi-clock-outline"></i> 48 min ago</span>
                            </p>
                        </div>
                        <div className="px-2 fs-16">
                            <Input className="form-check-input" type="checkbox" />
                        </div>
                    </div>
                </div>
                <div className="text-reset notification-item d-block dropdown-item">
                    <div className="d-flex">
                        <div className="flex-shrink-0 avatar-xs me-3">
                            <span className="avatar-title bg-soft-danger text-danger rounded-circle fs-16">
                                <i className='bx bx-message-square-dots' ></i>
                            </span>
                        </div>
                        <div className="flex-1">
                            <h6 className="mt-0 mb-2 fs-13 lh-base">You have received <b className="text-success">20</b> new messages in the conversation</h6>
                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span><i className="mdi mdi-clock-outline"></i> 2 hrs ago</span>
                            </p>
                        </div>
                        <div className="px-2 fs-16">
                            <Input className="form-check-input" type="checkbox" />
                        </div>
                    </div>
                </div>
                <div className="text-reset notification-item d-block dropdown-item">
                    <div className="d-flex">
                        <img src={avatar8}
                            className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                        <div className="flex-1">
                            <Link to="#"><h6 className="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6></Link>
                            <div className="fs-13 text-muted">
                                <p className="mb-1">We talked about a project on linkedin.</p>
                            </div>
                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span><i className="mdi mdi-clock-outline"></i> 4 hrs ago</span>
                            </p>
                        </div>
                        <div className="px-2 fs-16">
                            <Input className="form-check-input" type="checkbox" />
                        </div>
                    </div>
                </div>
                <div className="my-3 text-center">
                    <button type="button" className="btn btn-soft-success waves-effect waves-light">View All Notifications <i className="ri-arrow-right-line align-middle"></i></button>
                </div>
            </SimpleBar>
        </TabPane>
        <TabPane tabId="2" id="messages-tab1" className="py-2 ps-2">
            <SimpleBar style={{ maxHeight: "300px" }} className="pe-2">
                <div className="text-reset notification-item d-block dropdown-item">
                    <div className="d-flex">
                        <img src={avatar3}
                            className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                        <div className="flex-1">
                            <Link to="#"><h6 className="mt-0 mb-1 fs-13 fw-semibold">James Lemire</h6></Link>
                            <div className="fs-13 text-muted">
                                <p className="mb-1">We talked about a project on linkedin.</p>
                            </div>
                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span><i className="mdi mdi-clock-outline"></i> 30 min ago</span>
                            </p>
                        </div>
                        <div className="px-2 fs-16">
                            <Input className="form-check-input" type="checkbox" />
                        </div>
                    </div>
                </div>
                <div className="text-reset notification-item d-block dropdown-item">
                    <div className="d-flex">
                        <img src={avatar2}
                            className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                        <div className="flex-1">
                            <Link to="#"><h6 className="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6></Link>
                            <div className="fs-13 text-muted">
                                <p className="mb-1">Answered to your comment on the cash flow forecast's graph 🔔.</p>
                            </div>
                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span><i className="mdi mdi-clock-outline"></i> 2 hrs ago</span>
                            </p>
                        </div>
                        <div className="px-2 fs-16">
                            <Input className="form-check-input" type="checkbox" />
                        </div>
                    </div>
                </div>
                <div className="text-reset notification-item d-block dropdown-item">
                    <div className="d-flex">
                        <img src={avatar6}
                            className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                        <div className="flex-1">
                            <Link to="#"><h6 className="mt-0 mb-1 fs-13 fw-semibold">Kenneth Brown</h6></Link>
                            <div className="fs-13 text-muted">
                                <p className="mb-1">Mentionned you in his comment on 📃 invoice #12501.</p>
                            </div>
                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span><i className="mdi mdi-clock-outline"></i> 10 hrs ago</span>
                            </p>
                        </div>
                        <div className="px-2 fs-16">
                            <Input className="form-check-input" type="checkbox" />
                        </div>
                    </div>
                </div>
                <div className="text-reset notification-item d-block dropdown-item">
                    <div className="d-flex">
                        <img src={avatar8}
                            className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                        <div className="flex-1">
                            <Link to="#"><h6 className="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6></Link>
                            <div className="fs-13 text-muted">
                                <p className="mb-1">We talked about a project on linkedin.</p>
                            </div>
                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span><i className="mdi mdi-clock-outline"></i> 3 days ago</span>
                            </p>
                        </div>
                        <div className="px-2 fs-16">
                            <Input className="form-check-input" type="checkbox" />
                        </div>
                    </div>
                </div>
                <div className="my-3 text-center">
                    <button type="button" className="btn btn-soft-success waves-effect waves-light">View All Messages <i className="ri-arrow-right-line align-middle"></i></button>
                </div>
            </SimpleBar>
        </TabPane>
        <TabPane tabId="3" id="alerts-tab1" className="p-4">
            <div className="w-50 pt-3 mx-auto">
                <img src={bell} className="img-fluid" alt="user-pic" />
            </div>
            <div className="text-center pb-5 mt-2">
                <h6 className="fs-18 fw-semibold lh-base">Hey! You have no any notifications </h6>
            </div>
        </TabPane>
    </TabContent>
</div>
`;

const NotificationDropdownExample = () => (
  <PrismCode
    code={notificationDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);

export {
  SingleButtonDropdownExample,
  ColorDropdownExample,
  SplitButtonDropdownExample,
  SizingDropdownExample,
  DarkDropdownExample,
  AlignDropdownExample,
  OptionDropdownExample,
  AutoCloseDropdownExample,
  MenuItemDropdownExample,
  MenuContentDropdownExample,
  NotificationDropdownExample,
};