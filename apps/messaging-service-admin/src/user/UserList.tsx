import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="alias" source="alias" />
        <TextField label="ID" source="id" />
        <TextField label="message" source="message" />
        <TextField label="Roles" source="roles" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
