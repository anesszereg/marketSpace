import img1 from "assets/images/products/img-1.png";
import img2 from "assets/images/products/img-2.png";
import img3 from "assets/images/products/img-3.png";
import img4 from "assets/images/products/img-4.png";
import img5 from "assets/images/products/img-5.png";
import img6 from "assets/images/products/img-6.png";
import img7 from "assets/images/products/img-7.png";
import img9 from "assets/images/products/img-9.png";
import img10 from "assets/images/products/img-10.png";
import img12 from "assets/images/products/img-12.png";
import img15 from "assets/images/products/img-15.png";

import headphone from "assets/images/ecommerce/headphone.png";
import smartwatch from "assets/images/ecommerce/smart-watch.png";
import sofa from "assets/images/ecommerce/sofa.png";
import clothes from "assets/images/ecommerce/clothes.png";
import babyshoe from "assets/images/ecommerce/baby-shoe.png";
import lightbulb from "assets/images/ecommerce/light-bulb.png";
import cosmetics from "assets/images/ecommerce/cosmetics.png";
import book from "assets/images/ecommerce/book.png";

const productList = [
    {
        id: 1,
        productImg: img10,
        productTitle: "World's most expensive t shirt",
        category: "Fashion",
        price: "354.99",
        discount: "25%",
        rating: "4.9",
        color: ["secondary", "light", "dark"],
        size: ["s", "m", "l"],
        stock: "12",
        orders: "48",
        publish: "12 Oct, 2021",
    },
    {
        id: 2,
        productImg: img15,
        productTitle: "Like Style Women Black Handbag",
        category: "Fashion",
        price: "742.00",
        discount: "0%",
        rating: "4.2",
        color: ["light", "dark"],
        stock: "06",
        orders: "30",
        publish: "06 Jan, 2021",
    },
    {
        id: 3,
        productImg: img1,
        productTitle: "Black Horn Backpack For Men Bags 30 L Backpack",
        category: "Grocery",
        price: "150.99",
        discount: "25%",
        rating: "3.8",
        color: ["primary", "danger", "secondary"],
        size: ["s", "m", "l"],
        stock: "10",
        orders: "48",
        publish: "26 Mar, 2021",
    },
    {
        id: 4,
        productImg: img7,
        productTitle: "Innovative education book",
        category: "Kids",
        price: "96.26",
        discount: "0%",
        rating: "4.7",
        stock: "15",
        orders: "40",
        publish: "19 Apr, 2021",
    },
    {
        id: 5,
        productImg: img4,
        productTitle: "Sangria Girls Mint Green & Off-White Solid Open Toe Flats",
        category: "Kids",
        price: "96.26",
        discount: "75%",
        rating: "4.7",
        color: ["success", "danger", "secondary"],
        size: ["40", "41", "42"],
        stock: "08",
        orders: "55",
        publish: "30 Mar, 2021",
    },
    {
        id: 6,
        productImg: img5,
        productTitle: "Lace-Up Casual Shoes For Men",
        category: "Fashion",
        price: "229.00",
        discount: "0%",
        rating: "4.0",
        color: ["danger"],
        size: ["40", "41", "42"],
        stock: "15",
        orders: "48",
        publish: "12 Oct, 2021",
    },
    {
        id: 7,
        productImg: img6,
        productTitle: "Striped High Neck Casual Men Orange Sweater",
        category: "Fashion",
        price: "120.00",
        discount: "48%",
        rating: "4.8",
        size: ["s", "m", "l", "xl"],
        stock: "12",
        orders: "45",
        publish: "15 May, 2021",
    },
    {
        id: 8,
        productImg: img9,
        productTitle: "Lace-Up Casual Shoes For Men",
        category: "Kids",
        price: "229.00",
        discount: "15%",
        rating: "2.4",
        color: ["light", "warning"],
        size: ["s", "l"],
        stock: "20",
        orders: "48",
        publish: "21 Jun, 2021",
    },
    {
        id: 9,
        productImg: img10,
        productTitle: "Printed, Typography Men Round Neck Black T-shirt",
        category: "Fashion",
        price: "81.99",
        discount: "0%",
        rating: "4.9",
        color: ["dark", "light"],
        size: ["s", "m", "l", "xl"],
        stock: "14",
        orders: "55",
        publish: "15 Jan, 2021",
    },
    {
        id: 10,
        productImg: img12,
        productTitle: "Carven Lounge Chair Red",
        category: "Furniture",
        price: "209.99",
        discount: "0%",
        rating: "4.1",
        color: ["secondary", "dark", "danger", "light"],
        stock: "20",
        orders: "60",
        publish: "15 Jun, 2021",
    },
    {
        id: 11,
        productImg: img3,
        productTitle: "Ninja Pro Max Smartwatch",
        category: "Watches",
        price: "309.09",
        discount: "20%",
        rating: "3.5",
        color: ["secondary", "info"],
        stock: "12",
        orders: "48",
        publish: "12 Oct, 2021",
    },
    {
        id: 12,
        productImg: img2,
        productTitle: "Opinion Striped Round Neck Green T-shirt",
        category: "Fashion",
        price: "126.99",
        discount: "0%",
        rating: "4.1",
        color: ["success"],
        size: ["s", "m", "l", "xl"],
        stock: "06",
        orders: "30",
        publish: "06 Jan, 2021",
    }
];

