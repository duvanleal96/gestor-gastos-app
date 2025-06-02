import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icons } from '../atoms/Icons';

interface FormPickerProps {
  icon: string;
  selectedValue: string | number;
  onValueChange: (itemValue: any, itemIndex: number) => void;
  items: { label: string; value: string | number }[];
  placeholder?: string;
}

export const FormPicker = ({
  icon,
  selectedValue,
  onValueChange,
  items,
  placeholder = 'Selecciona una opción',
}: FormPickerProps) => {
  return (
    <View style={styles.container}>
      <Icons iconName={icon} />
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}
        dropdownIconColor="#666"
      >
        <Picker.Item label={placeholder} value="" enabled={false} />
        {items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
  },
  picker: {
    flex: 1,
    color: '#000',
  },
});
