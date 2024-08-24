import React from "react";
import { Link } from "react-router-dom";

type CustomToggleProps = {
    onClick?: any;
    children?: any;
    className : string;
};

const CustomDropdownToggle = React.forwardRef(
    ({onClick, children,className} : CustomToggleProps, ref: React.Ref<HTMLAnchorElement>) => (
    <>
    <Link
        to="#"
        ref={ref}
        className={className + " arrow-none"}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
     {children}
    </Link>
    </>
));

export default CustomDropdownToggle;