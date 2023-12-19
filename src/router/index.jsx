import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Landing from '../pages/Landing';
import DetailPage from '../pages/DetailPage';
import Layout from '../components/Layout';
import JobPage from '../pages/JobPage';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Registrasi/Register";
import User from "../admin/User";
import Admin from "../admin/Admin";
import Daftar from "../admin/Authentifikasi/Daftar/Daftar";
import Masuk from "../admin/Authentifikasi/Masuk/Masuk";
import Home from "../admin/Home";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/landing',
        element: <LandingPage />,
      },
      {
        path: '/job',
        element: <JobPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/job/:id',
        element: <DetailPage />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
      {
        path: '/upload',
        element: <Upload />,
      },
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/daftar',
        element: <Daftar />,
      },
      {
        path: '/masuk',
        element: <Masuk />,
      },
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
]);

export default router;
