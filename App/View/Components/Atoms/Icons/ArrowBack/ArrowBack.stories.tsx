import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { COLORS } from "../../../../global/colors";

import ArrowBack from "./index";

const ArrowBackStories = storiesOf("Atoms/Icons", module);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.background,
  },
});

ArrowBackStories.add("ArrowBack", () => {
  return (
    <View style={styles.container}>
      <ArrowBack />
    </View>
  );
});
