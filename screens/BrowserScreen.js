import React, { useState, useRef } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
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
      <HStack className="items-center justify-center mx-5 mb-6">
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "90%",
            padding: 10,
            borderRadius: 15,
          }}
          onChangeText={setInputUrl}
          value={inputUrl}
          placeholder="Enter URL"
          onSubmitEditing={handleSearch}
        />
        <CustomRefreshButton
          stylesButton="ml-3"
          handlePress={handleRefresh}
          iconName={loading ? "close" : "refresh"}
          sizeIcon={24}
          colorIcon="black"
        />
      </HStack>
      <WebView
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
