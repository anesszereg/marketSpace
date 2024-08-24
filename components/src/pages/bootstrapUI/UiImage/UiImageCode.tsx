import PrismCode from "Common/Prisam";

// Image Rounded & Circle

const imgRoundedCircleCode =
    `
<!-- Rounded Image -->
<Image className="rounded" alt="200x200" width="200" src={img4} data-holder-rendered="true" />

<!-- Rounded-circle Image -->
<img className="rounded-circle avatar-xl" alt="200x200" src={avatar4} />
`;

const ImgRoundedCircleExample = () => (
    <PrismCode
        code={imgRoundedCircleCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Image Thumbnails

const imgThumbnailsCode =
    `
<!-- Thumbnails Images -->
<Image className="img-thumbnail" alt="200x200" width="200" src={img3} data-holder-rendered="true" />

<Image className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} data-holder-rendered="true" />
`;

const ImgThumbnailsExample = () => (
    <PrismCode
        code={imgThumbnailsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Image Sizes

const imgSizesCode =
    `
<!-- Image Sizes -->
<Image src={avatar2} alt="" className="rounded avatar-xxs" />

<Image src={avatar10} alt="" className="rounded avatar-xs" />

<Image src={avatar3} alt="" className="rounded avatar-sm" />

<Image src={avatar4} alt="" className="rounded avatar-md" />

<Image src={avatar5} alt="" className="rounded avatar-lg" />

<Image src={avatar8} alt="" className="rounded avatar-xl" />

<Image src={avatar2} alt="" className="rounded-circle avatar-xxs" />

<Image src={avatar10} alt="" className="rounded-circle avatar-xs" />

<Image src={avatar3} alt="" className="rounded-circle avatar-sm" />

<Image src={avatar4} alt="" className="rounded-circle avatar-md" />

<Image src={avatar5} alt="" className="rounded-circle avatar-lg" />

<Image src={avatar8} alt="" className="rounded-circle avatar-xl" />
`;

const ImgSizesExample = () => (
    <PrismCode
        code={imgSizesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Avatar With Content

const avatarCode =
    `
<!-- Avatar With Content -->
    <div className="avatar-xxs mt-3">
        <div className="avatar-title rounded bg-soft-primary text-primary fs-10">
            XXS
        </div>
    </div>

    <div className="avatar-xs mt-3">
        <div className="avatar-title rounded bg-soft-secondary text-secondary">
            XS
        </div>
    </div>
    
    <div className="avatar-sm mt-3">
        <div className="avatar-title rounded bg-soft-success text-success fs-14">
            SM
        </div>
    </div>
    
    <div className="avatar-md mt-3">
        <div className="avatar-title rounded bg-soft-info text-info fs-16">
            MD
        </div>
    </div>
    
    <div className="avatar-lg mt-3">
        <div className="avatar-title rounded bg-soft-warning text-warning fs-20">
            LG
        </div>
    </div>
    
    <div className="avatar-xl mt-3">
        <div className="avatar-title rounded bg-soft-danger text-danger fs-22">
            XL
        </div>
    </div>
`;

const AvatarExample = () => (
    <PrismCode
        code={avatarCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Avatar Group

const avatarGroupCode =
    `
<!-- Simple Group -->
<div className="avatar-group">
    <div className="avatar-group-item">
        <Image src={avatar4} alt="" className="rounded-circle avatar-sm" />
    </div>
    <div className="avatar-group-item">
        <Image src={avatar5} alt="" className="rounded-circle avatar-sm" />
    </div>
    <div className="avatar-group-item">
        <div className="avatar-sm">
            <div className="avatar-title rounded-circle bg-light text-primary">
                A
            </div>
        </div>
    </div>
    <div className="avatar-group-item">
        <Image src={avatar2} alt="" className="rounded-circle avatar-sm" />
    </div>
</div>

<!-- Avatar Group with Tooltip -->
<div className="avatar-group">
    <Link href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Christi">
        <Image src={avatar4} alt="" className="rounded-circle avatar-sm" />
    </Link>
    <Link href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Frank Hook">
        <Image src={avatar3} alt="" className="rounded-circle avatar-sm" />
    </Link>
    <Link href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Christi">
        <div className="avatar-sm">
            <div className="avatar-title rounded-circle bg-light text-primary">
                C
            </div>
        </div>
    </Link>
    <Link href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="mORE">
        <div className="avatar-sm">
            <div className="avatar-title rounded-circle">
                2+
            </div>
        </div>
    </Link>
</div>
`;

const AvatarGroupExample = () => (
    <PrismCode
        code={avatarGroupCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Figures

const figuresCode =
    `
<!-- figures Images -->
<figure className="figure mb-0">
    <Image src={img4} className="figure-img img-fluid rounded" alt="..." />
    <figcaption className="figure-caption">A caption for the above image.</figcaption>
</figure>

<figure className="figure mb-0">
    <Image src={img5} className="figure-img img-fluid rounded" alt="..." />
    <figcaption className="figure-caption text-end">A caption for the above image.</figcaption>
</figure>
`;

const FiguresExample = () => (
    <PrismCode
        code={figuresCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Responsive Images

const responsiveCode =
    `
<!-- Responsive Images -->
<Image src={img2} className="img-fluid" alt="Responsive image" />
`;

const ResponsiveExample = () => (
    <PrismCode
        code={responsiveCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export { ImgRoundedCircleExample, ImgThumbnailsExample, ImgSizesExample, AvatarExample, AvatarGroupExample, FiguresExample, ResponsiveExample };