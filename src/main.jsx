import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './tailwind.css';
import './App.css';
import NotFound from './components/NotFound';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import PhotoEssay from './pages/PhotoEssay';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'projects/:id', element: <PhotoEssay /> }, // dynamic projects route
      { path: 'brief/:id', element: <PhotoEssay /> }, // dynamic projects route
      { path: 'blog/:slug', element: <BlogPost /> },
      { path: 'blog', element: <BlogList /> },
      { path: '*', element: <NotFound /> }, // ← catch-all route
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
