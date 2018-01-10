
import React, { Component } from "react";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ListView } from "react-native";
import { nodeConnect } from "../actions";

import { ViewContainer, Colors, Normalize, StyleSheet } from "../../../components";
import { nodeList } from "../../../env";


const SLViewText = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.orange};
`;

const SLText = styled.Text`
	text-align: left;
	color: ${Colors.iceberg};
	margin-top: 10;
`;

const SLListView = styled.ListView`
`;


class Node extends Component {

	props: {
		url: string,
		status: boolean
	}

	constructor(props) {
		super(props);

		var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dataSource: ds.cloneWithRows(nodeList),
		};
	}

	renderRow = (row) => {
		return <SLText>{row.url} - {row.location}</SLText>
	}

	renderNodeList() {
		return (
			<SLListView 
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
				enableEmptySections={true}
			/>
		);
	}

	render() {

		const { url, status } = this.props;

		console.log("=====[Node.js]::render - node - ", url, status);
		let showNodeList = nodeList.map((item, index) => {
			console.log("=====[Node.js]::render - showNodeList - ", item, index);
			return <SLText key={index}>{index}: {item.url} - {item.location}</SLText>
		});

		return (
			<ViewContainer>
				<SLViewText>
					{ this.renderNodeList() }
					<SLText>Connect to Node-{url}, status-{status}</SLText>
				</SLViewText>
			</ViewContainer>
		);
	}
}

const mapStateToProps = (state) => ({
	url: state.wallet.url,
	status: state.wallet.status,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	nodeConnect,
}, dispatch);

export const NodeScreen = connect(mapStateToProps, mapDispatchToProps)(Node);