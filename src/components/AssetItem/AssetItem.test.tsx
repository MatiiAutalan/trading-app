import React from 'react';
import { render } from '@testing-library/react-native';
import AssetsItem from './AssetItem';
import { Asset } from '@types';
import { Colors } from '@styles';

describe('AssetsItem Component', () => {
  const mockAsset: Asset = {
    ticker: 'AAPL',
    quantity: 10,
    last_price: 150,
    avg_cost_price: 100,
  };

  test('renders correctly with given asset data', () => {
    const { getByText } = render(<AssetsItem item={mockAsset} />);

    expect(getByText('AAPL')).toBeTruthy();
    expect(getByText('10 acciones')).toBeTruthy();
    expect(getByText('$ 1.500,00')).toBeTruthy();
    expect(getByText('$ 500,00')).toBeTruthy();
    expect(getByText('+50.00%')).toBeTruthy();
  });

  test('applies correct styles based on gain or loss', () => {
    const { getByText } = render(<AssetsItem item={mockAsset} />);

    const gainText = getByText('$ 500,00');
    const returnText = getByText('+50.00%');

    expect(gainText).toHaveStyle({ color: Colors.green });

    expect(returnText).toHaveStyle({ color: Colors.green });
  });

  test('renders correctly with a loss', () => {
    const lossAsset: Asset = {
      ...mockAsset,
      last_price: 80,
    };

    const { getByText } = render(<AssetsItem item={lossAsset} />);

    expect(getByText('-$ 200,00')).toBeTruthy();

    expect(getByText('-20.00%')).toBeTruthy();
  });
});
