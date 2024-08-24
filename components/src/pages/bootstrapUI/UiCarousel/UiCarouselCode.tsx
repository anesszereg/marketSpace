import PrismCode from "Common/Prisam";

// Slides Only

const SlideCode =
    `
<!-- Slides Only -->
<Carousel controls={false} indicators={false}>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img1}
            alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img2}
            alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img3}
            alt="Third slide"
        />
    </Carousel.Item>
</Carousel>
`;

const SlideCodeExample = () => (
    <PrismCode
        code={SlideCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// With Controls
const withControlCode =
    `
<!-- With Controls -->
<Carousel indicators={false}>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img4}
            alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img5}
            alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img6}
            alt="Third slide"
        />
    </Carousel.Item>
</Carousel>
`;

const WithControlExample = () => (
    <PrismCode
        code={withControlCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// with Indicators
const withIndicatorCode =
`
<!-- With Indicators -->
<Carousel controls={false}>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img3}
            alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img2}
            alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img1}
            alt="Third slide"
        />
    </Carousel.Item>
</Carousel>
`;

const WithIndicatorExample = () => (
    <PrismCode
        code={withIndicatorCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// with Captions
const withCaptionCode =
 `
<!-- With Captions -->
<Carousel indicators={false}>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img7}
          alt="First slide"
        />
    <Carousel.Caption>
        <h5 className="text-white">Sunrise above a beach</h5>
        <p>You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
            <h5 className="text-white">Working from home little spot</h5>
            <p>Consistency piques people’s interest is that it has become more and more popular over the years, which is excellent.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img9}
          alt="Third slide"
        />

        <Carousel.Caption>
            <h5 className="text-white">Dramatic clouds at the Golden Gate Bridge</h5>
            <p>Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
`;

const WithCaptionExample = () => (
    <PrismCode
        code={withCaptionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Crossfade Animation
const crossFadeCode =
    `
<!-- With Crossfade Animation -->
<Carousel fade={true} controls={false}>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
    </Carousel.Item>
</Carousel>
`;

const CrossFadeExample = () => (
    <PrismCode
        code={crossFadeCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Individual carousel-item Interval
const induvidualIntervalCode =
    `
<!-- Individual Slide -->
<Carousel interval={2000} indicators={false}>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img12}
          alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img11}
          alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img10}
          alt="Third slide"
        />
    </Carousel.Item>
</Carousel>
`;

const InduvidualIntervalExample = () => (
    <PrismCode
        code={induvidualIntervalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Disable Touch Swiping
const disableTouchCode =
    `
<!-- Disable Touch Swiping -->
<Carousel indicators={false}>
    <Carousel.Item>
        <Image
            src={img9}
            className="d-block w-100"
            alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img8}
            alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img7}
            alt="Third slide"
        />
    </Carousel.Item>
</Carousel>
`;

const DisableTouchExample = () => (
    <PrismCode
        code={disableTouchCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Dark Variant
const darkVariantCode =
`
<!-- Dark Variant -->
<Carousel indicators={false}>
    <Carousel.Item>
      <Image
        className="d-block w-100"
        src={img4}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>Drawing a sketch</h5>
        <p className='text-dark'>Too much or too little spacing, as in the example below, can make things unpleasant for the reader.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        className="d-block w-100"
        src={img5}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h5>Blue clock on a pastel background</h5>
        <p className='text-dark'>In some designs, you might adjust your tracking to create a certain artistic effect asked them what graphic design tips they live.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        className="d-block w-100"
        src={img6}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h5>Working at a coffee shop</h5>
        <p className='text-dark'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.</p>
      </Carousel.Caption>
    </Carousel.Item>
</Carousel>
`;

const DarkVariantExample = () => (
    <PrismCode
        code={darkVariantCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export { SlideCodeExample, WithControlExample, WithIndicatorExample, WithCaptionExample, CrossFadeExample, InduvidualIntervalExample, DisableTouchExample, DarkVariantExample };