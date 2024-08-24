import BreadCrumb from 'Common/BreadCrumb';
import React from 'react'
import { Container, Row } from 'react-bootstrap';

import avatar10 from "assets/images/users/avatar-10.jpg";
import avatar8 from "assets/images/users/avatar-8.jpg";
import avatar1 from "assets/images/users/avatar-1.jpg";
import avatar4 from "assets/images/users/avatar-4.jpg";
import avatar3 from "assets/images/users/avatar-3.jpg";
import avatar5 from "assets/images/users/avatar-5.jpg";
import avatar7 from "assets/images/users/avatar-7.jpg";
import avatar9 from "assets/images/users/avatar-9.jpg";
import avatar2 from "assets/images/users/avatar-2.jpg";
import avatar6 from "assets/images/users/avatar-6.jpg";
import ReviewsRating from './Reviews&Rating';

const ReviewRating = () => {

    document.title = "Reviews & Ratings | Toner eCommerce + Admin React Template";

    const reviews = [
        {
            id : 1,
            img : avatar10,
            name : "Scott Barber",
            subTitle : "Really don't regret buying it. great job done the design is simply fabulous love your job."
        },
        {
            id : 2,
            img : avatar8,
            name : "Daniel Owen",
            subTitle : "High theme quality. Very good support, they spent almost an hour remotely to fix a problem. I hope this theme will have a long term support."
        },
        {
            id : 3,
            img : avatar2,
            name : "Patrick Kelly",
            subTitle : "Very good support and also code works brilliantly and well documented"
        },
        {
            id : 4,
            img : avatar1,
            name : "Victoria Le",
            subTitle : "Thank you for supporting CakePHP 4, we have purchased the template because of this support, please push forward more integration"
        },
        {
            id : 5,
            img : avatar4,
            name : "Daniel Mejia",
            subTitle : "Gracias por las correciones que hiceron para esta version 1.4. Ahora definitivamente la calificacion debe ser de 5 estrellas. Excelente trabajo muchachos!"
        },
        {
            id : 6,
            img : avatar3,
            name : "Nicole Davis",
            subTitle : "We have used your other templates as well and seems it's amazing with the design and code quality. Wish you best for the future updates. Keep updated you will be #1 in near future."
        },
        {
            id : 7,
            img : avatar5,
            name : "Jessica Thomas",
            subTitle : "This is an incredible framework worth so much in the right hands! Nowhere else are you going to get so much flexibility and great code for a few dollars. Highly recommend purchasing today! Like right now!"
        },
        {
            id : 8,
            img : avatar6,
            name : "Elizabeth Padilla",
            subTitle : "Good design & good support. Go for it."
        },
        {
            id : 9,
            img : avatar7,
            name : "Alexis Davidson",
            subTitle : "great product. look forward to the vue and react versions"
        },
        {
            id : 10,
            img : avatar9,
            name : "Stephen Bird",
            subTitle : "Awesome template with virtually every UI/UX feature functionality required by a front end developer"
        },
        {
            id : 11,
            img : avatar2,
            name : "Kristina Hooper",
            subTitle : "Sin duda la mejor plantilla, fabuloso código y muy excelente diseño, y un excelente soporte que brindan, los recomiendo !!."
        },
        {
            id : 12,
            img : avatar6,
            name : "Jacques Leon",
            subTitle : "Works like a component library, a crazy amount of design elements already built and given."
        },
    ]
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Reviews & Ratings" pageTitle="Reviews & Ratings" />
                    <Row>
                        <ReviewsRating reviews={reviews} />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default ReviewRating
