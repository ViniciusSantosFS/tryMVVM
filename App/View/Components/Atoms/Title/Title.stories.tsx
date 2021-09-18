import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { COLORS } from "../../../global/colors";

import Title from "./index";

const TitleStories = storiesOf("Atoms", module);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.background,
  },
});

TitleStories.add("Title", () => {
  return (
    <View style={styles.container}>
      <Title> Titulo de exemplo</Title>
    </View>
  );
});
