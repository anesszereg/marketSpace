import React from 'react';
import PrismCode from "Common/Prisam";


//FormGrid code
const FormGrid = () => {
const code =
`<Col md={6}>
<div className="mb-3">
    <Form.Label htmlFor="firstNameinput" className="form-label">First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your firstname" id="firstNameinput"/>
</div>
</Col>

<Col md={6}>
<div className="mb-3">
    <Form.Label htmlFor="lastNameinput" className="form-label">Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your lastname" id="lastNameinput"/>
</div>
</Col>

<Col md={12}>
<div className="mb-3">
    <Form.Label htmlFor="compnayNameinput" className="form-label">Company Name</Form.Label>
    <Form.Control type="text" placeholder="Enter company name" id="compnayNameinput"/>
</div>
</Col>

<Col md={6}>
<div className="mb-3">
    <Form.Label htmlFor="phonenumberInput" className="form-label">Phone Number</Form.Label>
    <Form.Control type="tel" placeholder="+(245) 451 45123" id="phonenumberInput"/>
</div>
</Col>

<Col md={6}>
<div className="mb-3">
    <Form.Label htmlFor="emailidInput" className="form-label">Email Address</Form.Label>
    <Form.Control type="email" placeholder="example@gamil.com" id="emailidInput"/>
</div>
</Col>

<Col md={12}>
<div className="mb-3">
    <Form.Label htmlFor="address1ControlTextarea" className="form-label">Address</Form.Label>
    <Form.Control type="text" placeholder="Address 1" id="address1ControlTextarea"/>
</div>
</Col>

<Col md={6}>
<div className="mb-3">
    <Form.Label htmlFor="citynameInput" className="form-label">City</Form.Label>
    <Form.Control type="email" placeholder="Enter your city" id="citynameInput"/>
</div>
</Col>

<Col md={6}>
<div className="mb-3">
    <Form.Label htmlFor="ForminputState" className="form-label">State</Form.Label>
    <select id="ForminputState" className="form-select" data-choices data-choices-sorting="true">
        <option selected>Choose...</option>
        <option>...</option>
    </select>
</div>
</Col>

<Col lg={12}>
    <div className="text-end">
        <Button type="submit" variant="primary">Submit</Button>
    </div>
</Col>
`;

    return (
        <React.Fragment>
            <PrismCode
                code={code}
                 language={"react"}
            />
        </React.Fragment>
    );
};

//Gutters
const Gutters = () => {
    const code = `
<Col md={12}>
    <Form.Label htmlFor="fullnameInput">Name</Form.Label>
    <Form.Control type="text" id="fullnameInput" placeholder="Enter your name"/>
</Col>
<Col md={6}>
    <Form.Label htmlFor="inputEmail4">Email</Form.Label>
    <Form.Control type="email" id="inputEmail4" placeholder="Email"/>
</Col>
<Col md={6}>
    <Form.Label htmlFor="inputPassword4">Password</Form.Label>
    <Form.Control type="password" id="inputPassword4" placeholder="Password"/>
</Col>
<Col className="col-12">
    <Form.Label htmlFor="inputAddress">Address</Form.Label>
    <Form.Control type="text" id="inputAddress" placeholder="1234 Main St"/>
</Col>
<Col className="col-12">
    <Form.Label htmlFor="inputAddress2">Address 2</Form.Label>
    <Form.Control type="text" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
</Col>
<Col md={6}>
    <Form.Label htmlFor="inputCity">City</Form.Label>
    <Form.Control type="text" id="inputCity" placeholder="Enter your city"/>
</Col>
<Col md={4}>
    <Form.Label htmlFor="inputState">State</Form.Label>
    <select id="inputState" className="form-select" data-choices data-choices-sorting="true">
        <option selected>Choose...</option>
        <option>...</option>
    </select>
</Col>
<Col md={2}>
    <Form.Label htmlFor="inputZip">Zip</Form.Label>
    <Form.Control type="text" id="inputZip" placeholder="Zin code"/>
</Col>
<Col className="col-12">
    <div className="form-check">
        <Form.Check type="checkbox" id="gridCheck"/>
        <Form.Label className="form-check-label" htmlFor="gridCheck">
            Check me out
        </Form.Label>
    </div>
</Col>
<Col className="col-12">
    <div className="text-end">
        <Button type="button" variant="primary">Sign in</Button>
    </div>
</Col>
`;

    return (
        <React.Fragment>
            <PrismCode
                code={code}
                 language={"react"}
            />
        </React.Fragment>
    );
};

