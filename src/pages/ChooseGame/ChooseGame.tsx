import React from 'react';
import style from './ChooseGame.module.scss';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  useIonRouter,
} from '@ionic/react';
import {gamesData} from '../../constants/gamesData';
import {Link} from 'react-router-dom';
export const ChooseGameScreen = () => {
  const router = useIonRouter();
  return (
    <IonPage className={style.container}>
      <div className={style.header}>
        <div className={style.iconHeader}>
          <svg
            width='35'
            height='40'
            viewBox='0 0 35 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0.5 10.2887L17.3205 0.57735L34.141 10.2887V29.7113L17.3205 39.4226L0.5 29.7113V10.2887Z'
              stroke='black'
            />
          </svg>
        </div>
      </div>
      <IonContent className={style.games}>
        <div className={style.emptySpace}></div>
        {gamesData.map((game) => {
          return (
            <div style={{display: 'flex', height: '17%',   borderTop: '1px solid black',
            borderBottom: '1px solid black',
            borderLeft: '2px solid black',
            borderRight: '2px solid black',}}>
              <div
                style={{
                  background: game.bgColor,
                  height: '100%',
                  width: 25,
                }}></div>
              <IonItem
                onClick={() => router.push(`/game/${game.id}`)}
                style={{
                  width: '100%',
                  background: '#d9d9d9',
                  display: 'flex',

                }}>
                <div style={{display: 'flex', height: '100%'}}>
                  <div className={style.game}>
                    <div>{game.icon}</div>
                    <div
                      style={{
                        marginLeft: 20,
                        color: 'black',
                        textDecoration: 'none',
                      }}>
                      {game.name}
                    </div>
                  </div>
                </div>
              </IonItem>
            </div>
          );
        })}
      </IonContent>
    </IonPage>
  );
};
