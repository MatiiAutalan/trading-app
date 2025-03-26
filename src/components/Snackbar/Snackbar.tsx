import React from 'react';
import { View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import styles from './SnackbarStyles';

interface CustomSnackbarProps {
  visible: boolean;
  message: string;
  onDismiss: () => void;
  backgroundColor?: string;
  duration?: number;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  visible,
  message,
  onDismiss,
  backgroundColor = '#333',
  duration = 3000,
}) => {
  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={onDismiss}
        duration={duration}
        style={[styles.snackbar, { backgroundColor }]}
      >
        {message}
      </Snackbar>
    </View>
  );
};

export default CustomSnackbar;
