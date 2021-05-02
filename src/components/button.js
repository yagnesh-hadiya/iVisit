import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const ButtonUI = ({
    buttonName,
    onPress,
    extraStyle,
    textExtraStyle,
}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => onPress()}>
                <View style={[styles.container, extraStyle && extraStyle]}>
                    <Text style={[styles.buttonText, textExtraStyle && textExtraStyle]}>
                        {buttonName}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ButtonUI;
const styles = StyleSheet.create({
    container: {
        width: '60%',
        backgroundColor:'#FF5400',
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 50
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
    },
});
