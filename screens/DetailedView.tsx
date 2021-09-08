import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const PlaceHolder = () => {

    return (
        <View style={{}}></View>
    )

}

const DetailedView = (props: any) => {

    const currPresident = useSelector((state:any) => state.presidentObject);

    return(
        <View style={styles.encasingView}>
            <Text style={styles.name}>{currPresident.name}</Text>
            <Text style={styles.age}>{currPresident.age}</Text>
            <Text style={styles.party}>{currPresident.party}</Text>
        </View>
    )
}
export default DetailedView

const styles = StyleSheet.create({
    encasingView: {

    },
    name: {

    },
    age: {

    },
    party: {
        
    }
})