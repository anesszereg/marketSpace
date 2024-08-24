import React from "react";
import { Carousel, Image } from 'react-bootstrap';

// Import images
import img1 from 'assets/images/small/img-1.jpg'
import img2 from 'assets/images/small/img-2.jpg'
import img3 from 'assets/images/small/img-3.jpg'
import img7 from 'assets/images/small/img-7.jpg'
import img9 from 'assets/images/small/img-9.jpg'

function Indicators() {
    return (
        <Carousel >
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
    );
};


function Captions() {
    return (
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
    );
}

export { Indicators, Captions };