// Import Images
import img1 from 'assets/images/products/img-1.png'
import img4 from 'assets/images/products/img-4.png'
import img5 from 'assets/images/products/img-5.png'
import img6 from 'assets/images/products/img-6.png'
import img7 from 'assets/images/products/img-7.png'
import img10 from 'assets/images/products/img-10.png'
import img15 from 'assets/images/products/img-15.png'

const profile = [
    {
        id: '#TBT42101',
        img: img10,
        rating: '4.9',
        title: "World's most expensive t shirt",
        price: '266.24',
        stock: '45',
        type: 'fashion',
        orders: '48',
    },
    {
        id: '#TBT42102',
        img: img15,
        rating: '4.2',
        title: "Like Style Women Black Handbag",
        price: '742.00',
        stock: '06',
        type: ' Other Accessories',
        orders: '30',
    },
    {
        id: '#TBT42103',
        img: img1,
        rating: '3.8',
        title: "Black Horn Backpack For Men Bags 30 L Backpack",
        price: '113.24',
        stock: '10',
        type: 'grocery',
        orders: '48',
    },
    {
        id: '#TBT42104',
        img: img7,
        rating: '4.7',
        title: "Innovative education book",
        price: '96.26',
        stock: '15',
        type: 'kids',
        orders: '40',
    },
    {
        id: '#TBT42105',
        img: img4,
        rating: '4.7',
        title: "Sangria Girls Mint Green & Off-White Solid Open Toe Flats",
        price: '24.07',
        stock: '08',
        type: 'kids',
        orders: '55',
    },
    {
        id: '#TBT42106',
        img: img5,
        rating: '4.0',
        title: "Lace-Up Casual Shoes For Men",
        price: '229.00',
        stock: '15',
        type: 'fashion',
        orders: '48',
    },
    {
        id: '#TBT42107',
        img: img6,
        rating: '4.8',
        title: "Striped High Neck Casual Men Orange Sweater",
        price: '62.40',
        stock: '12',
        type: 'fashion',
        orders: '45',
    }]

