import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomInput, { InputType } from './CustomInput';

describe('CustomInput Component', () => {
  const mockOnChange = jest.fn();

  const renderComponent = (
    type: InputType,
    value: any = '',
    options?: { key: string; name: string }[],
  ) =>
    render(
      <CustomInput
        type={type}
        label="Test Label"
        key="test"
        value={value}
        onChange={mockOnChange}
        options={options}
      />,
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders text input correctly', () => {
    const { getByPlaceholderText } = renderComponent('text');
    const input = getByPlaceholderText('Ingrese test label');

    expect(input).toBeTruthy();
  });

  test('updates text input value on change', () => {
    const { getByPlaceholderText } = renderComponent('text');
    const input = getByPlaceholderText('Ingrese test label');

    fireEvent.changeText(input, 'Nuevo valor');

    expect(mockOnChange).toHaveBeenCalledWith('Nuevo valor');
  });

  test('renders number input correctly', () => {
    const { getByPlaceholderText } = renderComponent('number');
    const input = getByPlaceholderText('Ingrese test label');

    expect(input).toBeTruthy();
  });

  test('updates number input value on change', () => {
    const { getByPlaceholderText } = renderComponent('number');
    const input = getByPlaceholderText('Ingrese test label');

    fireEvent.changeText(input, '123');

    expect(mockOnChange).toHaveBeenCalledWith('123');
  });

  test('renders select input correctly', () => {
    const { getByText } = renderComponent('select', '', [
      { key: 'Option 1', name: 'Opcion 1' },
      { key: 'Option 2', name: 'Opcion 2' },
    ]);
    const placeholder = getByText('Seleccione test label');

    expect(placeholder).toBeTruthy();
  });
});
