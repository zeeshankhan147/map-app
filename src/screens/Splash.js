import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { widthPercentageToDP } from "react-native-responsive-screen";

import IMAGES from "../assets/images/index";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={IMAGES.logo} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: widthPercentageToDP(55),
    height: widthPercentageToDP(55),
  },
});
