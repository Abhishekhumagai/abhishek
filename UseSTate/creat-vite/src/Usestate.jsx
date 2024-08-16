import { useState } from "react";

function Usestate() {
  const [state, setState] = useState(1);
  const [state2, setState2] = useState(1);
  const [check, setCheck] = useState(true);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");

  const crossCheck = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.address.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };

  const count = () => {
    setCheck(check);
    setState(state + 3);
  };
  const count1 = () => {
    setCheck(check);
    setState2(state2 * 3);
  };
  return (
    <div>
      {check && <button onClick={count}> {state}</button>}
      {check && <button onClick={count1}> {state2}</button>}
      <form onSubmit={crossCheck}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="name">Address:</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <label htmlFor="password">password:</label>
        <input
          type="pass"
          name="password"
          value={password}
          onChange={(e) => setpass(e.target.value)}
        />
        <br />

        <p>The name is: {name}</p>
        <p>The Address is: {address}</p>
        <p>The email is: {email}</p>
        <p>The password is: {password}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Usestate;
