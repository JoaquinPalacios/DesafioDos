import { Button, Image, StyleSheet, Text, View } from "react-native"

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
                            <Image style={styles.logo} source={require('../../assets/images/Logo.png')} />
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
    logo: {
        width: 100,
        height: 100,
        display: "flex",
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 50,
    },
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