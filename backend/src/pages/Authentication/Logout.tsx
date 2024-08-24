import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { logoutUser } from "slices/thunk";

//redux
import { useSelector, useDispatch } from "react-redux";
import withRouter from "Common/withRouter";

const Logout = () => {

    document.title = "Log Out | Toner eCommerce + Admin React Template";

    const dispatch = useDispatch<any>();

    const { isUserLogout } = useSelector((state: any) => ({
        isUserLogout: state.Login.isUserLogout,
    }));

    useEffect(() => {
        dispatch(logoutUser());
    }, [dispatch]);

    if (isUserLogout) {
        return <Navigate to="/login" />;
    }

    return <React.Fragment></React.Fragment>;
};

export default withRouter(Logout);