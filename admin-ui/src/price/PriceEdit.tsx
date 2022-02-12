import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PriceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Price" source="Price" />
        <TextInput label="Ticker" source="ticker" />
      </SimpleForm>
    </Edit>
  );
};
