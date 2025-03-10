import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { CategoryEntity } from "../categories/CategoryEntity";
import { fetchCategories } from "../store/categorySlice";
import { LinearGradient } from "expo-linear-gradient";

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
      <Text style={styles.itemText}>{item.title}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(item.id?.toString() ?? "")}
      >
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  const handleDelete = (categoryId: string) => {
    console.log("Delete category:", categoryId);
    // dispatch(deleteCategory(categoryId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Categories</Text>
      {categories && categories.length > 0 && (
        <FlatList
          style={styles.flatList}
          data={categories.slice().reverse()}
          keyExtractor={(item) => item.id?.toString() ?? ""}
          renderItem={renderItem}
        />
      )}
      <LinearGradient
        colors={["transparent", "black"]}
        style={[styles.gradient, { pointerEvents: "none" }]}
      />
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/categories/create-category")}
        >
          <LinearGradient
            colors={["#FF4D96", "#9B39D3"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Create Category</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%",
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
    backgroundColor: "#1a1a1a",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    maxWidth: 400,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: "#2d2d2d",
    borderRadius: 5,
    padding: 5,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonWrapper: {
    width: "100%",
  },
  button: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonGradient: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  flatList: {
    width: "100%",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 250,
  },
});
