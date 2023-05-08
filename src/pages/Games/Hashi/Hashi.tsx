import {useEffect, useState} from 'react';
import style from './Hashi.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getGame} from '../../../redux/features/getData';
import {hexToRGB} from '../../../constants/hexToRGB';

export const Hashi = ({match}: any) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGame({id}));
  }, [id]);
  const getData: any = useSelector((state) => state);
  const bgColor = getData.getData.game[0].bgColor as string;
  const name = getData.getData.game[0].name as string;
  const icon = getData.getData.game[0].icon as any;

  const [selectedItem, setSelectedItem] = useState(-1);
  const [selectedPrevItem, setSelectedPrevItem] = useState([]);
  const [gameArray, setGameArray] = useState<any>([]);

  useEffect(() => {
    for (let index = 0; index < 16; index++) {
      setGameArray((prev: any) => [
        ...prev,
        {
          id: index,
          number: Number(Math.floor(Math.random() * 4)),
        },
      ]);
    }
  }, []);
  function getUniqueListBy(arr, key) {
    // @ts-ignore: Unreachable code error
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }
  console.log(selectedPrevItem);
  return (
    <div style={{height: '100%'}}>
      <div
        style={{backgroundColor: hexToRGB(bgColor, 0.6)}}
        className={style.header}>
        <div className={style.headerText}>{name}</div>
        <div>{icon}</div>
      </div>
      <div style={{height: '20%', backgroundColor: bgColor}} />
      <div
        style={{backgroundColor: hexToRGB(bgColor, 0.6)}}
        className={style.game}>
        {getUniqueListBy(gameArray, 'id').map((item: any, index: number) => {
          return (
            <div
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                position: 'relative',
              }}>
              {item.number !== 0 && (
                <div
                  onClick={() => {
                    setSelectedItem(item.id);
                    if (selectedPrevItem.length == 0) {
                      // @ts-ignore: Unreachable code error
                      setSelectedPrevItem((prev) => [item.id]);
                    } else {
                      // @ts-ignore: Unreachable code error
                      setSelectedPrevItem((prev) => [
                        prev.slice(-1)[0],
                        item.id,
                      ]);
                    }
                    console.log(selectedPrevItem);
                  }}
                  style={{
                    backgroundColor:
                      item.id === selectedItem ? 'red' : 'transparent',
                  }}
                  className={style.gameItem}>
                  {item.number}
                  {selectedPrevItem[0] > selectedPrevItem[1] &&
                    selectedPrevItem[1] === index &&
                    selectedPrevItem.length > 1 && (
                      <div
                        className={style.borderGame}
                        style={{
                          position: 'absolute',
                          right: 0,
                          width: '25%',
                        }}></div>
                    )}
                  {selectedPrevItem[0] < item.id &&
                    selectedPrevItem[1] === index &&
                    selectedPrevItem.length > 1 && (
                      <div
                        className={style.borderGame}
                        style={{
                          position: 'absolute',
                          left: 0,
                          width: '25%',
                        }}></div>
                    )}
                  {selectedPrevItem[0] <= selectedPrevItem[1] &&
                    selectedPrevItem[0] === index &&
                    selectedPrevItem.length > 1 && (
                      <div
                        className={style.borderGame}
                        style={{
                          position: 'absolute',
                          right: 0,
                          width: '25%',
                        }}></div>
                    )}
                  {selectedPrevItem[1] <= selectedPrevItem[0] &&
                    selectedPrevItem[0] === index &&
                    selectedPrevItem.length > 1 && (
                      <div
                        className={style.borderGame}
                        style={{
                          position: 'absolute',
                          left: 0,
                          width: '25%',
                        }}></div>
                    )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{height: '20%', backgroundColor: bgColor}} />
    </div>
  );
};
