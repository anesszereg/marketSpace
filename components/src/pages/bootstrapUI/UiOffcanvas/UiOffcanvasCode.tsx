import PrismCode from "Common/Prisam";

// Default Offcanvas

const defaultOffcanvasCode =
`
<!-- Base Examples -->
const [show, setShow] = useState(false);
const [isTop, setIsTop] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

<div className="hstack flex-wrap gap-2">
    <Link to="#" className="btn btn-secondary" onClick={handleShow}>
        Link with href
    </Link>
    <Button variant="secondary" onClick={handleShow}>
        Button with data-bs-target
    </Button>
</div>

<Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasExampleLabel">Recent Acitivity</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>
`;

const DefaultOffcanvasExample = () => (
    <PrismCode
        code={defaultOffcanvasCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Placement Offcanvas
const placementOffcanvasCode =
    `
<!-- Placement Offcanvas -->

const [isTop, setIsTop] = useState(false);
const toggleTopCanvas = () => {
    setIsTop(!isTop);
};

const [isRight, setIsRight] = useState(false);
const toggleRightCanvas = () => {
    setIsRight(!isRight);
};

const [isBottom, setIsBottom] = useState(false);
const toggleBottomCanvas = () => {
    setIsBottom(!isBottom);
};

const [isLeft, setIsLeft] = useState(false);
const toggleLeftCanvas = () => {
    setIsLeft(!isLeft);
};

<div className="d-flex flex-wrap gap-2">
    <Button onClick={toggleTopCanvas} variant="primary">Toggle Top Offcanvas</Button>
    <Button onClick={toggleRightCanvas} variant="secondary">Toggle Right Offcanvas</Button>
    <Button onClick={toggleBottomCanvas} variant="success">Toggle Bottom Offcanvas</Button>
    <Button onClick={toggleLeftCanvas} variant="danger">Toggle Left Offcanvas</Button>
</div>

<!-- top offcanvas -->
<Offcanvas show={isTop} onHide={toggleTopCanvas} placement='top' style={{minHeight: "46vh"}}>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasTopLabel">Gallery</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>

<!-- right offcanvas -->
<Offcanvas show={isRight} onHide={toggleRightCanvas} placement='end'>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasRightLabel">Recent Acitivity</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>


<!-- bottom offcanvas -->
<Offcanvas show={isBottom} onHide={toggleBottomCanvas} placement='bottom' style={{minHeight: "46vh"}}>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasBottomLabel">Gallery</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>

<!-- left offcanvas -->
<Offcanvas show={isLeft} onHide={toggleLeftCanvas} placement='start'>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasLeftLabel">Recent Acitivity</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>
`;

const PlacementOffcanvasExample = () => (
    <PrismCode
        code={placementOffcanvasCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Backdrop Offcanvas

const backdropOffcanvasCode =
    `
<!-- Backdrop Offcanvas -->

const [isEnableScroll, setIsEnableScroll] = useState(false);
const toggleEnableScroll = () => {
    setIsEnableScroll(!isEnableScroll);
    setIsBackdrop(false);
};

const [isBackdrop, setIsBackdrop] = useState(false);
const toggleBackdrop = () => {
    setIsBackdrop(!isBackdrop);
    setIsEnableScroll(false);
};

const [isScrollBackDrop, setIsScrollBackDrop] = useState(false);
const toggleScrollBackDrop = () => {
    setIsScrollBackDrop(!isScrollBackDrop);
};

<div className="d-flex flex-wrap gap-2">
    <Button onClick={toggleEnableScroll} variant="light">Enable Body Scrolling</Button>
    <Button onClick={toggleBackdrop} variant="light">Enable Backdrop (Default)</Button>
    <Button onClick={toggleScrollBackDrop} variant="light">Enable Both Scrolling & Backdrop</Button>
</div>    

<Offcanvas show={isEnableScroll} onHide={toggleEnableScroll} scroll={true} backdrop={false}>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasScrollingLabel">Customer Activity</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>

<Offcanvas show={isBackdrop} onHide={toggleBackdrop} scroll={false} backdrop={true}>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasWithBackdropLabel">Customer Activity</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>

<Offcanvas show={isScrollBackDrop} onHide={toggleScrollBackDrop} scroll={true} backdrop={true}>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasWithBothOptionsLabel">Customer Activity</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>
`;

const BackdropOffcanvasExample = () => (
    <PrismCode
        code={backdropOffcanvasCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export { DefaultOffcanvasExample, PlacementOffcanvasExample, BackdropOffcanvasExample };