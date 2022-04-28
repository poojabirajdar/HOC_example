import withColor from "./B";
const Button = () => {
  return <button>My Button</button>;
};

const ColoredButton = withColor(Button);
export default Button;
