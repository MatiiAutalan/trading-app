import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InstrumentItem from './InstrumentItem';
import { Instrument } from '@types';
import { calculateReturn } from '@utils';
import { Colors } from '@styles';

jest.mock('@utils', () => ({
  calculateReturn: jest.fn(),
}));

const mockInstrument: Instrument = {
  close_price: 50.07,
  id: 1,
  last_price: 45.72,
  name: 'Dycasa S.A.',
  ticker: 'DYCA',
  type: 'ACCIONES',
};

describe('InstrumentItem', () => {
  it('Render instrument', () => {
    (calculateReturn as jest.Mock).mockReturnValue(8.69);

    const { getByText } = render(<InstrumentItem item={mockInstrument} />);

    expect(getByText(mockInstrument.name)).toBeTruthy();
    expect(getByText(mockInstrument.ticker)).toBeTruthy();
    expect(getByText('$45.72')).toBeTruthy();
    expect(getByText('8.69%')).toBeTruthy();
  });

  it('Apply styles to return', () => {
    (calculateReturn as jest.Mock).mockReturnValue(5.0);
    const { getByText, rerender } = render(
      <InstrumentItem item={mockInstrument} />,
    );

    const positiveElement = getByText('5.00%');
    expect(positiveElement).toHaveStyle({ color: Colors.green });

    (calculateReturn as jest.Mock).mockReturnValue(-2.5);
    rerender(<InstrumentItem item={{ ...mockInstrument, last_price: 140 }} />);

    const negativeElement = getByText('-2.50%');
    expect(negativeElement).toHaveStyle({ color: Colors.red });
  });

  it('Check onPress', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <InstrumentItem item={mockInstrument} onPress={mockOnPress} />,
    );

    fireEvent.press(getByText(mockInstrument.name));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
