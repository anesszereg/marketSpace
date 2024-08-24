import React from "react";
import { Navigate } from "react-router-dom";

//  overview
import Overview from "pages/Overview";

// Bootstrap UI
import Alert from "pages/bootstrapUI/UiAlert/index"
import Badge from "pages/bootstrapUI/UiBadge/index"
import Button from "pages/bootstrapUI/UiButton/index"
import Colors from "pages/bootstrapUI/UiColor/index";
import Cards from "pages/bootstrapUI/UiCard/index";
import Carousel from "pages/bootstrapUI/UiCarousel/index";
import DropDown from "pages/bootstrapUI/UiDropdown/index";
import Grid from "pages/bootstrapUI/UiGrid/index";
import Images from "pages/bootstrapUI/UiImage/index";
import Tabs from "pages/bootstrapUI/UiTabs/index";
import AccordianCollapse from "pages/bootstrapUI/UiAccordian/index";
import Modals from "pages/bootstrapUI/UiModal/index";
import Offcanvas from "pages/bootstrapUI/UiOffcanvas/index";
import PlaceHolder from "pages/bootstrapUI/UiPlaceholder/index";
import Progress from "pages/bootstrapUI/UiProgress/index";
import Notifications from "pages/bootstrapUI/UiNotification/index";
import Media from "pages/bootstrapUI/UiMedia/index";
import Video from "pages/bootstrapUI/UiVideo/index";
import Typography from "pages/bootstrapUI/UiTypography/index";
import Lists from "pages/bootstrapUI/UiLists/index";
import General from "pages/bootstrapUI/UiGeneral/index";
import Utilities from "pages/bootstrapUI/UiUtility/index";

// Custom UI
import Ribbons from "pages/customUI/UiRibbons/index";
import Profiles from "pages/customUI/UiProfile/index";
import Counters from "pages/customUI/UiCounter/index";

// Table
import BasicTables from "pages/Table/BasicTable/index";
// import GridJs from "pages/Table/TableGridJs/index";
import ListJs from "pages/Table/Reacttable/index";
import Datatables from "pages/Table/DataTables/index";

// Icons
import RemixIcons from "pages/Icons/IconRemix/IconRemix";
import BoxIcons from "pages/Icons/BoxIcons/BoxIcons";
import MaterialDesign from "pages/Icons/MaterialDesign/MaterialDesign";
import BootstrapIcon from "pages/Icons/BootstrapIcon//BootstrapIcon";
import PhosphorIcon from "pages/Icons/PhosphorIcon/PhosphorIcon";

// Map
import GoogleMap from "pages/Maps/GoogleMap/GoogleMap";
// import Leaflet from "pages/Maps/Leaflet/Leaflet";
// import Vectormap from "pages/Maps/VectorMap/VectorMap";

// Advance Ui
import NestableList from "pages/advanceUI/UiNestable/index";
import ScrollBar from "pages/advanceUI/UiScrollbar/index";
import SwiperSlider from "pages/advanceUI/UiSwiperSlider/index";
import Ratings from "pages/advanceUI/UiRatings/index";
import HightLights from "pages/advanceUI/UiHightlight/index";

// Form
import BasicForm from "pages/Forms/BasicElement/index";
import FormSelect from "pages/Forms/FormSelect/index";
import FormCheckboxRadio from "pages/Forms/CheckboxRadio/index";
import FormPickers from "pages/Forms/FormPickers/index";
import FormInputMask from "pages/Forms/FormInputMask/index";
import FormAdvanced from "pages/Forms/FormAdvanced/index";
import FormRangeSlider from "pages/Forms/RangeSlider/index";
import FormValidation from "pages/Forms/FormValidation/index";
import FormWizard from "pages/Forms/FormWizard/index";
import EditorForm from "pages/Forms/FormEditors/index";
import FileUpload from "pages/Forms/FormFileupload/index";
import FormLayout from "pages/Forms/FormLayouts/index";
import FormTomSelect from "pages/Forms/FormTomSelect/index";

