import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../../global/colors";

const styles = StyleSheet.create({
  logo: {
    fontSize: 26,
    fontWeight: "bold",

    color: COLORS.text,
  },
});

export default function Logo() {
  return (
    <Text style={[styles.logo, { color: COLORS.text }]}>
      Game<Text style={[styles.logo, { color: COLORS.warn }]}>Play</Text>
    </Text>
  );
}
