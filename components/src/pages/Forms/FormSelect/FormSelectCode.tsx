import React from 'react';
import PrismCode from 'Common/Prisam';

//DefaultSelect code
const DefaultSelect = () => {

const code =
    `<Row>
<Col lg={6}>
    <Form.Select className="mb-3" aria-label="Default select example">
        <option selected>Select your Status </option>
        <option value="1">Declined Payment</option>
        <option value="2">Delivery Error</option>
        <option value="3">Wrong Amount</option>
    </Form.Select>
</Col>
<Col lg={6}>
    <Form.Select className="rounded-pill mb-3" aria-label="Default select example">
        <option selected>Search for services</option>
        <option value="1">Information Architecture</option>
        <option value="2">UI/UX Design</option>
        <option value="3">Back End Development</option>
    </Form.Select>
</Col>
<Col lg={6}>
    <Form.Select aria-label="Disabled select example" disabled>
        <option selected>Open this select menu (Disabled)</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
</Col>
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

//MenuSize code
const MenuSize = () => {

    const code =
        `<Row className="gy-4">
        <Col lg={6}>
            <Form.Select multiple aria-label="multiple select example">
                <option defaultValue="Open this select menu (multiple select option)">Open this select menu (multiple select option)</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </Col>
        <Col lg={6}>
            <Form.Select aria-label="size 3 select example">
                <option defaultValue="Open this select menu (select menu size)">Open this select menu (select menu size)</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
            </Form.Select>
        </Col>
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

//SelectSize code
const SelectSize = () => {

const code =
`<Row className="align-items-center g-3">
<Col lg={4}>
    <Form.Select className="form-select-sm" aria-label=".form-select-sm example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
</Col>
<Col lg={4}>
    <Form.Select aria-label=".form-select-sm example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
</Col>
<Col lg={4}>
    <Form.Select className="form-select-lg" aria-label=".form-select-lg example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
</Col>
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

export { DefaultSelect, MenuSize, SelectSize };