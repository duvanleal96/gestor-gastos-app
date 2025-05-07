import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import {DataInterface} from '../interface/DataInterface';
import { StyleAccountTheme } from '../theme/AccountTheme';
import { MovementBalance } from '../components/molecules/MovementBalance';
import { VictoryPie } from 'victory-native';
import React from 'react';
import renderItem from '../components/organisms/Movements';
import { ChartWithLegend } from '../components/organisms/CharLegend';

const timeElapsed: number = Date.now();
const today = new Date(timeElapsed);

export const movements: DataInterface[] = [
  {
    id: 'n45j228347293n2b3',
    title: 'Salario',
    amount: 12000000,
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: 'Duvan',
    outcome: '',
  },
  {
    id: '3ac68afc91aa97f63',
    title: 'Recibo epm',
    amount: 2000000,
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Duvan',
  },
  {
    id: '4ac68c91a9374aq',
    title: 'arriendo',
    amount: 680000,
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Duvan',
  },
  {
    id: '4ac68c91a9374ff',
    title: 'trabajillo',
    amount: 680000,
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: 'Duvan',
    outcome: '',
  },
  {
    id: '4ac68c91a937465',
    title: 'normas',
    amount: 90000,
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Duvan',
  },
  {
    id: '4ac68c91a9374ff4',
    title: 'sombnras',
    amount: 2000000,
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Duvan',
  },
];

export const MovementScreen = ({navigation}: any) => {
  const balance = movements.reduce((total, item) => 
    item.income ? total + item.amount : total - item.amount, 0);

  return (
    <View style={StyleAccountTheme.container}>
      {/* Sección del gráfico */}
      <View style={StyleAccountTheme.chartContainer}>
      <ChartWithLegend movements = {movements}/>
        <MovementBalance balance={balance} />
      </View>

      {/* Lista de movimientos */}
      <FlatList
        data={movements}
        renderItem={renderItem}
        keyExtractor={movement => movement.id}
        contentContainerStyle={StyleAccountTheme.list}
      />
    </View>
  );
};