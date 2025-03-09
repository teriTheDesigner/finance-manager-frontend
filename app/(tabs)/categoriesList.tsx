import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { CategoryEntity } from "../categories/CategoryEntity";
import { fetchCategories } from "../store/categorySlice";

export default function Categories() {
  const router = useRouter();
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const renderItem = ({ item }: { item: CategoryEntity }) => (
    <View style={styles.item}>
      <Text className="text-white">{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {categories && categories.length > 0 && (
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id?.toString() ?? ""}
          renderItem={renderItem}
        />
      )}
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
