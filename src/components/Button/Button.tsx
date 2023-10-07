export type IButton = {
  text: string;
  onClick: () => void;
};

export const Button = ({ text, onClick }: IButton) => {
  return <button onClick={onClick}>{text}</button>;
};
