import { AntDesignOutlined } from '@ant-design/icons';

const icons = {
  AntDesignOutlined
};

const portfolio = {
  id: 'portfolio',
  title: 'Portfolios',
  type: 'group',
  children: [
    {
      id: 'stockPortfolio',
      title: 'Stock Portfolio',
      type: 'item',
      url: '/portfolio',
      icon: icons.AntDesignOutlined
    }
  ]
};

export default portfolio;
