import {
  TabNavigator,
  StackNavigator, 
} from 'react-navigation';

import { MainRoutes, TabRoutes } from "./TabRoutes";
import sharedTabBarOptions from './sharedTabBarOptions';

const AppTabNavigator = TabNavigator(TabRoutes, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
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
