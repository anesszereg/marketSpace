import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Bootstrap UI
    const [isBootstrapUi, setIsBootstrapUi] = useState(false);
    const [isCustomUi, setIsCustomUi] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems: any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id: any = item.getAttribute("subitems");
                if (document.getElementById(id)){
                    document.getElementById(id)?.classList.remove("show");
                }
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState === 'Dashboard') {
            history("/index");
            document.body.classList.add('twocolumn-panel');
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }
        if (iscurrentState !== 'MuliLevel') {
            setIsMultiLevel(false);
        }
        if (iscurrentState !== 'BootstrapUi') {
            setIsBootstrapUi(false);
        }
        if (iscurrentState !== 'CustomUi') {
            setIsCustomUi(false);
        }
    }, [
        iscurrentState,
        isAdvanceUi,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps,
        isMultiLevel,
        isCustomUi,
        isBootstrapUi,
        history
    ]);

    const menuItems: any = [
        {
            label: "COMPONENTS",
            isHeader: true,
        },
        {
            id: "index",
            label: "Overview",
            icon: "bi bi-command",
            link: "/index",
            parentId: "component",
            click: function (e: any) {
                e.preventDefault();
                setIscurrentState('Dashboard');
            },
        },
        {
            id: "bootstrapui",
            label: "Bootstrap UI",
            icon: "bi bi-radioactive",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsBootstrapUi(!isBootstrapUi);
                setIscurrentState('BootstrapUi');
                updateIconSidebar(e);
            },
            
            stateVariables: isBootstrapUi,
            subItems: [
                    {
                        id: "alerts",
                        label: "Alerts",
                        link: "/ui-alerts",
                        parentId: "boostrapui",
                    },
                    { id: 2, label: "Badges", link: "/ui-badges", parentId: "boostrapui" },
                    { id: 3, label: "Buttons", link: "/ui-buttons", parentId: "boostrapui" },
                    { id: 4, label: "Colors", link: "/ui-colors", parentId: "boostrapui" },
                    { id: 5, label: "Cards", link: "/ui-cards", parentId: "boostrapui" },
                    { id: 6, label: "Carousel", link: "/ui-carousel", parentId: "boostrapui" },
                    { id: 7, label: "Dropdowns", link: "/ui-dropdowns", parentId: "boostrapui" },
                    { id: 8, label: "Grid", link: "/ui-grid", parentId: "boostrapui" },
                    { id: 9, label: "Images", link: "/ui-images", parentId: "boostrapui" },
                    { id: 10, label: "Tabs", link: "/ui-tabs", parentId: "boostrapui" },
                    { id: 11, label: "Accordions & Collapse", link: "/ui-accordions", parentId: "boostrapui" },
                    { id: 12, label: "Modals", link: "/ui-modals", parentId: "boostrapui" },
                    { id: 13, label: "Offcanvas", link: "/ui-offcanvas", parentId: "boostrapui" },
                    { id: 14, label: "Placeholder", link: "/ui-placeholders", parentId: "boostrapui" },
                    { id: 15, label: "Progress", link: "/ui-progress", parentId: "boostrapui" },
                    { id: 16, label: "Notifications", link: "/ui-notifications", parentId: "boostrapui" },
                    { id: 17, label: "Media Object", link: "/ui-media", parentId: "boostrapui" },
                    { id: 18, label: "Embed Video", link: "/ui-embed-video", parentId: "boostrapui" },
                    { id: 19, label: "Typography", link: "/ui-typography", parentId: "boostrapui" },
                    { id: 20, label: "Lists", link: "/ui-lists", parentId: "boostrapui" },
                    { id: 21, label: "General", link: "/ui-general", parentId: "boostrapui" },
                    { id: 22, label: "Utilities", link: "/ui-utilities", parentId: "boostrapui" },
            ],
        },
        {
            id: "advanceui",
            label: "Advance UI",
            icon: "bi bi-layers",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsAdvanceUi(!isAdvanceUi);
                setIscurrentState('AdvanceUi');
                updateIconSidebar(e);
            },
            stateVariables: isAdvanceUi,
            subItems: [
                { 
                    id: "Nestable List", 
                    label: "Nestable List", 
                    link: "/advance-ui-nestable", 
                    parentId: "advanceui" },
                { id: 2, label: "Scrollbar", link: "/advance-ui-scrollbar", parentId: "advanceui" },
                { id: 3, label: "Swiper Slider", link: "/advance-ui-swiper", parentId: "advanceui" },
                { id: 4, label: "Ratings", link: "/advance-ui-ratings", parentId: "advanceui" },
                { id: 5, label: "Highlight", link: "/advance-ui-highlight", parentId: "advanceui" },
            ],
        },
        {
            id: "customui",
            label: "Custom UI",
            icon: "bi bi-tools",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsCustomUi(!isCustomUi);
                setIscurrentState('CustomUi');
                updateIconSidebar(e);
            },
            stateVariables: isCustomUi,
            subItems: [
                {
                    id: "ribbons",
                    label: "Ribbons",
                    link: "/ui-ribbons",
                    parentId: "customui",
                },
                { id: 2, label: "Profile", link: "/ui-profile", parentId: "customui" },
                { id: 3, label: "Counter", link: "/ui-counter", parentId: "customui" },
            ],
        },
        
        {
            id: "forms",
            label: "Forms",
            icon: "ri-file-list-3-line",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsForms(!isForms);
                setIscurrentState('Forms');
                updateIconSidebar(e);
            },
            stateVariables: isForms,
            subItems: [
                {
                    id: "basicElements",
                    label: "Basic Elements",
                    link: "/forms-elements",
                    parentId: "forms",
                },
                { id: 2, label: "Form Select", link: "/forms-select", parentId: "forms" },
                { id: 3, label: "Checkbox & Radio", link: "/forms-checkboxs-radios", parentId: "forms" },
                { id: 4, label: "Pickers", link: "/forms-pickers", parentId: "forms" },
                { id: 5, label: "Input Masks", link: "/forms-masks", parentId: "forms" },
                { id: 6, label: "Form Advanced", link: "/forms-advanced", parentId: "forms" },
                { id: 7, label: "Range Slider", link: "/forms-range-sliders", parentId: "forms" },
                { id: 8, label: "Validation", link: "/forms-validation", parentId: "forms" },
                { id: 9, label: "Wizard", link: "/forms-wizard", parentId: "forms" },
                { id: 10, label: "Editors", link: "/forms-editors", parentId: "forms" },
                { id: 11, label: "File Upload", link: "/forms-file-uploads", parentId: "forms" },
                { id: 12, label: "Form Layout", link: "/forms-layouts", parentId: "forms" },
                { id: 13, label: "React Select", link: "/forms-tom-select", parentId: "forms" },
            ],
        },
        {
            id: "tables",
            label: "Tables",
            icon: "bi bi-table",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsTables(!isTables);
                setIscurrentState('Tables');
                updateIconSidebar(e);
            },
            stateVariables: isTables,
            subItems: [
                {
                    id: "basicTables",
                    label: "Basic Tables",
                    link: "/tables-basic",
                    parentId: "tables",
                },
                { id: 2, label: "React Table", link: "/tables-react", parentId: "tables" },
                { id: 3, label: "Datatables", link: "/tables-datatables", parentId: "tables" },
            ],
        },
        {
            id: "apexcharts",
            label: "Apexcharts",
            icon: "bi bi-pie-chart",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsCharts(!isCharts);
                setIscurrentState('Charts');
                updateIconSidebar(e);
            },
            stateVariables: isCharts,
            subItems: [
                {
                    id: "line",
                    label: "Line",
                    link: "/charts-apex-line",
                    parentId: "apexcharts",
                },
                { id: 2, label: "Area", link: "/charts-apex-area", parentId: "apexcharts" },
                { id: 3, label: "Column", link: "/charts-apex-column", parentId: "apexcharts" },
                { id: 4, label: "Bar", link: "/charts-apex-bar", parentId: "apexcharts" },
                { id: 5, label: "Mixed", link: "/charts-apex-mixed", parentId: "apexcharts" },
                { id: 6, label: "Timeline", link: "/charts-apex-timeline", parentId: "apexcharts" },
                { id: 7, label: "Candlestick", link: "/charts-apex-candlestick", parentId: "apexcharts" },
                { id: 8, label: "Boxplot", link: "/charts-apex-boxplot", parentId: "apexcharts" },
                { id: 9, label: "Bubble", link: "/charts-apex-bubble", parentId: "apexcharts" },
                { id: 10, label: "Scatter", link: "/charts-apex-scatter", parentId: "apexcharts" },
                { id: 11, label: "Heatmap", link: "/charts-apex-heatmap", parentId: "apexcharts" },
                { id: 12, label: "Treemap", link: "/charts-apex-treemap", parentId: "apexcharts" },
                { id: 13, label: "Pie", link: "/charts-apex-pie", parentId: "apexcharts" },
                { id: 14, label: "Radialbar", link: "/charts-apex-radialbar", parentId: "apexcharts" },
                { id: 15, label: "Radar", link: "/charts-apex-radar", parentId: "apexcharts" },
                { id: 16, label: "Polar", link: "/charts-apex-polar", parentId: "apexcharts" },
            ],
        },
        {
            id: "icons",
            label: "Icons",
            icon: "bi bi-usb-symbol",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsIcons(!isIcons);
                setIscurrentState('Icons');
                updateIconSidebar(e);
            },
            stateVariables: isIcons,
            subItems: [
                {
                    id: "remix",
                    label: "Remix",
                    link: "/icons-remix",
                    parentId: "icons",
                },
                { id: 2, label: "BoxIcons", link: "/icons-boxicons", parentId: "icons" },
                { id: 3, label: "Material Design", link: "/icons-materialdesign", parentId: "icons" },
                { id: 4, label: "Bootstrap", link: "/icons-bootstrap", parentId: "icons" },
                { id: 5, label: "Phosphor", link: "/icons-phosphor", parentId: "icons" },
            ],
        },
        {
            id: "maps",
            label: "Maps",
            icon: "bi bi-geo-alt",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsMaps(!isMaps);
                setIscurrentState('Maps');
                updateIconSidebar(e);
            },
            stateVariables: isMaps,
            subItems: [
                {
                    id: "googleMaps",
                    label: "Google",
                    link: "/maps-google",
                    parentId: "maps",
                },
            ],
        },
        {
            id: "multilevel",
            label: "Multi Level",
            icon: "bi bi-share",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsMultiLevel(!isMultiLevel);
                setIscurrentState('MuliLevel');
                updateIconSidebar(e);
            },
            stateVariables: isMultiLevel,
            subItems: [
                { id: "level1.1", label: "Level 1.1", link: "/#", parentId: "multilevel" },
                {
                    id: "level1.2",
                    label: "Level 1.2",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel1(!isLevel1);
                    },
                    stateVariables: isLevel1,
                    childItems: [
                        { id: 1, label: "Level 2.1", link: "/#" },
                        {
                            id: "level2.2",
                            label: "Level 2.2",
                            link: "/#",
                            isChildItem: true,
                            click: function (e: any) {
                                e.preventDefault();
                                setIsLevel2(!isLevel2);
                            },
                            stateVariables: isLevel2,
                            childItems: [
                                { id: 1, label: "Level 3.1", link: "/#" },
                                { id: 2, label: "Level 3.2", link: "/#" },
                            ]
                        },
                    ]
                },
            ],
        },

    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;