//Vertical Form
const VerticalForm = () => {
    const code = `
<div className="mb-3">
    <Form.Label htmlFor="employeeName">Employee Name</Form.Label>
    <Form.Control type="text" id="employeeName" placeholder="Enter emploree name"/>
</div>
<div className="mb-3">
    <Form.Label htmlFor="employeeUrl">Employee Department URL</Form.Label>
    <Form.Control type="url" id="employeeUrl" placeholder="Enter emploree url"/>
</div>
<div className="mb-3">
    <Form.Label htmlFor="StartleaveDate">Start Leave Date</Form.Label>
    <Flatpickr className="form-control" options={{ dateFormat: "d M, Y" }}/>
</div>
<div className="mb-3">
    <Form.Label htmlFor="EndleaveDate">End Leave Date</Form.Label>
    <Flatpickr className="form-control" options={{ dateFormat: "d M, Y" }}/>
</div>
<div className="mb-3">
    <Form.Label htmlFor="VertimeassageInput">Message</Form.Label>
    <textarea className="form-control" id="VertimeassageInput" rows={3} placeholder="Enter your message"></textarea>
</div>
<div className="text-end">
    <button type="submit" variant="primary">Add Leave</button>
</div>
`;

return (
    <React.Fragment>
        <PrismCode
            code={code}
             language={"react"}
        />
    </React.Fragment>
);
};

//Horizontal Form
const HorizontalForm = () => {
    const code = `<Form action="#">
    <Row className="mb-3">
        <Col lg={3}>
            <Form.Label htmlFor="nameInput" >Name</Form.Label>
        </Col>
        <Col lg={9}>
            <Form.Control type="text" id="nameInput" placeholder="Enter your name" />
        </Col>
    </Row>
    <Row mb={3}>
        <Col lg={3}>
            <Form.Label htmlFor="websiteUrl">Website URL</Form.Label>
        </Col>
        <Col lg={9}>
            <Form.Control type="url" id="websiteUrl" placeholder="Enter your url" />
        </Col>
    </Row>
    <Row mb={3}>
        <Col lg={3}>
            <Form.Label htmlFor="dateInput">Date</Form.Label>
        </Col>
        <Col lg={9}>
            <Flatpickr className="form-control" options={{ dateFormat: "d M, Y" }}/>
        </Col>
    </Row>
    <Row mb={3}>
        <Col lg={3}>
            <Form.Label htmlFor="timeInput">Time</Form.Label>
        </Col>
        <Col lg={9}>
            <Form.Control type="time" data-provider="timepickr" data-time-basic="true" id="timeInput" />
        </Col>
    </Row>
    <Row mb={3}>
        <Col lg={3}>
            <Form.Label htmlFor="leaveemails">Email Id</Form.Label>
        </Col>
        <Col lg={9}>
            <Form.Control type="email" id="leaveemails" placeholder="Enter your email" />
        </Col>
    </Row>
    <Row mb={3}>
        <Col lg={3}>
            <Form.Label htmlFor="contactNumber">Contact Number</Form.Label>
        </Col>
        <Col lg={9}>
            <Form.Control type="number" id="contactNumber" placeholder="+91 9876543210" />
        </Col>
    </Row>
    <Row mb={3}>
        <Col lg={3}>
            <Form.Label htmlFor="meassageInput">Message</Form.Label>
        </Col>
        <Col lg={9}>
            <textarea className="form-control" id="meassageInput" rows={3} placeholder="Enter your message"></textarea>
        </Col>
    </Row>
    <div className="text-end">
        <Button type="button" variant="primary">Add Leave</Button>
    </div>
</Form>
`;
    return (
        <React.Fragment>
            <PrismCode
                code={code}
                 language={"react"}
            />
        </React.Fragment>
    );
};

