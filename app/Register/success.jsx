import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Success = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.innerContainer}>
                <View>
                    <Image
                        source={require('../../assets/images/3.png')}
                        style={styles.imageDiv}
                    />

                    <View style={styles.innerContainerText}>
                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', paddingVertical: 10 }}>You Are doing well</Text>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Congratulations! Your account has been successfully created. You're now ready to embark on a delicious journey with foodie delight.</Text>
                        <Text></Text>
                    </View>
                </View>
            </View>


            <Link href={'/success'} asChild style={styles.btnDiv}>
                <TouchableOpacity >
                    <Text style={{ color: 'white', fontSize: 15, alignSelf: 'center' }}>Proceed to Dashboard</Text>
                </TouchableOpacity>
            </Link>
        </SafeAreaView>
    )
}

export default Success

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.myGray,
        flexWrap: 'wrap',
        margin: 'auto'
    },

    imageDiv: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 10
    },

    btnDiv: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        height: 50,
        backgroundColor: Colors.myRed,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginHorizontal: 30,
        justifyContent: 'center',
        borderRadius: 30,
    },

    skip: {
        position: 'absolute',
        top: 60,
        right: 30,
        // left : 0,
        flexDirection: 'row',
    },

    innerContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        width: '100%'
    },

    innerContainerText: {
        paddingHorizontal: 30
    }





});