import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from '../pages/Blog';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const PublicRouter = () => (
  <Routes>
    <Route path="/" element={<Blog />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
  </Routes>
);

export default PublicRouter;