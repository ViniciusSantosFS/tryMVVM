import React from "react";
import { Text, StyleSheet } from "react-native";

import { COLORS } from "../../../global/colors";

interface props {
  children: string;
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text,
  },
});

export default function SubTitle({ children }: props) {
  return <Text style={styles.subtitle}>{children}</Text>;
}
