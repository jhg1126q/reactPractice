import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Album from '../pages/Album';
import Checkout from '../pages/Checkout';
import Pricing from '../pages/Pricing';

const PrivateRouter = () => (
  <Routes>
    <Route path="/album" element={<Album />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/pricing" element={<Pricing />} />
  </Routes>
);

export default PrivateRouter;