//Horizontal Form Label Sizing
const HorizontalFormLabelSizing = () => {
const code = `
<Col xxl={4}>
    <Row>
        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
        <Col sm={10}>
            <Form.Control type="email" id="colFormLabelSm" placeholder="col-form-label-sm"/>
        </Col>
    </Row>
</Col>
<Col xxl={4}>
    <Row>
        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</label>
        <Col sm={10}>
            <Form.Control type="email" id="colFormLabel" placeholder="col-form-label"/>
        </Col>
    </Row>
</Col>
<Col xxl={4}>
    <Row>
        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
        <Col sm={10}>
            <Form.Control type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg"/>
        </Col>
    </Row>
</Col>
`;
    return (
        <React.Fragment>
            <PrismCode
                code={code}
                 language={"react"}
            />
        </React.Fragment>
    );
};

//Column Sizing
const ColumnSizing = () => {
const code = `
<Col sm={6}>
    <Form.Control type="text" placeholder="Firstname" aria-label="First-Name"/>
</Col>
<Col sm={6}>
    <Form.Control type="text" placeholder="Lastname" aria-label="Last-Name"/>
</Col>
<Col sm={4}>
    <Form.Control type="text" placeholder="Email id" aria-label="Email Id"/>
</Col>
<Col sm={4}>
    <Form.Control type="password" placeholder="Password" aria-label="Password"/>
</Col>
<Col sm={4}>
    <Form.Control type="password" placeholder="Confirm Password" aria-label="confirm-password"/>
</Col>
<Col sm={7}>
    <Form.Control type="text" placeholder="City" aria-label="City"/>
</Col>
<div className="col-sm">
    <Form.Control type="text" placeholder="State" aria-label="State"/>
</div>
<div className="col-sm">
    <Form.Control type="text" placeholder="Zip" aria-label="Zip"/>
</div>
`;
    return (
        <React.Fragment>
            <PrismCode
                code={code}
                 language={"react"}
            />
        </React.Fragment>
    );
};

//Auto Sizing
const AutoSizing = () => {
const code = `
<Form action="#">
    <Row className="gy-2 gx-3 mb-3 align-items-center">
        <div className="col-sm-auto">
            <Form.Label className="visually-hidden" htmlFor="autoSizingInput">Name</Form.Label>
            <Form.Control type="text" id="autoSizingInput" placeholder="Jane Doe"/>
        </div>
        <div className="col-sm-auto">
            <Form.Label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</Form.Label>
            <div className="input-group">
                <div className="input-group-text">@</div>
                <Form.Control type="text" id="autoSizingInputGroup" placeholder="Username"/>
            </div>
        </div>
        <div className="col-sm-auto">
            <Form.Label className="visually-hidden" htmlFor="autoSizingSelect">Preference</Form.Label>
            <Form.Select data-choices data-choices-sorting="true" id="autoSizingSelect">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </div>
        <div className="col-sm-auto">
            <div className="form-check">
                <Form.Check type="checkbox" id="autoSizingCheck"/>
                <Form.Label htmlFor="autoSizingCheck">
                    Remember me
                </Form.Label>
            </div>
        </div>
        <div className="col-sm-auto">
            <Button type="button" variant="primary">Submit</Button>
        </div>
    </Row>
</Form>

<Form action="#">
    <Row className="gx-3 gy-2 align-items-center">
        <Col sm={3}>
            <Form.Label className="visually-hidden" htmlFor="specificSizeInputName">Name</Form.Label>
            <Form.Control type="text" id="specificSizeInputName" placeholder="Jane Doe"/>
        </Col>
        <Col sm={3}>
            <Form.Label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Username</Form.Label>
            <div className="input-group">
                <div className="input-group-text">@</div>
                <Form.Control type="text" id="specificSizeInputGroupUsername" placeholder="Username"/>
            </div>
        </Col>
        <Col sm={3}>
            <Form.Label className="visually-hidden" htmlFor="specificSizeSelect">Preference</Form.Label>
            <Form.Select data-choices data-choices-sorting="true" id="specificSizeSelect">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </Col>
        <div className="col-auto">
            <div className="form-check">
                <Form.Check type="checkbox" id="autoSizingCheck2"/>
                <Form.Label htmlFor="autoSizingCheck2">
                    Remember me
                </Form.Label>
            </div>
        </div>
        <div className="col-auto">
            <Button type="button" variant="primary">Submit</Button>
        </div>
    </Row>
</Form>
`;
    return (
        <React.Fragment>
            <PrismCode
                code={code}
                 language={"react"}
            />
        </React.Fragment>
    );
};

