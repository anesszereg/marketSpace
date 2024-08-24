//import Images
import avatar1 from "assets/images/users/avatar-1.jpg";
import avatar2 from "assets/images/users/avatar-2.jpg";
import avatar3 from "assets/images/users/avatar-3.jpg";
import avatar4 from "assets/images/users/avatar-4.jpg";
import avatar5 from "assets/images/users/avatar-5.jpg";
import avatar6 from "assets/images/users/avatar-6.jpg";
import avatar7 from "assets/images/users/avatar-7.jpg";
import avatar8 from "assets/images/users/avatar-8.jpg";
import avatar9 from "assets/images/users/avatar-9.jpg";
import avatar10 from "assets/images/users/avatar-10.jpg";

import productImg1 from "assets/images/products/img-1.png"
import productImg3 from "assets/images/products/img-3.png"
import productImg4 from "assets/images/products/img-4.png"
import productImg5 from "assets/images/products/img-5.png"
import productImg6 from "assets/images/products/img-6.png"
import productImg7 from "assets/images/products/img-7.png"
import productImg8 from "assets/images/products/img-8.png"
import productImg9 from "assets/images/products/img-9.png"


const recentOrders = [
    {
        id: 1,
        purchaseID: "#TB010338",
        customerName: "Macbook Pro",
        productImage: avatar2,
        productName: "Terry White",
        amount: "$658.00",
        orderDate: "28 Oct, 2022",
        deliveryDate: '26 Jan, 2023',
        vendor: "Brazil",
        rating: 4.5,
        status: "Paid"
    },
    {
        id: 2,
        purchaseID: "#TB010337",
        customerName: "Macbook Pro",
        productImage: avatar2,
        productName: "Terry White",
        amount: "$658.00",
        orderDate: "30 Oct, 2022",
        deliveryDate: '28 Jan, 2023',
        vendor: "Brazil",
        rating: 4.8,
        status: "Paid"
    },
    {
        id: 3,
        purchaseID: "#TB010336",
        customerName: "Smart Watch for Man's",
        productImage: avatar8,
        productName: "Heather Jimenez",
        amount: "$741.98",
        orderDate: "02 Nov, 2022",
        deliveryDate: '29 Dec, 2022',
        vendor: "Spain",
        rating: 4.3,
        status: "Paid"
    },
    {
        id: 4,
        purchaseID: "#TB010335",
        customerName: "Apple Headphone",
        productImage: avatar9,
        productName: "Scott Wilson",
        amount: "$264.37",
        orderDate: "01 Nov, 2022",
        deliveryDate: '13 Dec, 2022',
        vendor: "Jersey",
        rating: 3.9,
        status: "Unpaid"
    }, {
        id: 5,
        purchaseID: "#TB010334",
        customerName: "Bentwood Chair",
        productImage: avatar10,
        productName: "Ashley Silva",
        amount: "$349.99",
        orderDate: "31 Oct, 2022",
        deliveryDate: '03 Dec, 2022',
        vendor: "Argentina",
        rating: 4.7,
        status: "Pending"
    },
    {
        id: 6,
        purchaseID: "#TB010333",
        customerName: "Stillbird Helmet",
        productImage: avatar3,
        productName: "Stephen Bird",
        amount: "$80.00",
        orderDate: "30 Oct, 2022",
        deliveryDate: '12 Nov, 2022',
        vendor: "USA",
        rating: 4.4,
        status: "Paid"
    },
    {
        id: 7,
        purchaseID: "#TB010332",
        customerName: "Borosil Paper Cup",
        productImage: avatar4,
        productName: "Daniel Gonzalez",
        amount: "$345.00",
        orderDate: "29 Oct, 2022",
        deliveryDate: '11 Nov, 2022',
        vendor: "Namibia",
        rating: 4.4,
        status: "Unpaid"
    },
    {
        id: 8,
        purchaseID: "#TB010331",
        customerName: "Macbook Pro",
        productImage: avatar2,
        productName: "Terry White",
        amount: "$658.00",
        orderDate: "28 Oct, 2022",
        deliveryDate: '09 Nov, 2022',
        vendor: "Brazil",
        rating: 4.7,
        status: "Paid"
    }
];

