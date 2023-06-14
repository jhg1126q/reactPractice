import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRouter from './routes/PublicRouter';
import PrivateRouter from './routes/PrivateRouter';
import AdminRouter from './routes/AdminRouter';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <Routes>
      <Route path="/public/*" element={<PublicRouter />} />
      <Route path="/private/*" element={<PrivateRouter />} />
      <Route path="/admin/*" element={<AdminRouter />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;