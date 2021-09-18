import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { COLORS } from "../../../global/colors";

import DateTimeInput from "./index";

const DateTimeInputStories = storiesOf("Atoms", module);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.background,
  },
});

DateTimeInputStories.add("DateTimeInput", () => {
  return (
    <View style={styles.container}>
      <DateTimeInput />
    </View>
  );
});