const stockReport = [
    {
        productID: "#00541",
        productImage: productImg1,
        productName: "Rockerz Ear Bluetooth Headphones",
        updatedDate: "16 Aug, 2022",
        amount: "$658.00",
        stockStatus: "In Stock",
        quantity: "15 PCS"
    },
    {
        productID: "#07484",
        productImage: productImg5,
        productName: "United Colors Of Benetton",
        updatedDate: "05 Sep, 2022",
        amount: "$145.00",
        stockStatus: "Low Stock",
        quantity: "05 PCS"
    },
    {
        productID: "#01641",
        productImage: productImg6,
        productName: "Striped Baseball Cap",
        updatedDate: "28 Sep, 2022",
        amount: "$215.00",
        stockStatus: "Out of Stock",
        quantity: "0 PCS"
    },
    {
        productID: "#00065",
        productImage: productImg7,
        productName: "350 ml Glass Grocery Container",
        updatedDate: "02 Oct, 2022",
        amount: "$79.99",
        stockStatus: "In Stock",
        quantity: "37 PCS"
    },
    {
        productID: "#00156",
        productImage: productImg8,
        productName: "One Seater Sofa",
        updatedDate: "11 Oct, 2022",
        amount: "$264.99",
        stockStatus: "In Stock",
        quantity: "23 PCS"
    },
    {
        productID: "#09102",
        productImage: productImg9,
        productName: "Men's Running Shoes Active Grip",
        updatedDate: "19 Nov, 2022",
        amount: "$264.99",
        stockStatus: "Low Stock",
        quantity: "23 PCS"
    },
];

const productDelivery = [
    {
        id: 1,
        productImage: productImg8,
        productName: "Men's Running Shoes Activ...",
        productBy: "Aisha Bradley",
        productStatus: "Shipping"
    },
    {
        id: 2,
        productImage: productImg4,
        productName: "Striped Baseball Cap",
        productBy: "Edgar Bailey",
        productStatus: "Delivered"
    },
    {
        id: 3,
        productImage: productImg3,
        productName: "350 ml Glass Groce...",
        productBy: "Adam Small",
        productStatus: "Out of Delivery"
    },
    {
        id: 4,
        productImage: productImg6,
        productName: "Monte Carlo Sweaters",
        productBy: "Evie Merrill",
        productStatus: "Delivered"
    },
    {
        id: 5,
        productImage: productImg9,
        productName: "Ceramic Coffee Mug",
        productBy: "Keaton Larson",
        productStatus: "Shipping"
    },
];

const newcustomers = [
    {
        id: 1,
        productImage: avatar2,
        productName: "Tommy Carey",
        date: "02 Jan, 2023"
    },
    {
        id: 2,
        productImage: avatar1,
        productName: "Cassius Brock",
        date: "24 Nov, 2022"
    },
    {
        id: 3,
        productImage: avatar3,
        productName: "Gabrielle Holden",
        date: "17 Nav, 2022"
    },
    {
        id: 4,
        productImage: avatar5,
        productName: "Alfred Hurst",
        date: "18 Dec, 2021"
    },
    {
        id: 5,
        productImage: avatar6,
        productName: "Kristina Hooper",
        date: "04 Oct, 2022"
    },
    {
        id: 6,
        productImage: avatar8,
        productName: "Jacques Leon",
        date: "02 Jan, 2023"
    },
    {
        id: 7,
        productImage: avatar7,
        productName: "Edward Rogers",
        date: "25 Nov, 2022"
    },
    {
        id: 8,
        productImage: avatar10,
        productName: "Alina Holland",
        date: "11 Jan, 2023"
    },
];

const allRevenueChartData = [{
    name: "Orders",
    type: 'line',
    data: [180, 274, 346, 290, 370, 420, 490, 542, 510, 580, 636, 745]
},
{
    name: "Refunds",
    type: 'area',
    data: [100, 154, 302, 411, 300, 284, 273, 232, 187, 174, 152, 122]
},
{
    name: "Earnings",
    type: 'line',
    data: [260, 360, 320, 345, 436, 527, 641, 715, 832, 794, 865, 933]
}]

const monthRevenueChartData = [{
    name: "Orders",
    type: 'line',
    data: [170, 254, 326, 260, 350, 400, 470, 522, 500, 570, 606, 725]
},
{
    name: "Refunds",
    type: 'area',
    data: [90, 124, 152, 371, 290, 244, 253, 232, 167, 154, 132, 112]
},
{
    name: "Earnings",
    type: 'line',
    data: [250, 350, 310, 335, 426, 517, 631, 705, 822, 774, 835, 923]
}]

const halfYearRevenueChartData = [{
    name: "Orders",
    type: 'line',
    data: [160, 254, 336, 310, 390, 450, 510, 572, 540, 600, 656, 765]
},
{
    name: "Refunds",
    type: 'area',
    data: [120, 157, 322, 491, 320, 324, 293, 262, 207, 194, 172, 132]
},
{
    name: "Earnings",
    type: 'line',
    data: [290, 310, 380, 345, 456, 547, 631, 735, 852, 824, 895, 953]
}]

const yearRevenueChartData = [{
    name: "Orders",
    type: 'line',
    data: [230, 344, 346, 310, 450, 470, 510, 642, 550, 600, 646, 765]
},
{
    name: "Refunds",
    type: 'area',
    data: [120, 174, 342, 431, 320, 344, 293, 262, 217, 214, 172, 142]
},
{
    name: "Earnings",
    type: 'line',
    data: [290, 390, 350, 375, 456, 547, 671, 745, 852, 814, 885, 953]
}]

export { recentOrders, stockReport, productDelivery, newcustomers, allRevenueChartData, monthRevenueChartData, halfYearRevenueChartData, yearRevenueChartData };