import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import addressData from "../../utils/address";

const Checkout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{ flex: 1 }}>
          <View style={{ marginBottom: 8 }}>
            {addressData.map((data, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  backgroundColor: "#fff",
                  height: 110,
                  paddingVertical: 20,
                  paddingHorizontal: 50,
                  justifyContent: "center",
                  borderRadius: 10,
                  gap: 10,
                }}
              >
                <View>
                  <RadioButton value="" color={Colors.myRed} />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",
                      marginBottom: 5,
                    }}
                  >
                    {data.title}
                  </Text>
                  <Text style={{ fontSize: 15 }}>{data.location}</Text>
                </View>
                <View>
                  <TouchableOpacity>
                    <Feather name="edit-2" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 17, marginBottom: 10 }}
            >
              Payment Method
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "lightgrey",
                    borderWidth: 1,
                    borderRadius: 10,
                    marginRight: 10,
                    width: 95,
                    height: 65,
                  }}
                >
                  <Image
                    source={require("../../assets/images/Mastercard.png")}
                    style={{ width: 70, height: 45 }}
                  />
                </View>
                <Text style={{ fontSize: 17 }}>Credit Card</Text>
              </View>
              <RadioButton value={""} color={Colors.myRed} />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "lightgrey",
                    borderWidth: 1,
                    borderRadius: 10,
                    marginRight: 10,
                    width: 95,
                    height: 65,
                  }}
                >
                  <Image
                    source={require("../../assets/images/PayPal.png")}
                    style={{ width: 50, height: 50 }}
                  />
                </View>
                <Text style={{ fontSize: 17 }}>Paypal</Text>
              </View>
              <RadioButton value={""} color={Colors.myRed} />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "lightgrey",
                    borderWidth: 1,
                    borderRadius: 10,
                    marginRight: 10,
                    width: 95,
                    height: 65,
                  }}
                >
                  <Image
                    source={require("../../assets/images/stripe.png")}
                    style={{ width: 80, height: 40 }}
                  />
                </View>
                <Text style={{ fontSize: 17 }}>Stripe</Text>
              </View>
              <RadioButton value={""} color={Colors.myRed} />
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#fff",
              height: 120,
              justifyContent: "center",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text>Delivery fee</Text>
              <Text style={{ fontWeight: "bold" }}>&#8358;1,500.00</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text>Sub total</Text>
              <Text style={{ fontWeight: "bold" }}>&#8358;6,000.00</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>Total Payment</Text>
              <Text style={{ fontWeight: "bold" }}>&#8358;6,000.00</Text>
            </View>
          </View>
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
    paddingBottom: 20,
    paddingHorizontal: 20,
    zIndex: 2,
  },
});
