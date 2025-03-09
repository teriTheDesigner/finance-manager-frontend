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
      <Text className="text-white">{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Categories</Text>
      {categories && categories.length > 0 && (
        <FlatList
          style={styles.flatList}
          data={categories}
          keyExtractor={(item) => item.id?.toString() ?? ""}
          renderItem={renderItem}
        />
      )}
      <LinearGradient
        colors={["transparent", "black"]}
        style={styles.gradient}
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
    padding: 20,
    borderRadius: 8,
    width: "100%",
    maxWidth: 400,
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
    height: 200,
  },
});
