import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomeTwo = () => {
  return (
    <SafeAreaView style={styles.container}>

        <Link href={'/welcomeTwo'} style={styles.skip}>
            <TouchableOpacity >
                <Text style={{color : 'black', fontSize : 15, alignSelf : 'center'}}>Skip</Text>
            </TouchableOpacity>
        </Link>

        <View style={styles.innerContainer}>
            <View>
              <Image
                  source={require('../assets/images/2.png')}
                  style={styles.imageDiv}
              />

                <View style={styles.innerContainerText}>
                    <Text style={{textAlign : 'center', fontSize : 25, color: Colors.myRed, fontWeight : 'bold', paddingVertical : 10}}>Discover new cuisines</Text>
                    <Text style={{textAlign : 'center', fontSize : 15 }}>Browse, Save, and Cook Amazing Dishes with foodie delight!</Text>
                </View>


            
            </View>
        </View>
        <Link href={'/welcomeTwo'} asChild>
            <TouchableOpacity style={styles.btnDiv}>
                <Text style={{color : 'white', fontSize : 15}}>Next</Text>
            </TouchableOpacity>
        </Link>
    </SafeAreaView>
  )
}

export default WelcomeTwo

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
    width: 300,
    height: 300,
    alignSelf : 'center',
    marginBottom : 100
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

  innerContainer : {
      display : 'flex',
      justifyContent : 'center',
      margin : 'auto',
      width : '100%'
  },

  innerContainerText : {
      paddingHorizontal : 30
  },


  skip : {
    position : 'absolute',
    top : 60,
    right : 30,
    flexDirection : 'row',
  },
    




  });