import companyImg1 from "assets/images/companies/img-1.png";
import companyImg2 from "assets/images/companies/img-2.png";
import companyImg3 from "assets/images/companies/img-3.png";
import companyImg4 from "assets/images/companies/img-4.png";
import companyImg5 from "assets/images/companies/img-5.png";
import companyImg6 from "assets/images/companies/img-6.png";
import companyImg7 from "assets/images/companies/img-7.png";
// import companyImg8 from "@assets/images/companies/img-8.png";

const sellerList = [
    {
        id: 1,
        sellerName: "Alfred Hurst",
        itemStock: "245",
        balance: "$748.32k",
        email: "alfredH@toner.com",
        phone: "415-778-3654",
        createDate: "18 Dec, 2018",
        status: "Inactive"
    },
    {
        id: 2,
        sellerName: "Tommy Carey",
        itemStock: "3982",
        balance: "$1452.74k",
        email: "careytommy@toner.com",
        phone: "963-012-7495",
        createDate: "02 Jan, 2023",
        status: "Active"
    },
    {
        id: 3,
        sellerName: "Cassius Brock",
        itemStock: "1571",
        balance: "$341.81k",
        email: "brock@toner.com",
        phone: "415-778-3654",
        createDate: "24 Nov, 2022",
        status: "Active"
    },
    {
        id: 4,
        sellerName: "Camilla Winters",
        itemStock: "1873",
        balance: "$671.00k",
        email: "camilla@toner.com",
        phone: "013-789-9876",
        createDate: "12 Jan, 2023",
        status: "Inactive"
    },
    {
        id: 5,
        sellerName: "Gabrielle Holden",
        itemStock: "2268",
        balance: "$803.11k",
        email: "gabrielle@toner.com",
        phone: "032-012-3654",
        createDate: "17 Nov, 2022",
        status: "Active"
    },
    {
        id: 6,
        sellerName: "Kristina Hooper",
        itemStock: "976",
        balance: "$203.65k",
        email: "kristina@toner.com",
        phone: "654-321-0789",
        createDate: "04 Oct, 2020",
        status: "Inactive"
    },
    {
        id: 7,
        sellerName: "Jacques Leon",
        itemStock: "2870",
        balance: "$2145.20k",
        email: "jacques@toner.com",
        phone: "094-951-3576",
        createDate: "07 Feb, 2015",
        status: "Active"
    },
    {
        id: 8,
        sellerName: "Theresa Crawford",
        itemStock: "2504",
        balance: "$3468.41k",
        email: "crawford@toner.com",
        phone: "364-953-0764",
        createDate: "28 Oct, 2014",
        status: "Active"
    },
    {
        id: 9,
        sellerName: "Alina Holland",
        itemStock: "703",
        balance: "$351.91k",
        email: "hollandalina@toner.com",
        phone: "275-754-9658",
        createDate: "16 Aug, 2016",
        status: "Active"
    },
    {
        id: 10,
        sellerName: "Edward Rogers",
        itemStock: "2419",
        balance: "$1876.02k",
        email: "edwardro@toner.com",
        phone: "546-010-0739",
        createDate: "25 Nov, 2021",
        status: "Inactive"
    },
    {
        id: 11,
        sellerName: "Camilla Winters",
        itemStock: "1873",
        balance: "$671.00k",
        email: "camilla@toner.com",
        phone: "013-789-9876",
        createDate: "12 Jan, 2023",
        status: "Inactive"
    }
]

const sellerGrid = [
    {
        id: 1,
        sellerName: "Zibra Fashion Ltd",
        companyLogo: companyImg5,
        verified: true,
        webUrl: "www.zibrafashion.com",
        stock: "2587",
        revenue: "438.36"
    }, {
        id: 2,
        sellerName: "Terry & Jerry",
        companyLogo: companyImg5,
        verified: false,
        webUrl: "www.terry&jerry.com",
        stock: "850",
        revenue: "213.52"
    }, {
        id: 3,
        sellerName: "Themesbrand",
        companyLogo: companyImg1,
        verified: false,
        webUrl: "www.themesbrand.com",
        stock: "1546",
        revenue: "383.50"
    }, {
        id: 4,
        sellerName: "Digital Galaxy",
        companyLogo: companyImg4,
        verified: true,
        webUrl: "www.digitalgalaxy.com",
        stock: "241",
        revenue: "184.20"
    }, {
        id: 5,
        sellerName: "Rotic Fashion",
        companyLogo: companyImg3,
        verified: false,
        webUrl: "www.roticfashion.com",
        stock: "654",
        revenue: "224.10"
    }, {
        id: 6,
        sellerName: "RND Fashion",
        companyLogo: companyImg2,
        verified: true,
        webUrl: "www.rndfashion.com",
        stock: "150",
        revenue: "180.62"
    }, {
        id: 7,
        sellerName: "Jorce Medicines",
        companyLogo: companyImg7,
        verified: false,
        webUrl: "www.jorcemedicines.com",
        stock: "540",
        revenue: "947.33"
    }, {
        id: 8,
        sellerName: "Pich Hub",
        companyLogo: companyImg6,
        verified: false,
        webUrl: "www.pichhub.com",
        stock: "874",
        revenue: "365.87"
    }, {
        id: 9,
        sellerName: "Chase Pitkin",
        companyLogo: companyImg5,
        verified: true,
        webUrl: "-",
        stock: "2587",
        revenue: "438.36"
    }, {
        id: 10,
        sellerName: "Star Merchant Services",
        companyLogo: companyImg4,
        verified: false,
        webUrl: "www.starmerchant.com",
        stock: "850",
        revenue: "213.52"
    }
]

export { sellerList, sellerGrid }