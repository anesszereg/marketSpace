//import Images
import avatar1 from "@assets/images/users/avatar-1.jpg";
import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar3 from "@assets/images/users/avatar-3.jpg";
import avatar4 from "@assets/images/users/avatar-4.jpg";
import avatar5 from "@assets/images/users/avatar-5.jpg";
import avatar6 from "@assets/images/users/avatar-6.jpg";
import avatar8 from "@assets/images/users/avatar-8.jpg";
import avatar9 from "@assets/images/users/avatar-9.jpg";
import avatar10 from "@assets/images/users/avatar-10.jpg";

import companyImg1 from "@assets/images/companies/img-1.png"
import companyImg2 from "@assets/images/companies/img-2.png"
import companyImg3 from "@assets/images/companies/img-3.png"
import companyImg4 from "@assets/images/companies/img-4.png"
import companyImg5 from "@assets/images/companies/img-5.png"
import companyImg6 from "@assets/images/companies/img-6.png"
import companyImg7 from "@assets/images/companies/img-7.png"
import companyImg8 from "@assets/images/companies/img-8.png"

import smallImg1 from "@assets/images/small/img-1.jpg"
import smallImg2 from "@assets/images/small/img-2.jpg"
import smallImg3 from "@assets/images/small/img-3.jpg"
import smallImg4 from "@assets/images/small/img-4.jpg"
import smallImg5 from "@assets/images/small/img-5.jpg"
import smallImg6 from "@assets/images/small/img-6.jpg"
import smallImg7 from "@assets/images/small/img-7.jpg"
import smallImg8 from "@assets/images/small/img-8.jpg"
import smallImg9 from "@assets/images/small/img-9.jpg"
import smallImg10 from "@assets/images/small/img-10.jpg"
import smallImg11 from "@assets/images/small/img-11.jpg"
import smallImg12 from "@assets/images/small/img-12.jpg"

const simplePageProjectData = [
    { id: 1, companyLogo: companyImg1, title: "Chat App Update", lastUpdate: "2 year Ago", members: [{ id: 1, img: avatar1 }, { id: 2, img: avatar3 }, { id: 3, text: "J" }], status: "Inprogress", progress: "80%" },
    { id: 2, companyLogo: companyImg2, title: "ABC Project Customization", lastUpdate: "2 month Ago", members: [{ id: 1, img: avatar2 }, { id: 2, img: avatar4 }, { id: 3, img: avatar1 }], status: "Progress", progress: "65%" },
    { id: 3, companyLogo: companyImg3, title: "Client - Frank Hook", lastUpdate: "1 year Ago", members: [{ id: 1, text: "M" }, { id: 2, img: avatar1 }, { id: 3, img: avatar3 }], status: "New", progress: "50%" },
    { id: 4, companyLogo: companyImg5, title: "Hybrix Project", lastUpdate: "11 year Ago", members: [{ id: 1, img: avatar2 }, { id: 2, img: avatar5 }], status: "Completed", progress: "95%" },
    { id: 5, companyLogo: companyImg6, title: "Brand Logo Design", lastUpdate: "10 min Ago", members: [{ id: 1, img: avatar1 }, { id: 2, img: avatar3 }, { id: 3, text: "E" }], status: "New", progress: "38%" },
    { id: 6, companyLogo: companyImg4, title: "Chat App", lastUpdate: "8 hr Ago", members: [{ id: 1, img: avatar1 }, { id: 2, text: "R" }, { id: 3, img: avatar3 }], status: "Inprogress", progress: "76%" },
    { id: 7, companyLogo: companyImg8, title: "Bsuiness Template - UI/UX design", lastUpdate: "7 month Ago", members: [{ id: 1, img: avatar6 }, { id: 2, img: avatar8 }, { id: 3, text: "R" }, { id: 4, img: avatar3 }], status: "Completed", progress: "87%" },
    { id: 8, companyLogo: companyImg7, title: "Project Update", lastUpdate: "48 min Ago", members: [{ id: 1, img: avatar6 }, { id: 2, img: avatar2 }, { id: 3, img: avatar5 }], status: "Progress", progress: "69%" },
]

