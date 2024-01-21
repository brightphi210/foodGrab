import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'

const Bottom = () => {
  return (
    <View style={styles.container}>
      
        <View style={styles.subContainer}>
            <TouchableOpacity style={styles.eachIcon}>
            <Ionicons name='home-outline' style={styles.eachIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.eachIcon}>
                <Ionicons name='cart-outline' style={styles.eachIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.eachIcon}>
                <Ionicons name='file-tray-outline' style={styles.eachIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.eachIcon}>
                <Ionicons name='person-outline' style={styles.eachIcon}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Bottom

const styles = StyleSheet.create({
    container : {
        position : 'absolute',
        bottom : 0,
        right : 0,
        left : 0,
    },

    

    subContainer : {
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'center',
        backgroundColor : Colors.myGray,
        alignItems : 'center',
        justifyContent: 'space-between',
        height : 60,
        paddingHorizontal : 30,
    },

    eachIcon : {
        fontSize : 25
    },

    


    
})