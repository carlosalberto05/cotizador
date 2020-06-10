import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  YellowBox,
  Button,
} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import colors from './src/utils/colors';

YellowBox.ignoreWarnings(['Picker has been extracted']);

export default function App() {
  const [cantidad, setCantidad] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  console.log(total);

  const operation = () => {
    if (!cantidad) {
      console.log('Añade la cantidad qur quieres solicitar');
    } else if (!interest) {
      console.log('Añade el interes del prestamo');
    } else if (!months) {
      console.log('Selecciona los meses a pagar');
    } else {
      const i = interest / 100;
      const fee = cantidad / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2),
        totalPayable: (fee * months).toFixed(2),
      });
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeAre}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form
          setCantidad={setCantidad}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>

      <View>
        <Text>Resultado</Text>
      </View>

      <Footer operation={operation} />
    </>
  );
}

const styles = StyleSheet.create({
  safeAre: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});
