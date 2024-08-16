function Multiply(props) {
  // eslint-disable-next-line react/prop-types
  const { a, b } = props;
  const c = a * b;

  return <div>multiply:{c}</div>;
}

export default Multiply;
