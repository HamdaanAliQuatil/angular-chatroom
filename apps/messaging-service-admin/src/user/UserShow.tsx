import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="alias" source="alias" />
        <TextField label="ID" source="id" />
        <TextField label="message" source="message" />
        <TextField label="Roles" source="roles" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