const categoryListData = [
    {
        id: 1,
        categoryImg: headphone,
        categoryTitle: "Headphone",
        subCategory: ["Wireless", "Gaming", "Circumaural (over-ear)", "Supra-aural (on-ear)", "Over-Ear Headphones", "On-Ear Headphones", "True Wireless Earbuds"],
        description: "Headphones are a pair of small speakers used for listening to sound from a computer, music player or other such electronic device."
    },
    {
        id: 2,
        categoryImg: smartwatch,
        categoryTitle: "Watch",
        subCategory: ["Digital Watches", "Dive Watches", "Pilot's Watches", "Field Watches", "Analog Watches", "Quartz Watches"],
        description: "A watch is a symbol of time and wearing a watch implies that you respect the importance of time."
    },
    {
        id: 3,
        categoryImg: sofa,
        categoryTitle: "Furniture",
        subCategory: ["Beds", "Cabinets", "Chairs & Seating", "Desks"],
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
    },
    {
        id: 4,
        categoryImg: clothes,
        categoryTitle: "Clothing",
        subCategory: ["Casual Wear", "Formal Wear", "Business Attire", "Sportswear", "Jackets and coats", "Suits"],
        description: "In enim justo rhoncus ut imperdiet a venenatis vitae justo. Nullam dictum felis eu pede mollis pretium integer tincidunt aenean vulputate eleifend tellus."
    },
    {
        id: 5,
        categoryImg: babyshoe,
        categoryTitle: "Footwear",
        subCategory: ["Athletic Shoes", "Leather Shoes", "Figure Shoes", "Crocs"],
        description: "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend"
    },
    {
        id: 6,
        categoryImg: lightbulb,
        categoryTitle: "Lighting",
        subCategory: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Track Light"],
        description: "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting."
    },
    {
        id: 7,
        categoryImg: cosmetics,
        categoryTitle: "Beauty & Personal Care",
        subCategory: ["Baby Care", "Deodorants", "Feminine Care", "Fragrances"],
        description: "Beauty Care is basically the science of beauty treatment that involves skin Care, hair Care, manicure, pedicure, Anti- aging treatments, facials, styling and so on."
    },
    {
        id: 8,
        categoryImg: book,
        categoryTitle: "Books",
        subCategory: ["Fantasy", "Horror", "Mystery", "Romance", "Classics", "Poetry", "Short stories"],
        description: "Books are portable and compact, and thus have an advantage over other media forms. Unlike other print media, books most often deal with a single subject."
    },
    {
        id: 9,
        categoryImg: smartwatch,
        categoryTitle: "Other Accessories",
        subCategory: ["Bags", "Eyewear", "Belts", "Hair accessories"],
        description: "For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words."
    },
    {
        id: 10,
        categoryImg: cosmetics,
        categoryTitle: "Beauty & Personal Care",
        subCategory: ["Baby Care", "Deodorants", "Feminine Care", "Fragrances"],
        description: "Beauty Care is basically the science of beauty treatment that involves skin Care, hair Care, manicure, pedicure, Anti- aging treatments, facials, styling and so on."
    },
    {
        id: 11,
        categoryImg: book,
        categoryTitle: "Books",
        subCategory: ["Fantasy", "Horror", "Mystery", "Romance", "Classics", "Poetry", "Short stories"],
        description: "Books are portable and compact, and thus have an advantage over other media forms. Unlike other print media, books most often deal with a single subject."
    },
    {
        id: 12,
        categoryImg: smartwatch,
        categoryTitle: "Other Accessories",
        subCategory: ["Bags", "Eyewear", "Belts", "Hair accessories"],
        description: "For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words."
    }
];

const subCategoryListData = [
    {
        id: 1,
        subCategoryId: '#TBSC12',
        subcategory: 'Horror',
        category: 'Books',
        craetedby: 'Admin'
    },
    {
        id: 2,
        subCategoryId: '#TBSC11',
        subcategory: 'Feminine Care',
        category: 'Beauty & Personal Care',
        craetedby: 'Admin'
    },
    {
        id: 3,
        subCategoryId: '#TBSC10',
        subcategory: 'Chairs & Seating',
        category: 'Furniture',
        craetedby: 'Admin'
    },
    {
        id: 4,
        subCategoryId: '#TBSC9',
        subcategory: 'Ambient',
        category: 'Lighting',
        craetedby: 'Admin'
    },
    {
        id: 5,
        subCategoryId: '#TBSC8',
        subcategory: 'Casual Wear',
        category: 'Clothing',
        craetedby: 'Admin'
    },
    {
        id: 6,
        subCategoryId: '#TBSC7',
        subcategory: 'Sportswear',
        category: 'Clothing',
        craetedby: 'Admin'
    },
    {
        id: 7,
        subCategoryId: '#TBSC6',
        subcategory: 'Supra-aural (on-ear)',
        category: 'Headphone',
        craetedby: 'Admin'
    },
    {
        id: 8,
        subCategoryId: '#TBSC5',
        subcategory: 'Digital Watches',
        category: 'Clothing',
        craetedby: 'Admin'
    },
    {
        id: 9,
        subCategoryId: '#TBSC4',
        subcategory: 'Cabinets',
        category: 'Furniture',
        craetedby: 'Admin'
    },
    {
        id: 10,
        subCategoryId: '#TBSC3',
        subcategory: 'Bags',
        category: 'Other Accessories',
        craetedby: 'Admin'
    },
    {
        id: 11,
        subCategoryId: '#TBSC2',
        subcategory: 'Leather Shoes ',
        category: 'Footwear',
        craetedby: 'Admin'
    },
    {
        id: 12,
        subCategoryId: '#TBSC1',
        subcategory: 'Wireless',
        category: 'Headphone',
        craetedby: 'Admin'
    }
]

export { productList, categoryListData, subCategoryListData }