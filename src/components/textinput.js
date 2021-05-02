import React from 'react';
import { TextInput, StyleSheet, } from 'react-native';

const TextInputUI = ({
    value,
    onChangeText,
    placeholder,
    textInputStyle,
    keyboardType,
    editable = true,
    autoCapitalize = 'sentences',
}) => {
    return (
        <TextInput
            style={[styles.container, textInputStyle && textInputStyle]}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder={placeholder}
            placeholderTextColor='#a6a6a6'
            keyboardType={keyboardType || 'default'}
            editable={editable}
            autoCapitalize={autoCapitalize}
        />
    );
};
export default TextInputUI;

const styles = StyleSheet.create({
    textinputContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffc107',
        borderColor: '#ccc',
        borderWidth: 1,
        height: 40,
        paddingHorizontal: 7,
    },
    container: {
        height:40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        width: '80%',
        alignSelf: 'center',
        marginTop: 10
    },
});
