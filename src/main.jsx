import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import FriendDeatails from './components/FriendDeatails/FriendDeatails';
import Post from './components/Post/Post';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/friends",
        element:<Friends></Friends>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:"/post",
        element:<Post></Post>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:"/singleFriend/:friendID",
        element:<FriendDeatails></FriendDeatails>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
