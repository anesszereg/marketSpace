import { Navigate } from "react-router-dom";

//dashbord
import Home from "Pages/Home";

//Catalog
import Catalog from "Pages/Catalog";
//shop
import ShopIndex from "Pages/Shop";
import Trackorder from "Pages/Shop/Trackorder";
import PaymentIndex from "Pages/Shop/Indexpayment";
import Review from "Pages/Shop/Review";
// import Confirm from "Pages/Shop/ Confirm";
import Orderhistory from "Pages/Shop/Orederhistory";
import Shopingcard from "Pages/Shop/Shopingcard";
// import Checkout from "Pages/Shop/Checkout";
import WishList from "Pages/Shop/WhishList";

//pages /product / grid
import Defaultgrid from "Pages/Product/Grid/Default";
import ProductSidebar from "Pages/Product/Grid/ProductSideBar";
import RightSidebar from "Pages/Product/Grid/RightSidebar";
import Nosider from "Pages/Product/Grid/Nosidebar";

//pages /product / list
import Listdefault from "Pages/Product/List/Default";
import LeftsideBar from "Pages/Product/List/LeftSideBar";
import Leftrightsidebar from "Pages/Product/List/Leftrightsidebar";
import Listnoslider from "Pages/Product/List/Listnosider";

//pages /user
import MyAccount from "Pages/User/MyAccount";
import SignUp from "Pages/User/SignUp";
import Signin from "Pages/User/SignIn";
import Passwordreset from "Pages/User/Passwordreset";
import Passwordcreate from "Pages/User/Passwordcreate";
import Successmsg from "Pages/User/Successmsg";
import Verifyemail from "Pages/User/Verifyemail";
import Logout from "Pages/User/Logout";
import Error404 from "Pages/User/Error404";
import Error500 from "Pages/User/Error500";
import Comingsoon from "Pages/User/Comingsoon";

//pages / Email
import Blackfriday from "Pages/Product/Email Product/Blackfriday";
import Flashsale from "Pages/Product/Email Product/Flashsale";
import Ordersuccess from "Pages/Product/Email Product/Ordersuccess";
import Ordersuccess2 from "Pages/Product/Email Product/Ordersuccess2";


//Productdetails
import Productdetails from "Pages/Product/Productdetails";

//categories
import Categories from "Pages/Product/Categories";

//about
import About from "Pages/Product/About";

//Purchase Guide
import Purchaseguide from "Pages/Product/Purchaseguide";

//Terms of Conditions
import Termsconditions from "Pages/Product/Termsconditions";

//Privacy Policy
import Privacypolicy from "Pages/Product/Privacypolicy";

//Storelocator
import Storelocator from "Pages/Product/Storelocator";

//FAQ
import FAQ from "Pages/Product/FAQ";

//Invoice
import Invoice from "Pages/Product/Invoice";

//contact
import ContactUs from "Pages/ContactUs/Contact";

const authProtectedRoutes = [
    { path: "/dashboard", component: <Home /> },
    //catalog
    { path: "/catalog/clothing", component: <Catalog /> },
    { path: "/product-list/left", component: <LeftsideBar /> },
    { path: "/products-grid/right", component: <RightSidebar /> },

    //shop
    { path: "/shop/address", component: <ShopIndex /> },
    { path: "/shop/order", component: <Trackorder /> },
    { path: "/shop/payment", component: <PaymentIndex /> },
    { path: "/shop/review", component: <Review />, isLight: "light" },
    // // { path: "/shop/confirm", component: <Confirm /> },
    { path: "/shop/orderhistory", component: <Orderhistory /> },
    { path: "/shop/shopingcard", component: <Shopingcard /> },
    // // { path: "/shop/checkout", component: <Checkout /> },
    { path: "/shop/wishList", component: <WishList /> },

    //pages
    //Product
    //grid
    { path: "/products-grid/Default", component: <Defaultgrid /> },
    { path: "/products-grid/sidebar-banner", component: <ProductSidebar /> },
    { path: "/products-grid/right", component: <RightSidebar /> },
    { path: "/products-grid", component: <Nosider /> },
    //list
    { path: "/product-list/defualt", component: <Listdefault /> },
    { path: "/product-list/left", component: <LeftsideBar /> },
    { path: "/product-list/right", component: <Leftrightsidebar /> },
    { path: "/product-list", component: <Listnoslider /> },


    //Productdetails
    { path: "/product-details", component: <Productdetails /> },

    //user
    //My Account
    { path: "/account", component: <MyAccount /> },

    //categories
    { path: "/products-category", component: <Categories /> },
    //about
    { path: "/about-us", component: <About /> },
    //Purchase Guide
    { path: "/purchase-guide", component: <Purchaseguide /> },
    //Terms of Conditions
    { path: "/terms-conditions", component: <Termsconditions /> },
    //Privacy Policy
    { path: "/privacy-policy", component: <Privacypolicy /> },
    //Storelocator
    { path: "/store-locator", component: <Storelocator /> },
    //FAQ
    { path: "/ecommerce-faq", component: <FAQ /> },
    //Invoice
    { path: "/invoice", component: <Invoice /> },
    //contact us
    { path: "/contact", component: <ContactUs /> },

    // this route should be at the end of all other routes
    // eslint-disable-next-line react/display-name
    {
        path: "/",
        exact: true,
        component: <Navigate to="/dashboard" />,
    },
    { path: "*", component: <Navigate to="/dashboard" /> },
]

const publicRoutes = [
    //user
    //Signin
    { path: "/auth-signin-basic", component: <Signin /> },
    //SignUp
    { path: "/auth-signup-basic", component: <SignUp /> },
    //Passwordreset
    { path: "/auth-pass-reset-basic", component: <Passwordreset /> },
    //Passwordcreate
    { path: "/auth-pass-change-basic", component: <Passwordcreate /> },
    //Successmsg
    { path: "/auth-success-msg-basic", component: <Successmsg /> },
    //Verifyemail
    { path: "/auth-twostep-basic", component: <Verifyemail /> },
    //Logout
    { path: "/auth-logout-basic", component: <Logout /> },
    //error 404
    { path: "/auth-404", component: <Error404 /> },
    //error 500
    { path: "/auth-500", component: <Error500 /> },
    //Comingsoon
    { path: "/coming-soon", component: <Comingsoon /> },

    //email
    //Blackfriday
    { path: "/email-black-friday", component: <Blackfriday /> },
    //Flashsale
    { path: "/email-flash-sale", component: <Flashsale /> },
    //oreder success
    { path: "/email-order-success", component: <Ordersuccess /> },
    //Ordersuccess2
    { path: "/email-order-success-2", component: <Ordersuccess2 /> },
]

export { authProtectedRoutes, publicRoutes };