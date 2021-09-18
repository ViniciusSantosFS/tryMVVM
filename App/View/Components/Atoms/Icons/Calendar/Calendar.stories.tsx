import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { COLORS } from "../../../../global/colors";

import Calendar from "./index";

const CalendarStories = storiesOf("Atoms/Icons", module);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.background,
  },
});

CalendarStories.add("Calendar", () => {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  );
});
