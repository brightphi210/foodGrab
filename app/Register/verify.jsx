import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { Link } from 'expo-router'

const verify = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
            <Text style={{fontSize : 25, fontWeight : 'bold'}}>OTP Verification</Text>
            <Text style={{paddingTop : 10}}>Thank you for signing up verification code has been sent to S********v@gmail.com</Text>

            <View style={styles.OTPDiv}>
                <Text style={{fontSize : 15}}>Enter PIN</Text>

                <View style={styles.OTPDivText}>
                    <TextInput style={styles.otpText}/>
                    <TextInput style={styles.otpText}/>
                    <TextInput style={styles.otpText}/>
                    <TextInput style={styles.otpText}/>
                </View>

                <Text style={{paddingTop : 10}}>00 : 30</Text>
            </View>

            <View>
  
                <Link href={'/Register/success'} asChild>
                    <TouchableOpacity style={styles.btnDiv}>
                        <Text style={{color : 'white', fontSize : 15}}>Confirm</Text>
                    </TouchableOpacity>
                </Link>

                <Text style={{textAlign : 'center', paddingTop : 30}}>Didn’t receive a code? <Text style={{color : Colors.myRed}}>Resend Code</Text></Text>
            </View>
        </View>
    </SafeAreaView>

  )
}

export default verify


const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 30,
        paddingVertical : 10,
        backgroundColor : 'white',
        height : '100%'
    }, 


    btnDiv : {
        backgroundColor : Colors.myRed,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 20,
        justifyContent : 'center',
        borderRadius : 30,
        marginTop : 20,
        height : 50

    },

    OTPDiv : {
        paddingTop : 30,
        
    },

    otpText : {
        borderColor : Colors.borderColor,
        borderWidth : 1,
        width : '20%',
        height : 50,
        borderRadius : 5,
        
    },

    OTPDivText : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 10
    }

})