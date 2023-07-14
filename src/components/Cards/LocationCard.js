import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const LocationCard = ({ address, image, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.wrapper}>
        <Image
          resizeMode="cover"
          source={{ uri: image }}
          style={styles.imageStyle}
        />
        <Text style={styles.addressStyle}>{address.replace("\n", "No data found")}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: widthPercentageToDP(80),
    borderRadius: widthPercentageToDP(2),
    height: heightPercentageToDP(12),
    marginRight: widthPercentageToDP(2),
    marginLeft: widthPercentageToDP(4),
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  wrapper: {
    flexDirection: "row",
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(12),
  },
  imageStyle: {
    width: widthPercentageToDP(30),
    height: "100%",
    borderRadius: widthPercentageToDP(2),
  },
  addressStyle: {
    width: "60%",
    marginLeft: widthPercentageToDP(2),
    marginTop: heightPercentageToDP(1),
    color: "#000",
  },
});
