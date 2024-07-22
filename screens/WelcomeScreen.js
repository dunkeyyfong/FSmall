import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../components/CustomButton";

const WelcomeScreen = () => {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#507AC4", "#80C0E2"]}
        className="flex-1 items-center justify-center"
      >
        <Text
          className="text-cyan-50 font-sans font-bold"
          style={{ fontSize: 25 }}
        >
          Hello Guys...
        </Text>
        <Text className="font-bold text-cyan-50" style={{ fontSize: 40 }}>
          Welcome to FSmall.
        </Text>
        <CustomButton
          containerStyles="bg-cyan-50 w-full px-5 m-8"
          title="Start FSmall"
          textStyles="text-[#80C0E2] font-semibold text-lg"
        />
        <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
};

export default WelcomeScreen;
