
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from './common/Button';
import Header from './common/Header';
import NumberInput from './NumberInput';
import Prompt from './common/Prompt';
import { connect } from 'react-redux';
import { setNumberInput } from '../actions/numberInputActions';
import { promptVisible } from '../actions/promptActions';
import UniversalInput from './UniversalInput';

class NumberInputPage extends Component {
    constructor() {
        super();
        this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleButtonPress() {
        if (this.props.numberInput != '' && this.props.numberInput !== 0 && this.props.numberInput != null) {
            this.props.dispatch(promptVisible(false, ''));
            this.props.history.push('/CustomTextInputPage');
        }
        else {
            this.props.dispatch(promptVisible(true, 'Field cannot be empty or null.'));
        }
    }

    render() {
        return (
            <View>
                <Header headerText="pg_one" />
                <View style={styles.containerStyle}>
                    <Prompt />
                    <Text style={styles.textStyle}>Enter a number between 1 and 23</Text>
                    {/* <NumberInput onError={(visible, value) => {
                        this.props.dispatch(promptVisible(visible, value));
                    }} onChange={(text) => {
                        this.props.dispatch(setNumberInput(text));
                    }}
                        value={this.props.numberInput} /> */}
                    <UniversalInput inputType='number' onError={(text) => this.props.dispatch(promptVisible(true, text))} maxLength={23} onValueChange={(text) => { this.props.dispatch(setNumberInput(text)) }} value={this.props.numberInput} />
                    <Button onPress={this.handleButtonPress}>Next</Button>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        padding: 15
    },
    textStyle: {
        color: '#000000',
        padding: 15,
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }

});

const mapStateToProps = (state) => ({
    numberInput: state.numberInputReducer.numberInput
});

export default connect(mapStateToProps)(NumberInputPage);