import { FlatList, StyleSheet, View, Text } from "react-native";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import React from "react";
import { CategoriesEntity } from "../CategoriesEntity";

export default function CreateCategory() {
  const [CategoriesScreens, setCategoriesScreens] = React.useState(
    [] as CategoriesEntity[]
  );
  const [CategoriesScreen, setCategoriesScreen] = React.useState("");
  const onAddCategoriesScreen = () => {
    const newCategoriesScreen = new CategoriesEntity(
      CategoriesScreens.length,
      CategoriesScreen
    );
    setCategoriesScreens([...CategoriesScreens, newCategoriesScreen]);
    console.log(CategoriesScreens);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.inputLabel}>Add new category</Text>

        <View style={styles.inputWrapper}>
          <Input>
            <InputField
              placeholder="Enter name here..."
              onChangeText={setCategoriesScreen}
              value={CategoriesScreen}
              className="text-white"
            />
          </Input>
        </View>

        <View style={styles.buttonWrapper}>
          <Button onPress={onAddCategoriesScreen}>
            <ButtonText style={styles.buttonText}>Create Category</ButtonText>
            <ButtonIcon />
          </Button>
        </View>

        <FlatList
          data={CategoriesScreens}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          )}
          contentContainerStyle={styles.listContainer}
        />
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
