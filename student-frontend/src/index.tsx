import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Faq from './pages/Faq';
import SearchRoom from './pages/SearchRoom';
import SearchUser from './pages/SearchUser';
import AboutUs from './pages/AboutUs';
import RoomPostProfile from './pages/RoomPostProfile';
import UserPostProfile from './pages/UserPostProfile';
import Register from './pages/Register';
import Profile from './pages/Profile';
import RegisterRoom from './pages/RegisterRoom';
import RegisterUser from './pages/RegisterUser';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const route = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register />
  },
  {
    path:"/faq",
    element: <Faq />
  },
  {
    path:"/about",
    element: <AboutUs/>
  },
  {
    path:"/searchroom",
    element: <SearchRoom/>
  },
  {
    path:"/searchuser",
    element: <SearchUser/>
  },
  {
    path:"/profile",
    element: <Profile/>
  },
  {
    path:"/registerroom",
    element: <RegisterRoom/>
  },
  {
    path:"/registeruser",
    element: <RegisterUser/>
  },
  {
    path:"/roompostprofile",
    element: <RoomPostProfile/>
  },
  {
    path:"/userpostprofile",
    element: <UserPostProfile/>
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

reportWebVitals();
