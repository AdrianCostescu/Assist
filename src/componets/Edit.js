import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import { Button } from "../pages/Contact";
import { ButtonPosition } from "./Card";

const CardEdit = styled.div`
  height: 50%;
  width: 50%;
  background-color: #f2f2f2;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 300px;
  height: 35px;
`;

function Edit({ setNewTitle, setOpen, setNewUrl, newTitle, newUrl }) {
  const [titleF, setTitleF] = useState("");
  const [urlF, setUrlF] = useState("");

  function clickHandler(e) {
    e.preventDefault();
    setNewTitle(titleF);
    setNewUrl(urlF);
    setOpen(false);
  }

  return (
    <CardEdit>
      <Form onSubmit={clickHandler}>
        <Input
          type="text"
          required
          placeholder="New title..."
          value={titleF}
          onChange={(e) => setTitleF(e.target.value)}
        ></Input>
        <Input
          type="url"
          pattern="https://.*"
          required
          placeholder="URL photo (ex. https://..)"
          value={urlF}
          onChange={(e) => setUrlF(e.target.value)}
        ></Input>
        <ButtonPosition>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button>Confirm</Button>
        </ButtonPosition>
      </Form>
    </CardEdit>
  );
}

export default Edit;
