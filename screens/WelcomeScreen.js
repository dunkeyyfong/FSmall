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
        <View className="mb-24">
          <Text
            className="text-cyan-50 font-sans font-bold"
            style={{ fontSize: 25 }}
          >
            Hello Guys...
          </Text>
          <Text className="font-bold text-cyan-50" style={{ fontSize: 40 }}>
            Welcome to{" "}
            <Text className="ml-6 underline text-stone-50">FSmall.</Text>
          </Text>
        </View>
        <CustomButton
          containerStyles="bg-cyan-50 w-[300px] px-6 mt-8"
          title="Start FSmall"
          textStyles="text-[#80C0E2] font-semibold text-lg"
          handlePress={handleGoToHomeScreen}
        />
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
        <StatusBar style="light" />
      </LinearGradient>
    </View>
  );
};

export default WelcomeScreen;
