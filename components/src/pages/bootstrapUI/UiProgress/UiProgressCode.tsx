import PrismCode from "Common/Prisam";

// Default Progress

const defaultProgressCode =
    `
<div>
    <div className="mb-4">
        <ProgressBar now={0} />
    </div>
    <div className="mb-4">
        <ProgressBar now={25} />
    </div>
    <div className="mb-4">
        <ProgressBar now={50} />
    </div>
    <div className="mb-4">
        <ProgressBar now={75} />
    </div>
    <div>
        <ProgressBar now={100} />
    </div>
</div>`;

const DefaultProgressExample = () => (
    <PrismCode
        code={defaultProgressCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Progress with background color

const backgroundColorCode =
    `
<!-- Backgrounds -->
<div>
    <div className="mb-4">
        <ProgressBar variant='primary' now={15} />
    </div>
    <div className="mb-4">
        <ProgressBar variant='success' now={25} />
    </div>
    <div className="mb-4">
        <ProgressBar variant='info' now={50} />
    </div>
    <div className="mb-4">
        <ProgressBar variant='warning' now={75} />
    </div>
    <div>
        <ProgressBar variant='danger' now={100} />
    </div>
</div>`;

const BackgroundColorExample = () => (
    <PrismCode
        code={backgroundColorCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Progress with Label

const labelCode =
    `
<!-- Labels Example -->
<ProgressBar now={25} label={${25}%} />
`;

const LabelExample = () => (
    <PrismCode
        code={labelCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Multiple Bars
const multipleBarsCode =
    `
<!-- Multiple Bars -->
<ProgressBar>
    <ProgressBar now={15} key={1} />
    <ProgressBar variant="success" now={30} key={2} />
    <ProgressBar variant="info" now={20} key={3} />
</ProgressBar>
`;

const MultipleBarsExample = () => (
    <PrismCode
        code={multipleBarsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Height
const heightCode =
    `
<!-- Prgress sm -->
<div className="mb-4">
    <h5 className="fs-13">Small Progress</h5>
    <ProgressBar now={25} className="progress-sm" />
</div>

<!-- Prgress Default -->
<div className="mb-4">
    <h5 className="fs-13">Default Progress </h5>
    <ProgressBar variant='success' now={40} />
</div>

<!-- Prgress lg -->
<div className="mb-4">
    <h5 className="fs-13">Large Progress</h5>
    <ProgressBar variant='warning' now={25} className="progress-lg" />
</div>

<!-- Prgress xl -->
<div>
    <h5 className="fs-13">Extra Large Progress</h5>
    <ProgressBar variant='danger' now={25} className="progress-xl" />
</div>
`;

const HeightExample = () => (
    <PrismCode
        code={heightCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Striped Progress
const stripedCode =
    `
<!-- Striped Prgress -->
<div className="mb-4">
    <ProgressBar striped now={25} />
</div>
<div>
    <ProgressBar variant='success' striped now={40} />
</div>
`;

const StripedExample = () => (
    <PrismCode
        code={stripedCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Animated Striped Progress
const animatedStripedCode =
    `
<!-- Animated Striped Progress -->
<div>
    <ProgressBar striped animated now={75} />
</div>
`;

const AnimatedStripedExample = () => (
    <PrismCode
        code={animatedStripedCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Gradient Progress
const gradientCode =
    `
<!-- Gradient -->
<div className="mb-4">
    <ProgressBar now={15}/>
</div>
<div className="mb-4">
    <ProgressBar variant='success' now={25}/>
</div>
<div className="mb-4">
    <ProgressBar variant='info' now={50}/>
</div>
<div className="mb-4">
    <ProgressBar variant='warning' now={75}/>
</div>
<div>
    <ProgressBar variant='danger' now={100}/>
</div>
`;

const GradientExample = () => (
    <PrismCode
        code={gradientCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Animated Progress
const animatedCode =
    `
<!-- Animated Progress -->
<div className="mb-4">
    <ProgressBar animated now={15}/>
</div>
<div className="mb-4">
    <ProgressBar animated variant='success' now={25}/>
</div>
<div className="mb-4">
    <ProgressBar animated variant='info' now={50}/>
</div>
<div className="mb-4">
    <ProgressBar animated variant='warning' now={75}/>
</div>
<div>
    <ProgressBar animated variant='danger' now={100}/>
</div>
`;

const AnimatedExample = () => (
    <PrismCode
        code={animatedCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Custom Progress
const customCode =
    `
<!-- Custom Progress -->
<div className="mb-4">
    <ProgressBar now={15} className="custom-progress" />
</div>
<div className="mb-4">
    <ProgressBar now={25} variant='success' className='custom-progress' />
</div>
<div className="custom-progress mb-4">
    <ProgressBar now={50} variant='info' className='custom-progress' />
</div>
<div className="mb-4">
    <ProgressBar now={75} variant='warning' className='custom-progress' />
</div>
<div>
    <ProgressBar now={100} variant='danger' className='custom-progress' />
</div>
`;

const CustomExample = () => (
    <PrismCode
        code={customCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Custom Progress with Label
const customProgressCode =
    `
<!-- Custom Progress with Label -->
<div className="d-flex align-items-center pb-2 mt-4">
    <div className="flex-shrink-0 me-3">
        <div className="avatar-xs">
            <div className="avatar-title bg-light rounded-circle text-muted fs-16">
                <i className="mdi mdi-facebook"></i>
            </div>
        </div>
    </div>
    <div className="flex-grow-1">
        <div>
            <Progress value={15} color="primary" className="animated-progess custom-progress progress-label" ><div className="label">15%</div> </Progress>
        </div>
    </div>
</div>

<div className="d-flex align-items-center py-2">
    <div className="flex-shrink-0 me-3">
        <div className="avatar-xs">
            <div className="avatar-title bg-light rounded-circle text-muted fs-16">
                <i className="mdi mdi-twitter"></i>
            </div>
        </div>
    </div>
    <div className="flex-grow-1">
        <div>
            <Progress value={25} color="success" className="animated-progess custom-progress progress-label" ><div className="label">25%</div> </Progress>
        </div>
    </div>
</div>

<div className="d-flex align-items-center py-2">
    <div className="flex-shrink-0 me-3">
        <div className="avatar-xs">
            <div className="avatar-title bg-light rounded-circle text-muted fs-16">
                <i className="mdi mdi-github"></i>
            </div>
        </div>
    </div>
    <div className="flex-grow-1">
        <div>
            <Progress value={50} color="info" className="animated-progess custom-progress progress-label" ><div className="label">30%</div> </Progress>
        </div>
    </div>
</div>
`;

const CustomProgressExample = () => (
    <PrismCode
        code={customProgressCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Content Progress
const contentCode =
    `
<!-- Content Progress -->
<Card className="bg-light overflow-hidden shadow-none">
    <CardBody>
        <div className="d-flex">
            <div className="flex-grow-1">
                <h6 className="mb-0"><b className="text-secondary">30%</b> Update in
                    progress...</h6>
            </div>
            <div className="flex-shrink-0">
                <h6 className="mb-0">1 min left</h6>
            </div>
        </div>
    </CardBody>
    <div >
        <Progress value={30} color="info" className="bg-soft-info rounded-0" />
    </div>
</Card>

<Card className="bg-light overflow-hidden shadow-none">
    <CardBody>
        <div className="d-flex">
            <div className="flex-grow-1">
                <h6 className="mb-0"><b className="text-success">60%</b> Update in
                    progress...</h6>
            </div>
            <div className="flex-shrink-0">
                <h6 className="mb-0">45s left</h6>
            </div>
        </div>
    </CardBody>
    <div>
        <Progress value={60} color="success" className="bg-soft-success rounded-0" />
    </div>
</Card>

<Card className="bg-light overflow-hidden shadow-none">
    <CardBody>
        <div className="d-flex">
            <div className="flex-grow-1">
                <h6 className="mb-0"><b className="text-danger">82%</b> Update in
                    progress...</h6>
            </div>
            <div className="flex-shrink-0">
                <h6 className="mb-0">25s left</h6>
            </div>
        </div>
    </CardBody>
    <div>
        <Progress value={82} color="danger" className="bg-soft-danger rounded-0" />
    </div>
</Card>
`;



const ContentExample = () => (
    <PrismCode
        code={contentCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Progress with Steps
const progressWithStepCode =
    `
<!-- Progress with Steps -->
<div className="position-relative m-4">
    <Progress value={50} style={{ height: "1px" }} />
    <Button size="sm" color="primary" className="position-absolute top-0 start-0 translate-middle rounded-pill" style={{ width: "2rem", height: "2rem" }}>1</Button>
    <Button size="sm" color="primary" className="position-absolute top-0 start-50 translate-middle rounded-pill" style={{ width: "2rem", height: "2rem" }}>2</Button>
    <Button size="sm" color="light" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ width: "2rem", height: "2rem" }}>3</Button>
</div>
`;

const ProgressWithStepExample = () => (
    <PrismCode
        code={progressWithStepCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Step Progress with Arrow
const stepProgressArrowCode =
    `
<!-- Step Progress with Arrow -->
<ProgressBar className='progress-step-arrow progress-info'>
    <ProgressBar now={100} label={'Step1'} />
    <ProgressBar now={100} label={'Step2'} />
    <ProgressBar now={100} variant='light text-dark' label={'Step3'} />
</ProgressBar>
`;

const StepProgressArrowExample = () => (
    <PrismCode
        code={stepProgressArrowCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Step Progress with Arrow
const contentProgressExmapleCode =
    `
<!-- Content Progress -->
<Card className="bg-light overflow-hidden shadow-none">
    <Card.Body>
        <div className="d-flex">
            <div className="flex-grow-1">
                <h6 className="mb-0"><b className="text-secondary">30%</b> Update in progress...</h6>
            </div>
            <div className="flex-shrink-0">
                <h6 className="mb-0">1 min left</h6>
            </div>
        </div>
    </Card.Body>
    <div className="bg-soft-secondary rounded-0">
        <ProgressBar now={30} variant='secondary' />
    </div>
</Card>

<Card className="bg-light overflow-hidden shadow-none">
    <Card.Body>
        <div className="d-flex">
            <div className="flex-grow-1">
                <h6 className="mb-0"><b className="text-success">60%</b> Update in progress...</h6>
            </div>
            <div className="flex-shrink-0">
                <h6 className="mb-0">45s left</h6>
            </div>
        </div>
    </Card.Body>
    <div className="bg-soft-success rounded-0">
        <ProgressBar now={60} variant='success' />
    </div>
</Card>

<Card className="bg-light overflow-hidden shadow-none">
    <Card.Body>
        <div className="d-flex">
            <div className="flex-grow-1">
                <h6 className="mb-0"><b className="text-danger">82%</b> Update in progress...</h6>
            </div>
            <div className="flex-shrink-0">
                <h6 className="mb-0">25s left</h6>
            </div>
        </div>
    </Card.Body>
    <div className="bg-soft-danger rounded-0">
        <ProgressBar now={82} variant='danger' />
    </div>
</Card>
`;

const ContentProgressExmaple = () => (
    <PrismCode
        code={contentProgressExmapleCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export { DefaultProgressExample, BackgroundColorExample, LabelExample, MultipleBarsExample, HeightExample, StripedExample, AnimatedStripedExample, GradientExample, AnimatedExample, CustomExample, CustomProgressExample, ContentExample, ProgressWithStepExample, StepProgressArrowExample, ContentProgressExmaple }; 