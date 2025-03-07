import { FlatList, StyleSheet, View, Text } from "react-native";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import React from "react";
import { CategoriesEntity } from "../CategoriesEntity";

export default function HomeScreen() {
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
    <View style={styles.container}>
      <Input>
        <InputField
          placeholder="Enter text here..."
          onChangeText={setCategoriesScreen}
          value={CategoriesScreen}
          className="color-white w-56"
        />
      </Input>

      <Button>
        <ButtonText
          onPress={onAddCategoriesScreen}
          className="font-medium text-sm ml-2"
        >
          Add CategoriesScreen
        </ButtonText>
        <ButtonIcon />
      </Button>

      <FlatList
        data={CategoriesScreens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
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
