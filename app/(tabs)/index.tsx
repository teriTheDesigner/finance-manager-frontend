import { FlatList, StyleSheet, View, Text } from "react-native";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import React from "react";
import { CategoryEntity } from "../categories/CategoryEntity";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text className="text-white">Welcome to the finance manager app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
  listItem: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    marginTop: 10,
  },
  listText: {
    fontSize: 16,
  },
  itemText: { fontSize: 16, width: 200 },
});
