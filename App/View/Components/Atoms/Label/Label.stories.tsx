import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { COLORS } from "../../../global/colors";

import Label from "./index";

const LabelStories = storiesOf("Atoms", module);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.background,
  },
});

LabelStories.add("Label", () => {
  return (
    <View style={styles.container}>
      <Label>Label de exemplo</Label>
    </View>
  );
});
