import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageCard = ({ name, experience, logo }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.experience}>{experience}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f0e8',
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 14,
    color: 'hsl(0, 0%, 35%)',
  },
});

export default LanguageCard;
