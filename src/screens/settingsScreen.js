import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderTitle from '../components/headerTitle';

const SettingsScreen = () => {
    return (
        <View >
            <HeaderTitle title='Settings' />
            <View style={styles.logoutContainer}>
                <Text style={styles.textStyle} >Logout</Text>
                <Icon
                    name='chevron-forward-outline'
                    size={32}
                    color='#000'
                />
            </View>
            <View style={styles.seperator} />
            <View style={styles.versionContainer}>
                <Text style={styles.textStyle} >Version (1.0)</Text>
            </View>
            <View style={styles.seperator} />
        </View>
    )
}

const styles = StyleSheet.create({
    logoutContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    versionContainer: {
        margin: 10,
    },
    seperator: {
        width: '100%',
        height: 1,
        backgroundColor: '#000'
    },
    textStyle: {
        fontSize: 15,
    }
})
export default SettingsScreen;