import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
  const route = useRoute();
  const navigation = useNavigation();
  const { name } = route.params as { name: string };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToNotes = () => {
    navigation.navigate("notes" as never);
  };

  const handleGoToChat = () => {
    navigation.navigate("chatwithgemini" as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {name}!</Text>
      <Text style={styles.subtitle}>It&apos;s great to meet you!</Text>

      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.notesButton]}
        onPress={handleGoToNotes}
      >
        <Text style={styles.buttonText}>My Notes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.chatButton]}
        onPress={handleGoToChat}
      >
        <Text style={styles.buttonText}>Chat with AI</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2e8b57",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#2e8b57",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 120,
    marginBottom: 15,
  },
  notesButton: {
    backgroundColor: "#4169e1",
  },
  chatButton: {
    backgroundColor: "#ff6b35",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
