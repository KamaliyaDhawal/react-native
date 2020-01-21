import React from 'react';
import { ImageBackground, Text } from 'react-native';
import { globleStyle } from '../assets/styles/globleStyles';
import Card from '../componets/shared/Card'

export default function About() {
    return(
        <ImageBackground style={globleStyle.container} source={require('../assets/images/game_bg.png')}>
            <Card>
                <Text>
                    About
                </Text>
            </Card>
        </ImageBackground>
    )
}