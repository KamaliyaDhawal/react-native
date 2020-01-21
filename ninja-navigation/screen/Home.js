import React, { useState } from 'react';
import { ImageBackground, Text, FlatList, TouchableOpacity, View, Modal } from 'react-native';
import { globleStyle } from '../assets/styles/globleStyles';
import Card from '../componets/shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import AddStudent from '../componets/forms/AddStudent';

export default function Home({ navigation }) {
    const [modalStatus, setModalStatus] = useState(false);
    const [students, setStudents] = useState([
        { name: 'dhaval', surname: 'kamaliya', rating:require('../assets/images/rating-3.png'), age: 27 },
        { name: 'arjun', surname: 'dave', rating:require('../assets/images/rating-4.png'), age: 22 },
        { name: 'manthan', surname: 'gajjar', rating:require('../assets/images/rating-5.png'), age: 22 },
        { name: 'rohan', surname: 'chudasama', rating:require('../assets/images/rating-2.png'), age: 22 },
    ])

    return(
        <ImageBackground style={globleStyle.container} source={require('../assets/images/game_bg.png')}>
            <Modal visible={modalStatus}>
                <View style={globleStyle.container}>
                    <MaterialIcons
                        name="close"
                        size={20}
                        onPress={() => {setModalStatus(false)}}
                        style={globleStyle.modalCloseIcon}
                    />                    
                    <AddStudent />
                </View>
            </Modal>
            <Card>
                <MaterialIcons
                    name="add"
                    size={20}
                    onPress= {() => {setModalStatus(true)} }
                />
            </Card>
            <FlatList
                data={students}
                renderItem={({item}) => (
                    <Card>
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', {student: item})}>
                            <Text>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    </Card>
                )}
            />
        </ImageBackground>
    )
}