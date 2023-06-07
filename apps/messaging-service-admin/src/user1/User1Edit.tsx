import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const User1Edit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="alias" source="alias" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Edit>
  );
};
