import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

const login = () => {

    const [show, setShow] = useState(false)

    const showEye = () => {
        setShow(!show)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Let's get started</Text>
                <Text style={{ paddingTop: 10 }}>Browse, Save, and Cook Amazing Dishes with foodie delight!</Text>

                <View style={styles.genInputDiv}>
                    <View style={styles.inputDIv}>
                        <Text style={{ fontSize: 15 }}>Email Address</Text>
                        <TextInput placeholder='Enter Email Address' style={styles.inputField} />
                    </View>

                    <View style={styles.inputDIv}>
                        <Text style={{ fontSize: 15 }}>Password</Text>
                        <View style={styles.eyeDiv}>
                            <TextInput placeholder='Enter Password' style={styles.inputField} />
                            {show ? (
                                <Ionicons name='eye' style={styles.eye} onPress={showEye} />
                            ) : (
                                <Ionicons name='eye-off-sharp' style={styles.eye} onPress={showEye} />
                            )}
                        </View>
                    </View>

                    <Link href={'/Register/verify'} asChild>
                        <TouchableOpacity style={styles.btnDiv}>
                            <Text style={{ color: 'white', fontSize: 15 }}>Sign Up</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 50,
        backgroundColor: 'white',
        height: '100%'
    },

    inputDIv: {
        paddingTop: 20,
    },


    genInputDiv: {
        marginTop: 30
    },


    inputField: {
        borderColor: Colors.borderColor,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 13,
        marginTop: 6,
        borderRadius: 5,
    },

    btnDiv: {
        backgroundColor: Colors.myRed,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 20,
        height: 50

    },

    eyeDiv: {
        position: 'relative'
    },

    eye: {
        position: 'absolute',
        right: 20,
        top: 25,
        fontSize: 20
    }
})