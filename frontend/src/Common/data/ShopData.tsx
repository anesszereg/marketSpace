//recentlyOrder
import Product2 from "assets/images/products/img-2.png";
import Product3 from "assets/images/products/img-3.png";
import Product7 from 'assets/images/products/img-7.png';
import Product12 from 'assets/images/products/img-12.png';

//shop Reviewa
import Avatar10 from "assets/images/users/avatar-10.jpg";
import Avatar8 from "assets/images/users/avatar-8.jpg";
import Avatar2 from "assets/images/users/avatar-2.jpg";
import Avatar1 from "assets/images/users/avatar-1.jpg";
import Avatar4 from "assets/images/users/avatar-4.jpg";
import Avatar3 from "assets/images/users/avatar-3.jpg";
import Avatar5 from "assets/images/users/avatar-5.jpg";
import Avatar6 from "assets/images/users/avatar-6.jpg";
import Avatar7 from "assets/images/users/avatar-7.jpg";

//orderHistorys
import Product19 from "assets/images/products/img-19.png";
import Product4 from "assets/images/products/img-4.png";
import Product1 from "assets/images/products/img-1.png";

//productData
import Product15 from "assets/images/products/img-15.png";
import Product6 from "assets/images/products/img-6.png";
import Product9 from "assets/images/products/img-9.png";

const recentlyOrder = [
    {
        id: 1,
        img: Product12,
        color: ["secondary", "dark", "danger", "light"],
        title: 'Carven Lounge Chair Red',
        price: '$209.99',
        ratting: '4.1',
    },
    {
        id: 2,
        img: Product7,
        icone: "ri-error-warning-line",
        title: 'Innovative education book',
        price: '$96.26',
        ratting: '4.7',
    },
    {
        id: 3,
        img: Product3,
        presentag: '20%',
        color: ["secondary", "info"],
        title: 'Ninja Pro Max Smartwatch',
        price: '$247.27',
        deleteproce: '$309.09',
        ratting: '3.5',
    },
    {
        id: 6,
        img: Product2,
        color: ["success"],
        title: 'Opinion Striped Round Neck Green T-shirt',
        price: '$126.99',
        ratting: '4.1',
    }
]

const shopReviews = [
    {
        id: 1,
        img: Avatar10,
        title: 'Scott Barber',
        discription: "Really don't regret buying it. great job done the design is simply fabulous love your job."
    },
    {
        id: 2,
        img: Avatar8,
        title: 'Daniel Owen',
        discription: "High theme quality. Very good support, they spent almost an hour remotely to fix a problem. I hope this theme will have a long term support."
    },
    {
        id: 3,
        img: Avatar2,
        title: 'Patrick Kelly',
        discription: "Very good support and also code works brilliantly and well documented"
    },
    {
        id: 4,
        img: Avatar1,
        title: 'Victoria Le',
        discription: "Thank you for supporting CakePHP 4, we have purchased the template because of this support, please push forward more integration"
    },
    {
        id: 5,
        img: Avatar4,
        title: 'Nicole Davis ',
        discription: "We have used your other templates as well and seems it's amazing with the design and code quality. Wish you best for the future updates. Keep updated you will be #1 in near future."
    },
    {
        id: 6,
        img: Avatar3,
        title: 'Daniel Mejia',
        discription: "Gracias por las correciones que hiceron para esta version 1.4. Ahora definitivamente la calificacion debe ser de 5 estrellas. Excelente trabajo muchachos!"
    },
    {
        id: 7,
        img: Avatar5,
        title: 'Jessica Thomas',
        discription: "This is an incredible framework worth so much in the right hands! Nowhere else are you going to get so much flexibility and great code for a few dollars. Highly recommend purchasing today! Like right now!"
    },
    {
        id: 8,
        img: Avatar6,
        title: 'Alexis Davidson',
        discription: "great product. look forward to the vue and react versions"
    },
    {
        id: 9,
        img: Avatar7,
        title: 'Elizabeth Padilla',
        discription: "Good design & good support. Go for it."
    },
]
const orderHistorys = [
    {
        id: 1,
        orderId: "TBT15454841",
        img: Product19,
        title: "World's Most Expensive T Shirt",
        text: "Women's Clothes",
        data: '01 Jul, 2022',
        amount: "287.53",
        status: "Delivered",
        bg: 'success'
    },
    {
        id: 2,
        orderId: "TBT15425012",
        img: Product12,
        title: "Onyx SmartGRID Chair Red",
        text: "Furniture & Decore",
        data: '01 Feb, 2023',
        amount: "39.99",
        status: "Shipping",
        bg: 'secondary'
    },
    {
        id: 3,
        orderId: "TBT1524563",
        img: Product4,
        title: "Slippers Open Toe",
        text: "Footwear",
        data: '09 Dec, 2022	',
        amount: "874.00",
        status: "Out Of Delivery",
        bg: 'danger'
    },
    {
        id: 4,
        orderId: "TBT1524530",
        img: Product1,
        title: "Hp Trendsetter Backpack",
        text: "Handbags & Clutches",
        data: '02 Jan, 2023',
        amount: "32.00",
        status: "Delivered",
        bg: 'success'
    },
    {
        id: 5,
        orderId: "TBT13642870",
        img: Product7,
        title: "Innovative education book",
        text: "Books",
        data: '08 Jan, 2023',
        amount: "18.32",
        status: "Pending",
        bg: 'warning'
    },
]

