import PrismCode from "Common/Prisam";

// Default Buttons

const defaultButtonsCode =
    `
<!-- Base Buttons -->
<Button variant='primary'>Primary</Button>

<Button variant='secondary'>Secondary</Button>

<Button variant='success'>Success</Button>

<Button variant='info'>Info</Button>

<Button variant='warning'>Warning</Button>

<Button variant='danger'>Danger</Button>

<Button variant='dark'>Dark</Button>

<Button variant='link'>Link</Button>

<Button variant='light'>Light</Button>
`;

const DefaultButtonsExample = () => (
    <PrismCode
        code={defaultButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Outline Buttons

const outlineButtonsCode =
    `
<!-- Outline Buttons -->
<Button variant="outline-primary">Primary</Button>

<Button variant="outline-secondary">Secondary</Button>

<Button variant="outline-success">Success</Button>

<Button variant="outline-info">Info</Button>

<Button variant="outline-warning">Warning</Button>

<Button variant="outline-danger">Danger</Button>

<Button variant="outline-dark">Dark</Button>

<Button variant="outline-light">Light</Button>

`;

const OutlineButtonsExample = () => (
    <PrismCode
        code={outlineButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Rounded Buttons

const roundedButtonsCode =
    `
<!-- Rounded Buttons -->
<Button variant='primary' className="rounded-pill">Primary</Button>

<Button variant='secondary' className="rounded-pill">Secondary</Button>

<Button variant='success' className="rounded-pill">Success</Button>

<Button variant='info' className="rounded-pill">Info</Button>

<Button variant='warning' className="rounded-pill">Warning</Button>

<Button variant='danger' className="rounded-pill">Danger</Button>

<Button variant='dark' className="rounded-pill">Dark</Button>

<Button variant='light' className="rounded-pill">Light</Button>
`;

const RoundedButtonsExample = () => (
    <PrismCode
        code={roundedButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Soft Buttons

const softButtonsCode =
    `
<!-- Soft Buttons -->
<Button variant="soft-primary">Primary</Button>

<Button variant="soft-secondary">Secondary</Button>

<Button variant="soft-success">Success</Button>

<Button variant="soft-info">Info</Button>

<Button variant="soft-warning">Warning</Button>

<Button variant="soft-danger">Danger</Button>

<Button variant="soft-dark">Dark</Button>
`;

const SoftButtonsExample = () => (
    <PrismCode
        code={softButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);



// Gradient Buttons

const gradientButtonsCode =
    `
<!-- Gradient Buttons -->
<Button className="btn-primary bg-gradient">Primary</Button>

<Button className="btn-secondary bg-gradient">Secondary</Button>

<Button className="btn-success bg-gradient">Success</Button>

<Button className="btn-info bg-gradient">Info</Button>

<Button className="btn-warning bg-gradient">Warning</Button>

<Button className="btn-danger bg-gradient">Danger</Button>

<Button className="btn-dark bg-gradient">Dark</Button>

<Button className="btn-light bg-gradient">Light</Button>
`;

const GradientButtonsExample = () => (
    <PrismCode
        code={gradientButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Animation Buttons

const animationButtonsCode =
    `
<!-- Animation Buttons -->
<Button color="primary" className="btn-animation" data-text="Primary"> <span>Primary</span> </Button>

<Button color="secondary" className="btn-animation" data-text="Secondary"> <span>Secondary</span> </Button>

<Button color="success" className="btn-animation" data-text="Success"> <span>Success</span> </Button>

<Button color="info" className="btn-animation" data-text="Info"> <span>Info</span> </Button>

<Button color="warning" className="btn-animation" data-text="Warning"> <span>Warning</span> </Button>

<Button color="danger" className="btn-animation" data-text="Danger"> <span>Danger</span> </Button>

<Button color="dark" className="btn-animation" data-text="Dark"> <span>Dark</span> </Button>
`;

const AnimationButtonsExample = () => (
    <PrismCode
        code={animationButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Buttons with Label

const labelButtonsCode =
`
<!-- Buttons with Label -->
<Link href="#" className="btn btn-primary btn-label">
    <div className="d-flex">
        <div className="flex-shrink-0">
            <i className="ri-user-smile-line label-icon align-middle fs-16 me-2"></i>
        </div>
        <div className="flex-grow-1">
            Primary
        </div>
    </div>
</Link>

<Button variant='success' className="btn-label"><i className="ri-check-double-line label-icon align-middle fs-16 me-2"></i> Success</Button>

<Button variant='warning' className="btn-label"><i className="ri-error-warning-line label-icon align-middle fs-16 me-2 "></i> Warning</Button>

<!-- Rounded with Label -->
<Button variant='primary' className="btn-label rounded-pill"><i className="ri-user-smile-line label-icon align-middle rounded-pill fs-16 me-2"></i> Primary</Button>

<Button variant='success' className="btn-label rounded-pill"><i className="ri-check-double-line label-icon align-middle rounded-pill fs-16 me-2"></i> Success</Button>

<Button variant='warning' className="btn-label rounded-pill"><i className="ri-error-warning-line label-icon align-middle rounded-pill fs-16 me-2 "></i> Warning</Button>

<!-- Buttons with Label Right -->
<Button variant='primary' className="btn-label right"><i className="ri-user-smile-line label-icon align-middle fs-16 ms-2"></i> Primary</Button>

<Button variant='success' className="btn-label right rounded-pill"><i className="ri-check-double-line label-icon align-middle rounded-pill fs-16 ms-2"></i> Success</Button>
`;

const LabelButtonsExample = () => (
    <PrismCode
        code={labelButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Buttons Sizes

const sizeButtonsCode =
    `
<!-- Large Button -->
<Button size='lg' variant='primary'>Large button</Button>

<Button size='lg' variant='light'>Large button</Button>

<!-- Small Button -->
<Button size='sm' variant='primary'>Small button</Button>

<Button size='sm' variant='light'>Small button</Button>
`;

const SizeButtonsExample = () => (
    <PrismCode
        code={sizeButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Buttons Width

const widthButtonsCode =
    `
<!-- Width Button -->
<Button variant='primary' className="w-xs">Xs</Button>

<Button variant='danger' className="w-sm">Small</Button>

<Button variant='warning' className="w-md">Medium</Button>

<Button variant='success' className="w-lg">Large</Button>
`;

const WidthButtonsExample = () => (
    <PrismCode
        code={widthButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Buttons Tag

const tagButtonsCode =
    `
<!-- Tag Button -->
<Link href='#' className="btn btn-primary">Link</Link>

<Button variant='success' value="Submit" type="submit">Button</Button>

<Button as='input' variant='info' type="button" value="Input" />

<Button as='input' variant='danger' type="submit" value="Submit" />

<Button as='input' variant='warning' type="reset" value="Reset" />
`;

const TagButtonsExample = () => (
    <PrismCode
        code={tagButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Buttons Grid

const gridButtonsCode =
    `
<!-- Buttons Grid -->
<div className="d-grid gap-2">
<Button variant='primary'>Button</Button>
<Button variant='primary'>Button</Button>
</div>
`;

const GridButtonsExample = () => (
    <PrismCode
        code={gridButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Buttons Checkbox & Radio

const checkButtonsCode =
`
<div className="d-flex flex-wrap align-items-center gap-2">
<!-- Checkbox Buttons -->
    <ButtonGroup aria-label="Basic checkbox toggle button group">
        <input type="checkbox" className="btn-check" id="btncheck1" defaultChecked />
        <Button as='label' variant='primary' className="mb-0" htmlFor="btncheck1">Checkbox 1</Button>

        <input type="checkbox" className="btn-check" id="btncheck2" />
        <Button as='label' variant='primary' className="mb-0" htmlFor="btncheck2">Checkbox 2</Button>

        <input type="checkbox" className="btn-check" id="btncheck3" />
        <Button as='label' variant='primary' className="mb-0" htmlFor="btncheck3">Checkbox 3</Button>
    </ButtonGroup>

<!-- Radio Buttons -->
    <ButtonGroup aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
        <Button as='label' variant='outline-secondary' className="mb-0" htmlFor="btnradio1">Radio 1</Button>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
        <Button as='label' variant='outline-secondary' className="mb-0" htmlFor="btnradio2">Radio 2</Button>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
        <Button as='label' variant='outline-secondary' className="mb-0" htmlFor="btnradio3">Radio 3</Button>
    </ButtonGroup>
</div>
`;

const CheckButtonsExample = () => (
    <PrismCode
        code={checkButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Buttons Group

const groupButtonsCode =
    `
<!-- Buttons Group -->
<ButtonGroup aria-label="Basic example">
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
</ButtonGroup>

<!-- Radio Buttons -->
<ButtonGroup className="mt-4 mt-sm-0" aria-label="Basic example">
    <Button variant='light' className="btn-icon"><i className="ri-align-right"></i></Button>
    <Button variant='light' className="btn-icon"><i className="ri-align-center"></i></Button>
    <Button variant='light' className="btn-icon"><i className="ri-align-left"></i></Button>
</ButtonGroup>
`;

const GroupButtonsExample = () => (
    <PrismCode
        code={groupButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Buttons Icon

const iconButtonsCode =
    `
<!-- Buttons Group -->
<Button variant='primary'><i className="ri-map-pin-line"></i></Button>
<Button variant='danger'><i className="ri-delete-bin-5-line"></i></Button>
<Button variant='success'><i className="ri-check-double-line"></i></Button>
<Button variant='light'><i className="ri-brush-2-fill"></i></Button>

<Button variant='outline-primary'><i className="ri-24-hours-fill"></i></Button>
<Button variant='outline-danger'><i className="ri-customer-service-2-line"></i></Button>
<Button variant='outline-success'><i className="ri-mail-send-line"></i></Button>
<Button variant='outline-warning'><i className="ri-menu-2-line"></i></Button>
`;

const IconButtonsExample = () => (
    <PrismCode
        code={iconButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Buttons Toolbar

const toolbarButtonsCode =
    `
<!-- Buttons Toolbar -->
<ButtonToolbar aria-label="Toolbar with button groups">
    <ButtonGroup className="me-2" aria-label="First group">
        <Button variant='light'>1</Button>
        <Button variant='light'>2</Button>
        <Button variant='light'>3</Button>
        <Button variant='light'>4</Button>
    </ButtonGroup>
    <ButtonGroup className="me-2" aria-label="Second group">
        <Button variant="light">5</Button>
        <Button variant="light">6</Button>
        <Button variant="light">7</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Third group">
        <Button variant="light">8</Button>
    </ButtonGroup>
</ButtonToolbar>
`;

const ToolbarButtonsExample = () => (
    <PrismCode
        code={toolbarButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Group Buttons Sizing

const groupSizingButtonsCode =
`
<!-- Group Buttons Sizing -->
<ButtonGroup size='lg' aria-label="Basic example">
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
</ButtonGroup>

<ButtonGroup className="mt-2" aria-label="Basic example">
    <Button variant="light">Left</Button>
    <Button variant="light">Middle</Button>
    <Button variant="light">Right</Button>
</ButtonGroup>

<ButtonGroup size='sm' className="mt-2" aria-label="Basic example">
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Middle</Button>
    <Button variant="secondary">Right</Button>
</ButtonGroup>
`;

const GroupsizingButtonsExample = () => (
    <PrismCode
        code={groupSizingButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Vertical Variation

const verticalButtonsCode =
`
<div className="row gy-3">
<div className="col-auto">
    <ButtonGroup aria-label="Button group with nested dropdown">
        <Button variant="primary">1</Button>
        <Button variant="primary">2</Button>
            <Dropdown>
                <Dropdown.Toggle  id="btnGroupDrop1" variant="primary" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </Dropdown.Toggle>
                <Dropdown.Menu as="ul" aria-labelledby="btnGroupDrop1">
                    <li><Dropdown.Item href="#">Dropdown link</Dropdown.Item></li>
                    <li><Dropdown.Item href="#">Dropdown link</Dropdown.Item></li>
                </Dropdown.Menu>
            </Dropdown>
    </ButtonGroup>
</div>
<div className="col-auto">
    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
        <Button variant="light">Button</Button>
            <Dropdown>
                <Dropdown.Toggle  id="btnGroupDrop1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </Dropdown.Toggle>
                <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                    <li><Dropdown.Item href="#">Dropdown link</Dropdown.Item></li>
                    <li><Dropdown.Item href="#">Dropdown link</Dropdown.Item></li>
                </Dropdown.Menu>
            </Dropdown>
        <Button variant='light'>Button</Button>
        <Button variant='light'>Button</Button>
    </div>
</div>
<div className="col-auto">
    <div className="btn-group-vertical" aria-label="Vertical radio toggle button group">
        <input type="radio" className="btn-check" name="vbtn" id="vbtn-radio1" defaultChecked />
        <Button as='label' variant="outline-secondary" htmlFor="vbtn-radio1">Radio 1</Button>
        <input type="radio" className="btn-check" name="vbtn" id="vbtn-radio2" />
        <Button as='label' variant="outline-secondary" htmlFor="vbtn-radio2">Radio 2</Button>
        <input type="radio" className="btn-check" name="vbtn" id="vbtn-radio3" />
        <Button as='label' variant="outline-secondary" htmlFor="vbtn-radio3">Radio 3</Button>
    </div>
</div>
</div>
`;

const VerticalButtonsExample = () => (
    <PrismCode
        code={verticalButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Ghost Buttons
const ghostButtonsCode =
    `
<!-- Ghost Buttons -->

<Button className="btn-ghost-primary">Primary</Button>

<Button className="btn-ghost-secondary">Secondary</Button>

<Button className="btn-ghost-success">Success</Button>

<Button className="btn-ghost-info">Info</Button>

<Button className="btn-ghost-warning">Warning</Button>

<Button className="btn-ghost-danger">Danger</Button>

<Button className="btn-ghost-dark">Dark</Button>
`;

const GhostButtonsExample = () => (
    <PrismCode
        code={ghostButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Loading Buttons
const loadingbuttonsCode =
    `
<!-- Load More Buttons -->

<div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
    <Button variant='outline-primary' className="btn-load">
        <span className="d-flex align-items-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="flex-grow-1 ms-2">
                Loading...
            </span>
        </span>
    </Button>
    <Button className="btn-success btn-load">
        <span className="d-flex align-items-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="flex-grow-1 ms-2">
                Loading...
            </span>
        </span>
    </Button>
    <Button variant='outline-secondary' className="btn-load">
        <span className="d-flex align-items-center">
            <Spinner animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="flex-grow-1 ms-2">
                Loading...
            </span>
        </span>
    </Button>
    <Button className="btn-danger btn-load">
        <span className="d-flex align-items-center">
            <Spinner animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="flex-grow-1 ms-2">
                Loading...
            </span>
        </span>
    </Button>
</div>

<div className="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
    <Button variant='outline-primary' className="btn-load">
        <span className="d-flex align-items-center">
            <span className="flex-grow-1 me-2">
                Loading...
            </span>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </span>
    </Button>
    <button type="button" className="btn btn-success btn-load">
        <span className="d-flex align-items-center">
            <span className="flex-grow-1 me-2">
                Loading...
            </span>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </span>
    </button>
    <button type="button" className="btn btn-outline-warning btn-load">
        <span className="d-flex align-items-center">
            <span className="flex-grow-1 me-2">
                Loading...
            </span>
            <Spinner animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </span>
    </button>
    <button type="button" className="btn btn-info btn-load">
        <span className="d-flex align-items-center">
            <span className="flex-grow-1 me-2">
                Loading...
            </span>
            <Spinner animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </span>
    </button>
</div>
`;

const LoadingbuttonsExample = () => (
    <PrismCode
        code={loadingbuttonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Border Buttons
const borderButtonsCode =
`
<!-- Border Buttons -->

<div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
    <Button variant='primary' className="btn-border">Primary</Button>
    <Button variant='secondary' className="btn-border">Secondary</Button>
    <Button variant='success' className="btn-border">Success</Button>
    <Button variant='warning' className="btn-border">Warning</Button>
    <Button variant='danger' className="btn-border">Danger</Button>
</div>

<div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
    <Button variant='outline-primary' className="btn-border">Primary</Button>
    <Button variant='outline-secondary' className="btn-border">Secondary</Button>
    <Button variant='outline-success' className="btn-border">Success</Button>
    <Button variant='soft-warning' className="btn-border">Warning</Button>
    <Button variant='soft-danger' className="btn-border">Danger</Button>
    <Button variant='soft-dark' className="btn-border">Dark</Button>
</div>
`;

const BorderButtonsExample = () => (
    <PrismCode
        code={borderButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Border Buttons
const darkenButtonsCode =
`
<!-- Darken Buttons -->

<div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
    <Button className="btn-darken-primary">Primary</Button>
    <Button className="btn-darken-secondary">Secondary</Button>
    <Button className="btn-darken-success">Success</Button>
    <Button className="btn-darken-warning">Warning</Button>
    <Button className="btn-darken-danger">Danger</Button>
    <Button className="btn-darken-info">Info</Button>
    <Button className="btn-darken-dark">Dark</Button>
    <Button className="btn-darken-light">Light</Button>
</div>
`;

const DarkenButtonsExample = () => (
    <PrismCode
        code={darkenButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Custom Toggle Buttons
const customToggleButtonsCode =
    `
<!-- Custom Toggle Buttons -->

<div className="d-flex flex-wrap align-items-center gap-2">
    <Button className="btn-primary custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-alarm-line align-bottom"></i> Active</span> 
        <span className="icon-off">Unactive</span>
    </Button>
    <Button className="btn-secondary custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-user-add-line align-bottom me-1"></i> Connect</span> 
        <span className="icon-off"><i className="ri-check-fill align-bottom me-1"></i> Unconnect</span>
    </Button>
    <Button className="btn-success custom-toggle" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-thumb-up-line align-bottom me-1"></i> Yes</span> 
        <span className="icon-off"><i className="ri-thumb-down-line align-bottom me-1"></i> No</span>
    </Button>
    <Button className="btn-warning custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-add-line align-bottom me-1"></i> Follow</span> 
        <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
    </Button>
    <Button className="btn-danger custom-toggle" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on">On</span> 
        <span className="icon-off">Off</span>
    </Button>
    <Button className="btn-dark custom-toggle" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-bookmark-line align-bottom me-1"></i> Bookmark</span> 
        <span className="icon-off"><i className="ri-bookmark-3-fill align-bottom me-1"></i> Unbookmark</span>
    </Button>
</div>

<div className="d-flex flex-wrap align-items-center gap-2">
    <Button variant='outline-primary' className="custom-toggle" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on">Active</span> 
        <span className="icon-off">Unactive</span>
    </Button>
    <Button variant='outline-secondary' className="custom-toggle" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-add-line align-bottom me-1"></i> Follow</span> 
        <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
    </Button>
    <Button variant='outline-success' className="custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on">On</span>
        <span className="icon-off">Off</span>
    </Button>
    <Button variant='soft-warning' className="custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on">Follow</span> 
        <span className="icon-off">Unfollow</span>
    </Button>
    <Button variant='soft-danger' className="custom-toggle" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on">On</span> 
        <span className="icon-off">Off</span>
    </Button>
    <Button className="btn-dark custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
        <span className="icon-on"><i className="ri-bookmark-line align-bottom"></i></span> 
        <span className="icon-off"><i className="ri-bookmark-3-fill align-bottom"></i></span>
    </Button>
</div>
`;

const CustomToggleButtonsExample = () => (
    <PrismCode
        code={customToggleButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


export { DefaultButtonsExample, OutlineButtonsExample,DarkenButtonsExample, RoundedButtonsExample, SoftButtonsExample, GradientButtonsExample, AnimationButtonsExample, LabelButtonsExample, SizeButtonsExample, WidthButtonsExample, TagButtonsExample, GridButtonsExample, CheckButtonsExample, GroupButtonsExample, IconButtonsExample, ToolbarButtonsExample, GroupsizingButtonsExample, VerticalButtonsExample, GhostButtonsExample, LoadingbuttonsExample, BorderButtonsExample, CustomToggleButtonsExample };