import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import { setAuthorization } from "../helpers/api_helper";
import { useDispatch } from "react-redux";

import { useProfile } from "Common/Hooks/UserHooks";

import { logoutUser } from "slices/thunk";

const AuthProtected = (props: any) => {
  const dispatch = useDispatch<any>();
  const { userProfile, loading, token } = useProfile();
  useEffect(() => {
    if (userProfile && !loading && token) {
      setAuthorization(token);
    } else if (!userProfile && loading && !token) {
      dispatch(logoutUser());
    }
  }, [token, userProfile, loading, dispatch]);

  /*
    Navigate is un-auth access protected routes via url
    */

  if (!userProfile && loading && !token) {
    return (
      <Navigate to={{ pathname: "/login" }} />
    );
  }

  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return (<> <Component {...props} /> </>);
      }}
    />
  );
};

export { AuthProtected, AccessRoute };