// screens/MovementScreen.tsx
import React, { useEffect } from 'react';
import { FlatList, View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { StyleAccountTheme } from '../theme/AccountTheme';
import { ChartWithLegend } from '../components/organisms/CharLegend';
import renderItem from '../components/organisms/Movements';
import { supabase } from '../lib/supabase';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchMovements } from '../redux/slices/MovementsSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const MovementScreen = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error, balance, incomeTotal, expenseTotal } = useAppSelector(
    (state) => state.movements
  );
  const handleRefresh = () => {
    dispatch(fetchMovements());
  };

  useEffect(() => {
    dispatch(fetchMovements());
  }, [dispatch]);

  useEffect(() => {
    const subscription = supabase
      .from('transactions')
      .on('*', () => dispatch(fetchMovements()))
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, [dispatch]);

  if (loading && items.length === 0) {
    return (
      <View style={StyleAccountTheme.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={StyleAccountTheme.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={StyleAccountTheme.container}>
      <View style={stylesMove.header}>
        <TouchableOpacity onPress={handleRefresh} style={stylesMove.refreshButton}>
          <Icon name="refresh" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={StyleAccountTheme.chartContainer}>
        <ChartWithLegend
          movements={items}
          incomeTotal={incomeTotal}
          expenseTotal={expenseTotal}
        />
        <Text style={StyleAccountTheme.balanceText}>
          Balance: {balance >= 0 ? '+' : ''}{balance}
        </Text>
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={StyleAccountTheme.list}
        refreshing={loading}
        onRefresh={() => dispatch(fetchMovements())}
      />
    </View>
  );
};

const stylesMove = StyleSheet.create({
  refreshButton: {
    padding: 10,
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
});
