import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Input, InputConfig } from '@components';
import styles from './CreateOrderModalStyles';

type OrderModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: Record<string, any>) => void;
  inputs: InputConfig[];
  title: string;
  buttonConfirmText: string;
  buttonCancelText: string;
};

const OrderModal = ({
  visible,
  onClose,
  onSubmit,
  inputs,
  title,
  buttonConfirmText,
  buttonCancelText,
}: OrderModalProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleInputChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{title}</Text>
              {inputs.map((input) => (
                <Input
                  key={input.key}
                  type={input.type}
                  label={input.label}
                  options={input.options}
                  value={formData[input.key] || input.defaultValue || ''}
                  onChange={(value) => handleInputChange(input.key, value)}
                />
              ))}
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                  <Text style={styles.buttonCancelText}>
                    {buttonCancelText}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonConfirmText}>
                    {buttonConfirmText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default OrderModal;
