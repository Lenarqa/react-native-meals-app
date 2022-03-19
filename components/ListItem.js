import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DefaultText from './DefaultText';
 
const ListItem = (props) => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
};
 
const styles = StyleSheet.create({
    listItem: {
        textAlign: 'center',
        marginVertical: 5, 
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
    }
});
 
export default ListItem;