const pricingPriceList = [
    { id: 1, plan: "Startup", montlyPlane: "$19", annuPlane: "$171", delAnnuPlane: "$228", projects: "3", customers: "229", ftpLogin: "7", support: "No", storage: "2GB", checked: true },
    { id: 2, plan: "Professional", montlyPlane: "$29", annuPlane: "$261", delAnnuPlane: "$348", projects: "8", customers: "449", ftpLogin: "7", support: "24/7", storage: "8GB", checked: false },
    { id: 3, plan: "Enterprise", montlyPlane: "$39", annuPlane: "$351", delAnnuPlane: "$468", projects: "15", customers: "999", ftpLogin: "12", support: "24/7", storage: "16GB", checked: false },
    { id: 4, plan: "Unlimited", montlyPlane: "$49", annuPlane: "$441", delAnnuPlane: "$588", projects: "Unlimited", customers: "Unlimited", ftpLogin: "Unlimited", support: "24/7", storage: "Unlimited", checked: false }
]

const pricingPlans = [
    { id: 1, topBorderColor: "success", plan: "Starter", price: "$19", planDesc: "The perfect way to get started and get used to our tools.", projects: "3", customers: "299", ftpLogin: "5", currentplan: true },
    { id: 2, topBorderColor: "secondary", plan: "Professional", price: "$29", planDesc: "Excellent for scalling teams to build culture. Special plan for professional business.", projects: "8", customers: "449", ftpLogin: "7", support: true },
    { id: 3, topBorderColor: "primary", plan: "Enterprise", price: "$39", planDesc: "This plan is for those who have a team alredy and running a large business.", projects: "15", customers: "Unlimited", ftpLogin: "12", support: true, storage: "35GB" },
    { id: 4, topBorderColor: "info", plan: "Unlimited", price: "$49", planDesc: "For most businesses that want to optimize web queries.", projects: "Unlimited", customers: "Unlimited", ftpLogin: "Unlimited", support: true, storage: "Unlimited", domian: true, popular: true }
]

const pricingPackageplan = [
    { id: 1, icon: "ri-book-mark-line", plan: "Basic Plan", planfor: "For Startup", price: "19.99", projects: "3", customers: "299", ftpLogin: "5", btnColor: "soft-secondary", btntext: "Sign Up Free" },
    { id: 2, icon: "ri-medal-line", plan: "Pro Business", planfor: "Professional plans", price: "29.99", projects: "15", customers: "Unlimited", ftpLogin: "12", btnColor: "secondary", btntext: "Get Started", support: true },
    { id: 3, icon: "ri-stack-line", plan: "Platinum Plan", planfor: "Enterprise Businesses", price: "39.99", projects: "Unlimited", customers: "Unlimited", ftpLogin: "Unlimited", btnColor: "soft-secondary", btntext: "Get Started", support: true, storage: true, domain: true },
]

const pricingPriceplan = [
    { id: 1, bgColor: "primary", plan: "Starter", planfor: "Starter plans", price: "22", users: "1", storage: "01 GB", domain: "No", support: "No", btnColor: "primary" },
    { id: 2, bgColor: "danger", plan: "Professional", planfor: "Professional plans", price: "29.99", users: "1", storage: "01 GB", domain: "No", support: "No", btnColor: "danger", isRibbon: true },
    { id: 3, bgColor: "info", plan: "Unlimited", planfor: "Unlimited plans", price: "49.99", users: "5", storage: "40 GB", domain: "Yes", support: "Yes", btnColor: "info" },
]

const searchResultsSwiperData = [
    { id: 1, img: smallImg12, title: "Bootstrap" },
    { id: 2, img: smallImg1, title: "Website" },
    { id: 3, img: smallImg2, title: "Responsive" },
    { id: 4, img: smallImg4, title: "Design" },
    { id: 5, img: smallImg3, title: "eCommerce" },
    { id: 6, img: smallImg5, title: "Templates" },
    { id: 7, img: smallImg7, title: "Admin Panal" },
    { id: 8, img: smallImg6, title: "Simple" },
    { id: 9, img: smallImg11, title: "Dark" },
    { id: 10, img: smallImg9, title: "Users" },
    { id: 11, img: smallImg10, title: "Office" },
]

