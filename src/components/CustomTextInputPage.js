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
        this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleButtonPress() {
        if (this.props.customTextInput != '' && this.props.customTextInput != null) {
            this.props.history.push('/CustomTextInputPage');
        }
        else {
            this.props.dispatch(promptVisible(true, 'Field cannot be empty.'));
        }
    }

    render() {
        return (
            <View>
                <HeaderAlt headerText="pg_one" />
                <Prompt />
                <CustomTextInput onError={(visible, value) => {
                    this.props.dispatch(promptVisible(visible, value));
                }} onChange={(text) => {
                    this.props.dispatch(setCustomTextInput(text));
                }}
                    value={this.props.customTextInput} />
                <Button onPress={this.handleButtonPress}>Next</Button>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    customTextInput: state.customTextInputReducer.customTextInput
});

export default connect(mapStateToProps)(CustomTextInputPage); 