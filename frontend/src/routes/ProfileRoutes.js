import { lazy } from 'react';

import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const EditProfile = Loadable(lazy(() => import('pages/authentication/EditProfile')));

const ProfileRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'edit-profile',
      element: <EditProfile />
    }
  ]
};

export default ProfileRoutes;
