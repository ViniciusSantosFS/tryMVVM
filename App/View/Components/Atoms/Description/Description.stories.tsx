import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { COLORS } from "../../../global/colors";

import Description from "./index";

const DescriptionStories = storiesOf("Atoms", module);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.background,
  },
});

DescriptionStories.add("Description", () => {
  return (
    <View style={styles.container}>
      <Description>Label de exemplo</Description>
    </View>
  );
});
