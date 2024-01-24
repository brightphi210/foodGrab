import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Bottom from "./Bottom";
import Colors from "../../constants/Colors";
import dummyData from "../../utils/dummy";
import { useNavigation } from "expo-router";

const Cart = () => {
  const [quantities, setQuantities] = useState(dummyData.map(() => 1));

  const handleQuantityChange = (index: number, change: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + change);
    setQuantities(newQuantities);
  };

  const handlenavigate = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <ScrollView style={{ flex: 1 }}>
          {dummyData.map((data, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                marginBottom: 20,
                backgroundColor: "#fff",
                height: 130,
                padding: 20,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                elevation: 5,
                gap: 10,
              }}
            >
              <Image
                source={require("../../assets/images/1.png")}
                style={{ width: 90, height: 90 }}
              />
              <View style={{ flex: 1 }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}
                >
                  {data.title}
                </Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={{ fontSize: 12, color: "#555555", marginBottom: 10 }}
                >
                  {data.description}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>
                    &#8358;{data.price}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => handleQuantityChange(index, -1)}
                    >
                      <Text style={{ fontSize: 20, marginRight: 10 }}>-</Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 15,
                        marginRight: 10,
                        color: Colors.myRed,
                        fontWeight: "500",
                      }}
                    >
                      {quantities[index]}
                    </Text>
                    <TouchableOpacity
                      onPress={() => handleQuantityChange(index, 1)}
                    >
                      <Text style={{ fontSize: 20 }}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <Text style={{ flex: 1, fontSize: 15 }}>Total Payment</Text>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              &#8358;{calculateTotalPayment()}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              (handlenavigate as any).navigate("Dashboard/Checkout")
            }
            style={{
              backgroundColor: Colors.myRed,
              borderRadius: 30,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 17 }}>
              Proceed to Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Bottom />
    </SafeAreaView>
  );

  function calculateTotalPayment() {
    return dummyData
      .reduce((total, data, index) => {
        return total + data.price * quantities[index];
      }, 0)
      .toFixed(2);
  }
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.myGray,
    zIndex: 2,
  },
  subContainer: {
    flex: 1,
    paddingBottom: 60,
    paddingHorizontal: 20,
    zIndex: 2,
  },
});
