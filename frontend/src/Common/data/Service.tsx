//service img
import delivery from "assets/images/ecommerce/fast-delivery.png";
import returns from "assets/images/ecommerce/returns.png";
import certificate from "assets/images/ecommerce/guarantee-certificate.png";
import hourssupport from "assets/images/ecommerce/24-hours-support.png";

//product img
import productImg1 from 'assets/images/products/img-1.png';
import productImg2 from "assets/images/products/img-2.png";
import productImg3 from "assets/images/products/img-3.png";
import productImg4 from "assets/images/products/img-4.png";
import productImg5 from "assets/images/products/img-5.png";
import productImg6 from "assets/images/products/img-6.png";
import productImg7 from 'assets/images/products/img-7.png';
import productImg8 from "assets/images/products/img-8.png";

//latest produc img
import productImg9 from "assets/images/products/img-9.png";
import productImg10 from "assets/images/products/img-10.png";
import productImg11 from "assets/images/products/img-11.png";
import productImg12 from "assets/images/products/img-12.png";
import productImg14 from "assets/images/products/img-14.png";

//slider img 
import avatar2 from 'assets/images/users/avatar-2.jpg';
import avatar7 from 'assets/images/users/avatar-7.jpg';
import avatar8 from 'assets/images/users/avatar-8.jpg';
import avatar10 from 'assets/images/users/avatar-10.jpg';

//shoping img 
import img3 from 'assets/images/small/img-3.jpg';
import img8 from 'assets/images/small/img-8.jpg';
import img6 from 'assets/images/small/img-6.jpg';

const service = [
    {
        id: 1,
        img: delivery,
        title: "Fast & Secure Delivery",
        text: "Tell about your service."
    },
    {
        id: 2,
        img: returns,
        title: "2 Days Return Policy",
        text: "No question ask."
    },
    {
        id: 3,
        img: certificate,
        title: "Money Back Guarantee",
        text: "Within 5 business days"
    },
    {
        id: 4,
        img: hourssupport,
        title: "24 X 7 Service",
        text: "Online service for customer"
    },
];

const product = [
    {
        id: 1,
        img: productImg6,
        title: 'Man Relaxed Fit T-shirt',
        price: '$199.00',
        deletePrice: '$425.00',
        ratting: '4.9 ',
        bg: 'warning',
        category: 'hot arrival',
        best: 'Best Arrival',
        sortBy: 'lowtohigh',
        dic: '40',
        products: 'Kids',
        color: ["success", "danger", "secondary"],
    },
    {
        id: 2,
        img: productImg7,
        title: 'Innovative education book ',
        price: '$129.00',
        ratting: '3.2',
        bg: 'info',
        category: 'seller hot',
        sortBy: 'lowtohigh',
        dic: '30',
        size: ['S', 'M', 'L', 'XL'],
        products: "Kids",
    },
    {
        id: 3,
        img: productImg1,
        title: 'Hp Trendsetter Backpack',
        price: '$299.00',
        deletePrice: '$399.00',
        ratting: '4.3',
        bg: 'danger',
        category: 'trendy',
        sortBy: 'hightolow',
        dic: '50',
        color: ["dark", "light"],
        products: 'Fashion',
    },
    {
        id: 4,
        img: productImg2,
        title: 'Hoodie Newyorker Winter Clothes',
        price: '$159.00',
        ratting: '3.1',
        bg: 'warning',
        category: 'trendy',
        sortBy: 'lowtohigh',
        dic: '20',
        color: ["primary", "danger", "secondary"],
        products: "Grocery",
    },
    {
        id: 5,
        img: productImg3,
        title: 'Leather band Smartwatches',
        price: '$159.00',
        ratting: '3.7 ',
        bg: 'danger',
        category: 'arrival',
        best: 'Best Arrival',
        sortBy: 'lowtohigh',
        dic: '30',
        color: ["success"],
        products: 'Watches',
    },
    {
        id: 6,
        img: productImg4,
        title: 'Slippers Open Toe',
        price: '$169.00',
        deletePrice: '$225.00',
        ratting: '2.6 ',
        bg: 'success',
        category: 'seller hot',
        sortBy: 'lowtohigh',
        dic: '20',
        color: ["light", "warning"],
        products: 'Kids',
    },
    {
        id: 7,
        img: productImg8,
        title: 'T-shirt Geometric Print pattern',
        price: '$339.00',
        ratting: '4.9',
        bg: 'info',
        category: 'hot arrival',
        sortBy: 'hightolow',
        dic: '50',
        color: ["secondary", "dark", "danger", "light"],
        products: 'Furniture',
    },
    {
        id: 8,
        img: productImg5,
        title: 'Leather sports shoes on wood',
        price: '$435.00 ',
        deletePrice: '$636.00',
        ratting: '4.9',
        bg: 'danger',
        category: 'trendy',
        best: 'Best Arrival',
        sortBy: 'hightolow',
        dic: '50',
        color: ["danger"],
        products: 'Fashion',
    },
]

