import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { User1List } from "./user1/User1List";
import { User1Create } from "./user1/User1Create";
import { User1Edit } from "./user1/User1Edit";
import { User1Show } from "./user1/User1Show";
import { User2List } from "./user2/User2List";
import { User2Create } from "./user2/User2Create";
import { User2Edit } from "./user2/User2Edit";
import { User2Show } from "./user2/User2Show";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Messaging Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="User1"
          list={User1List}
          edit={User1Edit}
          create={User1Create}
          show={User1Show}
        />
        <Resource
          name="User2"
          list={User2List}
          edit={User2Edit}
          create={User2Create}
          show={User2Show}
        />
      </Admin>
    </div>
  );
};

export default App;
