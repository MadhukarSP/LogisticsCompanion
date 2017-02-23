import React from 'react';
import {View, Text, Button, StyleSheet} from "react-native";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});


export default class extends React.Component { 
    render(){
        const title = this.props.title || 'No Title';
        const data = this.props.data || 'No Data';
        return (
            <View style={[styles.container]}>
                <Text>Login page 1</Text>
                <Text>Title: {title}</Text>
                <Text>Data: {data}</Text>
                <Button 
                    onPress={() => Actions.home()}
                    title="Login screen button" 
                    color="#841584"/>
            </View>
        );
    }
}