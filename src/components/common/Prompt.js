import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Prompt extends Component {
    render() {
        if (this.props.visible) {
            if (this.props.success) {
                return (
                    <View style={styles.viewStyleSuccess}>
                        <Text style={styles.textStyleSuccess}>
                            {this.props.msg}
                        </Text>
                    </View>
                );
            }
            else {
                return (
                    <View style={styles.viewStyleFail}>
                        <Text style={styles.textStyleFail}>
                            {this.props.msg}
                        </Text>
                    </View>
                );
            }

        }
        return <View />;
    }
}

const styles = StyleSheet.create({
    viewStyleFail: {
        paddingVertical: 15,
        paddingHorizontal: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ff0000',
        borderRadius: 5,
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
    textStyleFail: {
        color: '#ff0000',
        fontSize: 14,
    },
    textStyleSuccess: {
        color: '#007F00',
        fontSize: 14,
    }
});

const mapStateToProps = (state) => ({
    visible: state.promptReducer.visible,
    success: state.promptReducer.success,
    msg: state.promptReducer.msg,
});

export default connect(mapStateToProps)(Prompt);