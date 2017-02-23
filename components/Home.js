import React from 'react';
import {View, Text, Button, StyleSheet, ListView, ScrollView} from "react-native";
import {Actions} from "react-native-router-flux";

export default class extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3']),
    };
  }

  render() {
    var rows = {};
    return (  
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={[styles.text, styles.viewPort]}>Welcome to Klarx Logistics Companion app</Text>
        </ScrollView>
      </View> 
    );
  }

  renderRow(rowData, SectionID, rowID) {
    return (
        <Text>Maddy</Text>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "#ffffff"
  }, 
  scrollView: {
    flex:1
  },
  horizontalScrollView: {
    height: 120,
  },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  viewPort: {
    justifyContent: "center",
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  text: {
    fontSize: 50,
    color: '#888888'
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    width: 64,
    height: 64,
  }
});


