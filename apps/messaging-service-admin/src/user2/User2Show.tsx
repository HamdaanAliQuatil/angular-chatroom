import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const User2Show = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="alias" source="alias" />
        <TextField label="ID" source="id" />
        <TextField label="message" source="message" />
      </SimpleShowLayout>
    </Show>
  );
};
