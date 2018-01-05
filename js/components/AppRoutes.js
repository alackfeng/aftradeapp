import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';
import Home from '../views/Home';
import IconsGrid from '../views/IconsGrid';
import NotFound from '../views/NotFound';
import Translation from '../views/Translation';

export const notFoundKey = 'NotFound';

/**
 * Gets an Icon component.
 */
const getIcon = (name) => {
  const comp = ({ tintColor }) => (
    <Icon
      name={name}
      style={{
        color: tintColor,
      }}
    />
  );
  comp.propTypes = {
    tintColor: PropTypes.string,
  };
  return comp;
};

/**
 * The routes for the App
 */
export const AppRoutes = {
  Home: {
    screen: Home,
    path: 'home',
    navigationOptions: {
      title: 'welcome',
      tabBarLabel: '首页',
      tabBarIcon: getIcon('home'),
    },
  },
  Relation: {
    screen: IconsGrid,
    path: 'relation',
    navigationOptions: {
      title: 'relation',
      tabBarLabel: '关系户',
      tabBarIcon: getIcon('supervisor-account'),
    },
  },
  News: {
    screen: Translation,
    path: 'news',
    navigationOptions: {
      title: 'news',
      tabBarLabel: '资讯',
      tabBarIcon: getIcon('explore'),
    },
  },
  Wallet: {
    screen: Translation,
    path: 'wallet',
    navigationOptions: {
      title: 'wallet',
      tabBarLabel: '我的钱包',
      tabBarIcon: getIcon('fingerprint'),
    },
  },
  NotFound: {
    screen: NotFound,
    path: '404',
    navigationOptions: {
      title: 'Nothing Found',
    },
  },
};

export const StackRoutes = {
  IconsGrid: {
    screen: IconsGrid
  }
};
