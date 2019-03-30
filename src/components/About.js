import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

export default class About extends Component {

    render() {
        return (
            <View style={{ flex: 1, padding: 40 }}>

                <Text style={styles.header}>
                    <Text style={styles.text}>
                        Spreading the Joy of Eating across the United States.
                    </Text>
                </Text>

                <Icon
                    name="utensils"
                    color="#0066CC"
                    size={100}
                    style={styles.icon}
                />
                <ScrollView>
                    <Text style={styles.text}>
                        Jollibee is the flagship brand of Jollibee Foods Corporation, the largest and fastest growing Asian restaurant company in the world.  With 37 stores in the United States, 1300 stores across the globe and many more yet to come, our mission is to spread the joy of eating.
                        Technomic* has consistently cited Jollibee among its Top 500 ranking restaurants in the United States. The Asian Business League of Southern California awarded us the Multinational Corporation of the Year in 2017.
                        In the USA, we operate 37 stores. Our first opened in Daly City, California, in 1998.  Today, you’ll find us in more locations in California, Florida, Hawaii, Illinois, Nevada, New Jersey, New York, Texas, Washington, and Virginia. You’ll also find us in Manitoba and Ontario in Canada.
                        In each market we call home, we serve up our great tasting food with the warm and friendly service we have come to be known for.
                    </Text>
                    <Text style={styles.text}>
                        Jollibee is best known for Chickenjoy, which is delicately hand-breaded to be crispylicious on the outside, with a secret marinade making it juicylicious on the inside. Every day, our customers revel in the joy of our fan favorites which include our sweet-style Jolly Spaghetti and scrumptious Peach Mango Pie made with real Philippine mangoes.
                        Parallel to our mission to spread the joy of eating across the globe, we are all about family.  As we expand, we continue to forge partnerships with local community organizations to be a catalyst that spreads joy and the family values we espouse wherever we go.
                        It is our commitment to serve quality, great-tasting food that offers value for money, friendly and efficient service, a clean in-store environment plus the universal appeal of the family values that our brand represents that drive our growth.
                    </Text>
                </ScrollView>


            </View>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20
    },
    icon: {
        marginVertical: 20,
        alignSelf: 'center',
    },
    text: {
        fontSize: 14,
        color: '#444',
        marginTop: 20
    }
});
