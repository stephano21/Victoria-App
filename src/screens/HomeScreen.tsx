import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Dimensions,StyleSheet } from "react-native";
import { getProyectosApi } from "../api/hacienda";
//components
import Card from '../components/Card';

const screenWidth = Dimensions.get('window').width;

  interface CardData {
  id:              number;
  Codigo_Proyecto: string;
  Nombre:          string;
  Id_Hacienda:     number;
}
const HomeScreen = () => {
  const [nextUrl, setNextUrl] = useState(null);
  const [proyectos, setProjects] = useState<CardData[]>([]);

  const loadProyectos = async () => {
    try {
      const response = await getProyectosApi(nextUrl)// Espera la respuesta de la API
      // proyectos es un arreglo de objetos con los datos que necesitas

      // Actualiza el estado con los datos recibidos
      setProjects(response);
      
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    (async () => {
      await loadProyectos();
    })();
  }, []);
    return (
        <ScrollView>
            <View style={styles.row}>
              {proyectos.map((card, index) => (
              <Card key={index} title={card.Codigo_Proyecto} description={card.Nombre} image={card.id.toString()} />
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