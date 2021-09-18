import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { COLORS } from "../../../../global/colors";

import PlusIcon from "./index";

const PlusIconStories = storiesOf("Atoms/Icons", module);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.background,
  },
});

PlusIconStories.add("PlusIcon", () => {
  return (
    <View style={styles.container}>
      <PlusIcon />
    </View>
  );
});
