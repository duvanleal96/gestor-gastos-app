import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {FormInput} from '../components/molecules/FormInput';
import {MainButton} from '../components/atoms/MainButton';
import {StylePaymentTheme} from '../theme/PaymentTheme';
import {useDispatch} from 'react-redux';
import {createTransaction} from '../redux/slices/TransactionSlice';
import {AnyAction} from '@reduxjs/toolkit';
import {supabase} from '../lib/supabase';
import {FormPicker} from '../components/molecules/FormPicker';
import Toast from 'react-native-toast-message';

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

  useEffect(() => {
    const loadCategories = async () => {
      const {data, error} = await supabase.from('categories').select('*');

      if (!error && data) {
        setCategories(data);
        if (data.length > 0) {
          setForm(prev => ({...prev, category_id: data[0].id}));
        }
      }
    };
    loadCategories();
  }, []);
  const handleSubmit = () => {
    if (!form.amount || !form.category_id) {
       Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Por favor completa categoría y monto',
      });
      return;
    }

    const amountNumber = parseFloat(form.amount);
    if (isNaN(amountNumber)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Monto debe ser un número válido',
      });
      return;
    }
    dispatch(
      createTransaction({
        amount: amountNumber,
        description: form.comment,
        category_id: form.category_id,
        date: new Date().toISOString(),
        user_id: '',
      }) as unknown as AnyAction,
    );

    Toast.show({
      type: 'success',
      text1: 'Movimiento agregado!',
      text2: 'Se guardó correctamente 🥳',
    });
    setForm({...form, amount: '', comment: ''});
  };

  return (
    <View style={StylePaymentTheme.container}>
      <View style={StylePaymentTheme.titlecontainer}>
        <Text style={StylePaymentTheme.h1}>Registro</Text>
        <Text style={StylePaymentTheme.h3}>Ingresos y Egresos</Text>
      </View>

      {/* Selector de categorías */}
      <FormPicker
        icon="add"
        selectedValue={form.category_id}
        onValueChange={itemValue => setForm({...form, category_id: itemValue})}
        items={categories.map(cat => ({
          label: cat.name,
          value: cat.id,
        }))}
        placeholder="Selecciona una categoría"
      />

      <FormInput
        icon="credit-card"
        placeholder="Monto"
        value={form.amount}
        onChangeText={text => setForm({...form, amount: text})}
      />

      <FormInput
        icon="message"
        placeholder="Comentario"
        value={form.comment}
        onChangeText={text => setForm({...form, comment: text})}
      />

      <MainButton
        text="Guardar Movimiento"
        onPress={handleSubmit}
        disabled={false}
      />
    </View>
  );
};
