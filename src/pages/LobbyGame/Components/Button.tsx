type ButtonProps = {
  setIsAbout: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRules: React.Dispatch<React.SetStateAction<boolean>>;
  style: {
    readonly [key: string]: string;
  };
  prop: boolean;
  hexToRGB: any;
  color: string;
  name: string;
  booleanRules: boolean;

  booleanAbout: boolean;
};

export const Button = ({
  setIsAbout,
  setIsRules,
  style,
  prop,
  hexToRGB,
  color,
  name,
  booleanRules,
  booleanAbout,
}: ButtonProps) => {
  return (
    <button
      onClick={() => {
        setIsRules(booleanRules);
        setIsAbout(booleanAbout);
      }}
      style={{
        background: prop ? '#000000' : hexToRGB(color, 0.6),
        color: prop ? '#FFFFFF' : '#000000',
      }}
      className={style.buttonBottom}>
      {' '}
      {name}
    </button>
  );
};
