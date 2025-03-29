import * as Yup from 'yup';
import { InputConfig } from '@components';

export const createValidationSchema = (inputs: InputConfig[]) => {
  return Yup.object().shape(
    inputs.reduce(
      (schema, input) => {
        let fieldValidation;

        switch (input.key) {
          case 'side':
            fieldValidation = Yup.string()
              .required('Selecciona el tipo de operación')
              .oneOf(['BUY', 'SELL'], 'Opción inválida');
            break;

          case 'type':
            fieldValidation = Yup.string()
              .required('Selecciona el tipo de orden')
              .oneOf(['MARKET', 'LIMIT'], 'Opción inválida');
            break;

          case 'quantity':
            fieldValidation = Yup.string()
              .required('Cantidad es obligatoria')
              .matches(/^\d+$/, 'Solo se permiten números enteros')
              .test('min', 'Mínimo 1 acción', (value) => Number(value) > 0);
            break;

          case 'price':
            fieldValidation = Yup.string().when(
              'type',
              (
                values: any[],
                schema: Yup.StringSchema<
                  string | undefined,
                  Yup.AnyObject,
                  undefined
                >,
              ) => {
                const type = values[0];
                if (type === 'LIMIT') {
                  return schema
                    .required('El precio es obligatorio')
                    .matches(/^\d+([.,]\d*)?$/, 'Valor inválido');
                }
                return schema;
              },
            );
            break;

          default:
            fieldValidation = Yup.mixed().required('Campo obligatorio');
        }

        schema[input.key] = fieldValidation;
        return schema;
      },
      {} as Record<string, Yup.AnySchema>,
    ),
  );
};
