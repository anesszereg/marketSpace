import React from 'react';
import PrismCode from "Common/Prisam";

//BrowserDefaults code
const BrowserDefaults = () => {
const code = `<form className="row g-3">
<Col md={4}>
    <Form.Label htmlFor="validationDefault01" className="form-label">First name</Form.Label>
    <Form.Control type="text" id="validationDefault01" value="Mark" required/>
</Col>
<Col md={4}>
    <Form.Label htmlFor="validationDefault02" className="form-label">Last name</Form.Label>
    <Form.Control type="text" id="validationDefault02" value="Otto" required/>
</Col>
<Col md={4}>
    <Form.Label htmlFor="validationDefaultUsername" className="form-label">Username</Form.Label>
    <div className="input-group">
        <span className="input-group-text" id="inputGroupPrepend2">@</span>
        <Form.Control type="text" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required/>
    </div>
</Col>
<Col md={6}>
    <Form.Label htmlFor="validationDefault03" className="form-label">City</Form.Label>
    <Form.Control type="text" id="validationDefault03" required/>
</Col>
<Col md={3}>
    <Form.Label htmlFor="validationDefault04" className="form-label">State</Form.Label>
    <select className="form-select" id="validationDefault04" required >
        <option selected disabled value="">Choose...</option>
        <option>...</option>
    </select>
</Col>
<Col md={3}>
    <Form.Label htmlFor="validationDefault05" className="form-label">Zip</Form.Label>
    <Form.Control type="text" id="validationDefault05" required/>
</Col>
<Col className="col-12">
    <div className="form-check">
        <Form.Check type="checkbox" value="" id="invalidCheck2" required/>
        <Form.Label className="form-check-label" htmlFor="invalidCheck2">
            Agree to terms and conditions
        </Form.Label>
    </div>
</Col>
<Col className="col-12">
    <Button variant='primary' type="submit">Submit form</Button>
</Col>
</form>
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

//CustomStyles code
const CustomStyles = () => {
const code = `<Form noValidate validated={validated} onSubmit={handleSubmit}>
<Row className="mb-3">
    <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>First name</Form.Label>
        <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>Last name</Form.Label>
        <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
        <Form.Label>Username</Form.Label>
        <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
            />
            <Form.Control.Feedback type="invalid">
                Please choose a username.
            </Form.Control.Feedback>
        </InputGroup>
    </Form.Group>
</Row>
<Row className="mb-3">
    <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" required />
        <Form.Control.Feedback type="invalid">
            Please provide a valid city.
        </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="3" controlId="validationCustom04">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" required />
        <Form.Control.Feedback type="invalid">
            Please provide a valid state.
        </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="3" controlId="validationCustom05">
        <Form.Label>Zip</Form.Label>
        <Form.Control type="text" placeholder="Zip" required />
        <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
        </Form.Control.Feedback>
    </Form.Group>
</Row>
<Form.Group className="mb-3">
    <Form.Check
        required
        label="Agree to terms and conditions"
        feedback="You must agree before submitting."
        feedbackType="invalid"
    />
</Form.Group>
<Button type="submit">Submit form</Button>
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

//Tooltip Styles code
const TooltipsStyles = () => {
  const code = `<Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
              />
              <Form.Control.Feedback type="invalid">
                  Please choose a username.
              </Form.Control.Feedback>
          </InputGroup>
      </Form.Group>
  </Row>
  <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
              Please provide a valid city.
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
              Please provide a valid state.
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
          </Form.Control.Feedback>
      </Form.Group>
  </Row>
  <Form.Group className="mb-3">
      <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
      />
  </Form.Group>
  <Button type="submit">Submit form</Button>
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


//Supported Elements code
const SupportedElements = () => {
const code = `<Form className="was-validated">
<div className="mb-3">
    <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
    <Form.Control as="textarea" type="text-area" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></Form.Control>
    <Form.Control.Feedback type="invalid">
        Please enter a message in the textarea.
    </Form.Control.Feedback>
</div>

<div className="form-check mb-3">
    <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
    <label className="form-check-label" htmlFor="validationFormCheck1">Check this checkbox</label>
    <Form.Control.Feedback type="invalid">Example invalid feedback text</Form.Control.Feedback>
</div>

<div className="form-check">
    <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
    <label className="form-check-label" htmlFor="validationFormCheck2">Toggle this radio</label>
</div>
<div className="form-check mb-3">
    <input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
    <label className="form-check-label" htmlFor="validationFormCheck3">Or toggle this other radio</label>
    <Form.Control.Feedback type="invalid">More example invalid feedback text</Form.Control.Feedback>
</div>

<div className="mb-3">
    <select className="form-select" required aria-label="select example">
        <option defaultValue="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <Form.Control.Feedback type="invalid">Example invalid select feedback</Form.Control.Feedback>
</div>

<div className="mb-3">
    <input type="file" className="form-control" aria-label="file example" required />
    <Form.Control.Feedback type="invalid">Example invalid form file feedback</Form.Control.Feedback>
</div>

<div className="mb-0">
    <button className="btn btn-primary" type="submit" disabled>Submit form</button>
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

export { BrowserDefaults, CustomStyles, TooltipsStyles, SupportedElements };