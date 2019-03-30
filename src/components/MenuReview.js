import React, { Component } from 'react'

import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import Stars from 'components/Stars'

export default class MenuReview extends Component {

    static navigationOptions = {
        title: 'Review Details'
    };
    addReview = () => {
        this.props.navigation.navigate('AddReview')
    };

    render() {
        const item = this.props.navigation.getParam('item');


        return (
            <ScrollView style={styles.root}>

                <View style={styles.infoHeader}>

                    <Image
                        source={{
                            uri: item.image
                        }}
                        style={styles.image}
                        resizeMode="contain"
                    />



                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.address}>{item.description}</Text>
                        <View style={styles.stars}>
                            <Stars rating={item.rating} />
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.addReview}
                            >
                                <Text style={styles.buttonText}>Add Review</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
    infoHeader: {
        flexDirection: 'row'
    },
    info: {
        flex: 1,
        flexWrap: 'wrap',
        marginTop: 20
    },
    name: {
        fontSize: 24
    },
    address: {
        color: 'grey',
        marginBottom: 5
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    stars: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 5,
        minWidth: 50
    },
    button: {
        borderWidth: 1,
        borderColor: '#0066cc',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff',
        marginTop: 10
    },
    buttonText: {
        color: '#0066cc',
        fontSize: 12,
        textAlign: 'center'
    }
});
