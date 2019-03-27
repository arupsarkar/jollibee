import React, { Component } from 'react'
import { Text } from 'react-native';
import CustomStyle from 'styles/CustomStyle';

export default class Header extends Component {
    render() {
        return(
            <Text style={CustomStyle.header}>Welcome to Jollibee</Text>
        )
    }
}

