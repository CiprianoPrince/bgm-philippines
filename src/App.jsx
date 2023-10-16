import { Route, Routes } from 'react-router-dom';

import GlobalStyle from './components/style/Global.style';

import BGMLayout from './layouts/BGMLayout';

import Home from './pages/Home';
import Service from './pages/Service';
import Career from './pages/Career';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Error from './pages/Error';

import BGMAdminLayout from './features/admin/layout/BGMAdminLayout';
import Admin from './pages/Admin';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route element={<BGMLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/services" element={<Service />} />
                    <Route path="/careers" element={<Career />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="admin" element={<BGMAdminLayout />}>
                        <Route index element={<Admin />} />
                        <Route path=":resource" element={<Admin />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
