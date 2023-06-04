import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Dimensions,StyleSheet } from "react-native";
import { getProyectosApi } from "../api/hacienda";
//
import { NavigationProps ,IProyectos} from './../../types';


//components
import Card from '../components/Card';

const screenWidth = Dimensions.get('window').width;
const HomeScreen = ({ navigation }: NavigationProps) => {
  const [nextUrl, setNextUrl] = useState(null);
  const [proyectos, setProjects] = useState<IProyectos[]>([]);

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
  const handleCardPress = (id:number, Proyecto:string) => {
    // Aquí puedes realizar la redirección a la nueva pantalla con la información correspondiente al ID
    navigation.navigate('Lotes', { id: id , Proyecto: Proyecto});
  };
    return (
        <ScrollView>
            <View style={styles.row}>
              {proyectos.map((card, index) => (
              <Card key={index} title={card.Codigo_Proyecto} description={card.Nombre} image={card.id.toString()} id={card.id} onPress={handleCardPress}/>
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