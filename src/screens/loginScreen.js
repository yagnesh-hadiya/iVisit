import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonUI from '../components/button';
import HeaderTitle from '../components/headerTitle';
import TextInputUI from '../components/textinput';

const LoginScreen = (props) => {

    const [emailAddress, setEmailaddress] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');

 

    const onChangeText = (field, text) => {
        switch (field) {
            case 'email':
                setEmailaddress(text);
                break;
            case 'password':
                setPassword(text);
                break;
            default:
                break;
        }
    }
    return (
        <>
            <HeaderTitle title='My Visits' />

            <View style={styles.container}>
                <TextInputUI
                    value={emailAddress}
                    onChangeText={(text) => onChangeText('email', text)}
                    placeholder='Email'
                />
                <TextInputUI
                    value={password}
                    onChangeText={(text) => onChangeText('password', text)}
                    placeholder='Password'
                />
                <ButtonUI
                    buttonName='GO'
                    onPress={() => props.navigation.navigate('VisitsScreen')}
                />
            </View>
        </>
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
})