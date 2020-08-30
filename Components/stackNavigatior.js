import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
//Importing Screens
import Health from '../Screens/Health'
import searchCountry from '../Screens/searchCountry'
import Home from '../Screens/Home'
import Country from '../Screens/Country'


const Screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
    SearchCountry: {
        screen: searchCountry,
        navigationOptions: {
            title: null,
            headerStyle: { backgroundColor: '#121517', },
            headerTintColor: '#CFCFCF',
            headerTintSize: 25,
        }
    },
    Country: {
        screen: Country,
        navigationOptions: {
            title: null,
            headerStyle: { backgroundColor: '#121517', },
            headerTintColor: '#CFCFCF',
            headerTintSize: 25,
        }
    },
    Health: {
        screen: Health,
        navigationOptions: {
            title: null,
            headerStyle: { backgroundColor: '#121517', },
            headerTintColor: '#CFCFCF',
            headerTintSize: 25,
        }
    },
    initialRouteName: 'Home',
}

const Stack = createStackNavigator(Screens)

export default createAppContainer(Stack)