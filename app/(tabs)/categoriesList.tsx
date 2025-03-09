import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Categories() {
  const router = useRouter();
  const categories = [
    { id: 1, title: "Category 1" },
    { id: 2, title: "Category 2" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
      <Button
        title="Create Category"
        onPress={() => router.push("/categories/create-category")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },
});
