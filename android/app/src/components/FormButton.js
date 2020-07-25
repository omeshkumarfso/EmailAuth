import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

export default function FormButton({ buttonTitle, ...rest }) {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText }>
                {buttonTitle}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: Dimensions.get("screen").width / 2,
        height: Dimensions.get("screen").height / 15,
        backgroundColor: '#6646ee',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonText: {
        fontSize: 28,
        color: '#ffffff'
    }
});