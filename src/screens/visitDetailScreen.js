import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderTitle from '../components/headerTitle';
import MapView, {
    Marker,
    PROVIDER_GOOGLE
} from 'react-native-maps';

const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}
const marker = {
    latitude: 37.78825,
    longitude: -122.4324,
}


const VisitDetailScreen = (props) => {
    // const { item } = props.route.params;
    const data = [
        {
            id: "0F8JIqi4zwvb77FGz6Wt",
            lastName: "Fiedler",
            firstName: "Heinz-Georg",
            email: "heinz-georg.fiedler@example.com",
            title: "mr",
            picture: "https://randomuser.me/api/portraits/men/81.jpg",
            phone: "0700-3090279",
            gender: "male",
            registerDate: "2020-03-07T00:42:32.221Z",
            dateOfBirth: "1974-03-12T21:15:08.878Z",
            location: {
                state: "Rheinland-Pfalz",
                street: "4118, Schulstraße",
                city: "Fellbach",
                timezone: "-7:00",
                country: "Germany"
            },
        }];
    return (
        <View style={styles.container}>
            <HeaderTitle title='Visit Details' iconName='chevron-back-outline' leftTitle='Back' />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <Image source={require('../assets/image/product1.jpg')} style={{ height: 180 }} />
                <Icon name='heart' size={40} color='#a6a6a6' />
            </View>

            <View style={styles.detailsDiv}>
                <Text style={styles.idTextStyle}>{data.id}</Text>
                <Text style={styles.visitorName} >{data.title} {data.firstName}{data.userDetails}{data.lastName}</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.boldText} >Gender:</Text>
                    <Text >{data.gender}</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.boldText} >Date of birth:</Text>
                    <Text>{data.dateOfBirth}</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.boldText} >Register Date:</Text>
                    <Text >{data.registerDate}</Text>
                </View>


                <View style={{ ...styles.rowContainer, marginTop: 10 }}>
                    <Text style={styles.boldText} >Email:</Text>
                    <Text >{data.email}</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.boldText} >Phone:</Text>
                    <Text >{data.phone}</Text>
                </View>

                <View style={styles.addressContainer}>
                    <Text style={styles.boldText} >Address:</Text>
                    <Text >{data.location.country + ', ' + data.location.state + ', ' + data.location.state + ', ' + data.location.street + ', ' + data.location.city}</Text>
                </View>
                <MapView
                    style={styles.map}
                    region={region}
                    provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : ''}
                >
                    <Marker
                        coordinate={marker}
                    />
                </MapView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    detailsDiv: {
        marginTop: 5
    },
    visitorName: {
        fontFamily: 'bold',
        marginBottom: 10
    },
    idTextStyle: {
        color: '#808080',
        fontFamily: 'bold',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    boldText: {
        fontWeight: 'bold',
    },
    addressContainer: {
        marginTop: 10
    },
    map: {
        height: 300,
        width: '100%'
    },

})
export default VisitDetailScreen;