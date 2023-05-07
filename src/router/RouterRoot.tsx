import {IonPage, IonRouterOutlet} from '@ionic/react';
import React from 'react';
import {Redirect, Route} from 'react-router';
import {ChooseGameScreen} from '../pages/ChooseGame/ChooseGame';
import { LobbyGameScreen } from '../pages/LobbyGame/LobbyGame';
import { Hashi } from '../pages/Games/Hashi/Hashi';

export const RouterRoot = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route
          exact
          path={'/ChooseGameScreen'}
          component={ChooseGameScreen}
        />
        <Redirect
          exact
          from='/'
          to='/ChooseGameScreen'
        />
         <Route
          
          path={'/game/:id'}
          component={LobbyGameScreen}
        />
         <Route
          
          path={'/start/:name/:id/:level'}
          component={Hashi}
        />
      </IonRouterOutlet>
    </IonPage>
  );
};
