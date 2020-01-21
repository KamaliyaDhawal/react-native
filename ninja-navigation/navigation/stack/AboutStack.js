import React from 'react';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';

import About from '../../screen/About';
import Header from '../../componets/shared/Header';

const screen = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: (<Header displayName="About Game Zone" navigation={navigation} />)
            }
        } 
    }
}

const headerStyle = {
    color: 'white',
    backgroundColor: '#333'
}

export default createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerStyle,
        headerTintColor: '#fff',
    },
});