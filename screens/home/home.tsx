import { Button, Text, View } from "react-native"

import CardsComponent from "../../components/cards/cards"
import EcoNoticias from "../../components/EcoNoticias/EcoNoticias";
import React from "react";
import { useState } from "react";

export interface HomeComponentProps {
    
}
 
const HomeComponent: React.FC<HomeComponentProps> = () => {
    const [buttonPressed, setButtonPressed] = useState<boolean>(false);

    const handlePage = () => {
        setButtonPressed(true);
        if (buttonPressed == true) {
            <EcoNoticias />
        } else {
            <HomeComponent />
        }
    }
    
    return (
        <>
            <View>
                <Text>Hello User</Text>
                <CardsComponent>
                    <Text>Tips</Text>
                    <Button title='Tips' onPress={() => {}} />
                </CardsComponent>
                <CardsComponent>
                    <Text>Eco-Noticias</Text>
                    <Button title='Eco-Noticias' onPress={() => handlePage()} />
                </CardsComponent>
            </View>
        </>
    );
}

export default HomeComponent;