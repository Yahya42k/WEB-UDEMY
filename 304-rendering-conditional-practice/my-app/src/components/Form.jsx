import React from "react";
import Button from "./Button"
import Input from "./Input"

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {JSON.parse(props.userStatus)?
        <div><Input type="password" placeholder="Confirm Password" /><Button text="Register" /></div>:
        <Button text="Login" />}
    </form>
  );
}

export default Form;
