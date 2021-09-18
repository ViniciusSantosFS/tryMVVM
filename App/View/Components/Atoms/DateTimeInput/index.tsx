import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { COLORS } from "../../../global/colors";

type props = TextInputProps;

const styles = StyleSheet.create({
  input: {
    width: 50,
    height: 50,

    textAlign: "center",

    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.secondBackground,

    color: COLORS.text,
    backgroundColor: COLORS.secondBackground,
  },
});

export default function DateTimeInput({ ...rest }: props) {
  return <TextInput style={styles.input} keyboardType="number-pad" {...rest} />;
}
