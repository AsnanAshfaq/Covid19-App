import React, { useRef } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { useFonts } from '@use-expo/font';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';


export default function HeaderView({ navigation }) {

    const screenWidth = Dimensions.get('window').width
    const [fontsLoaded] = useFonts({
        'Raleway': require('../assets/fonts/Raleway-Medium.ttf'),
    });
    const menu = useRef()


    const go_to_route = (route) => {
        menu.current.hide()
        navigation.navigate(route)

    }

    const showMenu = () => menu.current.show()

    if (fontsLoaded) {
        return (

            <View style={{ width: screenWidth, height: 100, flexDirection: 'row' }}>

                <View style={{ flex: 3, justifyContent: 'center', paddingLeft: 20 }}>
                    <Text style={{ fontFamily: 'Raleway', fontSize: 26, color: '#CFCFCF' }}>COVID 19 </Text>
                    <Text style={{ fontFamily: 'Raleway', fontSize: 26, color: '#CFCFCF' }}>Tracker</Text>
                </View>
                <View style={{ flex: 1, paddingTop: 35, alignItems: 'center' }}>
                    <Menu
                        ref={menu}
                        style={{ backgroundColor: '#1D2329' }}
                        animationDuration={450}
                        button={<Icon name={'bars'} size={18} color={'#CFCFCF'} onPress={showMenu} />}>
                        <MenuItem onPress={() => go_to_route('SearchCountry')}>
                            <Text style={{ color: '#CFCFCF', fontFamily: 'Raleway' }}>Search Country</Text>
                        </MenuItem>
                        <MenuDivider color='black' />
                        <MenuItem onPress={() => go_to_route('Health')}>
                            <Text style={{ color: '#CFCFCF', fontFamily: 'Raleway' }}>Health Care</Text>
                        </MenuItem>
                    </Menu>
                </View>
            </View>
        )
    }
    return null
}
