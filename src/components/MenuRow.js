import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class MenuRow extends Component {

    render() {

        const {
            item,
            index
        } = this.props;

        console.log('MenuRow() name ', item.name);
        console.log('MenuRow() description ', item.description);

        return (

            <View key={item.name} style={
                [
                    styles.row,
                    {backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'}
                ]
            }>
                <View style={styles.edges}>
                    <Text>{index + 1}</Text>
                </View>
                <View style={styles.menuItems}>
                    <Text>{item.name}</Text>
                    <Text style={styles.menuDescription}>{item.description}</Text>
                </View>
                <View style={styles.edges}>
                    <Text>Order</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    edges: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    menuItems: {
        flexDirection: 'column',
        flex: 8
    },
    menuDescription: {
        color: 'grey'
    },
});
