import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { promptVisible } from '../actions/promptActions';


class UniversalInput extends Component {

    constructor(props) {
        super(props);
    }

    validateNumberInput(text) {
        const reg = /^\d+$\b/;
        if (text.length === 0) {
            this.props.onValueChange(text)
        }
        else {
            if (reg.test(text)) {
                if (Number(text) <= this.props.maxLength) {
                    this.props.onValueChange(text);
                }
                else {
                    this.props.dispatch(promptVisible(true, "You can't enter a number higher than " + this.props.maxLength));
                }
            }
            else {
                this.props.dispatch(promptVisible(true, "You can enter only numbers!"));
            }
        }
    }

    validateTextInput(text) {
        if (text.length === 0) {
            this.props.onValueChange(text)
        }
        else {
            if (text.length < this.props.maxLength) {
                this.props.onValueChange(text);
            } else {
                this.props.dispatch(
                    promptVisible(true, "You can enter a max of " + this.props.maxLength + "characters.")
                );
            }
        }
    }

    render() {
        if (this.props.inputType == 'number') {
            return (
                <View style={styles.viewStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        keyboardType='numeric'
                        value={this.props.value ? String(this.props.value) : ''}
                        onChangeText={(text) => { this.validateNumberInput(text); }}
                    />
                </View>
            );
        }
        if (this.props.inputType == 'text') {
            return (
                <View style={styles.viewStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        value={this.props.value ? String(this.props.value) : ''}
                        onChangeText={(text) => { this.validateTextInput(text); }}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    textInputStyle: {
        padding: 10,
        fontSize: 16,
        color: '#ff0000',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ff0000',
        width: '30%',
    },
    viewStyle: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default connect()(UniversalInput);