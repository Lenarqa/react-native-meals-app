import React, { useState } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
  
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{
          false: Colors.accentColor,
          true: Colors.primaryColor,
        }}
        thumbColor={Colors.primaryColor}
        value={props.state}
        onValueChange={props.onChange.bind(this)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default FilterSwitch;