const latestProduct = [
    {
        id: 1,
        img: productImg9,
        title: 'Petronas Baseball Cap',
        price: '$125.00',
        deletePrice: '$200.00',
        ratting: '3.2',
        bg: 'dark'
    },
    {
        id: 2,
        img: productImg10,
        title: 'Mens Black T Shirt',
        price: '$150.00',
        deletePrice: '$300.00',
        ratting: '4.3 ',
        bg: 'warning'
    },
    {
        id: 3,
        img: productImg11,
        title: 'Blue Checked Slim Fit Shirt',
        price: '$135.00',
        deletePrice: '$523.00',
        ratting: '2.3',
        bg: 'primary'
    },
    {
        id: 4,
        img: productImg12,
        title: 'Onyx SmartGRID Chair Red',
        price: '$99.00',
        deletePrice: '$129.00',
        ratting: '3.5',
        bg: 'danger'
    },
    {
        id: 5,
        img: productImg14,
        title: 'Nursing Chair Steam Grey',
        price: '$632.00',
        deletePrice: '$721.00',
        ratting: '2.3 ',
        bg: 'secondary'
    },
]

const slider = [
    {
        id: 1,
        discription: '"Clean design. document is just a fews page but i should be like this cuz when looking on laravel project it well prepare. everytime i need a component or something else. easy to find."',
        img: avatar2,
        title: 'George Obrien',
        name: 'Velzon User',
        top: 0
    },
    {
        id: 2,
        discription: '"Thank you for supporting CakePHP 4, we have purchased the template because of this support, please push forward more integration"',
        img: avatar7,
        title: 'Chadwick A. Scott',
        name: 'Velzon User',
        top: 5
    },
    {
        id: 3,
        discription: " We have used your other templates as well and seems it's amazing with the design and code quality. Wish you best for the future updates. Keep updated you will be #1 in near future.",
        img: avatar8,
        title: 'Tommy Moreno',
        name: 'Skote User',
        top: 0
    },
    {
        id: 4,
        discription: '"The template is very complete as an admin panel and was well written in a way that makes it easy to use."',
        img: avatar10,
        title: 'Mary Atkinson',
        name: 'Velzon User',
        top: 5
    }
]

const shopingsCollection = [
    {
        id: 1,
        img: img3,
        like: '12',
        comment: '10',
        data: '15',
        title: 'Society Pass Turns to Stripe to Simplify Checkout',
        discription: 'Southeast Asian eCommerce ecosystem Society Pass (SoPa) says it has integrated Stripe’s financial infrastructure solutions onto its platform.'
    },
    {
        id: 2,
        img: img8,
        like: '24',
        comment: '32',
        data: '23',
        title: 'Integrating Crypto Payment to Ecommerce',
        discription: 'To start accepting Bitcoin on your eCommerce site, simply integrate a BTC payment processor into your store. Many major eCommerce providers.'
    },
    {
        id: 3,
        img: img6,
        like: '48',
        comment: '15',
        data: '31',
        title: 'Etsy Is a High-Flier Among E-Commerce Stocks',
        discription: 'E-commerce stocks soared to record-high valuations during the pandemic. However, now that economies have reopened during the pandemic.'
    },

]

export { service, product, latestProduct, slider, shopingsCollection };