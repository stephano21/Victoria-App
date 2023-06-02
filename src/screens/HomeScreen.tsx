import React from "react";
import { ScrollView, View, Text, Dimensions,StyleSheet } from "react-native";
//components
import Card from '../components/Card';

const screenWidth = Dimensions.get('window').width;
const cards = [
    { title: 'Card 1', description: 'Description 1', image: 'https://placehold.co/150x150' },
    { title: 'Card 2', description: 'Description 2', image: 'https://placehold.co/150x150' },
    { title: 'Card 3', description: 'Description 3', image: 'https://placehold.co/150x150' },
    { title: 'Card 4', description: 'Description 4', image: 'https://placehold.co/150x150' },
  ];
const HomeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.row}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} image={card.image} />
        ))}
      </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingVertical: 16,
      paddingHorizontal: 8,
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop:20,
      margin:10
    },
});
export default HomeScreen