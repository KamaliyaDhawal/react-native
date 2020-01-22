import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';
import { globleStyle } from '../assets/styles/globleStyles';
import Card from '../componets/shared/Card'

export default function ReviewDetails({ navigation }) {
    const student = navigation.getParam('student');
    return(
        <ImageBackground style={globleStyle.container} source={require('../assets/images/game_bg.png')}>
            <Card>
                <Text>Hello!! { student.name } { student.surname }</Text>
                <Text>{ student.name } you are {student.age} years old.</Text>
                {/* <Image source={student.rating} /> */}
            </Card>
        </ImageBackground>
    )
}