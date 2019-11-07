import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'


import { connect } from 'react-redux'

const Checkout = (props) => (

    <View style={[{ padding: 5 }]}>

        <View style={{
            position: 'absolute',
            height: 30,
            width: 150,
            borderRadius: 15,
            backgroundColor: '#ff0000',
            right: 15,
            bottom: 15,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
        }}>

            <View>
                <TouchableHighlight
                    onPress = {() => {
                        props.cartCheckout(props.CartItems);
                    }}
                    style={styles.button}
                    underlayColor='#5398DC'>
                    <Text style={{color: 'white',fontWeight: 'bold'}}>{props.CartItems.length} - Checkout</Text>
                </TouchableHighlight>
            </View>
        </View>
    </View>
);

const mapStateToProps = (state) => {
    return {
        CartItems: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        cartCheckout: (item) => dispatch({ type: 'CHECKOUT', payload: item })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
});
