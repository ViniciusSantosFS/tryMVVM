import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { COLORS } from "../../../global/colors";

import SubTitle from "./index";

const SubTitleStories = storiesOf("Atoms", module);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.background,
  },
});

SubTitleStories.add("SubTitle", () => {
  return (
    <View style={styles.container}>
      <SubTitle>SubTitle de exemplo</SubTitle>
    </View>
  );
});
