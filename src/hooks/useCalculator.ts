import { useState } from 'react';

import { useArithmeticOperations } from './useArithmeticOperations';


export const useCalculator = () => {

  const [ prevNumber, setPrevNumber ] = useState('0');
  const [ number, setNumber ] = useState('0');

  const { add, subtract, multiply, split, calculate } = useArithmeticOperations({
    prevNumber,
    setPrevNumber,
    number,
    setNumber
  });


  const clear = () => {
    setNumber('0');
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


  return {
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
  };

};
