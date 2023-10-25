import { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { styles } from './theme';
import { CalculatorScreen } from './screens';


const App: FC = () => {
  return (
    <SafeAreaView style={ styles.background }>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />

      <CalculatorScreen />
    </SafeAreaView>
  );
}


export default App;
