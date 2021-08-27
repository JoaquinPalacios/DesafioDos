import { Button, StyleSheet, Text, View } from "react-native"

import CardsComponent from "../cards/cards";
import HomeComponent from "../../screens/home/home";
import React from "react";
import { useState } from "react";

export interface EcoNoticiasProps {
    // setButtonPressed: boolean
}
 
const EcoNoticias: React.FC<EcoNoticiasProps> = () => {
    const [pressedButton, setPressedButton] = useState<boolean>(false);

    const handlePage = () => {
        setPressedButton(true);        
    };

    return (
        <>
            {pressedButton === false ? (
            <View>
                <Text style={styles.title}>Soy el componente Eco-Noticias</Text>
                <CardsComponent>
                    <Text style={styles.textCard}>Eco-Noticias</Text>
                    <Button title='Volver al inicio' onPress={handlePage} />
                </CardsComponent>
            </View>) : <HomeComponent />}
        </>
    );
}

const styles = StyleSheet.create({
    textCard: {
        color: 'white',
        fontSize: 21,
        paddingBottom: 15,
        textAlign: 'center',
    },
    title: {
        fontSize: 23,
        paddingBottom: 50,
        textAlign: 'center',
    },
});
export default EcoNoticias;