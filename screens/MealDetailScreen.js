import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const curMeal = MEALS.find((item) => item.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Text>{curMeal.title}</Text>
      <Button
        title="Go to category"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const curMeal = MEALS.find((item) => item.id === mealId);

  return {
    headerTitle: curMeal.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
