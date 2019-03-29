import React, {Component} from 'react';
import {View, StyleSheet, TextInput, FlatList, Image} from 'react-native';
import Header from 'components/Header';
import MenuRow from 'components/MenuRow';
import JollibeeImage from 'images/Jollibee.png';

const menu = [
    {name: 'Chickenjoy - 10-pc & 6-pc Chickenjoy Bucket', description: '10-pc & 6-pc Chickenjoy Bucket', price: 14.44, image: 'https://jollibeeusa.com/wp-content/uploads/2019/03/lgchickjoy.png', rating: 4},
    {name: 'Chickenjoy - 2-pc Chickenjoy W/ 1 Side', description: '2-pc Chickenjoy W/ 1 Side', price: 10.99, image: 'https://jollibeeusa.com/wp-content/uploads/2018/11/2pc1side.png', rating: 5},
    {name: 'Chickenjoy - 2-pc Chickenjoy W/ 2 Sides', description: '2-pc Chickenjoy W/ 2 Sides', price: 7.99, image: 'https://jollibeeusa.com/wp-content/uploads/2018/11/2pc2side.png', rating: 3.5},
    {name: 'Chickenjoy - 3-pc Chickenjoy W/ 1 Side', description: '3-pc Chickenjoy W/ 1 Side', price: 6.99, image: 'https://jollibeeusa.com/wp-content/uploads/2018/11/3pc1side.png', rating: 4.5},
    {name: 'Chickenjoy - 3-pc Chickenjoy W/ 2 Sides', description: '3-pc Chickenjoy W/ 2 Sides', price: 9.99, image: 'https://jollibeeusa.com/wp-content/uploads/2018/11/3pc2side.png', rating: 2},
    {name: 'Chickenjoy Bucket Treats - Bucket Treat A', description: '6pc Chickenjoy Bucket, 3 Mashed Potatoes, 3 Peach Mango Pies', price: 12.99, image: 'https://jollibeeusa.com/wp-content/uploads/2018/11/bucketa.png', rating: 3.5},
    {name: 'Chickenjoy Bucket Treats - Bucket Treat B', description: '6pc Chickenjoy Bucket, 1 Jolly Spaghetti Family Pack, 3 Mango Pies', price: 4.99, image: 'https://jollibeeusa.com/wp-content/uploads/2018/11/bucketb.png', rating: 4.5},
    {name: 'Chickenjoy Bucket Treats - Bucket Treat C', description: 'Two 6pc Chickenjoy Buckets, 4 Steamed Rice, 4 Peach Mango Pies', price: 5.99, image: 'https://jollibeeusa.com/wp-content/uploads/2018/11/bucketc.png', rating: 3.5},
    {name: 'Chickenjoy Combos - 1-pc Chickenjoy W/ Jolly Spaghetti', description: '1-pc Chickenjoy W/ Jolly Spaghetti', price: 13.99, image: 'https://jollibeeusa.com/wp-content/uploads/2018/11/chickspag-1.png', rating: 5},
    {name: 'Chickenjoy Combos - 2-pc Chickenjoy W/ Jolly Spaghetti', description: '2-pc Chickenjoy W/ Jolly Spaghetti', price: 6.99, image: 'https://jollibeeusa.com/wp-content/uploads/2018/11/2pccjsp.png', rating: 4},
    {name: 'Chickenjoy Combos - 1-pc Chickenjoy With Palabok Fiesta', description: '1-pc Chickenjoy With Palabok Fiesta', price: 7.99, image: 'https://jollibeeusa.com/wp-content/uploads/2018/11/palabokcjoy.png', rating: 4.5},
    {name: 'Chickenjoy Combos - 2-pc Chickenjoy With Palabok Fiesta', description: '2-pc Chickenjoy With Palabok Fiesta', price: 6.99, image: 'https://jollibeeusa.com/wp-content/uploads/2018/11/2pcpala.png', rating: 3},
    {name: 'Yum! Burgers - Yum Burger', description: 'Yum Burger', price: 8.99, image: 'https://jollibeeusa.com/wp-content/uploads/2019/03/yum-1.png', rating: 2},
    {name: 'Yum! Burgers - Yum Burger With Cheese', description: 'Yum Burger With Cheese', price: 4.99, image: 'https://jollibeeusa.com/wp-content/uploads/2019/03/cheeseburger-1.png', rating: 4},
    {name: 'Yum! Burgers - Amazing Aloha Burger', description: 'Amazing Aloha Burger', price: 3.99, image: 'https://jollibeeusa.com/wp-content/uploads/2019/03/aloha.png', rating: 4.5},
    {name: 'Yum! Burgers - Big Yum Burger', description: 'Big Yum Burger', price: 2.99, image: 'https://jollibeeusa.com/wp-content/uploads/2019/03/bigyum.png', rating: 4},
];

export default class MenuList extends Component<props> {

    static navigationOptions = {
        header: null
    };

    state = {
        search: null
    };

    render() {
        // console.log('DEBUG', this.state.search);
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#FFFFFF'
            }}>

                <View style={{
                    marginTop: 40,
                    alignItems: 'center'
                }}>
                    <Image source={JollibeeImage} />
                </View>

                <Header/>

                <TextInput
                    style = {styles.input}
                    placeholder = "Search"
                    onChangeText = { text => {
                        this.setState({search: text})
                    }}
                    value = {this.state.search}
                />
                <FlatList
                    data={
                        menu.filter(item => {
                            console.log('data() item name : ', item.name);
                            return !this.state.search ||
                                item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
                        })
                    }
                    renderItem={({ item, index }) =>
                        <MenuRow
                            item={item}
                            index={index}
                            navigation={this.props.navigation}
                        />
                    }
                    keyExtractor={ item => item.name}
                    initialNumToRender={16}
                    ListHeaderComponent={<View style={{height: 30}} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#4444',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#F5F5F5'
    },
});

