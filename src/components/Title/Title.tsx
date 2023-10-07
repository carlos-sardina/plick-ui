export type ITitle = {
  text: string;
};

export const Title = ({ text }: ITitle) => {
  return <h1>{text}</h1>;
};
