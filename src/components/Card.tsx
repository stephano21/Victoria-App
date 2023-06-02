import React from 'react';
import { Dimensions, View, Text, Image, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Colors } from './../components/Colors'
const screenWidth = Dimensions.get('window').width;
interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.number}>{title}</Text>
          <Text style={styles.name}>{description}</Text>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '50%',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  card: {
    backgroundColor: Colors.background,
    borderRadius: 8,
    padding: 16,
    elevation: 4,
    
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  
});


export default Card;
