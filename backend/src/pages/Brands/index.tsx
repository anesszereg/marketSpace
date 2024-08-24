import BreadCrumb from 'Common/BreadCrumb';
import React from 'react'
import { Container, Row } from 'react-bootstrap';

import img1 from "assets/images/brands/img-1.png";
import img2 from "assets/images/brands/img-2.png";
import img3 from "assets/images/brands/img-3.png";
import img4 from "assets/images/brands/img-4.png";
import img5 from "assets/images/brands/img-5.png";
import img6 from "assets/images/brands/img-6.png";
import img7 from "assets/images/brands/img-7.png";
import img8 from "assets/images/brands/img-8.png";
import img9 from "assets/images/brands/img-9.png";
import img10 from "assets/images/brands/img-10.png";
import img11 from "assets/images/brands/img-11.png";
import img12 from "assets/images/brands/img-12.png";
import img13 from "assets/images/brands/img-13.png";
import img14 from "assets/images/brands/img-14.png";
import BrandsTable from './BrandsTable';

const Brands = () => {

    document.title = "Brands | Toner eCommerce + Admin React Template";

    const brands = [
        {
            "id":"1",
            "brandName": "Michelin",
            "companyLogo": img1,
            "productItems": "362"
        },{
            "id":"2",
            "brandName": "Rolex",
            "companyLogo": img2,
            "productItems": "471"
        },{
            "id":"3",
            "brandName": "Huawel",
            "companyLogo": img3,
            "productItems": "3654"
        },{
            "id":"4",
            "brandName": "Puma",
            "companyLogo": img4,
            "productItems": "1548"
        },{
            "id":"5",
            "brandName": "Fastrack",
            "companyLogo": img5,
            "productItems": "645"
        },{
            "id":"6",
            "brandName": "Nautica",
            "companyLogo": img6,
            "productItems": "702"
        },{
            "id":"7",
            "brandName": "Mochup",
            "companyLogo": img7,
            "productItems": "942"
        },{
            "id":"8",
            "brandName": "Bosch",
            "companyLogo": img8,
            "productItems": "3625"
        },{
            "id":"9",
            "brandName": "Diesel",
            "companyLogo": img9,
            "productItems": "415"
        },{
            "id":"10",
            "brandName": "Reebok",
            "companyLogo": img10,
            "productItems": "362"
        },{
            "id":"11",
            "brandName": "Eagle",
            "companyLogo": img11,
            "productItems": "650"
        },{
            "id":"12",
            "brandName": "Adidas",
            "companyLogo": img12,
            "productItems": "931"
        },{
            "id":"13",
            "brandName": "Michelin",
            "companyLogo": img1,
            "productItems": "1462"
        },{
            "id":"14",
            "brandName": "Kinetic",
            "companyLogo": img13,
            "productItems": "3621"
        },{
            "id":"15",
            "brandName": "Soriana",
            "companyLogo": img14,
            "productItems": "1024"
        },{
            "id":"16",
            "brandName": "Puma",
            "companyLogo": img4,
            "productItems": "1548"
        },{
            "id":"17",
            "brandName": "Huawel",
            "companyLogo": img3,
            "productItems": "3654"
        },{
            "id":"18",
            "brandName": "Rolex",
            "companyLogo": img2,
            "productItems": "471"
        },{
            "id":"19",
            "brandName": "Michelin",
            "companyLogo": img1,
            "productItems": "362"
        }
    ]
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BreadCrumb title="Brands" pageTitle="Toner" />
                <Row>
                    <BrandsTable brands={brands} />
                </Row>
            </Container>
        </div>
    </React.Fragment>
  )
}

export default Brands;
