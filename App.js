import React from "react";
import { Button, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

const SpeakifyScreen = ({ navigation }) => {
  const webviewRef = React.useRef(null);
  const onMessage = (data) => {
    alert(data.nativeEvent.data);
    console.log(data.nativeEvent.data);
    navigation.navigate("Budget");
  };
  return (
    <WebView
      source={{ uri: "https://thespeakifyapp.herokuapp.com/" }}
      style={{ marginTop: -10, marginRight: 0, height: 200 }}
      // renderLoading={LoadingIndicatorView}
      startInLoadingState={true}
      scrollEnabled={false}
      bounces={false}
      ref={webviewRef}
      onMessage={onMessage}
    />
  );
};

export default SpeakifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141117",
  },
});
