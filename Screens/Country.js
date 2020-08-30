import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView ,Animated} from 'react-native'
import ChartDetails from '../Components/chartDetails'
import Chart from '../Components/barChart'
import Loadingcomponent from '../Components/Loading'



export default Country = ({ navigation }) => {

    const [Loading, setLoading] = useState(true)
    const [data, setdata] = useState([])
    const [Flag, setFlag] = useState('')
    const animatedOpacity = useState(new Animated.Value(0))[0]


    const fetchData = () => {
        setdata(navigation.state.params.countryDetails)
        const image = { uri: navigation.state.params.countryDetails.countryInfo.flag }
        setFlag(image)
    }

    function animateView() {
        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver:true
        }).start()
    }


    useEffect(() => {
        if (data == null || data.length == 0) {
            fetchData()
            setLoading(false)
            animateView()
        }
        else setLoading(false)

    })


    if (Loading || Flag == '') return <View style={styles.container}><Loadingcomponent /></View>

    else {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Animated.View style={[styles.header,{opacity: animatedOpacity}]}>
                        <Image
                            source={{ uri: Flag.uri }}
                            style={styles.FlagStyle}
                            fadeDuration={100}
                        />
                        <Text style={styles.countryName}>{data.country.toUpperCase()}</Text>
                    </Animated.View>

                    {/* Rendering Bar Chart Component */}
                    <Chart worldData={data} />
                    {/* Rendering Chart Details Component */}

                    <ChartDetails data={data} />
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121517',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    countryName: {
        fontFamily: 'Raleway',
        fontSize: 22,
        color: '#CFCFCF',
        margin:10
    },
    FlagStyle: {
        width: 150,
        height: 100,
        borderRadius: 20,
        margin:20
    }
})