import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
`;

function Contact() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const clickHandler = () => {
    const data = { name, surname, phone, email};

    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("Successfully added!");
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <Form>
      <Input
        type="text"
        require
        placeholder="Name.."
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Input
        type="text"
        require
        placeholder="Surname.."
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      ></Input>
      <Input
        type="text"
        require
        placeholder="Phone number.."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      ></Input>
      <Input
        type="email"
        require
        placeholder="Email.."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Button onClick={clickHandler}>Submit</Button>
    </Form>
  );
}

export default Contact;
