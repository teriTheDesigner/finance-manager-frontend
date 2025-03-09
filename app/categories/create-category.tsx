import { StyleSheet, View, Text } from "react-native";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import React from "react";
import { CategoryEntity } from "./CategoryEntity";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { createCategory } from "../store/categorySlice";
import { useRouter } from "expo-router";

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
          <Button onPress={onCreateCategory}>
            <ButtonText style={styles.buttonText}>Create Category</ButtonText>
            <ButtonIcon />
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
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
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 16,
  },
  buttonWrapper: {
    width: "100%",
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    width: "100%",
  },
  listContainer: {
    width: "100%",
  },
  listItem: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
});
