import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import styles from './CustomSelectStyles';

interface CustomSelectProps {
  options: {
    key: string;
    name: string;
  }[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

/** Custom select with dropdown */
const CustomSelect = ({
  options,
  selectedValue,
  onValueChange,
  placeholder = 'Seleccionar...',
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const handleLayout = (event: any) => {
    const { height, width, x, y } = event.nativeEvent.layout;
    setDropdownPosition({
      top: y + height + 5,
      left: x,
      width: width,
    });
  };

  const handleSelect = (optionKey: string) => {
    onValueChange(optionKey);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.key === selectedValue);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectTrigger}
        onPress={() => setIsOpen(!isOpen)}
        onLayout={handleLayout}
        activeOpacity={0.8}
      >
        <Text
          style={selectedOption ? styles.selectedText : styles.placeholderText}
        >
          {selectedOption ? selectedOption.name : placeholder}
        </Text>
      </TouchableOpacity>

      {isOpen && (
        <View
          style={[
            styles.dropdownContainer,
            {
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              width: dropdownPosition.width,
            },
          ]}
        >
          <ScrollView
            nestedScrollEnabled
            style={styles.scrollContainer}
            contentContainerStyle={styles.scrollContent}
          >
            {options.map((option) => (
              <TouchableOpacity
                key={option.key}
                style={styles.optionItem}
                onPress={() => handleSelect(option.key)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.optionText,
                    option.key === selectedValue && styles.selectedOption,
                  ]}
                >
                  {option.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {isOpen && (
        <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default CustomSelect;
