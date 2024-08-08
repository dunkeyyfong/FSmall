import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  PanResponder,
  Animated,
} from "react-native";
import { Stack, HStack, VStack } from "react-native-flex-layout";

import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { MaterialIcons } from "@expo/vector-icons";

const CustomRefreshButton = ({
  stylesButton,
  handlePress,
  iconName,
  sizeIcon,
  colorIcon,
}) => {
  return (
    <TouchableOpacity className={stylesButton} onPress={handlePress}>
      <MaterialIcons name={iconName} size={sizeIcon} color={colorIcon} />
    </TouchableOpacity>
  );
};

const BrowserScreen = () => {
  const [url, setUrl] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const { dy } = gestureState;
        if (dy > 0) {
          Animated.timing(animatedValue, {
            toValue: dy,
            duration: 0,
            useNativeDriver: true,
          }).start();
          if (dy > 100) {
            setShowInput(false);
          }
        } else if (dy < 0) {
          Animated.timing(animatedValue, {
            toValue: dy,
            duration: 0,
            useNativeDriver: true,
          }).start();
          if (dy < -100) {
            setShowInput(true);
          }
        }
      },
      onPanResponderRelease: () => {
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
        setShowInput((prev) => prev);
      },
    }),
  ).current;

  const handleSearch = () => {
    let formattedUrl = inputUrl.trim();
    const hasDot = formattedUrl.includes(".");

    if (hasDot) {
      if (
        !formattedUrl.startsWith("http://") &&
        !formattedUrl.startsWith("https://")
      ) {
        formattedUrl = "http://" + formattedUrl;
      }
      setUrl(formattedUrl);
      setLoading(true);
    } else {
      setUrl(`https://www.google.com/search?q=${encodeURIComponent(inputUrl)}`);
      setLoading(true);
    }
  };

  const handleRefresh = () => {
    if (webViewRef.current) {
      webViewRef.current.reload();
      setLoading(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HStack className="items-center justify-center mx-5 mb-3">
        <View className="w-[90%] border-sky-200 rounded-xl bg-white border-2 mx-4 ">
          <TextInput
            style={{
              height: 40,
              width: "90%",
              padding: 10,
              borderRadius: 15,
              marginLeft: 5,
            }}
            onChangeText={setInputUrl}
            value={inputUrl}
            placeholder="Enter URL"
            onSubmitEditing={handleSearch}
          />
        </View>

        <CustomRefreshButton
          stylesButton="ml-3 mr-3"
          handlePress={handleRefresh}
          iconName={loading ? "close" : "refresh"}
          sizeIcon={24}
          colorIcon="black"
        />
      </HStack>
      <WebView
        className="pt-2"
        source={{ uri: url }}
        style={{ flex: 1, width: "100%" }}
        ref={webViewRef}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onNavigationStateChange={(navState) => setUrl(navState.url)}
      />
    </SafeAreaView>
  );
};

export default BrowserScreen;
