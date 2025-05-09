import React, { useEffect, useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { FormInput } from '../components/molecules/FormInput';
import { MainButton } from '../components/atoms/MainButton';
import { StylePaymentTheme } from '../theme/PaymentTheme';
import { useDispatch } from 'react-redux';
import { createTransaction } from '../redux/slices/TransactionSlice';
import { AnyAction } from '@reduxjs/toolkit';
import { supabase } from '../lib/supabase';

// Interface para categorías
interface Category {
  id: number;
  name: string;
  type: 'income' | 'expense';
}

export const PaymentScreen = () => {
  const [form, setForm] = useState({
    amount: '',
    comment: '',
    category_id: 0,
  });

  const dispatch = useDispatch();
  const [categories, setCategories] = useState<Category[]>([]);
 
   // Cargar categorías al iniciar
   useEffect(() => {
    const loadCategories = async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*');

      if (!error && data) {
        setCategories(data);
        // Seleccionar primera categoría por defecto
        if (data.length > 0) {setForm(prev => ({...prev, category_id: data[0].id}));}
      }
    };
    loadCategories();
  }, []);
  const handleSubmit = () => {
    if (!form.amount || !form.category_id ) {
      Alert.alert('Error', 'Por favor completa categoría y monto');
      return;
    }

    const amountNumber = parseFloat(form.amount);
    if (isNaN(amountNumber)) {
      Alert.alert('Error', 'Monto debe ser un número válido');
      return;
    }
    console.log('here');
    dispatch(createTransaction({
      amount: amountNumber,
      description: form.comment,
      category_id: form.category_id,
      date: new Date().toISOString(),
      user_id: '',
    }) as unknown as AnyAction);

    Alert.alert('Registro creado!');
    setForm({ ...form, amount: '', comment: '' });
  };

  return (
    <View style={StylePaymentTheme.container}>
    <View style={StylePaymentTheme.titlecontainer}>
      <Text style={StylePaymentTheme.h1}>Registro</Text>
      <Text style={StylePaymentTheme.h3}>Ingresos y Egresos</Text>
    </View>

    {/* Selector de categorías */}
    <View style={{marginBottom: 16}}>
      {categories.map(cat => (
        <MainButton
          key={cat.id}
          text={cat.name}
          onPress={() => setForm({...form, category_id: cat.id})}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: form.category_id === cat.id ? '#7CE2FA' : '#F1F1F1',
            marginBottom: 8,
          }}
        />
      ))}
    </View>

    <FormInput
      icon="credit-card"
      placeholder="Monto"
      value={form.amount}
      onChangeText={(text) => setForm({...form, amount: text})}
    />

    <FormInput
      icon="message"
      placeholder="Comentario"
      value={form.comment}
      onChangeText={(text) => setForm({...form, comment: text})}
    />

    <MainButton
        text="Guardar Movimiento"
        onPress={handleSubmit} disabled={false}    />
  </View>
);
};
