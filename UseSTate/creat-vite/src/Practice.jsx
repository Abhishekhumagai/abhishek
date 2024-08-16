import { useState } from "react";
function Practice() {
  const [student, setStudent] = useState({
    name: "abishek",
    roll: 1,
    address: "panauti",
  });
  const [result, setResult] = useState(0);
  const [result1, setResult1] = useState(0);
  let a = 2;
  let b = 3;

  function sum() {
    setResult(a + b);
  }
  function mult() {
    setResult1(a * b);
  }

  function changeData() {
    setStudent({ name: "Samir", roll: 3, address: "kathmandu" });
  }
  console.log(student);
  return (
    <>
      Name :{student.name}
      Roll :{student.roll}
      Address :{student.address}
      {result}
      <br />
      {result1}
      <button onClick={sum}>Add</button>
      <br />
      <button onClick={mult}>multiply</button>
      <button onClick={changeData}>Change me</button>
    </>
  );
}
export default Practice;
