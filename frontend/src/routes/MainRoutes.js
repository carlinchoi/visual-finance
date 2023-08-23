import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

const HomePage = Loadable(lazy(() => import('pages/HomePage')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/SamplePage')));
const CryptoPage = Loadable(lazy(() => import('pages/CryptoPage')));

// render - utilities

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <HomePage />
    },

    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'crypto',
      element: <CryptoPage />
    }
  ]
};

export default MainRoutes;
