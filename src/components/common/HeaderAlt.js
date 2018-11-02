// Import libraries for making a component
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Backbutton from './BackButton';

const HeaderAlt = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Backbutton onPress={console.log('test')} />
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default HeaderAlt;