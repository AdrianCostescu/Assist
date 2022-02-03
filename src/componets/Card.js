import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../pages/Contact";
import Delete from "./Delete";
import Edit from "./Edit";

const CardBox = styled.div`
  width: 300px;
  height: 500px;
  background-color: #ededed;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  height: 50px;
  font-size: 12px;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
`;

const Image = styled.img`
  height: 200px;
  width: 100%;
`;

export const ButtonPosition = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Desc = styled.p`
  height: 150px;
  font-size: 12px;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
`;

function Card({ id, title, img, desc }) {
  const [open, setOpen] = useState(false);
  const [deleteBox, setDeleteBox] = useState(false)
  const [newTitle, setNewTitle] = useState(title);
  const [newUrl, setNewUrl] = useState(img);

  return (
    <CardBox>
      <Title>{newTitle}</Title>
      <Image src={newUrl}></Image>
      <Desc>{desc}</Desc>
      <ButtonPosition>
        <Button onClick={() => setOpen(true)}>Edit</Button>
        <Button onClick={() => setDeleteBox(true)}>Delete</Button>
      </ButtonPosition>
      {open && (
        <Edit
          setNewTitle={setNewTitle}
          setOpen={setOpen}
          setNewUrl={setNewUrl}
          newTitle={newTitle}
          newUrl={newUrl}
        ></Edit>
      )}
      {deleteBox && <Delete setDeleteBox={setDeleteBox} title = {newTitle}/>}
    </CardBox>
  );
}

export default Card;
