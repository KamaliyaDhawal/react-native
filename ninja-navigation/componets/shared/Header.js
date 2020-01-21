import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Header(props) {
    return(
        <View style={styles.header}>
            <Text>
                <MaterialIcons name="menu" size={28} onPress={() => { props.navigation.openDrawer() }} color='#fff' />
            </Text>
            <Text style={styles.headerText}>
                {props.displayName}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerIcon: {
        position: 'absolute',
    }
})