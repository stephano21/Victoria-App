import React from 'react';
import { View, Text, Image, StyleSheet,TouchableWithoutFeedback } from 'react-native';

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <TouchableWithoutFeedback >
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View >
            <Text style={styles.number} >{title}
             
            </Text>
            <Text style={styles.name}>{description}</Text>
            <Image source={{ uri: "https://placehold.co/150x150" }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    width: 400,
    backgroundColor:"#92F072",
    alignContent:'center',
    padding:2,
    margin:3,
    borderRadius: 15,
  },
  spacing: {
    flex: 2,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#000",
    fontSize: 11,
    textAlign: "center",
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});


export default Card;
