import TabNavigator from './TabNavigator';
import { TabRoutes, MainRoutes } from './TabRoutes';
import sharedTabBarOptions from './sharedTabBarOptions';
import { StackNavigator } from "react-navigation";

const AppTabNavigator = TabNavigator(TabRoutes, {
  initialRouteName: 'Home',
  tabBarOptions: sharedTabBarOptions,
});

const AppNavigator = StackNavigator({
	...MainRoutes, 
	Main: {
		screen: AppTabNavigator
	},
}, {
  headerMode: 'none',
  URIPrefix: 'aftrade://',
  cardStyle: {
    backgroundColor: 'transparent',
  },
});

export default AppNavigator;
