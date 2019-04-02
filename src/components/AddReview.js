import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    ToastAndroid
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view'

export default class AddReview extends Component {

    state = {
        name: '',
        rating: 0,
        comment: '',
        submitting: false
    };

    close = () => {
        this.props.navigation.goBack(null)
    };

    submitReview = () => {
        this.setState({ submitting: true });
        fetch('http://sfdc-api-app.herokuapp.com/api/review', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                subject: this.state.name,
                rating: this.state.rating,
                description: this.state.comment
            })
        })
            .then(response => response.json())
            .then(result => {
                this.setState({ submitting: false }, () => {
                    console.log(' Response : ', result);
                    let toastMessage = '';
                    if(result.success) {
                        toastMessage = 'Case Id : ' + result.success;
                    }else{
                        toastMessage = 'Thank you for your feedback.'
                    }
                    console.log('Response : ', toastMessage);
                    this.props.navigation.goBack()
                })
            })
            .catch(error => {
                console.log('Error : ', error);
                this.setState({ submitting: false })
            })
    };

    render() {
        const item = this.props.navigation.getParam('item');
        console.log(item);

        const {
            menuItem
        } = this.props;

        return (
            <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
                <View style={styles.root}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.close}
                    >
                        <Icon name="close" size={30} color="#ff0000" />
                    </TouchableOpacity>

                    <Text style={styles.addReview}>Add Review</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Name (optional)"
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                    />

                    <Text style={styles.rating}>Your Rating:</Text>
                    <View style={styles.stars}>
                        {
                            [1, 2, 3, 4, 5].map(i => {
                                return <TouchableOpacity
                                    onPress={() => this.setState({ rating: i })}
                                    style={styles.starButton}
                                    key={i}
                                >
                                    <Icon
                                        name={"star"}
                                        color={this.state.rating >= i ? "#FFD64C" : "#CCCCCC"}
                                        size={40}
                                    />
                                </TouchableOpacity>
                            })
                        }
                    </View>

                    <TextInput
                        style={[styles.input, { height: 100 }]}
                        placeholder="Review"
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        multiline={true}
                        numberOfLines={5}
                    />

                    {
                        this.state.submitting &&
                        <ActivityIndicator
                            size="large" color="#ff0000"
                            style={{ padding: 10 }}
                        />
                    }

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={this.submitReview}
                        disabled={this.state.submitting}
                    >
                        <Text style={styles.submitButtonText}>Submit Review</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAwareScrollView>
        )
    }

}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20
    },
    button: {
        paddingHorizontal: 10
    },
    addReview: {
        fontSize: 25,
        color: '#444',
        textAlign: 'center',
        margin: 20
    },
    input: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3
    },
    rating: {
        fontSize: 20,
        color: 'grey',
        textAlign: 'center',
        marginVertical: 40
    },
    stars: {
        marginBottom: 80,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    starButton: {
        padding: 5
    },
    submitButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ff0000',
        borderRadius: 4,
        marginVertical: 10,
        marginHorizontal: 20
    },
    submitButtonText: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center'
    }
});
