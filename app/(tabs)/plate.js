import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Food_Container from "../../components/Food_Container";

const plate = () => {
  return (
    <View style={styles.mainContainer}>
      <View style></View>
      <View style={styles.foodList}>
        <Food_Container />
      </View>
      <View style={styles.total}></View>
    </View>
  );
};

export default plate;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, padding: 5 },
  foodList: { padding: 15 },
  total: {},
});
