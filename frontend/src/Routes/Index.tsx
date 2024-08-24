import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'Layout';

//routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import NonAuthLayout from 'Layout/NonAuthLayout';

const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route>
                    {authProtectedRoutes.map((route, idx) => (

                        <Route
                            path={route.path}
                            element={
                                <Layout isLight={route.isLight} >{route.component}</Layout>
                            }
                            key={idx}
                        />
                    ))}
                </Route>

                <Route>
                    {publicRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                <NonAuthLayout>
                                    {route.component}
                                </NonAuthLayout>
                            }
                            key={idx}
                        />
                    ))}
                </Route>
            </Routes>
        </React.Fragment>
    );
}

export default Index;