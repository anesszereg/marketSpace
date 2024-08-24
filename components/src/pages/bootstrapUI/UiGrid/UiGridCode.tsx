import PrismCode from "Common/Prisam";

// Vertical alignment (align-items-start)

const verticalStartCode =
    `
<!-- Vertical alignment (align-items-start) -->
<Row className="align-items-start" style={{minHeight: "6rem"}}>
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
</Row>
</Row>
`;

const VerticalStartExample = () => (
    <PrismCode
        code={verticalStartCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Vertical alignment (align-items-center)

const verticalCenterCode =
    `
<!-- Vertical alignment (align-items-center) -->
<Row className="align-items-center" style={{minHeight: "6rem"}}>
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
</Row>
`;

const VerticalCenterExample = () => (
    <PrismCode
        code={verticalCenterCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Vertical alignment (align-items-end)

const verticalEndCode =
    `
<!-- Vertical alignment (align-items-end) -->
<Row className="align-items-end" style={{minHeight: "6rem"}}>
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
</Row>
`;

const VerticalEndExample = () => (
    <PrismCode
        code={verticalEndCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Align Self

const alignSelfCode =
    `
<!-- Align Self -->
<Row className="g-2" style={{minHeight: "9rem"}}>
    <Col sm={4} className="align-self-start">
        ...
    </Col>
    <Col sm={4} className="align-self-center">
        ...
    </Col>
    <Col sm={4} className="align-self-end">
        ...
    </Col>
</Row>
`;

const AlignSelfExample = () => (
    <PrismCode
        code={alignSelfCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Horizontal Alignment

const horizontalAlignCode =
    `
<!-- Horizontal Alignment -->
<Row className="justify-content-start">
<Col sm={4}>
    ...
</Col>
</Row>
<Row className="justify-content-center">
<Col sm={4}>
    ...
</Col>
</Row>
<Row className="justify-content-end">
<Col sm={4}>
    ...
</Col>
</Row>
`;

const HorizontalAlignExample = () => (
    <PrismCode
        code={horizontalAlignCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


export { VerticalStartExample, VerticalCenterExample, VerticalEndExample, AlignSelfExample, HorizontalAlignExample };