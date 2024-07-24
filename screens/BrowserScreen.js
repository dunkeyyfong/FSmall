import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { WebView } from "react-native-webview";

const BrowserScreen = () => {
  const [url, setUrl] = useState("https://google.com");
  const [inputUrl, setInputUrl] = useState("");

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
    } else {
      // Nếu không có dấu chấm, thực hiện tìm kiếm trên Google
      setUrl(`https://www.google.com/search?q=${encodeURIComponent(inputUrl)}`);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View className="items-center justify-center mt-16">
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
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <WebView source={{ uri: url }} style={{ flex: 1, width: "100%" }} />
    </View>
  );
};

export default BrowserScreen;
