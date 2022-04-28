// import withColor from "./A";
const withColor = (Element) => (props) => <Element {...props} color="red" />;
export default withColor;
