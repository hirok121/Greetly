import { GoogleGenAI } from "@google/genai";
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GEMINI_API_KEY } from './api_key';


export default function ChatWithGemini() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = inputText.trim();
    setInputText('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: userMessage,
      });

      // Add AI response to chat
      setMessages(prev => [...prev, { type: 'ai', text: response.text }]);
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to get response from AI');
      setMessages(prev => [...prev, { type: 'ai', text: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat with Gemini AI</Text>
      
      <ScrollView style={styles.chatContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              message.type === 'user' ? styles.userMessage : styles.aiMessage
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
        {isLoading && (
          <View style={[styles.messageBubble, styles.aiMessage]}>
            <Text style={styles.messageText}>AI is typing...</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
          multiline
          maxLength={500}
        />
        <TouchableOpacity
          style={[styles.sendButton, (!inputText.trim() || isLoading) && styles.disabledButton]}
          onPress={sendMessage}
          disabled={!inputText.trim() || isLoading}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.clearButton} onPress={clearChat}>
        <Text style={styles.clearButtonText}>Clear Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 15,
    marginVertical: 5,
  },
  userMessage: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
  },
  aiMessage: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    maxHeight: 100,
    paddingVertical: 8,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 10,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  clearButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
