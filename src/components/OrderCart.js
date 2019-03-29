import React, { Component } from 'react'

import {
    View,
    Text
} from 'react-native'

export default class OrderCart extends Component {

    static navigationOptions = {
        title: 'Cart Details'
    };

    render() {
        return (
            <View>
                <Text>Cart Details</Text>
            </View>
        )
    }
}
