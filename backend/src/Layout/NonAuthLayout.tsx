import React, { useEffect } from 'react';
import withRouter from 'Common/withRouter';

//redux
import { useSelector } from "react-redux";

const NonAuthLayout = ({ children }: any) => {
    const {
        layoutModeType,
    } = useSelector((state: any) => ({
        layoutModeType: state.Layout.layoutModeType,
    }));

    useEffect(() => {
        if (layoutModeType === "dark") {
            document.body.setAttribute("data-layout-mode", "dark");
        } else {
            document.body.setAttribute("data-layout-mode", "light");
        }
        return () => {
            document.body.removeAttribute("data-layout-mode");
        };
    }, [layoutModeType]);
    return (
        <React.Fragment>
            <div>
                {children}
            </div>
        </React.Fragment>
    );
};

export default withRouter(NonAuthLayout);