import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

// Scroll to top and track pageviews on route change
function RouteHandler() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        // Track the page view via Meta Pixel
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'PageView');
        }
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <RouteHandler />
            <div className="font-sans text-text-main bg-brand-50 selection:bg-brand-500 selection:text-white">
                <div className="ghl-app-overlay">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
