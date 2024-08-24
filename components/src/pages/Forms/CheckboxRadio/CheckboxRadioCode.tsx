import React from 'react';
import PrismCode from 'Common/Prisam';

//Checkbox
const Checkbox = () => {
    const code = `<Col lg={4} md={6}>
<div>
    <p className="text-muted fw-medium">Default Checkbox</p>
    <p className="text-muted">Use <code>type="checkbox"</code> attribute to set a checkbox and add <code>checked</code>attribute to set a checkbox checked by default.</p>
    <div className="form-check mb-2">
        <Form.Check type="checkbox" id="formCheck1" />
        <Form.Label className="form-check-label" htmlFor="formCheck1">
            Default checkbox
        </Form.Label>
    </div>
    <div className="form-check">
        <Form.Check type="checkbox" id="formCheck2" defaultChecked />
        <Form.Label className="form-check-label" htmlFor="formCheck2">
            Checked checkbox
        </Form.Label>
    </div>
</div>
</Col>

<Col lg={4} md={6}>
<div className="mt-4 mt-md-0">
    <p className="text-muted fw-medium">Disabled Checkbox</p>
    <p className="text-muted">Use <code>disabled</code> attribute to set a checkbox disabled and add <code>checked</code> attribute to set a checkbox checked by default.</p>
    <div>
        <div className="form-check form-check-right mb-2">
            <Form.Check type="checkbox" value="" id="flexCheckDisabled" disabled />
            <Form.Label className="form-check-label" htmlFor="flexCheckDisabled">
                Disabled checkbox
            </Form.Label>
        </div>
    </div>
    <div>
        <div className="form-check form-check-right">
            <Form.Check type="checkbox" id="flexCheckCheckedDisabled" defaultValue="" disabled />
            <Form.Label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                Disabled checked checkbox
            </Form.Label>
        </div>
    </div>
</div>
</Col>

<Col lg={4} md={6}>
<div className="mt-4 mt-md-0">
    <p className="text-muted fw-medium">Checkbox Right</p>
    <p className="text-muted">Use <code>form-check-right</code> class to form-check class to set a checkbox on the right side.</p>
    <div className="form-check form-check-right mb-2">
        <Form.Check type="checkbox" name="formCheckboxRight" id="formCheckboxRight1" defaultChecked />
        <Form.Label className="form-check-label" htmlFor="formCheckboxRight1">
            Form Radio Right
        </Form.Label>
    </div>
    <div>
        <div className="form-check form-check-right">
            <Form.Check type="checkbox" value="" id="flexCheckCheckedRightDisabled" defaultChecked disabled />
            <Form.Label className="form-check-label" htmlFor="flexCheckCheckedRightDisabled">
                Disabled checked checkbox
            </Form.Label>
        </div>
    </div>
</div>
</Col>

<Col lg={6}>
<div className="mt-3">
    <p className="text-muted fw-medium">Indeterminate</p>
    <div>
        <div className="form-check">
            <Form.Check type="checkbox" value="" id="defaultIndeterminateCheck" />
            <Form.Label className="form-check-label" htmlFor="defaultIndeterminateCheck">
                Indeterminate checkbox
            </Form.Label>
        </div>
    </div>
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

//Custom Checkbox
const CustomCheckbox = () => {
    const code = `<Col md={6}>
    <div>
        <p className="text-muted">Use <code>form-check-</code> class with below-mentioned color variation to set a color checkbox.</p>

        <div>
            <div className="form-check mb-3">
                <Form.Check type="checkbox" id="formCheck6" defaultChecked />
                <Form.Label htmlFor="formCheck6">
                    Checkbox Primary
                </Form.Label>
            </div>
            <div className="form-check form-check-secondary mb-3">
                <Form.Check type="checkbox" id="formCheck7" defaultChecked />
                <Form.Label htmlFor="formCheck7">
                    Checkbox Secondary
                </Form.Label>
            </div>
            <div className="form-check form-check-success mb-3">
                <Form.Check type="checkbox" id="formCheck8" defaultChecked />
                <Form.Label htmlFor="formCheck8">
                    Checkbox Success
                </Form.Label>
            </div>
            <div className="form-check form-check-warning mb-3">
                <Form.Check type="checkbox" id="formCheck9" defaultChecked />
                <Form.Label htmlFor="formCheck9">
                    Checkbox Warning
                </Form.Label>
            </div>
            <div className="form-check form-check-danger mb-3">
                <Form.Check type="checkbox" id="formCheck10" defaultChecked />
                <Form.Label htmlFor="formCheck10">
                    Checkbox Danger
                </Form.Label>
            </div>
            <div className="form-check form-check-info mb-3">
                <Form.Check type="checkbox" id="formCheck11" defaultChecked />
                <Form.Label htmlFor="formCheck11">
                    Checkbox Info
                </Form.Label>
            </div>
            <div className="form-check form-check-dark">
                <Form.Check type="checkbox" id="formCheck12" defaultChecked />
                <Form.Label htmlFor="formCheck12">
                    Checkbox Dark
                </Form.Label>
            </div>
        </div>
    </div>
</Col>
<Col md={6}>
    <div className="mt-4 mt-md-0">
        <p className="text-muted">Use <code>form-check-outline</code> class and <code>form-check-</code> class with below-mentioned color variation to set a color checkbox with outline.</p>

        <div>
            <div className="form-check form-check-outline form-check-primary mb-3">
                <Form.Check type="checkbox" id="formCheck13" defaultChecked />
                <Form.Label className="form-check-label" htmlFor="formCheck13">
                    Checkbox Outline Primary
                </Form.Label>
            </div>
            <div className="form-check form-check-outline form-check-secondary mb-3">
                <Form.Check type="checkbox" id="formCheck14" defaultChecked />
                <Form.Label className="form-check-label" htmlFor="formCheck14">
                    Checkbox Outline Secondary
                </Form.Label>
            </div>
            <div className="form-check form-check-outline form-check-success mb-3">
                <Form.Check type="checkbox" id="formCheck15" defaultChecked />
                <Form.Label className="form-check-label" htmlFor="formCheck15">
                    Checkbox Outline Success
                </Form.Label>
            </div>
            <div className="form-check form-check-outline form-check-warning mb-3">
                <Form.Check type="checkbox" id="formCheck16" defaultChecked />
                <Form.Label className="form-check-label" htmlFor="formCheck16">
                    Checkbox Outline Warning
                </Form.Label>
            </div>
            <div className="form-check form-check-outline form-check-danger mb-3">
                <Form.Check type="checkbox" id="formCheck17" defaultChecked />
                <Form.Label className="form-check-label" htmlFor="formCheck17">
                    Checkbox Outline Danger
                </Form.Label>
            </div>
            <div className="form-check form-check-outline form-check-info mb-3">
                <Form.Check type="checkbox" id="formCheck18" defaultChecked />
                <Form.Label className="form-check-label" htmlFor="formCheck18">
                    Checkbox Outline Info
                </Form.Label>
            </div>
            <div className="form-check form-check-outline form-check-dark">
                <Form.Check type="checkbox" id="formCheck19" defaultChecked />
                <Form.Label className="form-check-label" htmlFor="formCheck19">
                    Checkbox Outline Dark
                </Form.Label>
            </div>
        </div>
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

//Radio
const Radio = () => {
    const code = `<Col lg={4} md={6}>
    <div>
        <p className="text-muted fw-medium">Default Radios</p>
        <p className="text-muted">Use <code>type="radio"</code> attribute to set a radio button and add <code>checked</code> attribute to set a radio checked by default.</p>
        <div className="form-check mb-2">
            <Form.Check type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <Form.Label htmlFor="flexRadioDefault1">
                Default radio
            </Form.Label>
        </div>
        <div className="form-check">
            <Form.Check type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
            <Form.Label htmlFor="flexRadioDefault2">
                Default checked radio
            </Form.Label>
        </div>
    </div>
</Col>
<Col lg={4} md={6}>
    <div className="mt-4 mt-md-0">
        <p className="text-muted fw-medium">Disabled Radios</p>
        <p className="text-muted">Use <code>disabled</code> attribute to set a radio button disabled and add <code>checked</code> attribute to set a radio checked by default.</p>
        <div className="form-check mb-2">
            <Form.Check type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
            <Form.Label htmlFor="flexRadioDisabled">
                Disabled radio
            </Form.Label>
        </div>
        <div>
            <div className="form-check">
                <Form.Check type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" defaultChecked disabled />
                <Form.Label htmlFor="flexRadioCheckedDisabled">
                    Disabled checked radio
                </Form.Label>
            </div>
        </div>
    </div>
</Col>
<Col lg={4} md={6}>
    <div className="mt-4 mt-md-0">
        <p className="text-muted fw-medium">Radio Right</p>
        <p className="text-muted">Use <code>form-check-right</code> class to form-check class to set a radio button on the right side.</p>
        <div className="form-check form-check-right mb-2">
            <Form.Check type="radio" name="formradioRight" id="formradioRight1" />
            <Form.Label htmlFor="formradioRight1">
                Form Radio Right
            </Form.Label>
        </div>
        <div>
            <div className="form-check form-check-right">
                <Form.Check type="radio" value="" name="formradioRight" id="flexCheckCheckedDisabled2" defaultChecked disabled />
                <Form.Label htmlFor="flexCheckCheckedDisabled2">
                    Disabled checked radio
                </Form.Label>
            </div>
        </div>
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

//Custom Radio
const CustomRadio = () => {
    const code = `<Col md={6}>
    <div>
        <p className="text-muted">Use <code>form-check-</code> class with below-mentioned color variation to set a color radio.</p>

        <div className="form-check form-radio-primary mb-3">
            <Form.Check type="radio" name="formradiocolor1" id="formradioRight5" defaultChecked />
            <Form.Label htmlFor="formradioRight5">
                Radio Primary
            </Form.Label>
        </div>

        <div className="form-check form-radio-secondary mb-3">
            <Form.Check type="radio" name="formradiocolor2" id="formradioRight6" defaultChecked />
            <Form.Label htmlFor="formradioRight6">
                Radio Secondary
            </Form.Label>
        </div>

        <div className="form-check form-radio-success mb-3">
            <Form.Check type="radio" name="formradiocolor3" id="formradioRight7" defaultChecked />
            <Form.Label htmlFor="formradioRight7">
                Radio Success
            </Form.Label>
        </div>

        <div className="form-check form-radio-warning mb-3">
            <Form.Check type="radio" name="formradiocolor4" id="formradioRight8" defaultChecked />
            <Form.Label htmlFor="formradioRight8">
                Radio Warning
            </Form.Label>
        </div>

        <div className="form-check form-radio-danger mb-3">
            <Form.Check type="radio" name="formradiocolor5" id="formradioRight9" defaultChecked />
            <Form.Label htmlFor="formradioRight9">
                Radio Danger
            </Form.Label>
        </div>

        <div className="form-check form-radio-info mb-3">
            <Form.Check type="radio" name="formradiocolor6" id="formradioRight10" defaultChecked />
            <Form.Label htmlFor="formradioRight10">
                Radio Info
            </Form.Label>
        </div>

        <div className="form-check form-radio-dark">
            <Form.Check type="radio" name="formradiocolor7" id="formradioRight11" defaultChecked />
            <Form.Label htmlFor="formradioRight11">
                Radio Dark
            </Form.Label>
        </div>
    </div>
</Col>

<Col md={6}>
    <div className="mt-4 mt-md-0">
        <p className="text-muted">Use <code>form-check-outline</code> class and <code>form-check-</code> class with below-mentioned color variation to set a color radio with outline.</p>

        <div className="form-check form-radio-outline form-radio-primary mb-3">
            <Form.Check type="radio" name="formradiocolor9" id="formradioRight13" defaultChecked />
            <Form.Label htmlFor="formradioRight13">
                Radio Outline Primary
            </Form.Label>
        </div>

        <div className="form-check form-radio-outline form-radio-secondary mb-3">
            <Form.Check type="radio" name="formradiocolor10" id="formradioRight14" defaultChecked />
            <Form.Label htmlFor="formradioRight14">
                Radio Outline Secondary
            </Form.Label>
        </div>

        <div className="form-check form-radio-outline form-radio-success mb-3">
            <Form.Check type="radio" name="formradiocolor11" id="formradioRight15" defaultChecked />
            <Form.Label htmlFor="formradioRight15">
                Radio Outline Success
            </Form.Label>
        </div>

        <div className="form-check form-radio-outline form-radio-warning mb-3">
            <Form.Check type="radio" name="formradiocolor12" id="formradioRight16" defaultChecked />
            <Form.Label htmlFor="formradioRight16">
                Radio Outline Warning
            </Form.Label>
        </div>

        <div className="form-check form-radio-outline form-radio-danger mb-3">
            <Form.Check type="radio" name="formradiocolor13" id="formradioRight17" defaultChecked />
            <Form.Label htmlFor="formradioRight17">
                Radio Outline Danger
            </Form.Label>
        </div>

        <div className="form-check form-radio-outline form-radio-info mb-3">
            <Form.Check type="radio" name="formradiocolor14" id="formradioRight18" defaultChecked />
            <Form.Label htmlFor="formradioRight18">
                Radio Outline Info
            </Form.Label>
        </div>

        <div className="form-check form-radio-outline form-radio-dark">
            <Form.Check type="radio" name="formradiocolor15" id="formradioRight19" defaultChecked />
            <Form.Label htmlFor="formradioRight19">
                Radio Outline Dark
            </Form.Label>
        </div>

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
//Switches
const Switches = () => {
    const code = `<Col lg={4} md={6}>
    <div>
        <p className="text-muted fw-medium">Deafult Switchs</p>
        <p className="text-muted">Use <code>form-switch</code> class to form-check class to set a switch and add <code>checked</code> attribute to set a switch checked by default.</p>
        <div className="form-check form-switch mb-2">
            <Form.Check type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <Form.Label htmlFor="flexSwitchCheckDefault">Default switch input</Form.Label>
        </div>

        <div className="form-check form-switch">
            <Form.Check type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
            <Form.Label htmlFor="flexSwitchCheckChecked">Checked switch input</Form.Label>
        </div>
    </div>
</Col>

<Col lg={4} md={6}>
    <div className="mt-4 mt-md-0">
        <p className="text-muted fw-medium">Disabled Switchs</p>
        <p className="text-muted">Use <code>disabled</code> attribute to set a radio button disabled and add <code>checked</code> attribute to set a switch checked by default.</p>
        <div className="form-check form-switch mb-2">
            <Form.Check type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled />
            <Form.Label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Switch input</Form.Label>
        </div>

        <div className="form-check form-switch">
            <Form.Check type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled1" defaultChecked disabled />
            <Form.Label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled1">Disabled checked switch input</Form.Label>
        </div>
    </div>
</Col>
<Col lg={4} md={6}>
    <div className="mt-4 mt-md-0">
        <p className="text-muted fw-medium">Switch Right</p>
        <p className="text-muted">Use <code>form-check-right</code> class to form-check class to set a switch button on the right side.</p>
        <div>
            <div className="form-check form-switch form-check-right mb-2">
                <Form.Check type="switch" role="switch" id="flexSwitchCheckRightDisabled" defaultChecked />
                <Form.Label htmlFor="flexSwitchCheckRightDisabled">Switch Right input</Form.Label>
            </div>
        </div>

        <div>
            <div className="form-check form-switch form-check-right">
                <Form.Check type="switch" role="switch" id="flexSwitchCheckCheckedDisabled2" disabled />
                <Form.Label htmlFor="flexSwitchCheckCheckedDisabled2">Disabled checked switch input</Form.Label>
            </div>
        </div>

    </div>
</Col>

<Col lg={4} md={6}>
    <div className="mt-3">
        <p className="text-muted fw-medium">Switch sizes</p>
        <p className="text-muted">Use <code>form-switch-md</code> class to set a medium size switch button and <code>form-switch-lg</code> class to form-check class to set a large size switch button respectively. No such class is required for small size switch button.</p>

        <div className="form-check form-switch mb-3" dir="ltr">
            <Form.Check id="customSwitchsizesm" defaultChecked />
            <Form.Label htmlFor="customSwitchsizesm">Small Size Switch</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-md mb-3" dir="ltr">
            <Form.Check id="customSwitchsizemd" />
            <Form.Label htmlFor="customSwitchsizemd">Medium Size Switch</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-lg" dir="ltr">
            <Form.Check id="customSwitchsizelg" defaultChecked />
            <Form.Label htmlFor="customSwitchsizelg">Large Size Switch</Form.Label>
        </div>
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

//Switch Color
const SwitchColor = () => {
    const code = `<Col md={6}>
    <div>
        <div className="form-check form-switch mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck1" defaultChecked />
            <Form.Label htmlFor="SwitchCheck1">Switch Default</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-secondary mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck2" defaultChecked />
            <Form.Label htmlFor="SwitchCheck2">Switch Secondary</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-success mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck3" defaultChecked />
            <Form.Label htmlFor="SwitchCheck3">Switch Success</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-warning mb-2 mb-md-0">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck4" defaultChecked />
            <Form.Label htmlFor="SwitchCheck4">Switch Warning</Form.Label>
        </div>
    </div>
</Col>

<Col md={6}>
    <div>
        <div className="form-check form-switch form-switch-danger mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck5" defaultChecked />
            <Form.Label htmlFor="SwitchCheck5">Switch Danger</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-info mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck6" defaultChecked />
            <Form.Label htmlFor="SwitchCheck6">Switch Info</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-dark mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck7" defaultChecked />
            <Form.Label htmlFor="SwitchCheck7">Switch Dark</Form.Label>
        </div>
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

//Custom Switches
const CustomSwitches = () => {
    const code = `<Col md={6}>
    <div>
        <div className="form-check form-switch form-switch-custom form-switch-primary mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck9" defaultChecked />
            <Form.Label htmlFor="SwitchCheck9">Switch Primary</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-custom form-switch-secondary mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck10" defaultChecked />
            <Form.Label htmlFor="SwitchCheck10">Switch Secondary</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-custom form-switch-success mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck11" defaultChecked />
            <Form.Label htmlFor="SwitchCheck11">Switch Success</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-custom form-switch-warning mb-2 mb-md-0">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck12" defaultChecked />
            <Form.Label htmlFor="SwitchCheck12">Switch Warning</Form.Label>
        </div>
    </div>
</Col>

<Col md={6}>
    <div className="mt-4 mt-md-0">
        <div className="form-check form-switch form-switch-custom form-switch-danger mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck13" defaultChecked />
            <Form.Label htmlFor="SwitchCheck13">Switch Danger</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-custom form-switch-info mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck14" defaultChecked />
            <Form.Label htmlFor="SwitchCheck14">Switch Info</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-custom form-switch-dark mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck15" defaultChecked />
            <Form.Label htmlFor="SwitchCheck15">Switch Dark</Form.Label>
        </div>
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

//Inline Checkbox & Radio
const InlineCheckboxRadio = () => {
    const code = `<Col lg={4}>
    <div className="mt-4 mt-lg-0">
        <div className="form-check form-check-inline">
            <Form.Check type="checkbox" id="inlineCheckbox6" value="option1" />
            <Form.Label htmlFor="inlineCheckbox6">1</Form.Label>
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="checkbox" id="inlineCheckbox7" value="option2" />
            <Form.Label htmlFor="inlineCheckbox7">2</Form.Label>
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="checkbox" id="inlineCheckbox8" value="option3" disabled />
            <Form.Label htmlFor="inlineCheckbox8">3 (disabled)</Form.Label>
        </div>
    </div>
</Col>

<Col lg={4}>
    <div className="mt-4 mt-lg-0">
        <div className="form-check form-check-inline">
            <Form.Check type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" />
            <Form.Label htmlFor="inlineRadio1">1</Form.Label>
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option2" />
            <Form.Label htmlFor="inlineRadio2">2</Form.Label>
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option3" disabled />
            <Form.Label htmlFor="inlineRadio3">3 (disabled)</Form.Label>
        </div>
    </div>
</Col>

<Col lg={4}>
    <div className="mt-4 mt-lg-0">
        <div className="form-check form-switch form-check-inline" dir="ltr">
            <Form.Check type="checkbox" id="inlineswitch5" />
            <Form.Label htmlFor="inlineswitch5">1</Form.Label>
        </div>
        <div className="form-check form-switch form-check-inline" dir="ltr">
            <Form.Check type="checkbox" id="inlineswitch6" />
            <Form.Label htmlFor="inlineswitch6">2</Form.Label>
        </div>
        <div className="form-check form-switch form-check-inline" dir="ltr">
            <Form.Check type="checkbox" id="inlineswitchdisabled2" disabled />
            <Form.Label htmlFor="inlineswitchdisabled2">2</Form.Label>
        </div>
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

//Without Labels
const WithoutLabels = () => {
    const code = `<Col lg={4}>
    <div className="mt-4 mt-lg-0">
        <div className="form-check form-check-inline">
            <Form.Check type="checkbox" id="inlineCheckbox1" value="option1" />
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="checkbox" id="inlineCheckbox2" value="option2" />
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="checkbox" id="inlineCheckbox3" value="option3" disabled />
        </div>
    </div>
</Col>

<Col lg={4}>
    <div className="mt-4 mt-lg-0">
        <div className="form-check form-check-inline">
            <Form.Check type="radio" name="inlineRadioOptions" id="WithoutinlineRadio1" value="option1" />
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="radio" name="inlineRadioOptions" id="WithoutinlineRadio2" value="option2" />
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="radio" name="inlineRadioOptions" id="WithoutinlineRadio3" value="option3" disabled />
        </div>
    </div>
</Col>

<Col lg={4}>
    <div className="mt-4 mt-lg-0">
        <div className="form-check form-switch form-check-inline" dir="ltr">
            <Form.Check type="checkbox" id="inlineswitch" />
        </div>
        <div className="form-check form-switch form-check-inline" dir="ltr">
            <Form.Check type="checkbox" id="inlineswitch1" />
        </div>
        <div className="form-check form-switch form-check-inline" dir="ltr">
            <Form.Check type="checkbox" id="inlineswitchdisabled" disabled />
        </div>
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

//Radio Toggle Buttons
const RadioToggleButtons = () => {
    const code = `<div className="hstack gap-2 flex-wrap">
    <input type="radio" className="btn-check" name="options" id="option1" defaultChecked />
    <label className="btn btn-secondary" htmlFor="option1">Checked</label>

    <input type="radio" className="btn-check" name="options" id="option2" />
    <label className="btn btn-secondary" htmlFor="option2">Radio</label>

    <input type="radio" className="btn-check" name="options" id="option3" disabled />
    <label className="btn btn-secondary" htmlFor="option3">Disabled</label>

    <input type="radio" className="btn-check" name="options" id="option4" />
    <label className="btn btn-secondary" htmlFor="option4">Radio</label>
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

//Outlined Styles
const OutlinedStyles = () => {
    const code = `<div className="hstack gap-2 flex-wrap">
    <input type="checkbox" className="btn-check" id="btn-check-outlined" />
    <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">Single toggle</label>

    <input type="checkbox" className="btn-check" id="btn-check-2-outlined" defaultChecked />
    <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined">Checked</label>

    <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" defaultChecked />
    <label className="btn btn-outline-success" htmlFor="success-outlined">Checked success radio</label>

    <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" />
    <label className="btn btn-outline-danger" htmlFor="danger-outlined">Danger radio</label>
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

export {
    Checkbox,
    CustomCheckbox,
    Radio,
    CustomRadio,
    Switches,
    SwitchColor,
    CustomSwitches,
    InlineCheckboxRadio,
    WithoutLabels,
    RadioToggleButtons,
    OutlinedStyles
};
