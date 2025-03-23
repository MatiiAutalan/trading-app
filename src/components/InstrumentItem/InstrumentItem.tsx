import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Instrument } from '../../types/instruments';
import { calculateReturn } from '../../utils/calculateReturn';
import styles from './InstrumentItemStyles';

/**
 * Instrument Item component.
 */
const InstrumentItem = ({
  item,
  onPress,
  disabled = false,
}: {
  item: Instrument;
  onPress?: () => void;
  disabled?: boolean;
}) => {
  const { name, ticker, last_price, close_price } = item;
  const returnPercentage = calculateReturn(last_price, close_price);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.itemContainer}
    >
      <View style={styles.leftColumn}>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.ticker}>{ticker}</Text>
      </View>

      <View style={styles.rightColumn}>
        <Text style={styles.price}>${last_price.toFixed(2)}</Text>
        <View style={styles.returnContainer}>
          <Text
            style={[
              styles.returnPercentage,
              returnPercentage >= 0 ? styles.profit : styles.loss,
            ]}
          >
            {returnPercentage.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InstrumentItem;
