import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../../global/colors";

const styles = StyleSheet.create({
  line: {
    width: "10%",
    height: 2,

    backgroundColor: COLORS.borderButton,
  },
});

export default function Line() {
  return <View style={styles.line} />;
}
