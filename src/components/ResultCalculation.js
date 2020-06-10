import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function ResultCalculation(props) {
  const {cantidad, interest, months, total, errorMessage} = props;
  return (
    <View style={styles.content}>
      {total && (
        <ScrollView style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          <DataResult title="Cantidad prestada" value={`$${cantidad} MXN`} />
          <DataResult title="Interes:" value={`${interest}%`} />
          <DataResult title="Plazos:" value={`${months}`} meses />
          <DataResult title="Pago mensual" value={`${total.monthlyFee} MXN`} />
          <DataResult
            title="Total a pagar"
            value={`${total.totalPayable} MXN`}
          />
        </ScrollView>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

function DataResult(props) {
  const {title, value} = props;

  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
