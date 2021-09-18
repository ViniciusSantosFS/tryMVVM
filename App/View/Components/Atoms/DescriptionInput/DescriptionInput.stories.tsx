import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { COLORS } from "../../../global/colors";

import DescriptionInput from "./index";

const DescriptionInputStories = storiesOf("Atoms", module);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.background,
  },
});

DescriptionInputStories.add("DescriptionInput", () => {
  return (
    <View style={styles.container}>
      <DescriptionInput />
    </View>
  );
});
