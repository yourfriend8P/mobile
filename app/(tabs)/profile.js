import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const profile = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileIconText}>👤</Text>
        </View>
        <Text style={styles.nameText}>UserName</Text>
        <Text style={styles.pointsText}>Points: 0000</Text>
      </View>

      {/* Reward Points Section */}
      <View style={styles.rewardSection}>
        <Text style={styles.rewardText}>Reward points:</Text>
        <Text style={styles.rewardValue}>00.00</Text>
      </View>

      {/* Statement Section */}
      <TouchableOpacity style={styles.statementSection}>
        <Text style={styles.statementText}>Statement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingTop: 50,
  },
  header: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 20,
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  profileIcon: {
    backgroundColor: "#800000", // Maroon color
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  profileIconText: {
    fontSize: 24,
    color: "#fff",
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  pointsText: {
    fontSize: 14,
    color: "#555",
  },
  rewardSection: {
    backgroundColor: "#FFD6D6",
    width: "90%",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  rewardText: {
    fontSize: 16,
    color: "#333",
  },
  rewardValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  statementSection: {
    backgroundColor: "#F0F0F0",
    width: "90%",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statementText: {
    fontSize: 16,
    color: "#333",
  },
  iconBadge: {
    backgroundColor: "#800000",
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
