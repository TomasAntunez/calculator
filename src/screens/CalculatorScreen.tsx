import { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from '../theme';
import { CalculatorButton } from '../components';
import { useCalculator } from '../hooks';


export const CalculatorScreen: FC = () => {

  const {
    prevNumber,
    number,
    clear,
    changeNumberSign,
    deleteLastDigit,
    buildNumber,
    split,
    multiply,
    subtract,
    add,
    calculate
  } = useCalculator();


  return (
    <View style={ styles.calculatorContainer }>

      {
        ( prevNumber !== '0' ) &&
          <Text style={ styles.smallResult }>{ prevNumber }</Text>
      }

      <Text style={ styles.result } numberOfLines={ 1 } adjustsFontSizeToFit>
        { number }
      </Text>


      <View style={ styles.row }>
        <CalculatorButton text='C'   color='#9B9B9B' action={ clear } />
        <CalculatorButton text='+/-' color='#9B9B9B' action={ changeNumberSign } />
        <CalculatorButton text='del' color='#9B9B9B' action={ deleteLastDigit } />
        <CalculatorButton text='/'   color='#FF9427' action={ split } />
      </View>

      <View style={ styles.row }>
        <CalculatorButton text='7' action={ buildNumber } />
        <CalculatorButton text='8' action={ buildNumber } />
        <CalculatorButton text='9' action={ buildNumber } />
        <CalculatorButton text='X' action={ multiply } color='#FF9427' />
      </View>

      <View style={ styles.row }>
        <CalculatorButton text='4' action={ buildNumber } />
        <CalculatorButton text='5' action={ buildNumber } />
        <CalculatorButton text='6' action={ buildNumber } />
        <CalculatorButton text='-' action={ subtract } color='#FF9427' />
      </View>

      <View style={ styles.row }>
        <CalculatorButton text='1' action={ buildNumber } />
        <CalculatorButton text='2' action={ buildNumber } />
        <CalculatorButton text='3' action={ buildNumber } />
        <CalculatorButton text='+' action={ add } color='#FF9427' />
      </View>

      <View style={ styles.row }>
        <CalculatorButton text='0' action={ buildNumber } broad />
        <CalculatorButton text='.' action={ buildNumber } />
        <CalculatorButton text='=' action={ calculate } color='#FF9427' />
      </View>

    </View>
  );
};
