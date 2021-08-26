import { StyleSheet, Text, View } from "react-native"

import React from "react";
import colors from "../../constants/colors";

export interface CardsComponentProps {
    children: any
}
 
const CardsComponent: React.FC = (style, {children}) => {
    return (
        <>
            <View style={{ ...styles.cardContainer, ...style }}>
                {children}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
      borderRadius: 10,
      backgroundColor: colors.primary,
      color: '#fff',
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 6,
      shadowOpacity: 0.25,
      elevation: 5,
    },
  });

export default CardsComponent;