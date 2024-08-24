import PrismCode from "Common/Prisam";

// Popovers
const popoversCode =
`
<!-- Popovers -->
<div className="hstack flex-wrap gap-2">
    <OverlayTrigger trigger="click" placement="top" overlay={<Popover id="popover-positioned-top"> <Popover.Header as="h3">"Popover top"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
        <Button variant="light">Popover on top</Button>
    </OverlayTrigger>

    <OverlayTrigger trigger="click" placement="right" overlay={<Popover id="popover-positioned-right"> <Popover.Header as="h3">"Popover right"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
        <Button variant="light">Popover on right</Button>
    </OverlayTrigger>

    <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover id="popover-positioned-bottom"> <Popover.Header as="h3">"Popover bottom"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
        <Button variant="light">Popover on bottom</Button>
    </OverlayTrigger>

    <OverlayTrigger trigger="click" placement="left" overlay={<Popover id="popover-positioned-left"> <Popover.Header as="h3">"Popover left"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
        <Button variant="light">Popover on left</Button>
    </OverlayTrigger>

    <OverlayTrigger trigger="click" placement="right" overlay={<Popover id="popover-positioned-right"> <Popover.Header as="h3">"Dismissible popover   "</Popover.Header> <Popover.Body> And here's some amazing content. It's very engaging. Right?" </Popover.Body> </Popover>}>
        <Button variant="success">Dismissible popover</Button>
    </OverlayTrigger>
</div>
`;

const PopoversExample = () => (
    <PrismCode
        code={popoversCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Tooltips
const tooltipsCode =
`
<!-- Tooltips -->
<div className="hstack flex-wrap gap-2">
    <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip-top"> Tooltip on Top. </Tooltip>}>
        <Button variant="light">Tooltip on Top</Button>
    </OverlayTrigger>
    <OverlayTrigger placement='right' overlay={<Tooltip id="tooltip-right"> Tooltip on right. </Tooltip>}>
        <Button variant="light">Tooltip on right</Button>
    </OverlayTrigger>
    <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-bottom"> Tooltip on bottom. </Tooltip>}>
        <Button variant="light">Tooltip on bottom</Button>
    </OverlayTrigger>
    <OverlayTrigger placement='left' overlay={<Tooltip id="tooltip-left"> Tooltip on left. </Tooltip>}>
        <Button variant="light">Tooltip on left</Button>
    </OverlayTrigger>
    <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip-top"> <em>Tooltip</em> <u>with</u> <b>HTML</b> </Tooltip>}>
        <Button variant="primary"><em>Tooltip</em> <u>with</u> <b>HTML</b></Button>
    </OverlayTrigger>
</div>
`;

const TooltipsExample = () => (
    <PrismCode
        code={tooltipsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Breadcrumb
const breadcrumbCode =
`
<Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }}>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }} >
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item> Library </Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }}>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#">Base UI</Breadcrumb.Item>
    <Breadcrumb.Item> General </Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }}>
    <Breadcrumb.Item href="#"><i className="ri-home-5-fill" /></Breadcrumb.Item>
    <Breadcrumb.Item href="#">Base UI</Breadcrumb.Item>
    <Breadcrumb.Item> General </Breadcrumb.Item>
</Breadcrumb>
`;

const BreadcrumbExample = () => (
    <PrismCode
        code={breadcrumbCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Pagination
const paginationCode =
`
<Pagination>
    <Pagination.Item>Previous</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next</Pagination.Item>
</Pagination>

<Pagination>
    <Pagination.Item>← Prev</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next →</Pagination.Item>
</Pagination>


<!-- Pagination Disabled & Active -->
<Pagination>
    <Pagination.Item className="disabled">← Prev</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item active>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next →</Pagination.Item>
</Pagination>

<Pagination>
    <Pagination.Item disabled>
        <span><i className="mdi mdi-chevron-left"></i></span>
    </Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item active>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>
        <i className="mdi mdi-chevron-right"></i>
    </Pagination.Item>
</Pagination>


<!-- Pagination sizing -->

<!-- Pagination Large -->
<Pagination className="pagination-lg">
    <Pagination.Item disabled>← Prev</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next →</Pagination.Item>
</Pagination>


<!-- Pagination Small -->
<Pagination className="pagination-sm">
    <Pagination.Item disabled>← Prev</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next →</Pagination.Item>
</Pagination>


<!-- Pagination Alignment -->

<!-- Center Alignment -->
<Pagination className="justify-content-center">
    <Pagination.Item className="disabled">← Prev</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next →</Pagination.Item>
</Pagination>

<!-- Right Alignment -->
<Pagination className="justify-content-end">
    <Pagination.Item className="disabled">← Prev</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next →</Pagination.Item>
</Pagination>


<!-- Pagination Rounded -->
<Pagination className="pagination-lg pagination-rounded">
    <Pagination.Item disabled>←</Pagination.Item>
    <Pagination.Item>1</Pagination.Item>
    <Pagination.Item active>{2}</Pagination.Item>
    <Pagination.Item>3</Pagination.Item>
    <Pagination.Item>4</Pagination.Item>
    <Pagination.Item>5</Pagination.Item>
    <Pagination.Item>→</Pagination.Item>
</Pagination>
`;

const PaginationExample = () => (
    <PrismCode
        code={paginationCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Spinners
const spinnersCode =
    `
<!-- Border spinner -->

<Spinner animation='border' variant="primary"> Loading... </Spinner>

<Spinner animation='border' variant="secondary"> Loading... </Spinner>

<Spinner animation='border' variant="success"> Loading... </Spinner>

<Spinner animation='border' variant="info"> Loading... </Spinner>

<Spinner animation='border' variant="warning"> Loading... </Spinner>

<Spinner animation='border' variant="danger"> Loading... </Spinner>

<Spinner animation='border' variant="dark"> Loading... </Spinner>

<Spinner animation='border' variant="light"> Loading... </Spinner>


<!-- Growing spinner -->

<Spinner animation='grow' variant="primary"> Loading... </Spinner>

<Spinner animation='grow' variant="secondary"> Loading... </Spinner>

<Spinner animation='grow' variant="success"> Loading... </Spinner>

<Spinner animation='grow' variant="info"> Loading... </Spinner>

<Spinner animation='grow' variant="warning"> Loading... </Spinner>

<Spinner animation='grow' variant="danger"> Loading... </Spinner>

<Spinner animation='grow' variant="dark"> Loading... </Spinner>

<Spinner animation='grow' variant="light"> Loading... </Spinner>
`;

const SpinnersExample = () => (
    <PrismCode
        code={spinnersCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export { PopoversExample, TooltipsExample, BreadcrumbExample, PaginationExample, SpinnersExample };