import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';


class NumberInput extends Component {

    constructor(props) {
        super(props);
    }

    validateInput(text) {
        const reg = /^\d+$/;
        if (reg.test(text)) {
            this.props.onChange(text);
        }
        else {
            this.props.onError(true, "You can enter only numbers!");
        }
    }
    render() {
        return (
            <View style={styles.viewStyle}>
                <TextInput
                    style={styles.textInputStyle}
                    keyboardType='numeric'
                    value={this.props.value ? String(this.props.value) : ''}
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

export default NumberInput;