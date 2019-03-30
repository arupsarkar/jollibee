import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';

import MenuList from 'components/MenuList'
import MenuReview from 'components/MenuReview'
import OrderCart from 'components/OrderCart'
import About from 'components/About'
import AddReview from 'components/AddReview'

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

const AppNavigator = createStackNavigator({
    Home: { screen: MenuList },
    Review: { screen: MenuReview },
    Cart: {screen: OrderCart}},
    {
        defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#ff0000',
            color: '#FFF'
        },
        headerTintColor: '#FFF',
            headerTitleStyle: {
            color: '#FFF'
        },
        tintColor: 'red'
    }
});

const Tabs = createBottomTabNavigator({
    Menu: { screen: AppNavigator },
    About: { screen: About}},
    {
        defaultNavigationOptions: ({navigation}) => {
            return {
                tabBarIcon: ({ tintColor }) => {
                    const route = navigation.state.routeName
                    const name = {
                        'Menu': 'list',
                        'About': 'info-circle'
                    }[route]
                    return <Icon name={name} color={tintColor} size={22} />
                },
                tabBarOptions: {
                    activeBackgroundColor: '#E6F0FA'
                }
            }
        }
});

//export default createStackNavigator({
const appNavigation = createStackNavigator({
        Tabs: { screen: Tabs },
        AddReview: { screen: AddReview }
}   , {
        mode: 'modal',
        headerMode: 'none',
        navigationOptions: {
        gesturesEnabled: false
    }
});

export default createAppContainer(appNavigation);