const productData = [
    {
        id: 1,
        img: Product12,
        title: " Branded Smart Chair Red",
        Color: "Red",
        Size: "M",
        bg: "danger",
        ItemPrice: 89.99,
        Total: 89.99,
        num: 1
    },
    {
        id: 2,
        img: Product15,
        title: " Like Style Women Black Handbag",
        Color: "Brown",
        bg: "secondary",
        ItemPrice: 742.00,
        Total: 742.00,
        num: 1
    },
    {
        id: 3,
        img: Product6,
        title: " Striped High Neck Casual Men Orange Sweater",
        Color: "Orange",
        Size: "XL",
        bg: "warning",
        ItemPrice: 62.40,
        Total: 62.40,
        num: 1
    },
    {
        id: 4,
        img: Product9,
        title: " Borosil Paper Cup",
        Color: "White",
        bg: "dark",
        ItemPrice: 38.00,
        Total: 38.00,
        num: 1
    },
]
const wishlishProduct = [
    {
        id: 1,
        img: Product19,
        title: "World's Most Expensive T Shirt",
        text: "Women's Clothes",
        price: 154.49,
        status: "In Stock",
        color: 'success',
        bg: 'dark'
    },
    {
        id: 2,
        img: Product12,
        title: "Onyx SmartGRID Chair Red",
        text: "Furniture & Decore",
        price: 39.99,
        status: "Out Of Stock",
        bg: 'danger',
        color: 'danger'
    },
    {
        id: 3,
        img: Product4,
        title: "lippers Open Toe",
        text: "Footwear",
        price: 74.32,
        status: "In Stock",
        color: 'success',
        bg: 'success'
    },
    {
        id: 4,
        img: Product1,
        title: "Hp Trendsetter Backpack",
        text: "Handbags & Clutches",
        price: 32.00,
        status: "In Stock",
        color: 'success',
        bg: 'secondary'
    },
    {
        id: 5,
        img: Product7,
        title: "Innovative education book",
        text: "Books",
        price: 18.32,
        status: "Out Of Stock",
        color: 'danger',
        bg: 'info'
    },
]

const wishListCard = [
    {
        id: 1,
        img: Product6,
        bg: 'danger',
        text: "Striped High Neck Casual Men Orange Sweater",
        rat: 4.7,
        price: "62.40",
        deletprice: "120.00"
    },
    {
        id: 2,
        img: Product4,
        bg: 'success',
        text: "Girls Mint Green & Off-White Solid Open Toe Flats",
        rat: 4.5,
        price: "80.00",
        deletprice: "180.00"
    },
    {
        id: 3,
        img: Product19,
        bg: 'dark',
        text: "Ethex Women Ribbed Sweater",
        rat: 5.0,
        price: "24.07",
        deletprice: "120.00"
    },
];

const selectAddressData = [
    {
        id: 1,
        addressname: "Witney Blessington",
        addressdetails: "144 Cavendish Avenue, Indianapolis, IN 46251",
        phonenumber: "012-345-6789"
    },
    {
        id: 2,
        addressname: "Edwin Adenike",
        addressdetails: "2971 Westheimer Road, Santa Ana, IL 80214",
        phonenumber: "123-456-7890"
    },
]

export { recentlyOrder, shopReviews, orderHistorys, productData, wishlishProduct, wishListCard, selectAddressData };