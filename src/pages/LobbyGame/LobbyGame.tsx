import React, {useEffect, useState} from 'react';
import style from './LobbyGame.module.scss';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  useIonRouter,
} from '@ionic/react';
import {gamesData} from '../../constants/gamesData';
import {Levels} from './Components/Levels';
import {Button} from './Components/Button';
import {Header} from './Components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {getGame} from '../../redux/features/getData';
import { hexToRGB } from '../../constants/hexToRGB';
export const LobbyGameScreen = ({match}: any) => {
  const id = match.params.id;
  const router = useIonRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGame({id}));
  }, [id]);
  const getData: any = useSelector((state) => state);
  const [isRules, setIsRules] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const goBack = () => {
    router.goBack();
  };
  return (
    <IonPage>
      <div
        style={{background: hexToRGB(getData.getData.game[0]?.bgColor, 0.6)}}
        className={style.container}>
        <div className={style.containerContent}>
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
          <IonContent>
            <div className={style.box}>
              {[getData.getData.game[0]].map((item: any) => {
                return (
                  <>
                    {!isRules && !isAbout ? (
                      <Levels
                        item={item}
                        hexToRGB={hexToRGB}
                        color={getData.getData.game[0]?.bgColor}
                        router={router}
                        name={getData.getData.game[0]?.name}
                        id={getData.getData.game[0]?.id}
                      />
                    ) : isRules ? (
                      <>
                        <Header
                          name={'RULES'}
                          style={style}
                          hexToRGB={hexToRGB}
                          color={getData.getData.game[0]?.bgColor}
                        />
                        <div
                          className={style.gameRules}
                          style={{
                            background: hexToRGB(
                              getData.getData.game[0]?.bgColor,
                              1
                            ),
                          }}>
                          {item.rules.map((rule: any, index: number) => {
                            return (
                              <div className={style.marginTopText}>
                                <div className={style.flexRow}>
                                  <div
                                    style={{
                                      marginRight: 13,
                                      fontWeight: '800',
                                    }}>
                                    {index}
                                  </div>
                                  <div>{rule.text}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <>
                        <Header
                          name={'ABOUT'}
                          style={style}
                          hexToRGB={hexToRGB}
                          color={getData.getData.game[0]?.bgColor}
                        />
                        <div
                          className={style.gameRules}
                          style={{
                            background: hexToRGB(
                              getData.getData.game[0]?.bgColor,
                              1
                            ),
                          }}>
                          {' '}
                          <div className={style.marginTopText}>
                            <div className={style.flexRow}>
                              <div>{item.about.text}</div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </IonContent>
        </div>
        <div className={style.bottomBar}>
          <button
            style={{background: hexToRGB(getData.getData.game[0]?.bgColor, 0.6)}}
            onClick={() => {
              goBack();
            }}
            className={style.buttonBottomReturn}>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={18}
              height={34}
              fill='none'>
              <path
                stroke='#000'
                d='m17.5 1-16 16 16 16'
              />
            </svg>
          </button>

          <Button
            setIsRules={setIsRules}
            setIsAbout={setIsAbout}
            booleanRules={true}
            booleanAbout={false}
            prop={isRules}
            hexToRGB={hexToRGB}
            color={getData.getData.game[0]?.bgColor}
            style={style}
            name={'Rules'}
          />
          <Button
            setIsRules={setIsRules}
            setIsAbout={setIsAbout}
            booleanRules={false}
            booleanAbout={true}
            prop={isAbout}
            hexToRGB={hexToRGB}
            color={getData.getData.game[0]?.bgColor}
            style={style}
            name={'About'}
          />
        </div>
      </div>
    </IonPage>
  );
};
