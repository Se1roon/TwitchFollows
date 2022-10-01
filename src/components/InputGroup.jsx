import { useState } from "react";
import { Form } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

const InputGroup = () => {
  const [username, setUsername] = useState("");

  const onInputChange = (event) => {
    setUsername(event.target.value);
  };

  const onButtonClick = () => {};

  return (
    <Form className="input-group">
      <Input type="text" name="username" onChange={onInputChange} />
      <Button text="Enter" button={true} type="submit" />
    </Form>
  );
};

export default InputGroup;
