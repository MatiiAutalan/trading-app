import { View, Text, TouchableOpacity } from 'react-native';
import { useMemo } from 'react';
import { Asset } from '../../types/assets';
import styles from './AssetItemStyles';

const AssetsItem = ({ item }: { item: Asset }) => {
  const { ticker, quantity, last_price, avg_cost_price } = item;

  const { marketValue, gain, returnPercentage } = useMemo(() => {
    const marketValue = quantity * last_price;
    const totalCost = quantity * avg_cost_price;
    const gain = marketValue - totalCost;
    const returnPercentage = totalCost !== 0 ? (gain / totalCost) * 100 : 0;
    return { marketValue, totalCost, gain, returnPercentage };
  }, [quantity, last_price, avg_cost_price]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
    }).format(value);

  const formatPercentage = (value: number) =>
    `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.ticker}>{ticker}</Text>
        <Text style={styles.shares}>{quantity} acciones</Text>
      </View>

      <View style={styles.details}>
        <View style={styles.row}>
          <Text style={styles.label}>Valor mercado</Text>
          <Text style={styles.value}>{formatCurrency(marketValue)}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Ganancia</Text>
          <Text style={[styles.value, gain >= 0 ? styles.profit : styles.loss]}>
            {formatCurrency(gain)}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Rendimiento</Text>
          <Text
            style={[styles.percentage, gain >= 0 ? styles.profit : styles.loss]}
          >
            {formatPercentage(returnPercentage)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AssetsItem;
