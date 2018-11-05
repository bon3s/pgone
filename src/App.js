import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';
import { store } from './store/store';
import Router from './Router';
import CustomModal from './components/common/CustomModal';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <CustomModal>
                        <Router />
                    </CustomModal>
                </View>
            </Provider>
        );
    };
}

export default App;