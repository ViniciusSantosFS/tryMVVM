import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../../global/colors";

interface props {
  children: string;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,

    color: COLORS.text,
  },
});

export default function Label({ children }: props) {
  return <Text style={styles.label}>{children}</Text>;
}
