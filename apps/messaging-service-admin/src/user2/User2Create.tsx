import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const User2Create = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="alias" source="alias" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Create>
  );
};
