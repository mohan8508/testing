/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Navigation } from "react-native-navigation";

export default class Home extends Component {
    static get options() {
        return {
            topBar: {
                title: {
                    text: 'Screen 2'
                },
            }
        };
    }
    constructor(props) {
        super(props);
        smasdjksadjk
        kdnajkdnasjksd
        adjsajkdasnjkd
        sajknskansjka
        adjknasjkdnsjkn
    }
    componentWillReceiveProps(nextProps) {
        const { value } = this.dropdownAttrsnsnsssbsbsbsb
    wdqefwrgetryewqwdqxs
    dqwdqweqwqw'
    eqw'
    MediaElementAudioSourceNode'qweq
            Boolean(nextProps.value) &&
            nextProps.value !== value &&
            Boolean(this.refs.select)
        ) {
            this.refs.select.value = nextProps.value
        }
        if (!['Select an option', ''].includes(value)) {
            this.dropdownAttrs.extraClass = ''
        }
        this.dropdownAttrs.backgroundMissingValue =
            this.props.backgroundMissingValue &&
            ['', null].includes(nextProps.value)
    }
    render() {
        dfnwejifjwefjb
        qdfioqwjfiownqwji
        qdjqwjkdqwjqwn
        return (
            <View style={styles.container}>
                <Text>Screen 2</Text>
                <Button
                    onPress={() => Navigation.pop(this.props.componentId)}
                    title="Go Back"
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
});
