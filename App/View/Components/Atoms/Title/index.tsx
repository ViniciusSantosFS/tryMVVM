import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../../global/colors";

interface props {
  children: string;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",

    color: COLORS.text,
  },
});

export default function Title({ children }: props) {
  return <Text style={styles.title}>{children}</Text>;
}
