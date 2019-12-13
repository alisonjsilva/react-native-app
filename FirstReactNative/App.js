import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    name = () => { return 'Alison Silva' };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Text style={styles.name}>Hello {this.name()}</Text>
                <Button
                    style={styles.button}
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    name: {
        color: 'blue',
        fontSize: 18
    },
    button: {
        color: 'red',
    }
});
