import { Button, StyleSheet, Text, View } from "react-native"

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
    };
    
    return (
        <>
            <View>
                <View>
                    {(buttonPressed === false) ?                
                    <>
                        <View>
                            <Text style={styles.title}>Hello User</Text>
                            <CardsComponent>
                                <Text style={styles.textCard}>Tips</Text>
                                <Button title='Tips' onPress={() => { } } />
                            </CardsComponent><CardsComponent>
                                    <Text style={styles.textCard}>Eco-Noticias</Text>
                                    <Button title='Eco-Noticias' onPress={handlePage} />
                            </CardsComponent>
                        </View>
                    </> : <EcoNoticias />}
                </View>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    title: {
        fontSize: 23,
        paddingBottom: 50,
        textAlign: 'center',
    },
    textCard: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 10,
    },
    buttonStyle: {
        width: '50%',
    },
});


export default HomeComponent;