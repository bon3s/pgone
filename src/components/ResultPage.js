import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import Button from './common/Button';


class ResultPage extends Component {
    constructor() {
        super();
        this.handleButton = this.handleButton.bind(this);
    }
    handleButton() {
        this.props.history.push('/');
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.viewStyleSuccess}>
                    <Text style={styles.textStyleSuccess}>
                        Result:
                        {'\n\n' + this.props.result}
                    </Text>
                </View>
                <View style={styles.containerStyle}>
                    <Button onPress={this.handleButton} style={styles.buttonStyle}>Home</Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        padding: 15
    },
    viewStyleSuccess: {
        paddingVertical: 15,
        paddingHorizontal: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#007F00',
        borderRadius: 5,
    },
    textStyleSuccess: {
        color: '#007F00',
        fontSize: 14,
        textAlign: 'center'
    },
    buttonStyle: {
        margin: 10
    }

});

const mapStateToProps = (state) => ({
    result: state.customTextInputReducer.result
});

export default connect(mapStateToProps)(ResultPage);