import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { COLORS } from "../../../../global/colors";

import ArrowIn from "./index";

const ArrowInStories = storiesOf("Atoms/Icons", module);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.background,
  },
});

ArrowInStories.add("ArrowIn", () => {
  return (
    <View style={styles.container}>
      <ArrowIn />
    </View>
  );
});
