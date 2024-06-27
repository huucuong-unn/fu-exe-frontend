import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from './components/Layouts/DefaultLayout';
import { Fragment, useEffect } from 'react';
import { generateToken, messaging } from './firebase';
import { onMessage } from 'firebase/messaging';
import toast, { Toaster } from 'react-hot-toast';
function App() {
    useEffect(() => {
        generateToken();
        onMessage(messaging, (payload) => {
            console.log(payload);
            toast(payload.notification.body);
        });
    }, []);

    return (
        <Router>
            <div className="App">
                <Toaster position="top-right"></Toaster>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
