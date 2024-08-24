import PrismCode from "Common/Prisam";

// Default Placeholder

const defaultPlaceholderCode =
`
<!-- Base Examples -->
<Card>
    <Image src={img1} width="341" className="card-img-top" alt="card img" />
    <Card.Body>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link href="#" className="btn btn-primary">Go somewhere</Link>
    </Card.Body>
</Card>

<Card>
    <Image src={img2} width="341" className="card-img-top" alt="card dummy img" />
    <Card.Body>
        <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
        </p>
        <Link href="#" className="btn btn-primary disabled placeholder col-6"></Link>
    </Card.Body>
</Card>
`;

const DefaultPlaceholderExample = () => (
    <PrismCode
        code={defaultPlaceholderCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Width

const widthCode =
    `
<!-- Width Sizing-->
<div>
    <span className="placeholder w-50"></span>
    <span className="placeholder w-75"></span>
    <span className="placeholder w-25"></span>
    <span className="placeholder w-100"></span>
</div>
`;

const WidthExample = () => (
    <PrismCode
        code={widthCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Sizing

const sizingCode =
    `
<!-- Sizing -->
<span className="placeholder placeholder-lg w-100"></span>

<span className="placeholder w-100"></span>

<span className="placeholder placeholder-sm w-100"></span>

<span className="placeholder placeholder-xs w-100"></span>
`;

const SizingExample = () => (
    <PrismCode
        code={sizingCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Color

const colorCode =
`
<!-- Color -->
<span className="placeholder w-100"></span>

<span className="placeholder bg-primary w-100"></span>

<span className="placeholder bg-secondary w-100"></span>

<span className="placeholder bg-success w-100"></span>

<span className="placeholder bg-danger w-100"></span>

<span className="placeholder bg-warning w-100"></span>

<span className="placeholder bg-info w-100"></span>

<span className="placeholder bg-light w-100"></span>

<span className="placeholder bg-dark w-100"></span>
`;

const ColorExample = () => (
    <PrismCode
        code={colorCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export { DefaultPlaceholderExample, WidthExample, SizingExample, ColorExample };