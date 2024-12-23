import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import FoodQtyButton from "./buttons/FoodQtyButton";
import ContainerButton from "./buttons/ContainerButton";

const Food_Container = ({ title, pts }) => {
  const [counterValue, setCounterValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const handleCounterChange = (newCounterValue) => {
    setCounterValue(newCounterValue); // Update counter value
  };

  const containerStyle =
    counterValue > 0 ? styles.mainContainerActive : styles.mainContainer;

  const imgcontainerStyle =
    counterValue > 0 ? styles.imgContainerActive : styles.imgContainer;

  return (
    <View style={containerStyle}>
      <View style={imgcontainerStyle}></View>
      <View style={styles.funcContainer}>
        <View style={styles.funcConainter_left}>
          <View style={styles.funcContainer_left_up}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>
            <Text>{pts} pts</Text>
          </View>
          <View style={styles.funcContainer_left_down}>
            <FoodQtyButton onCouterChange={handleCounterChange} />
          </View>
        </View>
        <View style={styles.funcConainter_right}>
          <ContainerButton title={counterValue * pts} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 100,
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
  },
  mainContainerActive: {
    height: 100,
    flexDirection: "row",

    borderRadius: 20,
    backgroundColor: "#FFD1D1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
  },
  mainContainerInActive: {
    height: 100,
    flexDirection: "row",

    borderRadius: 20,
    backgroundColor: "#FFD1D1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
  },
  imgContainer: {
    // borderWidth: 1,
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
  },
  imgContainerActive: {
    // borderWidth: 1,
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#ffffff",
  },
  funcContainer: {
    // borderWidth: 1,
    flex: 2.5,
    padding: 5,
    flexDirection: "row",
  },
  funcConainter_left: { borderWidth: 0, flex: 1, padding: 4 },
  funcConainter_right: {
    borderWidth: 0,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  funcContainer_left_up: { borderWidth: 0, flex: 1 },
  funcContainer_left_down: {
    borderWidth: 0,
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Food_Container;
