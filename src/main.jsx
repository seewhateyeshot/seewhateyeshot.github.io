import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import PhotoEssay from './pages/PhotoEssay';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'projects/:id', element: <PhotoEssay /> }, // dynamic projects route
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);