import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Bottom from './Bottom'
import Colors from '../../constants/Colors'
const DashHome = () => {
  return (

    <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>

            <View>
                <Image
                    source={require('../../assets/images/5.png')}
                    style={styles.imageDiv}
                />
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle = {{
                    paddingVertical : 8
                }}

                style={{paddingTop : 20}}
            >

                <TouchableOpacity style={styles}>
                    <Text>Food</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles}>
                    <Text>Soft Drinks</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles}>
                    <Text>Snacks</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles}>
                    <Text>Vegetable</Text>
                </TouchableOpacity>

            </ScrollView>
            <Text>DashHome</Text>




        </View>

        <Bottom />

    </SafeAreaView>
  )
}

export default DashHome

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.myGray,
        zIndex : 2
    },
    
    subContainer : {
        padding : 50,
        paddingHorizontal : 30,
        zIndex : 2
    },

    imageDiv: {
        width: '100%',
        height: 130,
        zIndex : 2,
      },
})