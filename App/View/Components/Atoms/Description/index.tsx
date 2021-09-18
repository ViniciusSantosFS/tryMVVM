import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../../global/colors";

interface props {
  children: string;
}

const styles = StyleSheet.create({
  description: {
    fontSize: 13,

    color: COLORS.description,
  },
});

export default function Description({ children }: props) {
  return <Text style={styles.description}>{children}</Text>;
}
