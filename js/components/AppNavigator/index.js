import TabNavigator from './TabNavigator';
import { TabRoutes, MainRoutes, MenuRoutes } from './TabRoutes';
import sharedTabBarOptions from './sharedTabBarOptions';
import { StackNavigator, DrawerNavigator } from "react-navigation";

const AppTabNavigator = TabNavigator(TabRoutes, {
  initialRouteName: 'Home',
  tabBarOptions: sharedTabBarOptions,
});

const AppDrawerDrawer = DrawerNavigator({
  ...MenuRoutes, 
  Main: {
    screen: AppTabNavigator
  },

},);

const AppNavigator = StackNavigator({
	...MainRoutes, 
	Main: {
		screen: AppTabNavigator
	},
  Draw: {
    screen: AppDrawerDrawer
  }
}, {
  headerMode: 'none',
  URIPrefix: 'aftrade://',
  cardStyle: {
    backgroundColor: 'transparent',
  },
});

export default AppNavigator;
