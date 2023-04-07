import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Articles from './components/Articles';
import Reviews from './components/Reviews';
import Movies from './components/Movies';
import Menu from './components/Menu';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';




const App = () => {
  return (
    <div className="container">
      <Menu/>
      <main>
        <Outlet/>
      </main> 
    </div>
  );
};

const router = createBrowserRouter([
  

    { 
      path: '/',
      element: <App/>,
      children: [
    
    // {
    //   path: '/',
    //   element: <Home/>
    // },
      {
        path: '/reviews',
        element: <Reviews/>
      },
      {
        path: '/articles',
        element: <Articles/>
      },
    
      {
        path: '/movies',
        element: <Movies/>,
      },
    ],
  },
  
])


createRoot(
  document.querySelector('#app'),
).render(
  <RouterProvider router = {router}/>
);
