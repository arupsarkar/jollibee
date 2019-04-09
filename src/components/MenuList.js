import React, {Component} from 'react';
import {View, StyleSheet, TextInput, FlatList, Image} from 'react-native';
import axios from 'axios'
import Header from 'components/Header';
import MenuRow from 'components/MenuRow';
import JollibeeImage from 'images/Jollibee.png';
import ShoppingCartIcon from 'components/ShoppingCartIcon'
import Products from 'components/Products'
import {connect} from "react-redux";
import {withNavigation} from "react-navigation";

export default class MenuList extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        search: null,
        menu: []
    };
    componentDidMount() {
        axios.get('https://sfdc-api-app.herokuapp.com/api/products')
            .then(result =>
                this.setState({ menu: result.data })
            )
    }

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
                <ShoppingCartIcon/>

                <FlatList

                    data={
                        this.state.menu.filter(item => {
                            console.log('data() item name : ', item.name);
                            return !this.state.search ||
                                item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
                        })
                    }
                    renderItem={({ item, index }) =>
                        <MenuRow
                            onRowPress={this.props.addItemToCart}
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

