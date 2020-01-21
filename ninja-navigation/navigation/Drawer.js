import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import AboutStack from './stack/AboutStack';
import HomeStack from './stack/HomeStack';

const screen = {
    Home: {
        screen: HomeStack
    },
    About: {
        screen: AboutStack
    }
}

export default createAppContainer(createDrawerNavigator(screen));