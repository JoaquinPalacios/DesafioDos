import React, { useEffect } from "react";
import { Text, View } from "react-native"

export interface EcoNoticiasProps {
    // setButtonPressed: boolean
}
 
const EcoNoticias: React.FC<EcoNoticiasProps> = () => {

    // useEffect(() => {
    //     setTimeout(() => {
    //         setButtonPressed(false);
    //     }, 3000)
    // }, [])
    return (
        <>
            <View>
                <Text>Soy el componente Eco-Noticias</Text>
            </View>
        </>
    );
}
 
export default EcoNoticias;