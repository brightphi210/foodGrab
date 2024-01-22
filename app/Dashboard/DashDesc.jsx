import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const DashDesc = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>

            <View>
                <Image
                    source={require('../../assets/images/2.png')}
                    style={{
                        width : 200, height : 200,  
                        alignSelf : 'center',
                        position : 'absolute',
                        top : -50,
                    }}
                />
                
            </View>

            <View style={{paddingTop : 180, paddingHorizontal : 20}}>
                <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
                    <Text style={{fontSize :20, fontWeight : 'bold'}}>Spicy Chicken Alfredo Pasta</Text>
                    <Text><Ionicons name='star'/> 4.5</Text>
                </View>

                <Text style={{fontSize : 13, fontWeight : 100, paddingTop : 10, color : 'gray'}}>
                    Indulge in the perfect combination of tender chicken strips, 
                    creamy Alfredo sauce, and a hint of spice, served over a bed of perfectly cooked pasta.
                </Text>

                <View style={{

                        flexDirection : 'row', 
                        justifyContent : 'space-between', 
                        paddingTop : 40,
                        
                    }}>
                    <View style={{backgroundColor : 'white', padding : 20, borderRadius : 20, flexDirection : 'column', justifyContent : 'space-between'}}>
                        <TouchableOpacity>
                            <Ionicons name='add' style={{fontSize : 20, textAlign : 'center',  fontWeight : 'bold'}} />
                        </TouchableOpacity>


                        <Text style={{fontSize : 20, textAlign : 'center',  fontWeight : 'bold'}}>0</Text>


                        <TouchableOpacity>
                            <Ionicons name='remove' style={{fontSize : 20, textAlign : 'center',  fontWeight : 'bold'}} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between', gap : 30}}>
                            <View>
                                <Text style={{fontSize : 18, fontWeight : 'bold'}}>445 g</Text>
                                <Text>Weight</Text>
                            </View>

                            <View>
                                <Text style={{fontSize : 18, fontWeight : 'bold'}}>523 kcal</Text>
                                <Text>Energy</Text>
                            </View>

                            <View>
                                <Text style={{fontSize : 18, fontWeight : 'bold'}}>30 mins</Text>
                                <Text>Delivery time</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{fontSize : 18, fontWeight : 'bold', paddingTop : 20}}>Ingredients</Text>
                            <View>
                                <Text style={{paddingTop : 5}}><Ionicons name='stop-sharp' style={{fontSize : 6, paddingLeft : 5}}/>Grilled chicken strips</Text>
                                <Text style={{paddingTop : 5}}><Ionicons name='stop-sharp' style={{fontSize : 6, paddingLeft : 5}}/>Creamy Alfredo sauce</Text>
                                <Text style={{paddingTop : 5}}><Ionicons name='stop-sharp' style={{fontSize : 6, paddingLeft : 5}}/>Pasta</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={{flexDirection : 'row', justifyContent :'space-between', paddingTop : 40, alignItems : 'center'}}>
                        <TouchableOpacity style={{
                                backgroundColor : Colors.myRed, color : 'white', 
                                width : '70%',
                                padding : 15,
                                textAlign : 'center',
                                borderRadius : 20

                            }}>
                            <Text style={{color : 'white', fontSize : 15, textAlign : 'center'}}>Add to Cart</Text>
                        </TouchableOpacity>

                        <Text style={{fontSize : 20, fontWeight : 'bold'}}>N2,000</Text>
                    </View>
                </View>
            </View>
        
        </View>
    </SafeAreaView>
  )
}

export default DashDesc

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.myRed
    },

    subContainer :{
        position : 'absolute',
        bottom : 0,
        left : 0,
        right : 0,
        backgroundColor : Colors.myGray,
        height : '90%',
        borderTopRightRadius : 20,
        borderTopLeftRadius : 20
    }
})