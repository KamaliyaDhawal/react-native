import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../../screen/Home';
import ReviewDetails from '../../screen/ReviewDetails';

import Header from '../../componets/shared/Header';

const screen = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (<Header displayName='Game Zone' navigation = {navigation} />)
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
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
        headerTintColor: 'white',
    },
});