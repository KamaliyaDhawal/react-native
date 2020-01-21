import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card(props) {
    return(
        <View style={styles.card}>
            { props.children }
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#ddd",
        borderBottomWidth: 0,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
        margin: 5,
        padding: 10,
        alignItems: 'center'
    }
})