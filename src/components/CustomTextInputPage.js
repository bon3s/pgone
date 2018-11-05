import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Button from './common/Button';
import HeaderAlt from './common/HeaderAlt';
import Prompt from './common/Prompt';
import CustomTextInput from './CustomTextInput';


import { promptVisible } from '../actions/promptActions';
import { setCustomTextInput } from '../actions/customTextInputActions';
import { modalVisible } from '../actions/modalActions';

class CustomTextInputPage extends Component {
    constructor() {
        super();
        this.sendRequest = this.sendRequest.bind(this);
    }

    sendRequest() {
        this.props.dispatch(modalVisible(true));
        if (this.props.customTextInput != '' && this.props.customTextInput != null) {
            const body = {
                "count": this.props.numberInput,
                "string": this.props.customTextInput
            };

            fetch(
                'http://192.168.1.105:2323', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }).then((response) => response.json())
                .then((responseData) => {
                    if (responseData.result) {
                        this.props.dispatch(modalVisible(false));
                        this.props.dispatch(promptVisible(true, responseData.result, true));
                    }
                    else {
                        this.props.dispatch(modalVisible(false));
                        this.props.dispatch(promptVisible(true, responseData.message, false));
                    }
                }).catch((error) => {
                    this.props.dispatch(modalVisible(false));
                    console.log(error);
                });
        }
        else {
            this.props.dispatch(promptVisible(true, 'Field cannot be empty.', false));
        }
    }
    render() {
        return (
            <View>
                <HeaderAlt
                    headerText="pg_one" history={this.props.history} />
                <View style={styles.containerStyle}>
                    <Prompt />

                    <CustomTextInput
                        onError={(visible, value) => {
                            this.props.dispatch(promptVisible(visible, value, false));
                        }}
                        onChange={(text) => {
                            this.props.dispatch(setCustomTextInput(text));
                        }}
                        value={this.props.customTextInput} />

                    <Button onPress={this.sendRequest}>Send</Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        padding: 15
    }
});

const mapStateToProps = (state) => ({
    customTextInput: state.customTextInputReducer.customTextInput,
    numberInput: state.numberInputReducer.numberInput
});

export default connect(mapStateToProps)(CustomTextInputPage); 