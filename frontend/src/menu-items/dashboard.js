// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'stockDashboard',
      title: 'Stock Dashboard',
      type: 'item',
      url: '/dashboard/stocks',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'cryptoDashboard',
      title: 'Crypto Dashboard',
      type: 'item',
      url: '/dashboard/crypto',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
