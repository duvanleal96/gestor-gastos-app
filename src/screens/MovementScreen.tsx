import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import {DataInterface} from '../interface/DataInterface';
import { StyleAccountTheme } from '../theme/AccountTheme';
import { MovementBalance } from '../components/molecules/MovementBalance';
import { VictoryPie } from 'victory-native';
import React from 'react';
import renderItem from '../components/organisms/Movements';

const timeElapsed: number = Date.now();
const today = new Date(timeElapsed);

const movements: DataInterface[] = [
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
    amount: 200000,
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
];

export const MovementScreen = ({navigation}: any) => {
  const balance = movements.reduce((total, item) => 
    item.income ? total + item.amount : total - item.amount, 0);



  // 2. Calcula datos para el gráfico
  const chartData = [
    { 
      x: 'Ingresos', 
      y: movements.filter(m => m.income).reduce((sum, m) => sum + m.amount, 0),
      color: '#4CAF50'
    },
    { 
      x: 'Gastos', 
      y: movements.filter(m => !m.income).reduce((sum, m) => sum + m.amount, 0),
      color: '#F44336'
    }
  ];

  return (
    <View style={StyleAccountTheme.container}>
      {/* Sección del gráfico */}
      <View style={StyleAccountTheme.chartContainer}>
        <VictoryPie
          data={chartData}
          colorScale={chartData.map(d => d.color)}
          width={Dimensions.get('window').width - 40}
          height={300}
          innerRadius={70}
          style={{
            labels: { 
              fill: 'white', 
              fontSize: 14,
              fontWeight: 'bold'
            }
          }}
        />
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