import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import React from "react";
import { CategoryEntity } from "./CategoryEntity";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { createCategory } from "../store/categorySlice";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function CreateCategory() {
  const [categoryName, setCategoryName] = React.useState("");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const onCreateCategory = async () => {
    console.log("Category created:", categoryName);
    const newCategory = new CategoryEntity(categoryName);

    dispatch(createCategory(newCategory));
    // router.push("/categories/categories-list");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.inputLabel}>Add new category</Text>

        <View style={styles.inputWrapper}>
          <Input>
            <InputField
              placeholder="Enter name here..."
              value={categoryName}
              onChangeText={setCategoryName}
              className="text-white"
            />
          </Input>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={onCreateCategory}>
            <LinearGradient
              colors={["#FF4D96", "#9B39D3"]} // Pink to purple gradient
              start={[0, 0]}
              end={[1, 1]}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Create Category</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 30,
    alignItems: "center",
    backgroundColor: "#000",
  },
  container: {
    backgroundColor: "#1a1a1a",
    padding: 20,
    borderRadius: 8,
    width: "90%",
    maxWidth: 400,
    alignItems: "center",
    gap: 20,
  },
  inputLabel: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 20,
  },
  buttonWrapper: {
    width: "100%",
    marginBottom: 20,
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
});
