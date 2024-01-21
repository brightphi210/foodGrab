import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Bottom from './Bottom'

const DashHome = () => {
  return (

    <SafeAreaView style={styles.container}>
        <View>
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
        backgroundColor : 'white'
    }
})