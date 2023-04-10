import React from "react";
import { ScrollView, View, Text } from "react-native";
//components
import Card from '../components/Card';

const HomeScreen = () => {
    return (
        <ScrollView>
            <View>
                <Card
                    title="Título de la tarjeta"
                    image="https://via.placeholder.com/150"
                    description="Descripción de la tarjeta"
                />
                <Card
                    title="Título de la tarjeta"
                    image="https://via.placeholder.com/150"
                    description="Descripción de la tarjeta"
                /><Card
                    title="Título de la tarjeta"
                    image="https://via.placeholder.com/150"
                    description="Descripción de la tarjeta"
                /><Card
                    title="Título de la tarjeta"
                    image="https://via.placeholder.com/150"
                    description="Descripción de la tarjeta"
                /><Card
                    title="Título de la tarjeta"
                    image="https://via.placeholder.com/150"
                    description="Descripción de la tarjeta"
                />
            </View>
        </ScrollView>
    )

}
export default HomeScreen