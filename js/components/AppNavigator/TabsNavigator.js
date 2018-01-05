
import React, { Component } from "react";

import { Button, View, Text } from "react-native";
import { TabNavigator } from "react-navigation";

import Ionicons from "react-native-vector-icons/MaterialIcons";


const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
		  onPress={() => navigation.navigate('Details', { user: 'Lucy' })}
		  title="Chat with Lucy"
		/>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

export default TabNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor, focused}) => (
				<Ionicons 
					name={focused ? 'home': 'face'}
					size={26}
					style={{ color: tintColor }}
				/>
			),
		}
	},
	Profile: {
		screen: ProfileScreen,
		navigationOptions: {
			tabBarLabel: 'Profile',
			tabBarIcon: ({ tintColor, focused}) => (
				<Ionicons 
					name={focused ? 'explore': 'fingerprint'}
					size={26}
					style={{ color: tintColor }}
				/>
			),
		}
	}
});