//filte product
import img1 from "assets/images/products/img-1.png";
import img2 from "assets/images/products/img-2.png";
import img3 from "assets/images/products/img-3.png";
import img4 from "assets/images/products/img-4.png";
import img5 from "assets/images/products/img-5.png";
import img6 from "assets/images/products/img-6.png";
import img7 from "assets/images/products/img-7.png";
import img8 from "assets/images/products/img-8.png";
import img9 from "assets/images/products/img-9.png";
import img10 from "assets/images/products/img-10.png";
import img12 from "assets/images/products/img-12.png";
import img15 from "assets/images/products/img-15.png";

//catlogDeals
import Eimg5 from "assets/images/ecommerce/img-5.jpg";
import Eimg3 from "assets/images/ecommerce/img-3.jpg";
import Eimg1 from "assets/images/ecommerce/img-1.jpg";

//shopProducDetails
import Product4 from "assets/images/products/img-4.png";
import Product16 from "assets/images/products/img-16.png";
import Product6 from "assets/images/products/img-6.png";
import Product8 from "assets/images/products/img-8.png";

const filterProduct = [
    {
        id: 1,
        img: img4,
        presentag: '75%',
        color: ["success", "danger", "secondary"],
        title: 'Sangria Girls Mint Green Off-White Solid Open Toe Flats',
        price: '$24.07',
        deleteproce: '$96.26',
        ratting: 4.7,
        category: 'lowtohigh',
        products: 'Kids',
        dic: '40'
    },
    {
        id: 2,
        img: img6,
        presentag: '48%',
        color: ["soft-primary", "soft-primary", "soft-primary", "soft-primary"],
        size: ['S', 'M', 'L', 'XL'],
        font: "12",
        title: 'Striped High Neck Casual Men Orange Sweater',
        price: '$62.40',
        deleteproce: '$120.00',
        ratting: '4.8',
        category: 'lowtohigh',
        products: "Fashion",
        dic: '50'
    },
    {
        id: 3,
        img: img10,
        color: ["dark", "light"],
        title: 'Printed, Typography Men Round Neck Black T-shirt',
        price: '$81.99',
        ratting: '4.9',
        category: 'lowtohigh',
        products: 'Fashion',
        dic: '50'
    },
    {
        id: 4,
        img: img7,
        icone: "ri-error-warning-line",
        title: 'Innovative education book',
        price: '$96.26',
        ratting: '4.7',
        category: 'lowtohigh',
        products: 'Kids',
        dic: '40'
    },
    {
        id: 5,
        img: img1,
        presentag: '25%',
        color: ["primary", "danger", "secondary"],
        title: 'Black Horn Backpack For Men Bags 30 L Backpack',
        price: '$112.50',
        deleteproce: '$150.00',
        ratting: '3.8',
        category: "hightolow",
        products: "Grocery",
        dic: '30'
    },
    {
        id: 6,
        img: img2,
        color: ["success"],
        title: 'Opinion Striped Round Neck Green T-shirt',
        price: '$126.99',
        ratting: '4.1',
        category: "hightolow",
        products: 'Fashion',
        dic: '40'
    },
    {
        id: 7,
        img: img9,
        presentag: '15%',
        color: ["light", "warning"],
        title: 'Lace-Up Casual Shoes For Men',
        price: '$194.65',
        deleteproce: '$229.00',
        ratting: '2.4',
        category: "hightolow",
        products: 'Kids',
        dic: '20'
    },
    {
        id: 8,
        img: img12,
        color: ["secondary", "dark", "danger", "light"],
        title: 'Carven Lounge Chair Red',
        price: '$209.99',
        ratting: '4.1',
        category: "hightolow",
        products: 'Furniture',
        dic: '40'
    },
    {
        id: 9,
        img: img5,
        color: ["danger"],
        title: 'Lace-Up Casual Shoes For Men',
        price: '$229.00',
        ratting: '4.0',
        category: "hightolow",
        products: 'Fashion',
        dic: '40'
    },
    {
        id: 10,
        img: img3,
        presentag: '20%',
        color: ["secondary", "info"],
        title: 'Ninja Pro Max Smartwatch',
        price: '$247.27',
        deleteproce: '$309.09',
        ratting: '3.5',
        category: "hightolow",
        products: 'Watches',
        dic: '30'
    },
    {
        id: 11,
        img: img8,
        presentag: '25%',
        color: ["success", "info", "warning", "danger"],
        title: "World's most expensive t shirt",
        price: '$266.24',
        deleteproce: '$354.99',
        ratting: '4.9',
        category: "hightolow",
        products: 'Fashion',
        dic: '50'
    },
    {
        id: 12,
        img: img15,
        color: ["light", "dark"],
        title: 'Like Style Women Black Handbag',
        price: '$742.00',
        ratting: '4.2 ',
        category: "hightolow",
        products: 'Fashion',
        dic: '40'
    },
]

const catlogDeals = [
    {
        id: 1,
        img: Eimg5,
        title: "World's most expensive t-shirt",
        ratting: "4.9",
        price: "$124.99",
        deleteprice: "$354.99",
        days: '2023/12/31'
    },
    {
        id: 2,
        img: Eimg3,
        title: "Best Footwear Collections",
        ratting: "4.3",
        price: "$80.00 ",
        deleteprice: "$180.00",
        days: '2023/12/20',
    },
    {
        id: 3,
        img: Eimg1,
        title: "Elegant Designer Western Dress",
        ratting: "5.0",
        price: "$30.10",
        deleteprice: "$121.99",
        days: '2023/12/22',
    },

];

const shopProducDetails = [
    {
        id: 1,
        img: Product4,
        title: 'Sangria Girls Mint Green & Off-White Solid Open Toe Flats',
        discription: 'Graphic Print Men & Women Footwear',
        rate: "24.00",
        quantity: "02",
        amount: "48.00",
        bg: 'success'
    },
    {
        id: 2,
        img: Product16,
        title: 'Rockerz Ear Bluetooth Smart Watch',
        discription: '32.5mm (1.28 Inch) TFT Color Touch Display',
        rate: "160.00",
        quantity: "01",
        amount: "160.00",
        bg: 'dark'
    },
    {
        id: 3,
        img: Product6,
        title: 'Monte Carlo Sweaters',
        discription: 'Graphic Print Men & Women Fashion',
        rate: "244.99",
        quantity: '03',
        amount: "734.97",
        bg: 'warning'
    },
    {
        id: 4,
        img: Product8,
        title: "World's most expensive t shirt",
        discription: 'Graphic Print Men & Women Fashion',
        rate: "120.30",
        quantity: "02",
        amount: "240.60",
        bg: 'secondary'
    },
]

export { filterProduct, catlogDeals, shopProducDetails };