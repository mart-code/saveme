// components/AccidentChatbot.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AccidentChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Predefined medical questions for accident victims
  const medicalQuestions = [
    "Where are you injured? (Head/Chest/Limbs)",
    "Are you bleeding? (Yes/No)",
    "Can you move all limbs? (Yes/No)",
    "Rate your pain from 1-10",
    "Are you experiencing dizziness? (Yes/No)"
  ];

  useEffect(() => {
    // Initial bot message
    setMessages([
      {
        _id: 1,
        text: 'Hello! I\'m your emergency medical assistant. Please describe your condition.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'MedBot',
          avatar: 'https://i.imgur.com/7k12EPD.png'
        }
      }
    ]);
  }, []);

  const handleResponse = (userMessage) => {
    setLoading(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      const botResponse = {
        _id: Math.round(Math.random() * 1000000),
        text: getBotResponse(userMessage),
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'MedBot'
        }
      };
      
      setMessages(previousMessages => 
        GiftedChat.append(previousMessages, [botResponse])
      );
      setLoading(false);
    }, 1500);
  };

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    // Emergency protocol
    if (msg.includes('bleed') || msg.includes('blood')) {
      return "Apply direct pressure to the wound with a clean cloth. I've alerted nearby medics.";
    }
    
    if (msg.includes('pain') && (msg.includes('9') || msg.includes('10'))) {
      return "Severe pain detected! I've notified emergency services with your location.";
    }

    if (msg.includes('can\'t breathe') || msg.includes('chest pain')) {
      return "🚨 Cardiac emergency suspected! Don't move, help is coming!";
    }

    // Continue with next medical question
    const unanswered = medicalQuestions.find(q => 
      !messages.some(m => m.text.includes(q.split(' ')[0]))
    );
    
    return unanswered || "Help is on the way. Stay calm. Can you describe your surroundings?";
  };

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages => 
      GiftedChat.append(previousMessages, newMessages)
    );
    handleResponse(newMessages[0].text);
  }, []);

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: { backgroundColor: '#3b82f6' },
        left: { backgroundColor: '#f1f5f9' }
      }}
      textStyle={{
        right: { color: 'white' },
        left: { color: 'black' }
      }}
    />
  );

  const renderSend = (props) => (
    <Send {...props}>
      <View style={styles.sendButton}>
        <Ionicons name="send" size={24} color="white" />
      </View>
    </Send>
  );

  const renderFooter = () => (
    loading ? (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#3b82f6" />
      </View>
    ) : null
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{ _id: 1 }} // User ID
      renderBubble={renderBubble}
      renderSend={renderSend}
      renderFooter={renderFooter}
      placeholder="Describe your injuries..."
      alwaysShowSend
      scrollToBottom
    />
  );
};

const styles = StyleSheet.create({
  sendButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 18,
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginRight: 5
  },
  footer: {
    padding: 10,
    alignItems: 'center'
  }
});

export default AccidentChatbot;