const account = [
    {
        OrderID: '#TBT42101',
        ProductName: 'Carven Lounge Chair Red',
        Amount: '$874.30',
        OrderDate: '18 Dec, 2022',
        PaymentMethod: 'Mastercard',
        DeliveryStatus: 'Delivered'
    },
    {
        OrderID: '#TBT42102',
        ProductName: "World's Most Expensive T-Shirt",
        Amount: '$1452.00',
        OrderDate: '02 Jan, 2023',
        PaymentMethod: 'Visa',
        DeliveryStatus: 'Pickups'
    },
    {
        OrderID: '#TBT42103',
        ProductName: 'Ninja Pro Max Smartwatch',
        Amount: '$341.23',
        OrderDate: '24 Nov, 2022',
        PaymentMethod: 'COD',
        DeliveryStatus: 'Inprogress'
    },
    {
        OrderID: '#TBT42104',
        ProductName: 'Like Style Women Black Handbag',
        Amount: '$671.00',
        OrderDate: '12 Jan, 2023',
        PaymentMethod: 'Visa',
        DeliveryStatus: 'Pending'
    },
    {
        OrderID: '#TBT42105',
        ProductName: 'Funky Prints T-shirt',
        Amount: '$803.11',
        OrderDate: '08 Aug, 2022',
        PaymentMethod: 'Mastercard',
        DeliveryStatus: 'Returns'
    },
    {
        OrderID: '#TBT42106',
        ProductName: 'Innovative Education Book',
        Amount: '$203.65',
        OrderDate: '08 Oct, 2022',
        PaymentMethod: 'Visa',
        DeliveryStatus: 'Cancelled'
    },
    {
        OrderID: '#TBT42107',
        ProductName: 'Leather band Smartwatches',
        Amount: '$2145.20',
        OrderDate: '11 Feb, 2021',
        PaymentMethod: 'COD',
        DeliveryStatus: 'Delivered'
    },
    {
        OrderID: '#TBT42108',
        ProductName: 'Galaxy Watch4',
        Amount: '$3468.41',
        OrderDate: '28 Oct, 2022',
        PaymentMethod: 'Mastercard',
        DeliveryStatus: 'Pickups'
    },
    {
        OrderID: '#TBT42109',
        ProductName: '  Borosil Paper Cup',
        Amount: '$351.91',
        OrderDate: '19 June, 2021',
        PaymentMethod: 'Visa',
        DeliveryStatus: 'Pending'
    },
    {
        OrderID: '#TBT42110',
        ProductName: 'Apple Headphone',
        Amount: '$1876.02',
        OrderDate: '25 Nov, 2021',
        PaymentMethod: 'COD',
        DeliveryStatus: 'Returns'
    }
]
const accountTransaction = [
    {
        TransactionID: 'c1bf44fd100fff',
        From: ' Cassius Brock',
        To: 'Admin',
        Timestamp: '02 Feb, 2023',
        time: ' 01:47AM  ',
        PaymentMethod: '    PayPal',
        Amount: '$266.24',
        Status: 'Success'
    },
    {
        TransactionID: 'e5r4f1g5h2npli',
        From: 'Admin',
        To: 'HDFC',
        Timestamp: '29 Jan, 2023',
        time: ' 03:20PM',
        PaymentMethod: 'Credit Card',
        Amount: '$462.36',
        Status: 'Pending'
    },
    {
        TransactionID: 'c94b5581418c4   ',
        From: 'Admin',
        To: 'HDFC',
        Timestamp: '29 Jan, 2023',
        time: '04:33PM',
        PaymentMethod: '    Credit Card',
        Amount: '$6.00',
        Status: 'Success'
    },
    {
        TransactionID: 'c1bf44fd100fff',
        From: ' Cassius Brock',
        To: 'Admin',
        Timestamp: '02 Feb, 2023',
        time: ' 01:47AM  ',
        PaymentMethod: '    PayPal',
        Amount: '$266.24',
        Status: 'Success'
    },
    {
        TransactionID: '1deffa9713917e',
        From: 'Scott Wilson ',
        To: 'Admin',
        Timestamp: '17 Jan, 2023 ',
        time: '01:35AM',
        PaymentMethod: 'Debit Card',
        Amount: '$364.78',
        Status: 'Failed'
    },
    {
        TransactionID: 'v98p141d5f4j14',
        From: 'Kristina Hooper  ',
        To: 'Admin',
        Timestamp: '29 Dec, 2022',
        time: '11:49AM',
        PaymentMethod: 'Debit Card',
        Amount: '$723.91',
        Status: 'Success'
    },
    {
        TransactionID: 'v98p141d5f4j14',
        From: 'Admin',
        To: 'Jacques Leon',
        Timestamp: '13 Dec, 2022',
        time: '10:30AM',
        PaymentMethod: 'PayPal',
        Amount: '$340.00',
        Status: 'Success'
    },
    {
        TransactionID: 'v98p141d5f4j14',
        From: 'HDFC',
        To: 'Admin',
        Timestamp: '13 Dec, 2022',
        time: '10:30AM',
        PaymentMethod: 'Online Banking',
        Amount: '$954.30',
        Status: 'Pending'
    },
    {
        TransactionID: 'sdsa78gh48t98',
        From: 'Admin',
        To: 'HDFC',
        Timestamp: '11 Dec, 2022',
        time: ' 09:46PM',
        PaymentMethod: 'Online Banking',
        Amount: '$32.14',
        Status: 'Failed'
    },
    {
        TransactionID: '186aa96d8010',
        From: 'Admin',
        To: 'Daniel Gonzalez',
        Timestamp: '02 Nov, 2022',
        time: '07:30PM',
        PaymentMethod: 'PayPal',
        Amount: '$74.10',
        Status: 'Success'
    },
    {
        TransactionID: '61d994f025ac',
        From: 'Gabrielle Holden ',
        To: 'Admin',
        Timestamp: '29 Oct, 2022',
        time: '12:58AM',
        PaymentMethod: 'Credit Card',
        Amount: '$698.37',
        Status: 'Success'
    },
]

export { profile, account, accountTransaction }