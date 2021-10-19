import { Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import React from "react";

const LoginScreen = React.lazy(() => import("../screens/auth/LoginScreen"));
const RegisterScreen = React.lazy(
  () => import("../screens/auth/RegisterScreen")
);
const MyTable = React.lazy(() => import("../screens/auth/MyTable"));
const CreateClient = React.lazy(() => import("../screens/client/CreateClient"));
const ClientList = React.lazy(() => import("../screens/client/ClientList"));
const ConsentForm = React.lazy(() => import("../screens/consent/ConsentForm"));

const Routes = () => {
  return (
    <React.Suspense
      fallback={
        <p>
          <Spinner animation="border" />
        </p>
      }
    >
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/register" component={RegisterScreen} />
      <Route exact path={["/", "/home"]} component={MyTable} />
      <Route exact path="/client-list" component={ClientList} />
      <Route exact path="/create-client" component={CreateClient} />
      <Route exact path="/consent" component={ConsentForm} />
    </React.Suspense>
  );
};

export default Routes;
