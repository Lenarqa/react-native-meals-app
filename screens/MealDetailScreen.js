import React from "react";
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import ListItem from "../components/ListItem";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const curMeal = MEALS.find((item) => item.id === mealId);
  curMeal.ingredients;
  return (
    <ScrollView>
      <Image source={{ uri: curMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{curMeal.duration}m</DefaultText>
        <DefaultText>{curMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{curMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {curMeal.ingredients.map((ingredient, index) => (
        <ListItem key={index}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {curMeal.steps.map((step, index) => (
        <ListItem key={index}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const curMeal = MEALS.find((item) => item.id === mealId);

  return {
    headerTitle: curMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as favorite!");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 22,
  },
  list: {},
});

export default MealDetailScreen;
