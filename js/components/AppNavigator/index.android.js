import {
  TabNavigator,
} from 'react-navigation';

import { MainRoutes, TabRoutes } from "./TabRoutes";
import sharedTabBarOptions from './sharedTabBarOptions';

const AppTabNavigator = TabNavigator(TabRoutes, {
  initialRouteName: 'Home',
  tabBarPosition: 'top',
  tabBarOptions: sharedTabBarOptions,
});

const AppNavigator = StackNavigator({
	...MainRoutes, 
	Main: {
		screen: AppTabNavigator
	},
}, {
  headerMode: 'screen',
  URIPrefix: 'aftrade://',
  cardStyle: {
    backgroundColor: 'transparent',
  },
});


export default AppNavigator;
