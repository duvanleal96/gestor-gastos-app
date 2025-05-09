import { View, Text } from 'react-native';
import { FormText } from '../atoms/FormText';
import { Icons } from '../atoms/Icons';

interface Props {
  icon?: string;
  placeholder: string;
  isInvalid?: boolean;
  errorMsg?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
}

export const FormInput = ({
  icon,
  placeholder,
  isInvalid,
  errorMsg,
  value,
  onChangeText,
  secureTextEntry,
}: Props) => {
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center', width: '92%' }}>
      <Icons iconName={icon} />
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <FormText
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        <Text style={{ color: isInvalid ? 'red' : 'white' }}>{errorMsg || ''}</Text>
      </View>
    </View>
  );
};
