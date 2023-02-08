export default props => {
  //   console.warn(props);
  if (props.teste) {
    return props.children;
  } else {
    return false;
  }
};
