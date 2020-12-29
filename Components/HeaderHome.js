import React from "react";
import { View, Text, Dimensions } from "react-native";
import { useFonts } from "@use-expo/font";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function HeaderView({ navigation }) {
  const screenWidth = Dimensions.get("window").width;
  const [fontsLoaded] = useFonts({
    Raleway: require("../assets/fonts/Raleway-Medium.ttf"),
  });

  if (fontsLoaded) {
    return (
      <View style={{ width: screenWidth, height: 100, flexDirection: "row" }}>
        <View style={{ flex: 3, justifyContent: "center", paddingLeft: 20 }}>
          <Text
            style={{ fontFamily: "Raleway", fontSize: 26, color: "#CFCFCF" }}
          >
            COVID 19{" "}
          </Text>
          <Text
            style={{ fontFamily: "Raleway", fontSize: 26, color: "#CFCFCF" }}
          >
            Tracker
          </Text>
        </View>
        <View style={{ flex: 1, paddingTop: 35, alignItems: "center" }}>
          <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
            <Icon name={"bars"} size={18} color={"#CFCFCF"} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
  return null;
}
