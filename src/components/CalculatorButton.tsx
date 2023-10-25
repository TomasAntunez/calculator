import { FC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from '../theme';


type Color = '#9B9B9B' | '#2D2D2D' | '#FF9427';

interface Props {
  text: string;
  color?: Color;
  broad?: boolean;
  action: ( textNumber: string ) => void;
}

export const CalculatorButton: FC<Props> = ({
  text, color = '#2D2D2D', broad = false, action
}) => {
  return (
    <TouchableOpacity onPress={ () => action(text) }>
      <View style={{
        ...styles.button,
        backgroundColor: color,
        width: broad ? 180 : 80
      }}>
        <Text style={{
          ...styles.textButton,
          color: (color === '#9B9B9B') ? 'black' : 'white'
        }}>
          { text }
        </Text>
      </View>
    </TouchableOpacity>
  )
}
