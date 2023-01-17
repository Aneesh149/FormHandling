import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;

    setFullName((previousVal) => {
      // console.log(previousVal)
      if (name === "fname") {
        return {
          fname: value,
          lname: previousVal.lname,
          email: previousVal.email,
          phone: previousVal.phone,
        };
      } else if (name === "lname") {
        return {
          fname: previousVal.fname,
          lname: value,
          email: previousVal.email,
          phone: previousVal.phone,
        };
      } else if (name === "email") {
        return {
          fname: previousVal.fname,
          lname: previousVal.lname,
          email: value,
          phone: previousVal.phone,
        };
      } else if (name === "phone") {
        return {
          fname: previousVal.fname,
          lname: previousVal.lname,
          email: previousVal.email,
          phone: value,
        };
      }
    });
  };

  const onSubmits = (e) => {
    e.preventDefault();
    alert("form submitted");
  };

  return (
    <form style={{width:'50%'}} onSubmit={onSubmits}>
      <div>
        <h1>
          Hello {fullName.fname} {fullName.lname}
        </h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="fname"
          onChange={inputEvent}
          value={fullName.fname}
        />

        <input
          type="text"
          placeholder="Enter Last Name"
          onChange={inputEvent}
          name="lname"
          value={fullName.lname}
        />

        <input
          type="email"
          placeholder="Enter your email"
          onChange={inputEvent}
          name="email"
          value={fullName.email}
        />

        <input
          type="number"
          placeholder="Enter Phone Number"
          onChange={inputEvent}
          name="phone"
          value={fullName.phone}
        />

        <button type="submit">Submit👍</button>
      </div>
    </form>
  );
};

export default App;
