import React from 'react'
import { Carousel, Image } from 'react-bootstrap';

// Import Images
import img1 from 'assets/images/small/img-1.jpg'
import img2 from 'assets/images/small/img-2.jpg'
import img3 from 'assets/images/small/img-3.jpg'
import img8 from 'assets/images/small/img-8.jpg'
import img9 from 'assets/images/small/img-9.jpg'
import img10 from 'assets/images/small/img-10.jpg'

function CrossfadeAnimation() {
    return (
        <Carousel fade={true}>
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
    );
};


function IndividualInterval() {
    return (
        <Carousel fade={true} controls={false}>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={img10}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={img9}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={img8}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export { CrossfadeAnimation, IndividualInterval };