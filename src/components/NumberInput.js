import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { setNumberInput } from '../actions/numberInputActions';
import { promptVisible } from '../actions/promptActions';


class NumberInput extends Component {

    constructor(props) {
        super(props);
    }

    validateInput(text) {
        const reg = /^\d+$/;
        if (reg.test(text)) {
            this.props.dispatch(setNumberInput(text));
        }
        else {
            this.props.dispatch(promptVisible(true, "Error"));
        }
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <TextInput
                    style={styles.textInputStyle}
                    keyboardType='numeric'
                    value={this.props.numberInput ? this.props.numberInput : ''}
                    onChangeText={(text) => { this.validateInput(text); }}
                />
            </View>
        );
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

const mapStateToProps = (state) => ({
    numberInput: state.numberInputReducer.numberInput
})

export default connect(mapStateToProps)(NumberInput);