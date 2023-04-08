import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Button = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.btnContainer}>
        <Text style={styles.btnTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  btnContainer: {
    backgroundColor: "#eab19c",
    height: 60,
    width: 270,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.2,
  },
});
