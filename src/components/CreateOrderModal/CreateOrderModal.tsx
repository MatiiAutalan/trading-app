import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Formik, FormikErrors } from 'formik';
import CustomInput, { InputConfig } from '../CustomInput/CustomInput';
import styles from './CreateOrderModalStyles';
import { createValidationSchema } from './CreateOrderModalValidations';

type OrderModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: Record<string, any>) => void;
  inputs: InputConfig[];
  title: string;
  buttonConfirmText: string;
  buttonCancelText: string;
};

/** Order modal component to create order */
const OrderModal = ({
  visible,
  onClose,
  onSubmit,
  inputs,
  title,
  buttonConfirmText,
  buttonCancelText,
}: OrderModalProps) => {
  const initialValues = inputs.reduce(
    (acc, input) => {
      acc[input.key] = input.defaultValue || '';
      return acc;
    },
    {} as Record<string, any>,
  );

  type FormikError = string | string[] | FormikErrors<any> | undefined;

  const validationSchema = createValidationSchema(inputs);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{title}</Text>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  onSubmit(values);
                }}
              >
                {({ handleChange, handleSubmit, values, errors }) => (
                  <>
                    {inputs.map((input) => {
                      const error = errors[input.key] as FormikError;
                      return (
                        <View key={input.key} style={styles.inputWrapper}>
                          <CustomInput
                            type={input.type}
                            label={input.label}
                            options={input.options}
                            value={values[input.key]}
                            onChange={handleChange(input.key)}
                            key={input.key}
                          />
                          {typeof error === 'string' && (
                            <Text style={styles.errorText}>{error}</Text>
                          )}
                        </View>
                      );
                    })}
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={onClose}
                      >
                        <Text style={styles.buttonCancelText}>
                          {buttonCancelText}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => {
                          handleSubmit();
                        }}
                      >
                        <Text style={styles.buttonConfirmText}>
                          {buttonConfirmText}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default OrderModal;
