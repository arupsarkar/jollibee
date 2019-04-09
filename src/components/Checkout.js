import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform, TouchableHighlight
} from 'react-native'

import { withNavigation } from 'react-navigation'
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
                    onPress={ () => {this.props.addItemToCart(item)}}
                    style={styles.button}
                    underlayColor='#5398DC'>
                    <Text style={{color: 'white',fontWeight: 'bold'}}>Checkout</Text>
                </TouchableHighlight>
            </View>
            {/*<Text style={{*/}
            {/*    color: 'white', */}
            {/*    fontWeight: 'bold' }}>Checkout</Text>*/}
        </View>
    </View>
);

const mapStateToProps = (state) => {
    return {
        CartItems: state
    }
};

export default connect(mapStateToProps)(withNavigation(Checkout));

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
