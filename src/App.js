import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import DefaultLayout from '~/Layouts/DefaultLayout';
import { publicRoutes } from '~/Routes';
function App() {
    return (
        <Router>
            <div className="App" style={{ height: '100%' }}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.Layout) {
                            Layout = route.Layout;
                        } else if (route.Layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
