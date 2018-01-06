import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ActivityIndicator } from "react-native";


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  menu: {
  	margin: 10,
  	padding: 10
  },
  indicator: {
    color: '#000'
  }
});

class Welcome extends Component {
	render() {

		const { navigation } = this.props;
		return (
			<View style={styles.container} >
				<Text style={styles.welcome} >Welcome to Aftrade Enter</Text>
        <ActivityIndicator animating={true} color='red' />
				<Button style={styles.menu} title="Enter to Main Page" 
					onPress={() => navigation.navigate('Home')}
				/>
				
			</View>
		);
	}
}

export const WelcomeScreen = Welcome;