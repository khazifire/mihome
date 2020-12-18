import {
  IonApp,
  IonLoading
} from '@ionic/react';

import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext, useAuthInit } from './firebase/auth';
import { auth } from './firebase/firebase';


import LoginPage from './components/loginAndRegister/LoginPage';
import AppTab from './AppTab';
import NotFoundPage from './components/pages/NotFoundPage';
import RegisterPage from './components/loginAndRegister/RegisterPage';




auth.onAuthStateChanged((user) => {
  console.log('onAuthStateChanged:', user);
});

const App: React.FC = () => {
  const { loading, auth } = useAuthInit();
  console.log(`rendering App with authState:`, auth);
  if(loading) {
    return <IonLoading isOpen />;
  }

  return (
     <IonApp>
      <AuthContext.Provider value={auth}>
        <IonReactRouter>
          <Switch>
        
         
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route path="/my">
              <AppTab />
            </Route>
        <Route exact path="/" 
        render={() =><Redirect to="/login" />}
        />
            

            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>

    
  );
};

export default App;
