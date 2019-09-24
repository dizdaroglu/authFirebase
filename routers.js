import { createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

import AppScreen from './App';
import RegisterScreen from './src/screens/RegisterScreen';

const stackNav = createStackNavigator({
    Splash: SplashScreen,
    App: AppScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: HomeScreen
}, {
    defaultNavigationOptions: {
        header: null
    }
});


export default createAppContainer(stackNav);
