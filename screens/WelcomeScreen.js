import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../components/CustomButton";

const WelcomeScreen = ({ navigation }) => {
  const handleGoToHomeScreen = () => {
    navigation.replace("Home");
  };

  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#507AC4", "#80C0E2"]}
        className="flex-1 items-center justify-center"
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 100, height: 100, borderRadius: 20 }}
        />
        <View className="mb-6">
          <Text
            className="text-cyan-50 font-sans font-bold"
            style={{ fontSize: 25 }}
          >
            Hello Guys...
          </Text>
          <Text className="font-bold text-cyan-50" style={{ fontSize: 40 }}>
            Welcome to <Text className="ml-6 underline">FSmall.</Text>
          </Text>
        </View>
        <CustomButton
          containerStyles="bg-cyan-50 w-[300px] px-6 mt-8"
          title="Start FSmall"
          textStyles="text-[#80C0E2] font-semibold text-lg"
          handlePress={handleGoToHomeScreen}
        />
        <StatusBar style="light" />
      </LinearGradient>
    </View>
  );
};

export default WelcomeScreen;
