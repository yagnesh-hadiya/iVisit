import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HeaderTitle from '../components/headerTitle';
import { getVisits } from '../redux/action';

export const sizeData = [{ id: '1', name: 'X', email: 'hadiya.yagnesh@example.com' }, { id: '2', name: 'M', email: 'hadiya.yagnesh@example.com' }, { id: '3', name: 'XXL' }, { id: '4', name: 'M' }, { id: '5', name: 'XXL' }, { id: '6', name: 'M' }, { id: '7', name: 'XXL' }, { id: '8', name: 'M' }];

const VisitsScreen = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVisits())
    }, [])

    const redux = useSelector((state) => state.getVisitsReducer);
    // const users = redux?.data;
    console.log(redux.data.id) 

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.5} shadowOffset={0.2}
                onPress={() => props.navigation.navigate('VisitDetailScreen', { item: item })}>
                <View style={styles.itemContainer}>
                    <Image source={require('../assets/image/product1.jpg')} style={styles.itemImage} key={item.id} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Text >{item.name}</Text>
                        <Text style={{ fontSize: 10, width: 150 }}>{item.email}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <>
            <HeaderTitle title='My Visits' />
            <View style={styles.container}>
                <FlatList
                    data={sizeData}
                    renderItem={renderItem}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        padding: 5,
        backgroundColor: '#fff',
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 5,
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.3,
        shadowColor: '#000',
        shadowRadius: 5,
        elevation: 5,
    },
    itemImage: {
        width: 145,
        height: 210,
        marginHorizontal: 5,
        marginVertical: 5,
    },
})

export default VisitsScreen;