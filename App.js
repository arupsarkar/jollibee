import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';

import MenuList from 'components/MenuList'
import MenuReview from 'components/MenuReview'
import About from 'components/About'
import AddReview from 'components/AddReview'
import ShoppingCart from 'components/ShoppingCart'

import { Provider } from 'react-redux'
import store from 'store'

const AppNavigator = createStackNavigator({
        Home: { screen: MenuList },
        Review: { screen: MenuReview }
    //Cart: {screen: OrderCart}
    },
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
    Cart: { screen: ShoppingCart},
    About: { screen: About}
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return {
                tabBarIcon: ({ tintColor }) => {
                    const route = navigation.state.routeName;
                    const name = {
                        'Menu': 'list',
                        'Cart' : 'shopping-cart',
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

// export default createAppContainer(appNavigation);
const Navigation = createAppContainer(appNavigation);
type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}
