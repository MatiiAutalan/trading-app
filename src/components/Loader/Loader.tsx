import React from 'react';
import { ActivityIndicator, StyleProp, View, ViewStyle } from 'react-native';

import styles from './LoaderStyles';
import { Colors } from '@styles';

interface LoaderProps {
  style?: StyleProp<ViewStyle>;
  color?: string;
  size?: 'small' | 'large';
}
/**
 * Generic loading indicator
 */
const Loader: React.FC<LoaderProps> = ({
  style,
  color = Colors.brandDefault,
  size = 'large',
}) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;
