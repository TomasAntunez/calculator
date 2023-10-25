import { useRef, Dispatch, SetStateAction } from "react";


enum Operator { ADD, SUBTRACT, MULTIPLY, SPLIT }

interface Params {
  prevNumber:    string;
  number:        string;
  setPrevNumber: Dispatch< SetStateAction<string> >;
  setNumber:     Dispatch< SetStateAction<string> >;
}

export const useArithmeticOperations = ({
  prevNumber, number, setPrevNumber, setNumber
}: Params) => {

  const lastOperation = useRef<Operator | null>(null);


  const savePrevNumber = () => {

    if ( number.endsWith('.') ) {
      setPrevNumber( number.slice(0, -1) );
    } else {
      setPrevNumber( number );
    }

    setNumber('0');
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


  const calculate = () => {
    const firstNumber = Number( prevNumber );
    const secondNumber = Number( number );

    switch ( lastOperation.current ) {

      case Operator.ADD:
        setNumber( `${ firstNumber + secondNumber }` );
        break;

      case Operator.SUBTRACT:
        setNumber( `${ firstNumber - secondNumber }` );
        break;

      case Operator.MULTIPLY:
        setNumber( `${ firstNumber * secondNumber }` );
        break;

      case Operator.SPLIT:
        setNumber( `${ firstNumber / secondNumber }` );
        break;

    }

    setPrevNumber('0');
  };


  return { add, subtract, multiply, split, calculate };

};
