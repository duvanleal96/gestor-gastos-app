import { View, Text, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';
import { DataInterface } from '../../interface/DataInterface';

export const ChartWithLegend = ({movements}: {movements : DataInterface[]} ) => {
    const chartData = [
      {
        x: 'Ingresos',
        y: movements.filter(m => m.income).reduce((sum, m) => sum + m.amount, 0),
        color: '#4CAF50',
      },
      {
        x: 'Gastos',
        y: movements.filter(m => !m.income).reduce((sum, m) => sum + m.amount, 0),
        color: '#F44336',
      },
    ];
    const totalIngresos = movements.filter(m => m.income).reduce((sum, m) => sum + m.amount, 0);
    const totalGastos = movements.filter(m => !m.income).reduce((sum, m) => sum + m.amount, 0);
    const totalGeneral = totalIngresos + totalGastos;
  return (
    <View style={styles.chartContainer}>
      {/* Gráfico */}
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

      {/* Leyenda */}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.colorBox, { backgroundColor: '#4CAF50' }]} />
          <Text style={styles.legendText}>Ingresos ({getPercentage(totalIngresos, totalGeneral)}%)</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.colorBox, { backgroundColor: '#F44336' }]} />
          <Text style={styles.legendText}>Gastos ({getPercentage(totalGastos, totalGeneral)}%)</Text>
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
