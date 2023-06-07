import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Dimensions, StyleSheet, ActivityIndicator } from "react-native";
import { getProyectosApi } from "../api/hacienda";
import { NavigationProps, IProyectos } from './../../types';
import Card from '../components/Card';
import Loader from "../components/Loader";

const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }: NavigationProps) => {
  const [nextUrl, setNextUrl] = useState(null);
  const [proyectos, setProjects] = useState<IProyectos[]>([]);
  const [isLoading, setIsLoading] = useState(false); // Variable de estado para el loader

  const loadProyectos = async () => {
    try {
      setIsLoading(true); // Establecer isLoading a true al comenzar la carga de datos
      const response = await getProyectosApi(nextUrl);
      setProjects(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Establecer isLoading a false al finalizar la carga de datos
    }
  };

  useEffect(() => {
    (async () => {
      await loadProyectos();
    })();
  }, []);

  const handleCardPress = (id: number, Nombre: string) => {
    navigation.navigate('Lotes', { id: id, Proyecto: Nombre });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {isLoading ? ( // Mostrar el loader si isLoading es true
          <Loader />
        ) : (
          <View style={styles.row}>
            {proyectos.map((card, index) => (
              <Card
                key={index}
                title={card.Codigo_Proyecto}
                description={card.Nombre}
                image={card.id.toString()}
                id={card.id}
                onPress={() => handleCardPress(card.id, card.Codigo_Proyecto)}
              />
            ))}
          </View>
          
        )}
      </View>
    </ScrollView>
  );
};

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
    marginTop: 20,
    margin: 10
  },
});

export default HomeScreen;
