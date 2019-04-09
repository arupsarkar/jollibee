import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image, TouchableHighlight
} from 'react-native'


class ShoppingCartRow extends Component {


    render(){

        const {
            item,
            index
        } = this.props;

        console.log('ShoppingCartRow', item);
        return (




            <View key={item.name}
                  style={{ backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }}>

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    paddingTop: 20
                }}>

                        <Text>{item.name}</Text>
                        <Text style={styles.addressText}>{item.description}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                        <View style={styles.nameAddress}>
                            <Image
                                source={{
                                    uri: item.image,
                                }}
                                style={{
                                    flex: 1,
                                    height: 100,
                                    alignItems: 'center'
                                }}
                                resizeMode="contain"
                            />
                        </View>



                </View>

            </View>

        );
    }
}



export default ShoppingCartRow

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    edges: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        minWidth: 60
    },
    nameAddress: {
        flexDirection: 'column',
        flex: 8
    },
    addressText: {
        color: 'grey'
    },
    price:{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
    },
    button: {
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff',
    },
    buttonText: {
        color: '#0066CC',
        fontSize: 12
    },
    info: {
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4
    },
    stars: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 5,
        minWidth: 50
    },
});
