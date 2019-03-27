import React, {Component} from 'react';
import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import Header from 'components/Header'
import MenuRow from 'components/Header';

const menu = [
    {name: 'Chickenjoy - 10-pc & 6-pc Chickenjoy Bucket', description: '10-pc & 6-pc Chickenjoy Bucket'},
    {name: 'Chickenjoy - 2-pc Chickenjoy W/ 1 Side', description: '2-pc Chickenjoy W/ 1 Side'},
    {name: 'Chickenjoy - 2-pc Chickenjoy W/ 2 Sides', description: '2-pc Chickenjoy W/ 2 Sides'},
    {name: 'Chickenjoy - 3-pc Chickenjoy W/ 1 Side', description: '3-pc Chickenjoy W/ 1 Side'},
    {name: 'Chickenjoy - 3-pc Chickenjoy W/ 2 Sides', description: '3-pc Chickenjoy W/ 2 Sides'},
    {name: 'Chickenjoy Bucket Treats - Bucket Treat A', description: '6pc Chickenjoy Bucket, 3 Mashed Potatoes, 3 Peach Mango Pies'},
    {name: 'Chickenjoy Bucket Treats - Bucket Treat B', description: '6pc Chickenjoy Bucket, 1 Jolly Spaghetti Family Pack, 3 Mango Pies'},
    {name: 'Chickenjoy Bucket Treats - Bucket Treat C', description: 'Two 6pc Chickenjoy Buckets, 4 Steamed Rice, 4 Peach Mango Pies'},
    {name: 'Chickenjoy Combos - 1-pc Chickenjoy W/ Jolly Spaghetti', description: '1-pc Chickenjoy W/ Jolly Spaghetti'},
    {name: 'Chickenjoy Combos - 2-pc Chickenjoy W/ Jolly Spaghetti', description: '2-pc Chickenjoy W/ Jolly Spaghetti'},
    {name: 'Chickenjoy Combos - 1-pc Chickenjoy With Palabok Fiesta', description: '1-pc Chickenjoy With Palabok Fiesta'},
    {name: 'Chickenjoy Combos - 2-pc Chickenjoy With Palabok Fiesta', description: '2-pc Chickenjoy With Palabok Fiesta'},
    {name: 'Yum! Burgers - Yum Burger', description: 'Yum Burger'},
    {name: 'Yum! Burgers - Yum Burger With Cheese', description: 'Yum Burger With Cheese'},
    {name: 'Yum! Burgers - Amazing Aloha Burger', description: 'Amazing Aloha Burger'},
    {name: 'Yum! Burgers - Big Yum Burger', description: 'Big Yum Burger'},
];


export default class App extends Component<Props> {

    state = {
        search: null
    };

  render() {
      // console.log('DEBUG', this.state.search);
    return (
        <View style={{
            flex: 1
        }}>

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
                    <MenuRow item={item} index={index}/>
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

