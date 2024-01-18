import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomeOne = () => {
  return (
    <SafeAreaView style={styles.container}>
            {/* <View > */}
        <Link href={'/welcomeTwo'} style={styles.skip}>
            <TouchableOpacity >
                <Text style={{color : 'black', fontSize : 15, alignSelf : 'center'}}>Skip</Text>
            </TouchableOpacity>
        </Link>


        <View style={styles.innerContainer}>
            <View>
                <Image
                    source={require('../assets/images/1.png')}
                    style={styles.imageDiv}
                />

                <View style={styles.innerContainerText}>
                    <Text style={{textAlign : 'center', fontSize : 25, color: Colors.myRed, fontWeight : 'bold', paddingVertical : 10}}>Welcome to Foodie Delight😊</Text>
                    <Text style={{textAlign : 'center', fontSize : 15 }}>Browse, Save, and Cook Amazing Dishes with foodie delight!</Text>
                    <Text></Text>
                </View>
            </View>
        </View>
       

       <Link href={'/welcomeTwo'} asChild style={styles.btnDiv}>
            <TouchableOpacity >
                <Text style={{color : 'white', fontSize : 15, alignSelf : 'center'}}>Next</Text>
            </TouchableOpacity>
        </Link>
    </SafeAreaView>
  )
}

export default WelcomeOne

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.myGray,
      flexWrap : 'wrap',
      margin : 'auto'
    },
  
    imageDiv: {
      width: 200,
      height: 200,
      alignSelf : 'center',
      marginBottom : 60
    },

    btnDiv : {
        position : 'absolute',
        bottom : 50,
        left : 0,
        right : 0,
        height : 50,
        backgroundColor : Colors.myRed,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 20,
        marginHorizontal : 30,
        justifyContent : 'center',
        borderRadius : 30,
    },

    skip : {
        position : 'absolute',
        top : 60,
        right : 30,
        // left : 0,
        flexDirection : 'row',
    },

    innerContainer : {
        display : 'flex',
        justifyContent : 'center',
        margin : 'auto',
        width : '100%'
    },

    innerContainerText : {
        paddingHorizontal : 30
    }
    




  });