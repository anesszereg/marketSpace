import PrismCode from "Common/Prisam";

// Stacks - Vertical

const stacksVerticalCode =
    `
<!-- Stacks - Vertical -->
<div className="vstack gap-3">
    <div className="bg-light border p-1 px-2">First item</div>
    <div className="bg-light border p-1 px-2">Second item</div>
    <div className="bg-light border p-1 px-2">Third item</div>
</div>

<div className="mt-5">
    <h5 className="fs-14 mb-3">Vertical Stacks Examples</h5>
    <div className="vstack gap-2 col-md-5 mx-auto">
        <Button variant="primary">Save changes</Button>
        <Button variant="outline-secondary">Cancel</Button>
    </div>
</div>
`;

const StacksVerticalExample = () => (
    <PrismCode
        code={stacksVerticalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Stacks - Horizontal

const stacksHorizontalCode =
`
<!-- Stacks - Horizontal -->
<div className="hstack gap-3">
    <div className="bg-light border p-1 px-2">First item</div>
    <div className="bg-light border p-1 px-2">Second item</div>
    <div className="bg-light border p-1 px-2">Third item</div>
</div>
<div className="mt-4">
    <p className="text-muted mb-3">Using horizontal margin utilities like <code>ms-auto</code> as spacers:</p>

    <div className="hstack gap-3">
        <div className="bg-light border p-1 px-2">First item</div>
        <div className="bg-light border p-1 px-2 ms-auto">Second item</div>
        <div className="bg-light border p-1 px-2">Third item</div>
    </div>
    <div className="hstack gap-3 mt-3">
        <div className="bg-light border p-1 px-2">First item</div>
        <div className="vr"></div>
        <div className="bg-light border p-1 px-2">Second item</div>

        <div className="bg-light border p-1 px-2 ms-auto">Third item</div>
    </div>
</div>

<div className="mt-5">
    <h5 className="fs-13 mb-3">Horizontal Stacks Examples</h5>
    <div className="hstack gap-3">
        <input className="form-control me-auto" type="text" placeholder="Add your item here..." />
        <Button variant="primary">Submit</Button>
        <div className="vr"></div>
        <Button variant="outline-secondary">Reset</Button>
    </div>
</div>
`;

const StacksHorizontalExample = () => (
    <PrismCode
        code={stacksHorizontalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// ObjectFit
const objectFitCode =
`
<!-- Object Fit -->
<img src="../assets/images/small/img-3.jpg" alt="" height="230" width="200" className="rounded object-fit-cover">

<img src="../assets/images/small/img-3.jpg" alt="" height="230" width="200" className="rounded object-fit-contain">

<img src="../assets/images/small/img-3.jpg" alt="" height="230" width="200" className="rounded object-fit-fill">

<img src="../assets/images/small/img-3.jpg" alt="" height="230" width="200" className="rounded object-fit-scale">

<img src="../assets/images/small/img-3.jpg" alt="" height="230" width="200" className="rounded object-fit-none">

`;

const ObjectFitExample = () => (
    <PrismCode
        code={objectFitCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Z-index
const zindexCode =
`
<!-- z-index -->
<img src="../assets/images/users/avatar-1.jpg" alt=""; class="avatar-xxl rounded position-relative z-n1">

<img src="../assets/images/users/avatar-2.jpg" alt=""; class="avatar-xxl rounded position-relative z-0 ms-n5 mt-5">

<img src="../assets/images/users/avatar-3.jpg" alt=""; class="avatar-xxl rounded position-relative z-1 ms-n5">

<img src="../assets/images/users/avatar-4.jpg" alt=""; class="avatar-xxl rounded position-relative z-2 ms-n5 mt-5">

<img src="../assets/images/users/avatar-5.jpg" alt=""; class="avatar-xxl rounded position-relative z-3 ms-n5">
`;

const ZindexExample = () => (
    <PrismCode
        code={zindexCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Text Selection

const textSelectionCode =
    `
<!-- Text Selection -->
<p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>

<p className="user-select-auto">This paragraph has default select behavior.</p>

<p className="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.</p>
`;

const TextSelectionExample = () => (
    <PrismCode
        code={textSelectionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Pointer Events

const pointerEventsCode =
`
<!-- Pointer events -->
<p><Link href="#" className="text-success pe-none" tabIndex={-1}>This link</Link> can not be clicked.</p>

<p><Link href="#" className="text-success pe-auto">This link</Link> can be clicked (this is default behavior).</p>

<p className="pe-none mb-0"><Link href="#" className="text-success" tabIndex={-1}>This link</Link> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <Link href="#" className="pe-auto">this link</Link> has a <code>pe-auto</code> class and can be clicked.</p>
`;

const PointerEventsExample = () => (
    <PrismCode
        code={pointerEventsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Overflow

const overflowCode =
    `
<!-- Overflow -->
    <div className="overflow-auto p-3 mb-0 bg-light" style={{height: "100px"}}>
        This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
    </div>
    
    <div className="overflow-hidden p-3 mb-0 bg-light" style={{height: "100px"}}>
        This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    
    <div className="overflow-visible p-3 mb-0 bg-light" style={{height: "100px"}}>
        This is an example of using <code>.overflow-visible</code> on an element with set width and height dimensions.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>

    <div className="overflow-scroll p-3 mb-0 bg-light" style={{height: "100px"}}>
        This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
`;

const OverflowExample = () => (
    <PrismCode
        code={overflowCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Position

const positionCode =
    `
<!-- Arrange elements -->
<div className="position-relative p-5 bg-light m-3 border rounded" style={{height: "180px"}}>
    <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-50 start-50 avatar-xs bg-dark rounded"></div>
    <div className="position-absolute bottom-50 end-50 avatar-xs bg-dark rounded"></div>
    <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
    <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
</div>

<!-- Center elements -->
<div className="position-relative m-3 bg-light border rounded" style={{height: "180px"}}>
    <div className="position-absolute top-0 start-0 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-0 start-50 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-0 start-100 translate-middle avatar-xs bg-dark rounded"></div>

    <div className="position-absolute top-50 start-0 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-50 start-100 translate-middle avatar-xs bg-dark rounded"></div>

    <div className="position-absolute top-100 start-0 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-100 start-50 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-100 start-100 translate-middle avatar-xs bg-dark rounded"></div>
</div>

<!-- Center elements -->
<div className="position-relative m-3 bg-light border rounded" style={{height: "180px"}}>
    <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded "></div>
    <div className="position-absolute top-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded"></div>

    <div className="position-absolute top-50 start-0 translate-middle-y avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-50 end-0 translate-middle-y avatar-xs bg-dark rounded"></div>

    <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
    <div className="position-absolute bottom-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
    <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
</div>
`;

const PositionExample = () => (
    <PrismCode
        code={positionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Shadows

const shadowsCode =
    `
<!-- Shadows -->
<div className="shadow-none p-3 bg-light rounded">No shadow</div>

<div className="shadow-sm p-3 bg-light rounded">Small shadow</div>

<div className="shadow p-3 bg-light rounded">Regular shadow</div>

<div className="shadow-lg p-3 bg-light rounded">Larger shadow</div>
`;

const ShadowsExample = () => (
    <PrismCode
        code={shadowsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Width

const widthCode =
`
<!-- Width -->
<div className="w-25 p-3 bg-light">Width 25%</div>

<div className="w-50 p-3 bg-light">Width 50%</div>

<div className="w-75 p-3 bg-light">Width 75%</div>

<div className="w-100 p-3 bg-light">Width 100%</div>

<div className="w-auto p-3 bg-light">Width auto</div>
`;

const WidthExample = () => (
    <PrismCode
        code={widthCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Height

const heightCode =
    `
<!-- Height -->
<div className="h-25 p-3 bg-light">Height25%</div>

<div className="h-50 p-3 bg-light">Height50%</div>

<div className="h-75 p-3 bg-light">Height75%</div>

<div className="h-100 p-3 bg-light">Height100%</div>

<div className="h-auto p-3 bg-light">Height auto</div>
`;

const HeightExample = () => (
    <PrismCode
        code={heightCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export { StacksVerticalExample, StacksHorizontalExample, ObjectFitExample, ZindexExample, TextSelectionExample, PointerEventsExample, OverflowExample, PositionExample, ShadowsExample, WidthExample, HeightExample };