import PrismCode from "Common/Prisam";

// Bootstrap Toasts

const bootstrapToastsCode =
`<!-- Default Toast --> 
const [toast1, setToast1] = useState(true);
const togglesetToast1 = () => setToast1(!setToast1);

<Toast className="fade" show={toast1} onClose={togglesetToast1}>
    <Toast.Header>
        <Image src={logosm} className="rounded me-2" alt="..." height="20" />
        <span className="fw-semibold me-auto">Toner</span>
        <small>06 mins ago</small>
    </Toast.Header>
    <Toast.Body>
        Hello, world! This is a toast message.
    </Toast.Body>
</Toast>

<!-- Translucent Toast --> 
const [toast2, setToast2] = useState(true);
const togglesetToast2 = () => setToast2(!setToast2);

<Toast className="fade" show={toast2} onClose={togglesetToast2}>
    <Toast.Header>
        <Image src={logosm} className="rounded me-2" alt="..." height="20" />
        <span className="fw-semibold me-auto">Toner</span>
        <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body>
        Hello, world! This is a toast message.
    </Toast.Body>
</Toast>

<!-- Stacking Toast --> 
const [toast3, setToast3] = useState(true);
const [toast3, setToast4] = useState(true);

const togglesetToast3 = () => setToast3(!setToast3);
const togglesetToast4 = () => setToast4(!setToast4);

<Toast className="fade" show={toast3} onClose={togglesetToast3}>
    <Toast.Header>
        <Image src={logosm} className="rounded me-2" alt="..." height="20" />
        <span className="fw-semibold me-auto">Toner</span>
        <small>Just now</small>
    </Toast.Header>
    <Toast.Body>
        See? Just like this.
    </Toast.Body>
</Toast>

<Toast className="fade" show={toast4} onClose={togglesetToast4}>
    <Toast.Header>
        <Image src={logosm} className="rounded me-2" alt="..." height="20" />
        <span className="fw-semibold me-auto">Toner</span>
        <small>2 seconds ago</small>
    </Toast.Header>
    <Toast.Body>
        Heads up, toasts will stack automatically
    </Toast.Body>
</Toast>

<!-- Placement Toast --> 
const [toast5, setToast5] = useState(true);
const togglesetToast5 = () => setToast4(!setToast4);

<Toast className="fade" show={toast5} onClose={togglesetToast5} style={{position: "absolute", top: "16px", right: "16px"}}>
    <Toast.Header>
        <Image src={logosm} className="rounded me-2" alt="..." height="20" />
        <span className="fw-semibold me-auto">Toner</span>
        <small>06 mins ago</small>
    </Toast.Header>
    <Toast.Body>
        Hello, world! This is a toast message.
    </Toast.Body>
</Toast>

 <!-- Flexbox container for aligning the toasts -->
const [toast6, setToast6] = useState(true);
const togglesetToast6 = () => setToast5(!setToast6);

<div aria-live="polite" aria-atomic="true" className="bg-light d-flex justify-content-center align-items-center" style={{height: "200px"}}>
    <Toast className="fade" show={toast6} onClose={togglesetToast6}>
        <Toast.Header>
            <Image src={logosm} className="rounded me-2" alt="..." height="20" />
            <span className="fw-semibold me-auto">Toner</span>
            <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>
            Hello, world! This is a toast message.
        </Toast.Body>
    </Toast>
</div>
`;

const BootstrapToastsExample = () => (
    <PrismCode
        code={bootstrapToastsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Toast Placement
const toastPlacementCode =
    `
<!-- Toast Placement -->

const [toast11, setToast11] = useState(true);
const [position, setPosition] = useState<any>();

<Form>
    <div className="mb-3">
        <select className="form-select mt-2" onChange={(e) => setPosition(e.currentTarget.value)}>
            <option value="">Select a position...</option>
            <option value="top-0 start-0">Top left</option>
            <option value="top-0 start-50 translate-middle-x">Top center</option>
            <option value="top-0 end-0">Top right</option>
            <option value="top-50 start-0 translate-middle-y">Middle left</option>
            <option value="top-50 start-50 translate-middle">Middle center</option>
            <option value="top-50 end-0 translate-middle-y">Middle right</option>
            <option value="bottom-0 start-0">Bottom left</option>
            <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
            <option value="bottom-0 end-0">Bottom right</option>
        </select>
    </div>
</Form>
<div aria-live="polite" aria-atomic="true" className="bd-example bg-light position-relative" style={{height: "300px"}}>
    <div className={"toast-container position-absolute p-3 " + position} id="toastPlacement">
        <Toast show={toast11} onClose={() => setToast11(!toast11)}>
            <Toast.Header>
                <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                <strong className="me-auto">Toner</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <div className="toast-body">
                Hello, world! This is a toast message.
            </div>
        </Toast>
    </div>
</div>
`;

const ToastPlacementExample = () => (
    <PrismCode
        code={toastPlacementCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Bordered with Icon Toast
const borderIconCode =
    `
<!-- Bordered With Icon Toast -->
<div className="hstack flex-wrap gap-2">
    <Button variant="primary" onClick={() => setToast7(!toast7)}  id="borderedToast1Btn">Primary Toast</Button>
    <Button variant="success" onClick={() => setToast8(!toast8)}  id="borderedToast2Btn">Success Toast</Button>
    <Button variant="warning" onClick={() => setToast9(!toast9)}  id="borderedTost3Btn">Warning Toast</Button>
    <Button variant="danger" onClick={() => setToast10(!toast10)} id="borderedToast4Btn">Danger Toast</Button>
</div>
    
<div style={{ zIndex: "11" }}>
    <Toast show={toast7} onClose={togglesetToast7} className="toast-border-primary overflow-hidden mt-3">
        <Toast.Body>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                    <i className="ri-user-smile-line align-middle"></i>
                </div>
                <div className="flex-grow-1">
                    <h6 className="mb-0">Your application was successfully sent.</h6>
                </div>
            </div>
        </Toast.Body>
    </Toast>
</div>

<div style={{ zIndex: "11" }}>
    <Toast show={toast8} onClose={togglesetToast8} className="toast-border-success overflow-hidden mt-3">
        <Toast.Body>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                    <i className="ri-checkbox-circle-fill align-middle"></i>
                </div>
                <div className="flex-grow-1">
                    <h6 className="mb-0">Yey! Everything worked!</h6>
                </div>
            </div>
        </Toast.Body>
    </Toast>
</div>

<div style={{ zIndex: "11" }}>
    <Toast show={toast9} onClose={togglesetToast9} className="toast-border-warning overflow-hidden mt-3">
        <Toast.Body>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                    <i className="ri-notification-off-line align-middle"></i>
                </div>
                <div className="flex-grow-1">
                    <h6 className="mb-0">Something went wrong, try again.</h6>
                </div>
            </div>
        </Toast.Body>
    </Toast>
</div>

<div style={{ zIndex: "11" }}>
    <Toast show={toast10} onClose={togglesetToast10} className="toast-border-danger overflow-hidden mt-3">
        <Toast.Body>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                    <i className="ri-alert-line align-middle"></i>
                </div>
                <div className="flex-grow-1">
                    <h6 className="mb-0">Something is very wrong! <a href="#" className="text-decoration-underline">See detailed report.</a></h6>
                </div>
            </div>
        </Toast.Body>
    </Toast>
</div>
`;

const BorderIconExample = () => (
    <PrismCode
        code={borderIconCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export { BootstrapToastsExample, ToastPlacementExample, BorderIconExample };