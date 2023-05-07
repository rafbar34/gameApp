type HeaderProps ={
    name:string,
    style:any,
    hexToRGB:any,
    color:string
}

export const Header = ({name,style,hexToRGB,color}:HeaderProps) =>{
    return (
        <div
        className={style.gameNameRules}
        style={{background: hexToRGB(color, 1)}}>
        <div className={style.flexColumn}>
          <h1 style={{fontSize: 32, fontWeight: '800'}}>
            {name}
          </h1>
        </div>
      </div>
    )
}