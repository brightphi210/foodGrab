import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Bottom from './Bottom'
import Colors from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
const DashHome = () => {

    const myNavigate = useNavigation();

    const redirect = () => {
        myNavigate.navigate('Dashboard/DashHome');
    }
    return (



        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>

                <ScrollView>

                    <View>
                        <Image
                            source={require('../../assets/images/5.png')}
                            style={styles.imageDiv}
                        />
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingVertical: 5,
                            gap: 5,
                            marginBottom: 10,
                        }}

                        style={{ paddingTop: 20, flexDirection: 'row', }}
                    >

                        <TouchableOpacity style={styles.eachBtn1}
                        >
                            <Text style={{ color: 'white' }}>Food</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.eachBtn}>
                            <Text>Soft Drinks</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.eachBtn}>
                            <Text>Snacks</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.eachBtn}>
                            <Text>Vegetable</Text>
                        </TouchableOpacity>

                    </ScrollView>




                    <View style={styles.cardGen}>
                        <TouchableOpacity style={styles.eachCard} >
                            <Image
                                source={require('../../assets/images/1.png')}
                                style={{ width: 90, height: 90, alignSelf: 'center' }}
                            />
                            <View>
                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>N2,000</Text>
                                    <Ionicons name='add-circle' style={{ fontSize: 15, color: Colors.myRed }} />
                                </View>

                                <Text style={{ fontSize: 17, fontWeight: 500, paddingTop: 5 }}>Spicy Chicken </Text>
                                <Text style={{ fontSize: 10, paddingTop: 5, color: 'gray' }}>Indulge in the perfect combination of tender chicken</Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.eachCard} onPress={redirect}>
                            <Image
                                source={require('../../assets/images/1.png')}
                                style={{ width: 90, height: 90, alignSelf: 'center' }}
                            />
                            <View>
                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>N2,000</Text>
                                    <Ionicons name='add-circle' style={{ fontSize: 15, color: Colors.myRed }} />
                                </View>

                                <Text style={{ fontSize: 17, fontWeight: 500, paddingTop: 5 }}>Chicken & Chips </Text>
                                <Text style={{ fontSize: 10, paddingTop: 5, color: 'gray' }}>A delicious mean made with chicken and chips</Text>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.cardGen}>
                        <TouchableOpacity style={styles.eachCard}>
                            <Image
                                source={require('../../assets/images/2.png')}
                                style={{ width: 90, height: 90, alignSelf: 'center' }}
                            />
                            <View>
                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>N2,000</Text>
                                    <Ionicons name='add-circle' style={{ fontSize: 15, color: Colors.myRed }} />
                                </View>

                                <Text style={{ fontSize: 17, fontWeight: 500, paddingTop: 5 }}>Spicy Chicken </Text>
                                <Text style={{ fontSize: 10, paddingTop: 5, color: 'gray' }}>Indulge in the perfect combination of tender chicken</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.eachCard}>
                            <Image
                                source={require('../../assets/images/1.png')}
                                style={{ width: 90, height: 90, alignSelf: 'center' }}
                            />
                            <View>
                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>N2,000</Text>
                                    <Ionicons name='add-circle' style={{ fontSize: 15, color: Colors.myRed }} />
                                </View>

                                <Text style={{ fontSize: 17, fontWeight: 500, paddingTop: 5 }}>Chicken & Chips </Text>
                                <Text style={{ fontSize: 10, paddingTop: 5, color: 'gray' }}>A delicious mean made with chicken and chips</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Bottom />

            </View>


        </SafeAreaView>
    )
}

export default DashHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.myGray,
        zIndex: 2
    },

    subContainer: {
        padding: 50,
        paddingHorizontal: 20,
        zIndex: 2
    },

    imageDiv: {
        width: '100%',
        height: 130,
        zIndex: 2,
    },

    eachBtn: {
        borderColor: Colors.borderColor,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    },

    eachBtn1: {
        borderColor: 'white',
        backgroundColor: Colors.myRed,
        color: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    },

    btnRed: {
        backgroundColor: Colors.myRed,
        color: 'white',
    },

    cardGen: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        overflow: 'scroll'

    },

    eachCard: {
        backgroundColor: 'white',
        width: '48%',
        paddingVertical: 20,
        padding: 15,
        textAlign: 'center',
        borderRadius: 10
    }


})