// Chart
import ApexLine from "pages/ApexChart/Line/index";
import ApexArea from "pages/ApexChart/Area/index";
import ApexBar from "pages/ApexChart/Bar/index";
import ApexMixed from "pages/ApexChart/Mixed/index";
import ApexTimeline from "pages/ApexChart/Timeline/index";
import ApexCandle from "pages/ApexChart/Candlestick/index";
import ApexBoxplot from "pages/ApexChart/Boxplot/index";
import ApexBubble from "pages/ApexChart/Bubbles/index";
import ApexScatter from "pages/ApexChart/Scatter/index";
import ApexHeatmap from "pages/ApexChart/Heatmap/index";
import ApexTreemap from "pages/ApexChart/Treemap/index";
import ApexPie from "pages/ApexChart/Pie/index";
import ApexRadialbar from "pages/ApexChart/Radialbar/index";
import ApexRadar from "pages/ApexChart/Radar/index";
import ApexPolar from "pages/ApexChart/Polar/index";
import ApexColumn from "pages/ApexChart/Column/index";





// interface authProtectedRoutesProps {
//     path : string;
//     component : any;
//     exact ?: boolean;
// } 

const authProtectedRoutes = [

    // Overview
    { path: "/index", component: <Overview /> },


    // Bootstrap Ui

    // Alert
    { path: "/ui-alerts", component: <Alert /> },

    // Badge
    { path: "/ui-badges", component: <Badge /> },

    // Button
    { path: "/ui-buttons", component: <Button /> },

    // Colors
    { path: "/ui-colors", component:  <Colors /> },

    // Cards
    { path: "/ui-cards", component: <Cards /> },

    // Carousel
    { path: "/ui-carousel", component: <Carousel /> },

    // Dropdown
    { path: "/ui-dropdowns", component: <DropDown /> },

    // Grid
    { path: "/ui-grid", component: <Grid /> },

    // Images
    { path: "/ui-images", component: <Images /> },

    // Tabs
    { path: "/ui-tabs", component: <Tabs /> },

    // Accordian & Collapse
    { path: "/ui-accordions", component: <AccordianCollapse /> },

    // Modals
    { path: "/ui-modals", component: <Modals /> },

    // Offcanvas 
    { path: "/ui-offcanvas", component: <Offcanvas /> },

    // PlaceHolder
    { path: "/ui-placeholders", component: <PlaceHolder /> },

    // Progress
    { path: "/ui-progress", component: <Progress /> },

    // Notifications
    { path: "/ui-notifications", component: <Notifications /> },

    // Media
    { path: "/ui-media", component: <Media /> },

    // Embeded Video
    { path: "/ui-embed-video", component: <Video /> },

    // Typography
    { path: "/ui-typography", component: <Typography /> },

    // Lists
    { path: "/ui-lists", component: <Lists /> },

    // General
    { path: "/ui-general", component: <General /> },

    // Utilities
    { path: "/ui-utilities", component: <Utilities /> },



    // Advance Ui

    // Nestable List
    { path: "/advance-ui-nestable", component: <NestableList /> },

    // ScrollBar
    { path: "/advance-ui-scrollbar", component: <ScrollBar /> },

    // Swipper Slider
    { path: "/advance-ui-swiper", component: <SwiperSlider /> },

    // Ratings
    { path: "/advance-ui-ratings", component: <Ratings /> },

    // HighLight
    { path: "/advance-ui-highlight", component: <HightLights /> },




    // Custom Ui

    // Ribbons
    { path: "/ui-ribbons", component: <Ribbons /> },

    // Profile
    { path: "/ui-profile", component: <Profiles /> },

    // Counter
    { path: "/ui-counter", component: <Counters /> },



    // Forms

    // BasicForm
    { path: "/forms-elements", component: <BasicForm /> },

    // FormSelect
    { path: "/forms-select", component: <FormSelect /> },

    // CheckboxRadio
    { path: "/forms-checkboxs-radios", component: <FormCheckboxRadio /> },

    // Pickers
    { path: "/forms-pickers", component: <FormPickers /> },

    // InputMask
    { path: "/forms-masks", component: <FormInputMask /> },

    // Form Advanced
    { path: "/forms-advanced", component: <FormAdvanced /> },

    // Range Slider
    { path: "/forms-range-sliders", component: <FormRangeSlider /> },

    // Form Validation
    { path: "/forms-validation", component: <FormValidation /> },

    // Wizard 
    { path: "/forms-wizard", component: <FormWizard /> },

    // Editors
    { path: "/forms-editors", component: <EditorForm /> },

    // File Upload
    { path: "/forms-file-uploads", component: <FileUpload /> },

    // Form Layout
    { path: "/forms-layouts", component: <FormLayout /> },

    // From Tom-Select
    { path: "/forms-tom-select", component: <FormTomSelect /> },



    // Tables

    // BasicTables
    { path: "/tables-basic", component: <BasicTables /> },

    // Grid Js
    // { path: "/tables-gridjs", component: <GridJs /> },

    // List Js
    { path: "/tables-react", component: <ListJs /> },

    // DataTables
    { path: "/tables-datatables", component: <Datatables /> },



    // Apex Charts

    // Line Chart
    { path: "/charts-apex-line", component: <ApexLine /> },

    // Area Chart
    { path: "/charts-apex-area", component: <ApexArea /> },

    // Column Chart
    { path: "/charts-apex-column", component: <ApexColumn /> },

    // Bar Chart
    { path: "/charts-apex-bar", component: <ApexBar /> },

    // Mixed Chart
    { path: "/charts-apex-mixed", component: <ApexMixed /> },

    // Timeline Chart
    { path: "/charts-apex-timeline", component: <ApexTimeline /> },

    // Candlestick Chart
    { path: "/charts-apex-candlestick", component: <ApexCandle /> },

    // Boxplot Chart
    { path: "/charts-apex-boxplot", component: <ApexBoxplot /> },

    // Bubble Chart
    { path: "/charts-apex-bubble", component: <ApexBubble /> },

    // Scattar Chart
    { path: "/charts-apex-scatter", component: <ApexScatter /> },

    // Heatmap Chart
    { path: "/charts-apex-heatmap", component: <ApexHeatmap /> },

    // Treemap Chart
    { path: "/charts-apex-treemap", component: <ApexTreemap /> },

    // Pie Chart
    { path: "/charts-apex-pie", component: <ApexPie /> },

    // RadialBar Chart
    { path: "/charts-apex-radialbar", component: <ApexRadialbar /> },

    // Radar Chart
    { path: "/charts-apex-radar", component: <ApexRadar /> },

    // Polar Area Chart
    { path: "/charts-apex-polar", component: <ApexPolar /> },





    // Icons

    // Remix
    { path: "/icons-remix", component: <RemixIcons /> },
    
    // BoxIcons
    { path: "/icons-boxicons", component: <BoxIcons /> },

    // Material Design
    { path: "/icons-materialdesign", component: <MaterialDesign /> },

    // Bootstrap
    { path: "/icons-bootstrap", component: <BootstrapIcon /> },

    // Phosphor
    { path: "/icons-phosphor", component: <PhosphorIcon /> },

    

    // Maps

    // Google
    { path: "/maps-google", component: <GoogleMap /> },

    // Vector
    // { path: "/maps-vector", component: <Vectormap /> },

    // Leaflet
    // { path: "/maps-leaflet", component: <Leaflet /> },




    // this route should be at the end of all other routes
    // eslint-disable-next-line react/display-name
    {
        path: "/",
        exact: true,
        component: <Navigate to="/index" />,
    },
    { path: "*", component: <Navigate to="/index" /> },
]

export { authProtectedRoutes };