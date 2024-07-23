import React from "react";
import { View } from "react-native";

const CustomBackground = () => {
  return (
    <View className="">
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: "white",
          position: "absolute",
          zIndex: 99,
          bottom: "15%",
          left: 12,
          borderRadius: 100,
        }}
      ></View>
      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: "white",
          position: "absolute",
          zIndex: 99,
          bottom: "6%",
          left: 30,
          borderRadius: 100,
        }}
      ></View>
      <View
        style={{
          height: 30,
          width: 30,
          backgroundColor: "white",
          position: "absolute",
          zIndex: 99,
          bottom: "25%",
          left: 50,
          borderRadius: 100,
        }}
      ></View>
      <View
        style={{
          height: 70,
          width: 70,
          backgroundColor: "white",
          position: "absolute",
          zIndex: 99,
          bottom: "8%",
          left: 75,
          borderRadius: 100,
        }}
      ></View>
      <View
        style={{
          height: 25,
          width: 25,
          backgroundColor: "white",
          position: "absolute",
          zIndex: 99,
          bottom: "15%",
          right: "35%",
          borderRadius: 100,
        }}
      ></View>
      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: "white",
          position: "absolute",
          zIndex: 99,
          bottom: "9%",
          right: 30,
          borderRadius: 100,
        }}
      ></View>
      <View
        style={{
          height: 30,
          width: 30,
          backgroundColor: "white",
          position: "absolute",
          zIndex: 99,
          top: "20%",
          left: 50,
          borderRadius: 100,
        }}
      ></View>
      <View
        style={{
          height: 30,
          width: 30,
          backgroundColor: "white",
          position: "absolute",
          zIndex: 99,
          top: "8%",
          right: 75,
          borderRadius: 100,
        }}
      ></View>
    </View>
  );
};

export default CustomBackground;
