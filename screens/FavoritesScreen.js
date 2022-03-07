import React from "react";
import { View, StyleSheet, Text } from "react-native";

const FavoritesScreen = (props) => {
  return (
    <View>
      <Text>Favorites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    }
});

export default FavoritesScreen;