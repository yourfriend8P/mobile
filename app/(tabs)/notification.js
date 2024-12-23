import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import NotificationBox from "../../components/notificationBox";
const notification = () => {
  return (
    <View style={styles.mainContainer}>
      <NotificationBox />
    </View>
  );
};

export default notification;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, padding: 10, borderWidth: 1 },
});
