import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image
} from 'react-native'
import { withNavigation } from 'react-navigation';
import Stars from 'components/Stars'

class MenuRow extends Component {

    state = {
        showInfo: false
    };

    infoPressed = () => {
        // this.setState({ showInfo: !this.state.showInfo });
        this.props.navigation.navigate('Review');
    };

    orderPressed = () => {
        this.props.navigation.navigate('Cart');
    };

    render() {

        const {
            item,
            index
        } = this.props;

        console.log('MenuRow() name ', item.name);
        console.log('MenuRow() description ', item.description);

        return (
            <View key={item.name} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }}>

                <View style={styles.row}>
                    <View style={styles.stars}>
                        <Stars rating={item.rating} />
                    </View>



                    <View style={styles.nameAddress}>
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

                    <View style={styles.edges}>
                        <TouchableHighlight
                            onPress={this.infoPressed}
                            style={styles.button}
                            underlayColor='#5398DC'>
                            <Text style={styles.buttonText}>Review</Text>
                        </TouchableHighlight>
                    </View>

                </View>

                {/*{*/}
                {/*    this.state.showInfo &&*/}
                {/*    <View style={styles.info}>*/}
                {/*        <Text>Menu Review</Text>*/}
                {/*    </View>*/}
                {/*}*/}

                <View style={styles.edges}>
                    <TouchableHighlight
                        onPress={this.orderPressed}
                        style={styles.button}
                        underlayColor='#5398DC'>
                        <Text style={styles.buttonText}>Order</Text>
                    </TouchableHighlight>
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

export default withNavigation(MenuRow);
