import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList, TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation';
import ShoppingCartRow from "./ShoppingCartRow";

import Checkout from "./Checkout";

class ShoppingCart extends Component {

    static navigationOptions = {
        header: "Cart Items"
    };

    render() {
        console.log('Cart Items: ', this.props.CartItems.length);
        return (



            <View style={styles.container}>
                {/*<View style={{      width: '100%',*/}
                {/*    height: 100,*/}
                {/*    backgroundColor: '#FF0000',*/}
                {/*    justifyContent: 'center',*/}
                {/*    alignItems: 'center',*/}
                {/*    position: 'absolute',*/}
                {/*    paddingBottom: 20,*/}
                {/*    top: 0}}>*/}
                {/*</View>*/}
                {this.props.CartItems.length > 0 ?
                    <FlatList
                              data={
                                  this.props.CartItems.filter(item => {
                                      console.log('shopping cart item name : ', item.name);
                                      return item
                                  })
                              }
                              renderItem={({ item, index }) =>
                                  <ShoppingCartRow
                                      item={item}
                                      index={index}
                                      navigation={this.props.navigation}
                                  />

                              }
                              keyExtractor={ item => item.name}
                              initialNumToRender={16}
                              ListHeaderComponent={<View style={{height: 30}} />}
                    />
                    :
                        <View>
                            <Text>No items in your cart</Text>
                        </View>

                }

                <View style={{flex: 1, align: 'bottom', justifyContent: 'flex-end',}}>
                    <Checkout/>
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        CartItems: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (item) => dispatch({ type: 'REMOVE_FROM_CART', payload: item })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ShoppingCart));


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
