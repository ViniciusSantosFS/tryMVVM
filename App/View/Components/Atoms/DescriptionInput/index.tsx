import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { COLORS } from "../../../global/colors";

type props = TextInputProps;

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 100,

    paddingHorizontal: 20,
    paddingVertical: 20,

    flexWrap: "wrap",

    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.secondBackground,

    color: COLORS.text,
    backgroundColor: COLORS.secondBackground,
  },
});

export default function DescriptionInput({ ...rest }: props) {
  return <TextInput style={styles.input} multiline {...rest} />;
}
