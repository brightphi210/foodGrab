import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import addressData from "../../utils/address";

const Checkout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{ flex: 1 }}>
          <View>
            {addressData.map((data, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  marginBottom: 20,
                  backgroundColor: "#fff",
                  height: 100,
                  padding: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  elevation: 5,
                  gap: 10,
                }}
              ></View>
            ))}
          </View>
          <View>
            <Text>Payment Method</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  borderColor: "lightgrey",
                  borderWidth: 1,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../assets/images/Group 12.png")}
                  style={{ width: 50, height: 50 }}
                />
              </View>
              <Text>Credit Card</Text>
            </View>
          </View>
          <View></View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.myRed,
              borderRadius: 30,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 17 }}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.myGray,
    zIndex: 2,
  },
  subContainer: {
    flex: 1,
    paddingBottom: 40,
    paddingHorizontal: 20,
    zIndex: 2,
  },
});
