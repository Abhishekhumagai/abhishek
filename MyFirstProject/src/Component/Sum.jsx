function Sum(props) {
  // eslint-disable-next-line react/prop-types
  const { a, b } = props;
  const c = a + b;

  return <div>Sum is:{c}</div>;
}

export default Sum;
