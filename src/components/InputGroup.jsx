import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { Form } from "react-router-dom";

const InputGroup = () => {
  const [username, setUsername] = useState("");

  const onInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <Form action={username} className="input-group">
      <Input type="text" onChange={onInputChange} />
      <Button text="Enter" button={true} type="submit" />
    </Form>
  );
};

export default InputGroup;
