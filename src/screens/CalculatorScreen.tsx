import { FC, useRef, useState } from 'react';
import { Text, View } from 'react-native';

import { styles } from '../theme';
import { CalculatorButton } from '../components/CalculatorButton';


enum Operator {
  ADD,
  SUBTRACT,
  MULTIPLY,
  SPLIT
}


export const CalculatorScreen: FC = () => {

  const [ prevNumber, setPrevNumber ] = useState('0');
  const [ number, setNumber ] = useState('100');

  const lastOperation = useRef<Operator | null>(null);


  const clear = () => {
    setNumber('0');
  };


  const clearAll = () => {
    clear();
    setPrevNumber('0');
  }


  const buildNumber = ( textNumber: string ) => {

    if ( number.includes('.') && textNumber === '.' ) return;

    if ( number.startsWith('0') || number.startsWith('-0') ) {

      if (
        ( textNumber === '.' ) ||
        ( (textNumber === '0') && number.includes('.') )
      ) {
        setNumber( number + textNumber );
        return;
      }

      if ( textNumber !== '0' && !number.includes('.') ) {
        setNumber( textNumber );
        return;
      }

      if ( textNumber === '0' && !number.includes('.') ) {
        setNumber( number );
        return;
      }

    }

    setNumber( number + textNumber );
  };


  const changeNumberSign = () => {

    if ( number.startsWith('-') ) {
      setNumber( number.replace('-', '') );
      return;
    }

    setNumber( '-' + number );
  };


  const deleteLastDigit = () => {

    if ( (number === '0') || (number === '-0') ) return;

    if (
      ( number.length === 1 ) ||
      ( (number.length === 2) && number.startsWith('-') )
    ) {
      clear();
      return;
    }

    setNumber( number.slice(0, -1) );
  };


  const savePrevNumber = () => {

    if ( number.endsWith('.') ) {
      setPrevNumber( number.slice(0, -1) );
    } else {
      setPrevNumber( number );
    }

    clear();
  };


  const handleOperation = ( operator: Operator ) => {
    savePrevNumber();
    lastOperation.current = operator;
  };

  const add = () => {
    handleOperation( Operator.ADD );
  };

  const subtract = () => {
    handleOperation( Operator.SUBTRACT );
  };

  const multiply = () => {
    handleOperation( Operator.MULTIPLY );
  };

  const split = () => {
    handleOperation( Operator.SPLIT );
  };


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
        <CalculatorButton text='C'   color='#9B9B9B' action={ clearAll } />
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
        <CalculatorButton text='=' action={ clear } color='#FF9427' />
      </View>

    </View>
  );
};
