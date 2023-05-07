import { useIonRouter } from '@ionic/react';
import style from '../LobbyGame.module.scss';

export const Levels = ({item, hexToRGB, color,name,id}: any) => {
  const router = useIonRouter();

const startGame=(name:string,level:string,id:number|string)=>{
  router.push(`/start/${name}/${id}/${level}`)
  window.location.reload();
}
  return (
    <>
      <div
        className={style.gameName}
        style={{background: hexToRGB(color, 1)}}>
        <div className={style.flexColumn}>
          <div>{item?.icon}</div>
          <h2>{item?.name}</h2>
        </div>
      </div>
      <div
      onClick={()=>startGame(name,'Easy',id)}
        className={style.dificultyLevel}
        style={{background: hexToRGB(color, 1)}}>
        <div className={style.flexColumn}>
          <h3>Easy</h3>
        </div>
      </div>
      <div
            onClick={()=>startGame(name,'Medium',id)}

        className={style.dificultyLevel}
        style={{background: hexToRGB(color, 1)}}>
        <div className={style.flexColumn}>
          <h3>Medium</h3>
        </div>
      </div>
      <div
                  onClick={()=>startGame(name,'Hard',id)}

        className={style.dificultyLevel}
        style={{background: hexToRGB(color, 1)}}>
        <div className={style.flexColumn}>
          <h3>Hard</h3>
        </div>
      </div>
    </>
  );
};