const searchResultsGalleryData = [
    { id: 1, img: smallImg1, caption: "Glasses and laptop from above", captiondesc: "In enim justo rhoncus ut, imperdiet a venenatis vitae justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus." },
    { id: 2, img: smallImg2, caption: "Pretty fun and relaxed day", captiondesc: "Donec quam felis ultricies nec, pellentesque eu, pretium quis sem. Nulla consequat massa quis enim. Donec pede justo fringilla vel, aliquet nec vulputate eget." },
    { id: 3, img: smallImg3, caption: "Photo was taken in Beach", captiondesc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 4, img: smallImg4, caption: "Drawing a sketch", captiondesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." },
    { id: 5, img: smallImg5, caption: "Working at a coffee shop", captiondesc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et." },
    { id: 6, img: smallImg6, caption: "Working at a coffee shop", captiondesc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias." },
    { id: 7, img: smallImg7, caption: "Arts & Culture", captiondesc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes." },
    { id: 8, img: smallImg8, caption: "Team work, work colleagues, working together", captiondesc: "Aenean leo ligula porttitor eu consequat vitae, eleifend ac enim. Aliquam lorem ante, dapibus in viverra quis feugiat a tellus. Phasellus viverra nulla ut metus varius laoreet." },
    { id: 9, img: smallImg9, caption: "Textures & Patterns", captiondesc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae." },
    { id: 10, img: smallImg10, caption: "Solo trip to near by place mountain", captiondesc: "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular." },
    { id: 11, img: smallImg11, caption: "Cycling in the countryside", captiondesc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias." },
    { id: 12, img: smallImg12, caption: "Working at a coffee shop", captiondesc: "It will be as simple as Occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental." },
]

const searchResultsNewsData = [
    { id: 1, img: smallImg1, newsoutlet: "CNBC News", newstitle: "A mix of friends and strangers heading off to find an adventure", name: "James Ballard", time: "5 hrs ago" },
    { id: 2, img: smallImg2, newsoutlet: "News TV", newstitle: "How to get creative in your work ?", name: "Ruby Griffin", time: "1 days ago" },
    { id: 3, img: smallImg3, newsoutlet: "News TV", newstitle: "How to become a best sale marketer in a year!", name: "Elwood Arter", time: "5 days ago" },
    { id: 4, img: smallImg4, newsoutlet: "News TV", newstitle: "Manage white space in responsive layouts ?", name: "Elwood Arter", time: "1 month ago" },
    { id: 5, img: smallImg5, newsoutlet: "News TV", newstitle: "Stack designer Olivia Murphy offers freelancing advice", name: "Elwood Arter", time: "24 Nov, 2022" },
    { id: 6, img: smallImg6, newsoutlet: "News TV", newstitle: "A day in the of a professional fashion designer", name: "Elwood Arter", time: "19 Nov, 2022" },
    { id: 7, img: smallImg7, newsoutlet: "News TV", newstitle: "Design your apps in your own way", name: "Elwood Arter", time: "19 Nov, 2022" },
    { id: 8, img: smallImg8, newsoutlet: "News TV", newstitle: "How apps is changing the IT world", name: "Elwood Arter", time: "19 Nov, 2022" },
]

const searchResultsImagesData = [
    { id: 1, img: smallImg1, caption: "Glasses and laptop from above" },
    { id: 2, img: smallImg3, caption: "Photo was taken in Beach" },
    { id: 3, img: smallImg2, caption: "Pretty fun and relaxed day" },
    { id: 4, img: smallImg10, caption: "Solo trip to near by place mountain" },
    { id: 5, img: smallImg11, caption: "Team work, work colleagues, working together" },
    { id: 6, img: smallImg12, caption: "Cycling in the countryside" },
    { id: 7, img: smallImg7, caption: "Working at a coffee shop" },
    { id: 8, img: smallImg8, caption: "Arts & Culture" },
    { id: 9, img: smallImg9, caption: "Textures & Patterns" },
]

const teamMemberList = [
    {
        id: 1,
        bookmark: false,
        img: avatar9,
        name: "Ross Jordan",
        userName: "@ross",
        position: "Web Designer",
        contactNo: "501-804-0411",
        email: "rossjordan@gmail.com",
        designation: "Web Designer",
        progress: "32%",
        projects: "874",
        overdue: "21",
        tasks: "1032"
    },
    {
        id: 2,
        bookmark: true,
        img: avatar8,
        name: "Patience harrington",
        userName: "@patience",
        position: "Account Executive",
        contactNo: "870-455-0378",
        email: "patienceharrington@gmail.com",
        designation: "Account Executive",
        progress: "87%",
        projects: "514",
        overdue: "21",
        tasks: "225"
    },
    {
        id: 3,
        bookmark: false,
        img: avatar6,
        name: "Bryant Diaz",
        userName: "@bryant",
        position: "Engineering Manager",
        contactNo: "530-461-3338",
        email: "bryantdiaz@gmail.com",
        designation: "Engineering Manager",
        progress: "85%",
        projects: "302",
        overdue: "12",
        tasks: "712"
    },
    {
        id: 4,
        bookmark: true,
        img: avatar5,
        name: "Damon Boxter",
        userName: "@damon",
        position: "UI/UX Designer",
        contactNo: "303-215-6114",
        email: "damonboxter@gmail.com",
        designation: "UI/UX Designer",
        progress: "70%",
        projects: "526",
        overdue: "18",
        tasks: "632"
    },
    {
        id: 5,
        bookmark: false,
        img: avatar4,
        name: "Jordan Villareal",
        userName: "@jordan",
        position: "Software Engineer",
        contactNo: "276-646-2337",
        email: "jordanvillareal@gmail.com",
        designation: "Software Engineer",
        progress: "65%",
        projects: "321",
        overdue: "20",
        tasks: "1002"
    },
    {
        id: 6,
        bookmark: false,
        img: avatar3,
        name: "Cristofer Leblanc",
        userName: "@cristofer",
        position: "Product Manager",
        contactNo: "330-850-7683",
        email: "cristoferleblanc@gmail.com",
        designation: "Product Manager",
        progress: "50%",
        projects: "285",
        overdue: "10",
        tasks: "132"
    },
    {
        id: 7,
        bookmark: true,
        img: avatar2,
        name: "Allyson Booker",
        userName: "@allyson",
        position: "Lead Product Design",
        contactNo: "314-835-9287",
        email: "allysonbooker@gmail.com",
        designation: "Lead Product Design",
        progress: "38%",
        projects: "174",
        overdue: "15",
        tasks: "500"
    },
    {
        id: 8,
        bookmark: false,
        img: avatar1,
        name: "Marie Ward",
        userName: "@marie",
        position: "Project Manager",
        contactNo: "215-820-4037",
        email: "marieward@gmail.com",
        designation: "Project Manager",
        progress: "85%",
        projects: "874",
        overdue: "21",
        tasks: "1032"
    }
]

const basicTeamExampleData = [
    { id: 1, img: avatar9, name: "Jordan Martino", email: "jordan.martino@hybrix.com" },
    { id: 2, img: avatar10, name: "Nancy Martino", email: "nancy.martino@hybrix.com" },
    { id: 3, img: avatar1, name: "Pieter Novitsky", email: "pieter.novitsky@hybrix.com" },
    { id: 4, img: avatar9, name: "Allyson Booker", email: "allyson.booker@hybrix.com" },
    { id: 5, img: avatar3, name: "Cristofer Leblanc", email: "cristofer.leblanc@hybrix.com" },
]

export { simplePageProjectData, pricingPriceList, pricingPlans, pricingPackageplan, pricingPriceplan, searchResultsSwiperData, searchResultsGalleryData, searchResultsNewsData, searchResultsImagesData, teamMemberList, basicTeamExampleData }