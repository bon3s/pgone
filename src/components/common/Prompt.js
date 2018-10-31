import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Prompt extends Component {
    render() {
        if (this.props.visible) {
            return (
                <View style={styles.viewStyle}>
                    <Text>
                        {this.props.msg}
                    </Text>
                </View>
            );
        }
        return <View />;
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textStyle: {
        color: '#000',
        fontSize: 14,
    }
});

const mapStateToProps = (state) => ({
    visible: state.promptReducer.visible,
    msg: state.promptReducer.msg,
});

export default connect(mapStateToProps)(Prompt);