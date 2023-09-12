import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import StockPorfolioPage from 'pages/StockPortfolioPage';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const CryptoPage = Loadable(lazy(() => import('pages/CryptoPage')));

const HomePage = Loadable(lazy(() => import('pages/HomePage')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/SamplePage')));
const EditProfile = Loadable(lazy(() => import('pages/authentication/EditProfile')));

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
      path: 'edit-profile',
      element: <EditProfile />
    },

    {
      path: 'dashboard',
      children: [
        {
          path: 'stocks',
          element: <DashboardDefault />
        },
        {
          path: 'default',
          element: <HomePage />
        },
        {
          path: 'crypto',
          element: <CryptoPage />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'portfolio',
      element: <StockPorfolioPage />
    }
  ]
};

export default MainRoutes;
