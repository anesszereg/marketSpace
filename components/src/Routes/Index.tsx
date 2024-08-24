import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';

//routes
import { authProtectedRoutes } from "./allRoutes";

const Index = () => {
    return (
        <React.Fragment>
            <Routes>

                <Route>
                    {authProtectedRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                <Layout>{route.component}</Layout>
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