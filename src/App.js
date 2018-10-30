import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';


import Button from './components/common/Button';
import Header from './components/common/Header';
import NumberInput from './components/NumberInput';
import Prompt from './components/common/Prompt';
import { store } from './store/store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Header headerText="pg_one" />
                    <Prompt />
                    <NumberInput />
                    <Button>Next</Button>
                </View>
            </Provider>
        );
    };
}

export default App;