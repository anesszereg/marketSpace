import PrismCode from "Common/Prisam";

// Default Alerts

const defaultAlertsCode =
`
<!-- Primary Alert -->
<Alert variant="primary">
    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary">
    <strong> How are you! </strong> A simple <b>secondary alert</b> —check it out!
</Alert>

<!-- Success Alert -->
<Alert variant="success">
    <strong> Yey! Everything worked! </strong> A simple <b>success alert</b> —check it out!
</Alert>

<!-- Danger Alert -->
<Alert variant="danger">
    <strong> Something is very wrong! </strong> A simple <b>danger alert</b> —check it out!
</Alert>

<!-- Warning Alert -->
<Alert variant="warning">
    <strong> Uh oh, something went wrong </strong> A simple <b>warning alert</b> —check it out!
</Alert>

<!-- Info Alert -->
<Alert variant="info">
    <strong> Don't forget' it ! </strong> A simple <b>info alert</b> —check it out!
</Alert>

<!-- Light Alert -->
<Alert variant="light">
    <strong> Mind Your Step! </strong> A simple <b>light alert</b> —check it out!
</Alert>
    
<!-- Dark Alert -->
<Alert variant="dark">
    <strong> Did you know? </strong> A simple <b>dark alert</b> —check it out!
</Alert>
`;

