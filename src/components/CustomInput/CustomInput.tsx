import React from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import { Select } from '@components';
import styles from './CustomInputStyles';

type InputType = 'text' | 'number' | 'select' | 'toggle';

export type InputConfig = {
  type: InputType;
  label: string;
  key: string;
  options?: string[];
  defaultValue?: string | boolean | number;
};

type CustomInputProps = InputConfig & {
  value: any;
  onChange: (value: any) => void;
};

/** Custom input  */
const CustomInput = ({
  type,
  label,
  value,
  onChange,
  options,
}: CustomInputProps) => {
  const renderInput = () => {
    switch (type) {
      case 'text':
      case 'number':
        return (
          <TextInput
            style={styles.input}
            placeholder={`Ingrese ${label.toLowerCase()}`}
            keyboardType={type === 'number' ? 'numeric' : 'default'}
            value={value?.toString() || ''}
            onChangeText={onChange}
          />
        );
      case 'select':
        return (
          <Select
            options={options || []}
            selectedValue={value || ''}
            onValueChange={onChange}
            placeholder={`Seleccione ${label.toLowerCase()}`}
          />
        );
      case 'toggle':
        return <Switch value={value || false} onValueChange={onChange} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      {renderInput()}
    </View>
  );
};

export default CustomInput;
