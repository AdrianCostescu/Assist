import React from "react";
import styled from "styled-components";
import { Button } from "../pages/Contact";
import { ButtonPosition } from "./Card";

const DeleteBox = styled.div`
  width: 40%;
  height: 250px;
  top: 50%;
  position: absolute;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 18px;
  margin-right: 50px;
  margin-left: 50px;
`;

function Delete({ title, setDeleteBox }) {
  return (
    <DeleteBox>
      <Title>Are you sure you want to remove : "{title}" ? </Title>
      <ButtonPosition>
        <Button onClick={() => setDeleteBox(false)}>No</Button>
        <Button>Yes</Button>
      </ButtonPosition>
    </DeleteBox>
  );
}

export default Delete;