const DefaultAlertsExample = () => (
    <PrismCode
        code={defaultAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Borderless Alerts

const borderlessAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-borderless">
    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary" className="alert-borderless">
    <strong> How are you! </strong> A simple <b>secondary alert</b> —check it out!
</Alert>

<!-- Success Alert -->
<Alert variant="success" className="alert-borderless">
    <strong> Yey! Everything worked! </strong> A simple <b>success alert</b> —check it out!
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="alert-borderless mb-xl-0">
    <strong> Something is very wrong! </strong> A simple danger alert—check it out!
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="alert-borderless">
    <strong> Uh oh, something went wrong </strong> A simple <b>warning alert</b> —check it out!
</Alert>

<!-- Info Alert -->
<Alert variant="info" className="alert-borderless">
    <strong>Don't forget' it !</strong> A simple <b>info alert</b> —check it out!
</Alert>

<!-- Light Alert -->
<Alert variant="light" className="alert-borderless bg-light">
    <strong>Mind Your Step!</strong> A simple <b>light alert</b> —check it out!
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="alert-borderless mb-0">
    <strong>Did you know?</strong> A simple <b>dark alert</b> —check it out!
</Alert>`;

const BorderlessExample = () => (
    <PrismCode
        code={borderlessAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Dismissing Alerts

const dismissingAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="fade alert-dismissible show">
    <strong> Hi! </strong> A simple <b>Dismissible primary Alert </b> — check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary" className="fade alert-dismissible show">
    <strong> How are you! </strong> A simple <b>Dismissible secondary alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Success Alert -->
<Alert variant="success" className="fade alert-dismissible show">
    <strong>Right Way !</strong> A simple <b>Dismissible success alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="fade alert-dismissible show mb-xl-0">
    <strong> Something is very wrong! </strong> A simple <b>Dismissible danger alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="fade alert-dismissible show">
    <strong>Welcome Back!</strong> A simple <b>Dismissible warning alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Info Alert -->
<Alert variant="info" className="fade alert-dismissible show">
    <strong>Don't forget' it !</strong> A simple <b>Dismissible info alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Light Alert -->
<Alert variant="light" className="fade alert-dismissible show">
    <strong>Mind Your Step!</strong> A simple <b>Dismissible light alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="fade alert-dismissible show mb-0">
    <strong>Did you know?</strong> A simple <b>Dismissible dark alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const DismissingExample = () => (
    <PrismCode
        code={dismissingAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Link Color Alerts

const linkColorAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary">
    A simple Primary alert with <Alert.Link to="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary">
    A simple Secondary alert with <Alert.Link to="#">an example link</Alert.Link>.  Give it a click if you like.
</Alert>

<!-- Success Alert -->
<Alert variant="success">
    A simple Success alert with <Alert.Link to="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="mb-xl-0">
    A simple Danger alert with <Alert.Link to="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>

<!-- Warning Alert -->
<Alert variant="warning">
    A simple Warning alert with <Alert.Link to="#">an example link</Alert.Link>. Give  it a click if you like.
</Alert>

<!-- Info Alert -->
<Alert variant="info">
    A simple Info alert with <Alert.Link to="#">an example link</Alert.Link>. Give it  a click if you like.
</Alert>

<!-- Light Alert -->
<Alert variant="light">
    A simple Light alert with <Alert.Link to="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="mb-0">
    A simple Dark alert with <Alert.Link to="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>`;

const LinkColorExample = () => (
    <PrismCode
        code={linkColorAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Live Alert Example

const liveAlertsCode = `
const [show, setShow] = useState(false);
<Alert show={show} variant="success" onClose={() => setShow(true)} dismissible>
    Nice, you triggered this alert message!
</Alert>
<button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={() => setShow(true)}>Show live alert</button>`;

const LiveExample = () => (
    <PrismCode
        code={liveAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Outline Alerts

const outlineAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-dismissible alert-outline fade show">
    <strong> Hi! </strong> - Outline <b>primary alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary" className="alert-dismissible alert-outline fade show">
    <strong> How are you! </strong> - Outline <b>secondary alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Success Alert -->
<Alert variant="success" className="alert-dismissible alert-outline fade show">
    <strong> Yey! Everything worked! </strong> - Outline <b>success alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="alert-dismissible alert-outline fade show mb-xl-0">
    <strong> Something is very wrong! </strong> - Outline <b>danger alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="alert-dismissible alert-outline fade show">
    <strong> Uh oh, something went wrong! </strong> - Outline <b>warning alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Info Alert -->
<Alert variant="info" className="alert-dismissible alert-outline fade show">
    <strong>Don't forget' it !</strong> - Outline <b>info alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="alert-dismissible alert-outline fade show mb-0">
    <strong>Did you know?</strong> - Outline <b>dark alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const OutlineAlertsExample = () => (
    <PrismCode
        code={outlineAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Left Border Alerts

const leftBorderAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-border-left alert-dismissible fade show">
    <i className="ri-user-smile-line me-3 align-middle fs-16"></i><strong>Primary</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary" className="alert-border-left alert-dismissible fade show">
    <i className="ri-check-double-line me-3 align-middle fs-16"></i><strong>Secondary</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Success Alert -->
<Alert variant="success" className="alert-border-left alert-dismissible fade show">
    <i className="ri-notification-off-line me-3 align-middle fs-16"></i><strong>Success</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="alert-border-left alert-dismissible fade show mb-xl-0">
    <i className="ri-error-warning-line me-3 align-middle fs-16"></i><strong>Danger</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="alert-border-left alert-dismissible fade show">
    <i className="ri-alert-line me-3 align-middle fs-16"></i><strong>Warning</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Info Alert -->
<Alert variant="info" className="alert-border-left alert-dismissible fade show">
    <i className="ri-airplay-line me-3 align-middle fs-16"></i><strong>Info</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Light Alert -->
<Alert variant="light" className="alert-border-left alert-dismissible fade show">
    <i className="ri-mail-line me-3 align-middle fs-16"></i><strong>Light</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="alert-border-left alert-dismissible fade show mb-0">
    <i className="ri-refresh-line me-3  align-middle fs-16"></i><strong>Dark</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const LeftBorderAlertsExample = () => (
    <PrismCode
        code={leftBorderAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Modern Border Alerts

const modernAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-modern alert-dismissible fade show">
    <i className="ri-user-smile-line me-3 align-middle fs-16"></i><strong>Primary</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary" className="alert-modern alert-dismissible fade show">
    <i className="ri-check-double-line me-3 align-middle fs-16"></i><strong>Secondary</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Success Alert -->
<Alert variant="success" className="alert-modern alert-dismissible fade show">
    <i className="ri-notification-off-line me-3 align-middle fs-16"></i><strong>Success</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="alert-modern alert-dismissible fade show mb-xl-0">
    <i className="ri-error-warning-line me-3 align-middle fs-16"></i><strong>Danger</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="alert-modern alert-dismissible fade show">
    <i className="ri-alert-line me-3 align-middle fs-16"></i><strong>Warning</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Info Alert -->
<Alert variant="info" className="alert-modern alert-dismissible fade show">
    <i className="ri-airplay-line me-3 align-middle fs-16"></i><strong>Info</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Light Alert -->
<Alert variant="light" className="alert-modern alert-dismissible fade show">
    <i className="ri-mail-line me-3 align-middle fs-16"></i><strong>Light</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="alert-modern alert-dismissible fade show mb-0">
    <i className="ri-refresh-line me-3  align-middle fs-16"></i><strong>Dark</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const ModernAlertsExample = () => (
    <PrismCode
        code={modernAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Label Icon Alerts

const labelIconAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-dismissible alert-solid alert-label-icon fade show">
    <i className="ri-user-smile-line label-icon"></i><strong>Primary</strong> -Label icon alert 
    <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary" className="alert-dismissible alert-solid alert-label-icon fade show">
    <i className="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Label icon alert
    <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Success Alert -->
<Alert variant="success" className="alert-dismissible alert-solid alert-label-icon fade show">
    <i className="ri-notification-off-line label-icon"></i><strong>Success</strong> - Label icon alert
    <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="alert-dismissible alert-solid alert-label-icon fade show mb-xl-0">
    <i className="ri-error-warning-line label-icon"></i><strong>Danger</strong> - Label icon alert
    <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="alert-dismissible alert-solid alert-label-icon fade show">
    <i className="ri-alert-line label-icon"></i><strong>warning</strong> - Label icon alert
    <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Info Alert -->
<Alert variant="info" className="alert-dismissible alert-solid alert-label-icon fade show">
    <i className="ri-airplay-line label-icon"></i><strong>Info</strong> - Label icon alert
    <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Light Alert -->
<Alert variant="light" className="alert-dismissible alert-solid alert-label-icon fade show">
    <i className="ri-mail-line label-icon"></i><strong>Light</strong> - Label icon alert
    <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="alert-dismissible alert-solid alert-label-icon fade show mb-0">
    <i className="ri-refresh-line label-icon"></i><strong>Dark</strong> - Label icon alert
    <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const LabelIconAlertsExample = () => (
    <PrismCode
        code={labelIconAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Additional Content Alerts

const additionalContentCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-dismissible alert-additional fade show">
    <div className="alert-body">
        <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
        <div className="d-flex">
            <div className="flex-shrink-0 me-3">
                <i className="ri-error-warning-line fs-16 align-middle"></i>
            </div>
            <div className="flex-grow-1">
                <h5 className="alert-heading">Well done !</h5>
                <p className="mb-0">Aww yeah, you successfully read this important alert message. </p>
            </div>
        </div>
    </div>
    <div className="alert-content">
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
</Alert>

<!-- Success Alert -->
<Alert variant="danger" className="alert-dismissible alert-additional fade show mb-xl-0">
    <div className="alert-body">
        <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
        <div className="d-flex">
            <div className="flex-shrink-0 me-3">
                <i className="ri-alert-line fs-16 align-middle"></i>
            </div>
            <div className="flex-grow-1">
                <h5 className="alert-heading">Something is very wrong!</h5>
                <p className="mb-0">Change a few things up and try submitting again.</p>
            </div>
        </div>
    </div>
    <div className="alert-content">
        <p className="mb-0">Whenever you need to, be sure to use margin
            utilities to keep things nice and tidy.</p>
    </div>
</Alert>

<!-- Danger Alert -->
<Alert variant="success" className="alert-dismissible alert-additional fade show">
    <div className="alert-body">
        <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
        <div className="d-flex">
            <div className="flex-shrink-0 me-3">
                <i className="ri-notification-off-line fs-16 align-middle"></i>
            </div>
            <div className="flex-grow-1">
                <h5 className="alert-heading">Yey! Everything worked!</h5>
                <p className="mb-0">This alert needs your attention, but it's not super important.</p>
            </div>
        </div>
    </div>
    <div className="alert-content">
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="alert-dismissible alert-dismissible alert-additional fade show mb-0">
    <div className="alert-body">
        <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
        <div className="d-flex">
            <div className="flex-shrink-0 me-3">
                <i className="ri-alert-line fs-16 align-middle"></i>
            </div>
            <div className="flex-grow-1">
                <h5 className="alert-heading">Uh oh, something went wrong!</h5>
                <p className="mb-0">Better check yourself, you're not looking too good.</p>
            </div>
        </div>
    </div>
    <div className="alert-content">
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
</Alert>`;

const AdditionalContentCodeExample = () => (
    <PrismCode
        code={additionalContentCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);



// Top Border with Outline Alerts Alerts

const topBarAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-dismissible alert-top-border fade show">
    <i className="ri-user-smile-line me-3 align-middle fs-16 text-primary"></i><strong>Primary</strong> - Top border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary" className="alert-dismissible alert-top-border fade show">
    <i className="ri-check-double-line me-3 align-middle fs-16 text-secondary"></i><strong>Secondary</strong> - Top border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Success Alert -->
<Alert variant="success" className="alert-dismissible alert-top-border fade show">
    <i className="ri-notification-off-line me-3 align-middle fs-16 text-success"></i><strong>Success</strong> - Top border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="alert-dismissible alert-top-border mb-xl-0">
    <i className="ri-error-warning-line me-3 align-middle fs-16 text-danger "></i><strong>Danger</strong> - Top border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="alert-dismissible alert-top-border fade show">
    <i className="ri-alert-line me-3 align-middle fs-16 text-warning"></i><strong>Warning</strong> - Top border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Info Alert -->
<Alert variant="info" className="alert-dismissible alert-top-border fade show">
    <i className="ri-airplay-line me-3 align-middle fs-16 text-info"></i><strong>Info</strong> - Top border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Light Alert -->
<Alert variant="light" className="alert-dismissible alert-top-border fade show">
    <i className="ri-mail-line me-3 align-middle fs-16 text-dark"></i><strong>Light</strong> - Top border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="alert-dismissible alert-top-border fade show mb-0">
    <i className="ri-refresh-line me-3 align-middle fs-16 text-dark"></i><strong>Dark</strong> - Top border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const TopBarAlertsExample = () => (
    <PrismCode
        code={topBarAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Label Icon Arrow Alerts Alerts Alerts

const labelIconArrowAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-dismissible alert-label-icon label-arrow fade show">
 <i className="ri-user-smile-line label-icon"></i><strong>Primary</strong> - Label icon arrow alert
 <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary" className="alert-dismissible alert-label-icon label-arrow fade show">
    <i className="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Success Alert -->
<Alert variant="success" className="alert-dismissible alert-label-icon label-arrow fade show">
    <i className="ri-notification-off-line label-icon"></i><strong>Success</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="alert-dismissible alert-label-icon label-arrow mb-xl-0">
    <i className="ri-error-warning-line label-icon"></i><strong>Danger</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="alert-dismissible alert-label-icon label-arrow fade show">
    <i className="ri-alert-line label-icon"></i><strong>Warning</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Info Alert -->
<Alert variant="info" className="alert-dismissible alert-label-icon label-arrow fade show">
    <i className="ri-airplay-line label-icon"></i><strong>Info</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Light Alert -->
<Alert variant="light" className="alert-dismissible alert-label-icon label-arrow fade show">
    <i className="ri-mail-line label-icon"></i><strong>Light</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="alert-dismissible alert-label-icon label-arrow fade show mb-0">
    <i className="ri-refresh-line label-icon"></i><strong>Dark</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const LabelIconArrowAlertsExample = () => (
    <PrismCode
        code={labelIconArrowAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Rounded Label Icon Alerts

const roundedLabelIconAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-dismissible alert-label-icon rounded-label fade show">
    <i className="ri-user-smile-line label-icon"></i><strong>Primary</strong> - Rounded label alert 
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary" className="alert-dismissible alert-label-icon rounded-label fade show">
    <i className="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Rounded label alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Success Alert -->
<Alert variant="success" className="alert-dismissible alert-label-icon rounded-label fade show">
    <i className="ri-notification-off-line label-icon"></i><strong>Success</strong> - Rounded label alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="alert-dismissible alert-label-icon rounded-label fade show">
    <i className="ri-error-warning-line label-icon"></i><strong>Danger</strong> - Rounded label alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="alert-dismissible alert-label-icon rounded-label fade show">
    <i className="ri-alert-line label-icon"></i><strong>Warning</strong> - Rounded label alert 
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Info Alert -->
<Alert variant="info" className="alert-dismissible alert-label-icon rounded-label fade show">
    <i className="ri-airplay-line label-icon"></i><strong>Info</strong> - Rounded label alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Light Alert -->
<Alert variant="light" className="alert-dismissible alert-label-icon rounded-label fade show">
    <i className="ri-mail-line label-icon"></i><strong>Light</strong> - Rounded label alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="alert-dismissible alert-label-icon rounded-label fade show">
    <i className="ri-refresh-line label-icon"></i><strong>Dark</strong> - Rounded label alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const RoundedLabelIconAlertsExample = () => (
    <PrismCode
        code={roundedLabelIconAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Solid Alerts

const solidAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-dismissible alert-solid fade show">
    <strong>Hi!</strong> - Solid <b>primary alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="secondary" className="alert-dismissible alert-solid fade show">
    <strong>How are you!</strong> - Solid <b>secondary alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="success" className="alert-dismissible alert-solid fade show">
    <strong>Yey! Everything worked! </strong> - Solid <b>success alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="danger" className="alert-dismissible alert-solid fade show mb-xl-0">
    <strong>Something is very wrong!</strong> - Solid <b>danger alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="warning" className="alert-dismissible alert-solid fade show">
    <strong>Uh oh, something went wrong!</strong> - Solid <b>warning alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="info" className="alert-dismissible alert-solid fade show">
    <strong>Don't forget' it !</strong> - Solid <b>info alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="light" className="alert-dismissible alert-solid fade show">
    <strong>Mind Your Step!</strong> - Solid <b>secondary alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="dark" className="alert-dismissible alert-solid fade show mb-0">
    <strong>Did you know?</strong> - Solid <b>dark alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const SolidAlertsExample = () => (
    <PrismCode
        code={solidAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


export { DefaultAlertsExample, BorderlessExample, DismissingExample, LinkColorExample, LiveExample, AdditionalContentCodeExample, OutlineAlertsExample, LeftBorderAlertsExample, ModernAlertsExample, LabelIconAlertsExample, TopBarAlertsExample, LabelIconArrowAlertsExample, RoundedLabelIconAlertsExample, SolidAlertsExample };