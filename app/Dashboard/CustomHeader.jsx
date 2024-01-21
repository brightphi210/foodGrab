import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import { Link } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler'



const CustomHeader = () => {

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <View style ={styles.containerDivOne}>
                <TouchableOpacity style={styles.titleContainer}>
                    <Text style={styles.title}>Hello, <Text style={{fontWeight : '500', fontSize : 20}}>Sunday Kingsley</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileButton}>
                    <Ionicons name = 'notifications' size={20} color={Colors.primary} />
                </TouchableOpacity>
                
            </View>

            <View style={styles.containerDivTwo}>
                <Ionicons name = 'search' style={{position : 'absolute', top : 21, left : 35, fontSize : 18, zIndex : 3}}/>
                <TextInput placeholder='Search your favourite food' 
                    style={{
                        borderColor : Colors.borderColor, 
                        padding :15, borderWidth : 1, borderStyle : 'solid',
                        paddingHorizontal : 50,
                        borderRadius : 10,
                        backgroundColor : 'white'
                    }}
                />
                <Ionicons name='list' style={{position : 'absolute', top : 21, right : 35, fontSize : 18}}/>
            </View>
        </View>


    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor : Colors.myGray,
        marginBottom : 10,
        zIndex : 1
    },

    container: {
        height: 100,
        backgroundColor: Colors.myGray, 
    },

    containerDivOne: { 
        flexDirection: 'row', 
        gap: 20,
        alignItems : 'center',
        justifyContent: 'space-between',
        paddingHorizontal : 20

    },

    containerDivTwo :{
        position: 'relative',
        paddingHorizontal : 20,
        marginTop : 10,
    },


    titleContainer : {
        flex : 1
    },

    title : {
        fontSize : 14,
        color : Colors.medium
    },

    subTitle : {
        fontSize : 20,
    },
    profileButton : {
        backgroundColor : Colors.lightGrey,
        padding : 10,
        borderRadius : 50
    },


    optionButton : {
        padding : 10,
        borderRadius : 50,
    }
});

export default CustomHeader