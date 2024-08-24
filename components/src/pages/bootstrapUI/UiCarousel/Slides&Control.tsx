import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

// Import images
import img1 from 'assets/images/small/img-1.jpg'
import img2 from 'assets/images/small/img-2.jpg'
import img3 from 'assets/images/small/img-3.jpg'
import img4 from 'assets/images/small/img-4.jpg'
import img5 from 'assets/images/small/img-5.jpg'
import img6 from 'assets/images/small/img-6.jpg'

const Slides = () => {
    return (
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

    )
}

function ControlledSlide() {
    return (
        <Carousel indicators={false} >
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
    );
};

export { Slides, ControlledSlide };