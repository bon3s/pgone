import React, { Component } from 'react';
import { View } from 'react-native';
import Button from './common/Button';
import HeaderAlt from './common/HeaderAlt';
import Prompt from './common/Prompt';
import CustomTextInput from './CustomTextInput';
import { connect } from 'react-redux';
import { promptVisible } from '../actions/promptActions';
import { setCustomTextInput } from '../actions/customTextInputActions';

class CustomTextInputPage extends Component {
    constructor() {
        super();
        this.sendRequest = this.sendRequest.bind(this);
    }

    sendRequest() {

        if (this.props.customTextInput != '' && this.props.customTextInput != null) {
            const body = {
                "count": this.props.numberInput,
                "string": this.props.customTextInput
            };
            fetch(
                'http://127.0.0.1:2323', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }).then((response) => response.json())
                .then((responseData) => {
                    console.log(responseData);
                }).catch((error, responseData) => {
                    console.log('error', error);
                });
        }

        else {
            this.props.dispatch(promptVisible(true, 'Field cannot be empty.'));
        }
    }

    render() {
        return (
            <View>
                <HeaderAlt
                    headerText="pg_one" history={this.props.history} />

                <Prompt />

                <CustomTextInput
                    onError={(visible, value) => {
                        this.props.dispatch(promptVisible(visible, value));
                    }}
                    onChange={(text) => {
                        this.props.dispatch(setCustomTextInput(text));
                    }}
                    value={this.props.customTextInput} />

                <Button onPress={this.sendRequest}>Send</Button>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    customTextInput: state.customTextInputReducer.customTextInput,
    numberInput: state.numberInputReducer.numberInput
});

export default connect(mapStateToProps)(CustomTextInputPage); 