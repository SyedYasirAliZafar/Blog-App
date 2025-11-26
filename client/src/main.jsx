import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import { ClerkProvider } from "@clerk/clerk-react";
import HomePage from './pages/HomePage.jsx';
import PostListPage from './pages/PostListPage.jsx';
import SinglePostPage from './pages/SinglePostPage.jsx';
import WritePage from './pages/WritePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import MainLayout from './layout/MainLayout.jsx';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <WritePage />,
      },
      {
        path: "/loggin",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
  </ClerkProvider>

)
