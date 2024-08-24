import PrismCode from "Common/Prisam";

// Rounded Ribbon
const roundedRibbonCode =
    `
<!-- Rounded Ribbon -->
<Card className="ribbon-box border shadow-none mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-primary round-shape">Primary</div>
        <h5 className="fs-14 text-end">Rounded Ribbon</h5>

        <div className="ribbon-content mt-4 text-muted">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>

<Card className="ribbon-box border shadow-none mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-success round-shape">Success</div>
        <h5 className="fs-14 text-end">Rounded Ribbon</h5>
        <div className="ribbon-content mt-4 text-muted">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>

<!-- Right Ribbon -->
<Card className="ribbon-box border shadow-none right mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-info round-shape">Info</div>
        <h5 className="fs-14 text-start">Rounded Ribbon Right</h5>
        <div className="ribbon-content mt-4 text-muted">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>
`;

const RoundedRibbonExample = () => (
    <PrismCode
        code={roundedRibbonCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Ribbon Shape

const ribbonShapeCode =
    `
<!-- Ribbon Shape -->
<Card className="ribbon-box border shadow-none mb-lg-0">
    <Card.Body>
        <div className="d-flex">
            <div className="ribbon ribbon-primary vertical-shape">Primary</div>
            <div className="flex-grow-1">
                <div className="ribbon-content text-muted ms-5">
                    <h5 className="fs-14 text-end">Rounded Ribbon</h5>
                    <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                        mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                </div>
            </div>
        </div>
    </Card.Body>
</Card>

<Card className="ribbon-box border shadow-none mb-lg-0">
    <Card.Body>
        <div className="d-flex">
                 <div className="ribbon ribbon-success vertical-shape">Success</div>
            <div className="flex-grow-1">
                <div className="ribbon-content text-muted ms-5">
                    <h5 className="fs-14 text-end">Rounded Ribbon</h5>
                    <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                        mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                </div>
            </div>
        </div>
    </Card.Body>
</Card>

<Card className="ribbon-box border shadow-none right mb-lg-0">
    <Card.Body>
        <div className="d-flex">
            <div className="ribbon ribbon-info vertical-shape">Info</div>
            <div className="flex-grow-1">
                <div className="ribbon-content text-muted me-5">
                    <h5 className="fs-14 text-start">Rounded Ribbon Right</h5>
                    <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                        mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                </div>
            </div>
        </div>
    </Card.Body>
</Card>
`;

const RibbonShapeExample = () => (
    <PrismCode
        code={ribbonShapeCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Filled Ribbons

const filledRibbonsCode =
    `
<!-- Filled Ribbons -->
<Card className="ribbon-box border ribbon-fill shadow-none mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-primary">New</div>
        <h5 className="fs-14 text-end">Fill Ribbon</h5>
        <div className="ribbon-content mt-3 text-muted">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>

<Card className="ribbon-box border ribbon-fill shadow-none mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-success">Sale</div>
        <h5 className="fs-14 text-end">Fill Ribbon</h5>
        <div className="ribbon-content mt-3 text-muted">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>

<!-- Right Ribbon -->
<Card className="ribbon-box border ribbon-fill shadow-none right mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-info">New</div>
        <h5 className="fs-14 text-start">Fill Ribbon Right</h5>
        <div className="ribbon-content mt-3 text-muted">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>
`;

const FilledRibbonsExample = () => (
    <PrismCode
        code={filledRibbonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Ribbons

const ribbonsCode =
    `
<!-- Ribbons -->
<Card className="ribbon-box border shadow-none mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-primary ribbon-shape">Primary</div>
        <h5 className="fs-14 text-end">Ribbon Shape</h5>
        <div className="ribbon-content text-muted mt-4">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>

<Card className="ribbon-box border shadow-none mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-success ribbon-shape">Success</div>
        <h5 className="fs-14 text-end">Ribbon Shape</h5>
        <div className="ribbon-content text-muted mt-4">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>

<Card className="ribbon-box border shadow-none mb-lg-0 right">
    <Card.Body>
        <div className="ribbon ribbon-info ribbon-shape">Info</div>
        <h5 className="fs-14 text-start">Ribbon Shape Right</h5>
        <div className="ribbon-content text-muted mt-4">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>
`;

const RibbonsExample = () => (
    <PrismCode
        code={ribbonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Ribbons Hover

const ribbonsHoverCode =
    `
<!-- Ribbons Hover -->
<Card className="ribbon-box border shadow-none overflow-hidden mb-lg-0">
    <Card.Body className="text-muted">
        <div className="ribbon ribbon-info ribbon-shape trending-ribbon">
            <span className="trending-ribbon-text">Trending</span> <i className="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
        </div>
        <h5 className="fs-14 text-end mb-3">Ribbon Shape</h5>
        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </Card.Body>
</Card>

<Card className="ribbon-box border shadow-none overflow-hidden mb-lg-0">
    <Card.Body className="text-muted">
        <div className="ribbon ribbon-info ribbon-shape trending-ribbon">
            <span className="trending-ribbon-text">Trending</span> <i className="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
        </div>
        <h5 className="fs-14 text-end mb-3">Ribbon Shape</h5>
        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </Card.Body>
</Card>

<Card className="ribbon-box right border shadow-none overflow-hidden mb-lg-0">
    <Card.Body className="text-muted">
        <div className="ribbon ribbon-info ribbon-shape trending-ribbon">
            <i className="ri-flashlight-fill text-white align-bottom float-start me-1"></i> <span className="trending-ribbon-text">Trending</span>
        </div>
        <h5 className="fs-14 mb-3">Ribbon Right Shape</h5>
        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </Card.Body>
</Card>
`;

const RibbonsHoverExample = () => (
    <PrismCode
        code={ribbonsHoverCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export { RoundedRibbonExample, RibbonShapeExample, FilledRibbonsExample,  RibbonsExample, RibbonsHoverExample };