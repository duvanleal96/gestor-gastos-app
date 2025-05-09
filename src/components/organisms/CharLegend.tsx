/* eslint-disable react-native/no-inline-styles */
// components/organisms/CharLegend.tsx
import { View, Text, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';
import { DataInterface } from '../../interface/DataInterface';

interface ChartProps {
  movements: DataInterface[];
  incomeTotal: number;
  expenseTotal: number;
}

export const ChartWithLegend = ({
  movements,
  incomeTotal,
  expenseTotal,
}: ChartProps) => {
  if (movements.length === 0) {
    return (
      <View style={styles.chartContainer}>
        <Text>No hay movimientos para mostrar</Text>
      </View>
    );
  }

  const totalGeneral = incomeTotal + expenseTotal;
  const chartData = [
    { x: 'Ingresos', y: incomeTotal, color: '#4CAF50' },
    { x: 'Gastos', y: expenseTotal, color: '#F44336' },
  ];

  return (
    <View style={styles.chartContainer}>
      <VictoryPie
        data={chartData}
        colorScale={chartData.map(d => d.color)}
        width={300}
        height={300}
        innerRadius={70}
        style={{
          labels: {
            fill: 'white',
            fontSize: 14,
            fontWeight: 'bold',
          },
        }}
      />
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.colorBox, { backgroundColor: '#4CAF50' }]} />
          <Text style={styles.legendText}>
            Ingresos ({getPercentage(incomeTotal, totalGeneral)}%)
          </Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.colorBox, { backgroundColor: '#F44336' }]} />
          <Text style={styles.legendText}>
            Gastos ({getPercentage(expenseTotal, totalGeneral)}%)
          </Text>
        </View>
      </View>
    </View>
  );
};


const getPercentage = (value: number, total: number) => {
    if (total <= 0) {return '0';}
    return (value / total * 100).toFixed(1);
  };

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    elevation: 3,
    margin: 10,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  colorBox: {
    width: 15,
    height: 15,
    borderRadius: 3,
  },
  legendText: {
    fontSize: 14,
    color: '#333',
  },
});
