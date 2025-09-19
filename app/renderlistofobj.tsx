import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export default function RenderListOfStrings() {
  // Sample array of strings
  const stringArray = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Different Ways to Render Array of Strings
      </Text>

      {/* Method 1: Using map() with Text components */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Method 1: Using map() with Text</Text>
        {stringArray.map((item, index) => (
          <Text key={index} style={styles.item}>
            {index + 1}. {item}
          </Text>
        ))}
      </View>

      {/* Method 2: Using FlatList (Recommended for large lists) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Method 2: Using FlatList</Text>
        <FlatList
          data={stringArray}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Text style={styles.flatListItem}>
              {index + 1}. {item}
            </Text>
          )}
          scrollEnabled={false} // Disable scroll since we're inside ScrollView
        />
      </View>

      {/* Method 3: Join strings with separator */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Method 3: Join with separator</Text>
        <Text style={styles.joinedText}>{stringArray.join(", ")}</Text>
      </View>

      {/* Method 4: Bulleted list */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Method 4: Bulleted list</Text>
        {stringArray.map((item, index) => (
          <Text key={index} style={styles.bulletItem}>
            • {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  section: {
    marginBottom: 30,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#007AFF",
  },
  item: {
    fontSize: 16,
    paddingVertical: 5,
    color: "#333",
  },
  flatListItem: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
    marginVertical: 2,
    borderRadius: 4,
    color: "#333",
  },
  joinedText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  bulletItem: {
    fontSize: 16,
    paddingVertical: 3,
    color: "#333",
  },
});
