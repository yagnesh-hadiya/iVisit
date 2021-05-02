import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderTitle = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity >
                <View style={styles.left}>
                    <Icon name={props.iconName} color='#000' size={33} />
                    <Text style={styles.backText}>{props.leftTitle}</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.backText}>{props.title}</Text>
            <View style={styles.right}>
                <Text>{props.right}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ccc',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },

})
export default HeaderTitle;