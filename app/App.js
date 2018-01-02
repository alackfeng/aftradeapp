import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8cc16473',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

class App extends Component {
	render() {
		return (
			<View style={styles.container} >
				<Text style={{textAlign: 'center'}}>Hello App</Text>
			</View>
		);
	}
};

export default App;