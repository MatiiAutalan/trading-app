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
  options: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

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

  const handleSelect = (item: string) => {
    onValueChange(item);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectTrigger}
        onPress={() => setIsOpen(!isOpen)}
        onLayout={handleLayout}
        activeOpacity={0.8}
      >
        <Text
          style={selectedValue ? styles.selectedText : styles.placeholderText}
        >
          {selectedValue || placeholder}
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
            {options.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.optionItem}
                onPress={() => handleSelect(item)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.optionText,
                    item === selectedValue && styles.selectedOption,
                  ]}
                >
                  {item}
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