//Inline Forms
const InlineForms = () => {
const code = `
<Row className="row-cols-lg-auto g-3 align-items-center">
    <Col className="col-12">
        <Form.Label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</Form.Label>
        <InputGroup>
            <div className="input-group-text">@</div>
            <Form.Control type="text" id="inlineFormInputGroupUsername" placeholder="Username"/>
        </InputGroup>
    </Col>
    <Col className="col-12">
        <Form.Label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</Form.Label>
        <Form.Select data-choices data-choices-sorting="true" id="inlineFormSelectPref">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    </Col>
    <Col className="col-12">
        <div className="form-check">
            <Form.Check type="checkbox" id="inlineFormCheck"/>
            <Form.Label htmlFor="inlineFormCheck">
                Remember me
            </Form.Label>
        </div>
    </Col>
    <div className="col-12">
        <Button type="button" variant="primary">Submit</Button>
    </div>
</Row>
`;
    return (
        <React.Fragment>
            <PrismCode
                code={code}
                 language={"react"}
            />
        </React.Fragment>
    );
};

//Inline Forms
const FloatingLabels = () => {
    const code = `
<Form action="#">
    <Row className="g-3">
        <Col lg={6}>
            <div className="form-floating">
                <Form.Control type="text" id="firstnamefloatingInput" placeholder="Enter your firstname"/>
                <Form.Label htmlFor="firstnamefloatingInput">First Name</Form.Label>
            </div>
        </Col>
        <Col lg={6}>
            <div className="form-floating">
                <Form.Control type="text" id="lastnamefloatingInput" placeholder="Enter your Lastname"/>
                <Form.Label htmlFor="lastnamefloatingInput">Last Name</Form.Label>
            </div>
        </Col>
        <Col lg={4}>
            <div className="form-floating">
                <Form.Control type="email" id="emailfloatingInput" placeholder="Enter your email"/>
                <Form.Label htmlFor="emailfloatingInput">Email Address</Form.Label>
            </div>
        </Col>
        <Col lg={4}>
            <div className="form-floating">
                <Form.Control type="password" id="passwordfloatingInput" placeholder="Enter your password"/>
                <Form.Label htmlFor="passwordfloatingInput">Password</Form.Label>
            </div>
        </Col>
        <Col lg={4}>
            <div className="form-floating">
                <Form.Control type="password" id="passwordfloatingInput1" placeholder="Confirm password"/>
                <Form.Label htmlFor="passwordfloatingInput1">Confirm Password</Form.Label>
            </div>
        </Col>
        <Col lg={4}>
            <div className="form-floating">
                <Form.Control type="text" id="cityfloatingInput" placeholder="Enter your city"/>
                <Form.Label htmlFor="cityfloatingInput">City</Form.Label>
            </div>
        </Col>
        <Col lg={4}>
            <div className="form-floating">
                <Form.Select id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Choose...</option>
                    <option value="1">USA</option>
                    <option value="2">Brazil</option>
                    <option value="3">France</option>
                    <option value="4">Germany</option>
                </Form.Select>
                <Form.Label htmlFor="floatingSelect">Country</Form.Label>
            </div>
        </Col>
        <Col lg={4}>
            <div className="form-floating">
                <Form.Control type="number" id="zipfloatingInput" placeholder="Enter your zipcode"/>
                <Form.Label htmlFor="zipfloatingInput">Zipcode</Form.Label>
            </div>
        </Col>
        <Col lg={1}>
            <div className="text-end">
                <Button type="button" variant="primary">Submit</Button>
            </div>
        </Col>
    </Row>
</Form>
`;
    return (
        <React.Fragment>
            <PrismCode
                code={code}
                 language={"react"}
            />
        </React.Fragment>
    );
};
export { FormGrid, Gutters, VerticalForm, HorizontalForm, HorizontalFormLabelSizing, ColumnSizing, AutoSizing, InlineForms, FloatingLabels };