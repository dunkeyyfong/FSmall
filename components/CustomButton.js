import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({ title, handlePress, containerStyles, textStyles }) => {
  return (
    <TouchableOpacity
      className={`rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text className={`text-primary text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
