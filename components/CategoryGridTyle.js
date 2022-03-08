import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";

const CategoryGridTyle = (props) => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback style={{flex: 1}} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    elevation: 3,
    padding: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});

export default CategoryGridTyle;
